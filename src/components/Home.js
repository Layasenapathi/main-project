const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <h1>Welcome to MyWebsite</h1>
        <p>Your one-stop solution for [your service/product].</p>
        <button>Get Started</button>
      </section>
      <section className="features">
        <h2>Our Key Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Feature 1</h3>
            <p>Description of feature 1.</p>
          </div>
          <div className="feature-item">
            <h3>Feature 2</h3>
            <p>Description of feature 2.</p>
          </div>
          <div className="feature-item">
            <h3>Feature 3</h3>
            <p>Description of feature 3.</p>
          </div>
        </div>
      </section>
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <button>Contact Us</button>
      </section>
    </main>
  );

}
export default Home