import Auth from "./components/Auth";
import Chatbot from "./components/Chatbot";
import HealthInsights from "./components/healthInsights";
import Telemedicine from "./components/Telemedicine";
import HealthDashboard from "./components/HealthDashboard";
import MedicationReminder from "./components/MedicationReminder";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main className="container">
      <h1>Welcome to Care360</h1>
      <p>Your AI-powered healthcare assistant.</p>

      <section className="auth-section">
        <Auth />
      </section>

      <section className="dashboard-section">
        <HealthDashboard />
      </section>

      <section className="medication-section">
        <MedicationReminder />
      </section>

      <section className="features">
        <h2>Why Choose Care360?</h2>
        <div className="feature-box">
          <div>
            <h3>🩺 AI Health Insights</h3>
            <p>Get AI-powered health recommendations.</p>
          </div>
          <div>
            <h3>💬 Smart Chatbot</h3>
            <p>Ask health-related queries anytime.</p>
          </div>
          <div>
            <h3>📊 Wearable Integration</h3>
            <p>Sync with smartwatches for real-time health tracking.</p>
          </div>
        </div>
      </section>

      <section className="telemedicine-section">
        <Telemedicine />
      </section>

      <section className="insights-section">
        <HealthInsights />
      </section>

      <section className="chatbot-section">
        <h2>Chat with Care360 AI</h2>
        <Chatbot />
      </section>

      <section className="cta">
        <h2>Start Your Health Journey Today</h2>
        <a href="/features" className="cta-button">Explore Features</a>
      </section>

      <ToastContainer /> {/* Add notification container */}
    </main>
  );
}
