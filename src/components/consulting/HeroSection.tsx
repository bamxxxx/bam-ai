import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const HeroSection = () => (
  <motion.div 
    className="flex flex-col-reverse md:flex-row items-center gap-8 mb-16 print:mb-8 bg-gradient-to-r from-consulting-bg to-purple-50 p-8 rounded-2xl shadow-lg"
    {...fadeIn}
  >
    <div className="flex-1">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-consulting-text to-consulting-accent">
        AI Strategy Consulting
      </h1>
      <p className="text-xl md:text-2xl text-consulting-muted mb-6">
        Your Personal AI Expert for Immediate, Measurable Impact
      </p>
      <div className="prose max-w-none">
        <p className="text-lg">
          Michael Bamberger (aka Bam) is the Founder and CEO of Tetra Insights, 
          an AI-powered research platform trusted by enterprises, including Microsoft, 
          LexisNexis, and Trellix.
        </p>
      </div>
    </div>
    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl print:shadow-none border-4 border-consulting-accent/20">
      <img
        src="/lovable-uploads/00f37ddf-a287-449b-9069-e8abbdd6d169.png"
        alt="Michael Bamberger"
        className="w-full h-full object-cover"
      />
    </div>
  </motion.div>
);