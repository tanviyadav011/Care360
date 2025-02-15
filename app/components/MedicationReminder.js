"use client"; // Required for state management in Next.js App Router

import { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MedicationReminder = () => {
  const [medications, setMedications] = useState([]);
  const [newMedication, setNewMedication] = useState({ name: "", time: "" });

  // Fetch medications from Firestore
  useEffect(() => {
    const fetchMedications = async () => {
      if (!auth.currentUser) return;
      const querySnapshot = await getDocs(collection(db, `users/${auth.currentUser.uid}/medications`));
      const fetchedMedications = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMedications(fetchedMedications);
    };

    fetchMedications();
  }, [auth.currentUser]);

  // Add new medication to Firestore
  const handleAddMedication = async () => {
    if (!auth.currentUser) {
      alert("Please log in first!");
      return;
    }

    try {
      await addDoc(collection(db, `users/${auth.currentUser.uid}/medications`), newMedication);
      setMedications([...medications, newMedication]); // Update UI
      setNewMedication({ name: "", time: "" }); // Reset form
      toast.success(`Reminder set for ${newMedication.name} at ${newMedication.time}`);
    } catch (error) {
      console.error("Error adding medication:", error);
    }
  };

  // Check if it's time for a medication and show a notification
  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      const currentTime = `${now.getHours()}:${now.getMinutes()}`;

      medications.forEach((med) => {
        if (med.time === currentTime) {
          toast.info(`Time to take your medicine: ${med.name}`);
        }
      });
    };

    const interval = setInterval(checkReminders, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [medications]);

  return (
    <div className="medication-container">
      <h2>Medication Reminder</h2>

      {/* Form to Add Medication Reminder */}
      <div className="form-container">
        <input
          type="text"
          placeholder="Medicine Name"
          value={newMedication.name}
          onChange={(e) => setNewMedication({ ...newMedication, name: e.target.value })}
        />
        <input
          type="time"
          value={newMedication.time}
          onChange={(e) => setNewMedication({ ...newMedication, time: e.target.value })}
        />
        <button onClick={handleAddMedication} className="add-medication-button">Add Reminder</button>
      </div>

      {/* Display Medication Reminders */}
      <div className="medication-list">
        {medications.length > 0 ? (
          medications.map((med, index) => (
            <div key={index} className="medication-item">
              <p><strong>Medicine:</strong> {med.name}</p>
              <p><strong>Time:</strong> {med.time}</p>
            </div>
          ))
        ) : (
          <p>No reminders set.</p>
        )}
      </div>
    </div>
  );
};

export default MedicationReminder;
