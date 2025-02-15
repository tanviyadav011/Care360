import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <footer style={{ textAlign: "center", marginTop: "20px", padding: "10px", background: "#f8f8f8" }}>
          <a href="/terms" style={{ marginRight: "15px" }}>Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </footer>
      </body>
    </html>
  );
}
