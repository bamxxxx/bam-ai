import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const ContactSection = () => (
  <motion.section 
    className="print:mb-0 text-center"
    {...fadeIn}
  >
    <div className="bg-gradient-to-br from-consulting-bg via-purple-50 to-consulting-bg p-8 rounded-2xl shadow-lg border border-consulting-accent/20 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-consulting-text">Get in Touch</h2>
      <p className="text-lg mb-4">Ready to transform your business with AI?</p>
      <div className="space-y-2 mb-8">
        <p className="text-consulting-text">
          <span className="font-semibold">Email:</span>{" "}
          <a 
            href="mailto:bam.pizza@hey.com" 
            className="text-consulting-accent hover:underline"
          >
            bam.pizza@hey.com
          </a>
        </p>
        <p className="text-consulting-text">
          <span className="font-semibold">LinkedIn:</span>{" "}
          <a 
            href="https://linkedin.com/in/michaelbamberger" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-consulting-accent hover:underline"
          >
            linkedin.com/in/michaelbamberger
          </a>
        </p>
      </div>
      <ContactForm />
    </div>
  </motion.section>
);