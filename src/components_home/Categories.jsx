import '../components_home/Categories.css'
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Categories = () => {
  const categories = [
    { 
      icon: "bi-shield-lock-fill", 
      text: "Crypto Security", 
      url: "https://www.arkoselabs.com/explained/guide-to-cryptocurrency-security" 
    },
    { 
      icon: "bi-journal-code", 
      text: "Courses", 
      url: "https://www.coursera.org/courses?query=cryptocurrency" 
    },
    { 
      icon: "bi-cash-coin", 
      text: "Learn & Earn", 
      url: "https://www.binance.com/en/academy/learn-and-earn" 
    },
    { 
      icon: "bi-tv", 
      text: "Product Guides", 
      url: "https://crypto.com/en/university" 
    },
    { 
      icon: "bi-currency-bitcoin", 
      text: "Learn BTC", 
      url: "https://bitcoin.org/en/" 
    },
  ];

  return (
    <section className="categories">
      <div className="container">
        <motion.div
          className="row justify-content-center text-center g-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {categories.map((card, i) => (
            <motion.div className="col-md-2 col-6" key={i} variants={item}>
              <div
                className="card p-3 shadow-sm category-card"
                onClick={() => window.open(card.url, "_blank")}
                style={{ cursor: "pointer" }}
              >
                <i className={`bi ${card.icon} fs-3`}></i>
                <h5>{card.text}</h5>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
