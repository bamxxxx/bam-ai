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
          Having been on the front-lines of building AI products and embedding AI into 
          all customer facing workflows, Michael has developed{' '}
          <span className="font-bold bg-gradient-to-r from-purple-600 via-black to-blue-600 text-transparent bg-clip-text">
            deep expertise in how to strategize, implement, and iterate AI solutions.
          </span>
        </p>
        <p>
          Michael has developed a reputation as an expert that focuses on{' '}
          <span className="font-bold bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 px-1">
            practical application with clear, tangible ROI
          </span>
          . His focus is on implementing AI in 
          measurably impactful ways, ensuring an increase in{' '}
          <span className="inline-flex items-center">
            <span className="font-bold bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text">
              revenue
            </span>
            <span className="ml-1">💸</span>
          </span>
          ,{' '}
          <span className="inline-flex items-center">
            <span className="font-bold bg-gradient-to-r from-orange-600 to-orange-400 text-transparent bg-clip-text">
              reduction in costs
            </span>
            <span className="ml-1">📊</span>
          </span>
          , and often both.
        </p>
        <p>
          Known for transforming complex challenges into strategic opportunities, 
          Michael specializes in integrating AI technologies to optimize customer 
          experiences and enhance business performance. By working as a consultant 
          with clients across industries, Michael is able to continually expand and 
          hone his expertise, enabling him to provide deep value and impact for 
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