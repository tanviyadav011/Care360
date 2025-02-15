export default function Pricing() {
    return (
      <main className="container">
        <h1>Pricing Plans</h1>
        <p>Choose a plan that fits your needs.</p>
  
        <div className="pricing-cards">
          <div className="plan">
            <h2>Free</h2>
            <p>Basic health tracking & AI chatbot.</p>
            <strong>₹0/month</strong>
          </div>
          <div className="plan">
            <h2>Premium</h2>
            <p>Advanced AI health reports & video consultations.</p>
            <strong>₹499/month</strong>
          </div>
          <div className="plan">
            <h2>Pro</h2>
            <p>Full access to AI diagnostics & wearable integration.</p>
            <strong>₹999/month</strong>
          </div>
        </div>
      </main>
    );
  }
  