const Footer = () => {
    return (
        <footer className="footer">
            <div className="foot">
        <div className="Footer_part">
            <p>NO CREDIT CARD REQUIRED </p>
            <h1>Start using Company today.</h1>
            <input type="text"placeholder="Enter Text" className="emailinput2" />
        </div>
          <div className="footer__content">
            <div className="footer__section">
              <h3>About Us</h3>
              <p>Insert a brief description of your company or website here.</p>
            </div>
            <div className="footer__section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer__section">
              <h3>Contact Us</h3>
              <p>123 Street Name, City, Country</p>
              <p>Email: info@example.com</p>
              <p>Phone: +1234567890</p>
            </div>
            <div className="footer__section">
              <h3>Terms and Conditions</h3>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
           
            </div>
          </div>
          <div className="footer__copyright">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
          </div>
        </footer>
      );
}
export default Footer