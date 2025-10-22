import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../pages/AboutUs.css";
import Navbar from "../components_home/Navbar"
import Footer from "../components_home/Footer"
import About_img from "../assets/About.jpg"
import Learn_img from "../assets/Learn_Crypto.jpg"

const AboutUs = () => {
  return (
    <>
    <Navbar/>
      <section className="about-wrapper">
        <div className="about-container">
          <div className="about-image">
            <img src={About_img} alt="About Cryptoverse Albania" />
          </div>
          <div className="about-text">
            <h1>
              About <span>Cryptoverse Albania</span>
            </h1>
            <p>
              We are a passionate Albanian crypto community on a mission to help
              people <b>adapt faster and smarter</b> to the digital world of
              cryptocurrencies.
              <br />
              <br />
              Our goal is to make <b>blockchain and crypto education</b> simple,
              clear, and accessible to everyone — from beginners taking their
              first steps, to experienced investors looking for deeper insights.
              <br />
              <br />
              At <b>Cryptoverse Albania</b>, we believe that knowledge builds
              confidence and financial freedom. Through our platform, we provide
              guides, tutorials, analysis, and a growing community that supports
              each other in navigating the ever-changing crypto space.
            </p>
            <a
              href="https://linktr.ee/cryptoverse_albania"
              target="_blank"
              rel="noopener noreferrer"
              className="about-btn"
            >
              Join Our Community 🚀
            </a>
          </div>
        </div>
      </section>

      <section className="why-learn-wrapper">
        <div className="why-learn-container">
          <div className="why-learn-text">
            <h2>Why Learn With Us?</h2>
            <ul>
              <li>✅ Trusted by crypto learners across Albania and the Balkans</li>
              <li>🎓 Courses and guides created by real blockchain enthusiasts</li>
              <li>💼 Backed by years of research, trading, and market experience</li>
              <li>📘 Lessons designed for all levels — from beginner to pro</li>
              <li>💡 Learn about Bitcoin, DeFi, NFTs, and Web3 with simplicity</li>
              <li>📊 Track your learning progress and improve your skills</li>
            </ul>
          </div>
          <div className="why-learn-image">
            <img src={Learn_img} alt="Learn With Us" />
          </div>
        </div>
      </section>

      <section className="faq-section py-5" id="FAQ">
        <div className="container">
          <h2 className="faq-title mb-4 text-center">FAQs</h2>

          <div className="accordion shadow-sm" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What are Cryptocurrencies?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Cryptocurrencies are digital or virtual money that run on decentralized networks,
                  usually built on blockchain technology, and employ encryption for protection.
                  They make transactions safe, open, and internationally accessible.
                </div>
              </div>
            </div>

          
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What are the prerequisites to learning this crypto course?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  No prior experience is required! You just need curiosity and a desire to learn how
                  crypto and blockchain work. Our beginner-friendly lessons guide you step-by-step.
                </div>
              </div>
            </div>

           
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What is the duration of my access to the course?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Once you register, you’ll get lifetime access to all lessons, guides, and materials —
                  so you can learn at your own pace anytime.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  How difficult is the cryptocurrency course?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  The course is designed for everyone! Whether you’re new or already familiar with
                  crypto, our clear and structured lessons make learning simple and engaging.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default AboutUs;
