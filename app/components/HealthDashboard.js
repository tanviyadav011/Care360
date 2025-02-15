"use client"; // Required for state management in Next.js App Router

import { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const HealthDashboard = () => {
  const [records, setRecords] = useState([]);
  const [newRecord, setNewRecord] = useState({ date: "", description: "" });

  // Fetch records from Firestore
  useEffect(() => {
    const fetchRecords = async () => {
      if (!auth.currentUser) return; // Check if user is logged in
      const querySnapshot = await getDocs(collection(db, `users/${auth.currentUser.uid}/healthRecords`));
      const fetchedRecords = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setRecords(fetchedRecords);
    };

    fetchRecords();
  }, [auth.currentUser]);

  // Add new record to Firestore
  const handleAddRecord = async () => {
    if (!auth.currentUser) {
      alert("Please log in first!");
      return;
    }

    try {
      await addDoc(collection(db, `users/${auth.currentUser.uid}/healthRecords`), newRecord);
      setRecords([...records, newRecord]); // Update UI
      setNewRecord({ date: "", description: "" }); // Reset form
    } catch (error) {
      console.error("Error adding record:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Health Dashboard</h2>

      {/* Form to Add New Record */}
      <div className="form-container">
        <input
          type="date"
          value={newRecord.date}
          onChange={(e) => setNewRecord({ ...newRecord, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newRecord.description}
          onChange={(e) => setNewRecord({ ...newRecord, description: e.target.value })}
        />
        <button onClick={handleAddRecord} className="add-record-button">Add Record</button>
      </div>

      {/* Display Health Records */}
      <div className="records-list">
        {records.length > 0 ? (
          records.map((record, index) => (
            <div key={index} className="record-item">
              <p><strong>Date:</strong> {record.date}</p>
              <p><strong>Description:</strong> {record.description}</p>
            </div>
          ))
        ) : (
          <p>No records found.</p>
        )}
      </div>
    </div>
  );
};

export default HealthDashboard;
