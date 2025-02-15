export default function PrivacyPolicy() {
    return (
      <main className="container">
        <h1>Privacy Policy</h1>
        <p>Your privacy is important to us. Care360 collects and stores health data securely...</p>
        <p>(You can update this policy as needed.)</p>
      </main>
    );
  }
  
  // ✅ Add metadata (Fixes Next.js error)
  export const metadata = {
    title: "Privacy Policy - Care360",
    description: "Read the privacy policy for Care360.",
  };
  