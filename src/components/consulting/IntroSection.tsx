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
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="flex-1">
        <p>
          Having been on the <span className="font-semibold">front-lines of building AI products</span> and 
          <span className="bg-purple-100 px-1 rounded"> embedding AI into all customer facing workflows</span>, 
          Michael has developed <span className="text-consulting-accent font-semibold">deep expertise</span> in how to 
          strategize, implement, and iterate AI solutions.
        </p>
        <p>
          Michael has developed a reputation as an <span className="font-handwriting text-xl">expert that focuses on practical 
          application</span> with clear, tangible ROI. His focus is on implementing AI in 
          <span className="bg-purple-100 px-1 rounded"> measurably impactful ways</span>, ensuring an 
          <span className="font-semibold"> increase in revenue, reduction in costs</span>, and often both.
        </p>
        <p>
          Known for <span className="text-consulting-accent font-semibold">transforming complex challenges into strategic opportunities</span>, 
          Michael specializes in integrating AI technologies to optimize customer 
          experiences and enhance business performance. By working as a consultant 
          with clients across industries, Michael is able to <span className="font-handwriting text-xl">continually expand and 
          hone his expertise</span>, enabling him to provide <span className="bg-purple-100 px-1 rounded">deep value and impact</span> for 
          every client.
        </p>
      </div>
      <div className="md:w-1/3 flex-shrink-0 print:hidden">
        <img 
          src="/lovable-uploads/cc70ba14-2114-4810-b15b-45d253871a1d.png" 
          alt="Rocket illustration representing growth and innovation" 
          className="w-full h-auto"
        />
      </div>
    </div>
  </motion.section>
);