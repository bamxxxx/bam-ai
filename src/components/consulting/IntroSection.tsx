import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const IntroSection = () => (
  <motion.section 
    className="mb-16 print:mb-8 prose max-w-none bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
    {...fadeIn}
  >
    <p>
      Having been on the front-lines of building AI products and embedding AI into 
      all customer facing workflows, Michael has developed deep expertise in how to 
      strategize, implement, and iterate AI solutions.
    </p>
    <p>
      Michael has developed a reputation as an expert that focuses on practical 
      application with clear, tangible ROI. His focus is on implementing AI in 
      measurably impactful ways, ensuring an increase in revenue, reduction in 
      costs, and often both.
    </p>
    <p>
      Known for transforming complex challenges into strategic opportunities, 
      Michael specializes in integrating AI technologies to optimize customer 
      experiences and enhance business performance. By working as a consultant 
      with clients across industries, Michael is able to continually expand and 
      hone his expertise, enabling him to provide deep value and impact for 
      every client.
    </p>
  </motion.section>
);