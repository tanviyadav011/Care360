import HealthInsights from "../components/healthInsights";
import FitbitData from "../components/FitbitData";
import Chatbot from "../components/Chatbot";

export default function Features() {
  return (
    <main className="container">
      <h1>Features</h1>
      <p>Explore the powerful features of Care360.</p>

      <section className="feature-list">
        <HealthInsights />
        <FitbitData />
        <Chatbot />
      </section>
    </main>
  );
}
