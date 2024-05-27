const About = () => {
    return (
      
        <main className="about">
            <section className="intro">
                <h1>About Us</h1>
                <p>Welcome to our website! We are dedicated to providing the best service possible.</p>
            </section>
            <section className="team">
                <h2>Meet the Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <img src="https://objectstorage.me-dubai-1.oraclecloud.com/n/axwzijd5v1vn/b/DSL_IMAGES/o/IMAGE/bcd5b705-b18e-4b53-b3c1-d6a186137225-.svg" alt="Team Member"/>
                        <h3>John Doe</h3>
                        <p>Founder & CEO</p>
                    </div>
                    <div className="team-member">
                        <img src="https://objectstorage.me-dubai-1.oraclecloud.com/n/axwzijd5v1vn/b/DSL_IMAGES/o/IMAGE/1392d094-33d9-4201-9b27-702f6b4b97a2-.svg" alt="Team Member"/>
                        <h3>Jane Smith</h3>
                        <p>Chief Marketing Officer</p>
                    </div>
                    {/* Add more team members as needed */}
                </div>
            </section>
            <section className="mission">
                <h2>Our Mission</h2>
                <p>Our mission is to deliver high-quality products that bring value to our customers.</p>
            </section>
        </main>
    
     
    )
   

}
export default About