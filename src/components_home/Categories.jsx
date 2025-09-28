import '../components_home/Categories.css'
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // animacion një nga një
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Categories = () => {
  const categories = [
    { icon: "bi-shield-lock-fill", text: "Crypto Security" },
    { icon: "bi-journal-code", text: "Courses" },
    { icon: "bi-cash-coin", text: "Learn & Earn" },
    { icon: "bi-tv", text: "Product Guides" },
    { icon: "bi-currency-bitcoin", text: "Learn BTC" },
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
            <motion.div
              className="col-md-2 col-6"
              key={i}
              variants={item}
            >
              <div className="card p-3 shadow-sm category-card">
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
