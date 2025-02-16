import Auth from "./components/Auth";
import Chatbot from "./components/Chatbot";
import HealthInsights from "./components/healthInsights"; // Fixed casing
import Telemedicine from "./components/Telemedicine";
import HealthDashboard from "./components/HealthDashboard";
import MedicationReminder from "./components/MedicationReminder";
import FitbitData from "./components/FitbitData"; // Replaced FitbitAuth with FitbitData

export default function Home() {
  return (
    <main className="container">
      <h1>Welcome to Care360</h1>
      <p>Your AI-powered healthcare assistant.</p>

      {/* Authentication Section */}
      <section className="auth-section">
        <Auth />
      </section>

      {/* Health Dashboard */}
      <section className="dashboard-section">
        <HealthDashboard />
      </section>

      {/* Medication Reminder */}
      <section className="medication-section">
        <MedicationReminder />
      </section>

      {/* Features Section */}
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

      {/* Telemedicine Section */}
      <section className="telemedicine-section">
        <Telemedicine />
      </section>

      {/* Health Insights */}
      <section className="insights-section">
        <HealthInsights />
      </section>

      {/* Chatbot Section */}
      <section className="chatbot-section">
        <h2>Chat with Care360 AI</h2>
        <Chatbot />
      </section>

      {/* Fitbit Wearable Data */}
      <section className="wearable-section">
        <h2>Wearable Health Tracking</h2>
        <FitbitData />
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Start Your Health Journey Today</h2>
        <a href="/features" className="cta-button">Explore Features</a>
      </section>
      
    </main>
  );
}
