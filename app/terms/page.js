export default function TermsOfService() {
    return (
      <main className="container">
        <h1>Terms of Service</h1>
        <p>Welcome to Care360. By using our services, you agree to the following terms...</p>
        <p>(You can add more details later.)</p>
      </main>
    );
  }
  
  // ✅ Add metadata (Fixes Next.js error)
  export const metadata = {
    title: "Terms of Service - Care360",
    description: "Read the terms of service for using Care360.",
  };
  