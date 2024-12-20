import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const ProfileSection = () => (
  <motion.section 
    className="mb-16 print:mb-8 grid md:grid-cols-2 gap-8"
    {...fadeIn}
  >
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-consulting-accent/50 transition-colors">
      <h2 className="text-2xl font-bold mb-6 text-consulting-text">Who I Am</h2>
      <p className="mb-4">A seasoned tech entrepreneur with a proven track record:</p>
      <ul className="list-none space-y-3">
        {[
          "Founded 3 successful tech companies",
          "Raised over $35M in venture funding",
          "Generated $100M+ in cumulative revenue",
          "Expert in digital strategy, research, and product development",
          "Dartmouth College Alumnus (AB Economics)"
        ].map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-consulting-accent rounded-full"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-consulting-accent/50 transition-colors">
      <h2 className="text-2xl font-bold mb-6 text-consulting-text">Unique Value Proposition</h2>
      <p className="mb-4">Specialized in AI-powered transformation of customer-facing business functions:</p>
      <ul className="list-none space-y-3">
        {[
          "Product Development",
          "Go-to-Market Strategy",
          "Sales Automation",
          "Marketing Optimization",
          "Customer Success Enhancement"
        ].map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-consulting-accent rounded-full"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.section>
);