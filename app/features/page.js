import dynamic from "next/dynamic";

// Import components dynamically with SSR disabled
const HealthInsights = dynamic(() => import("../components/healthInsights"), { ssr: false });
const FitbitData = dynamic(() => import("../components/FitbitData"), { ssr: false });
const Chatbot = dynamic(() => import("../components/Chatbot"), { ssr: false });

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
