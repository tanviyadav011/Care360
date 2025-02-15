export default function Contact() {
    return (
      <main className="container">
        <h1>Contact Us</h1>
        <p>Have questions? Reach out to us!</p>
  
        <form className="contact-form">
          <label>Name:</label>
          <input type="text" placeholder="Your Name" />
  
          <label>Email:</label>
          <input type="email" placeholder="Your Email" />
  
          <label>Message:</label>
          <textarea placeholder="Your Message"></textarea>
  
          <button type="submit">Send Message</button>
        </form>
      </main>
    );
  }
  