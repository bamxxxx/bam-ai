import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const HeroSection = () => (
  <motion.div 
    className="flex flex-col-reverse md:flex-row items-start gap-8 mb-16 print:mb-8 bg-gradient-to-r from-consulting-bg to-purple-50 p-8 rounded-2xl shadow-lg"
    {...fadeIn}
  >
    <div className="flex-1">
      <div className="flex flex-col md:flex-row md:items-start gap-8 mb-6">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-consulting-text to-consulting-accent">
            AI Strategy Consulting
          </h1>
          <p className="text-xl md:text-2xl text-consulting-muted mb-6">
            Your Personal AI Expert for Immediate, Measurable Impact
          </p>
          <p className="text-lg">
            Michael Bamberger (aka Bam) is the Founder and CEO of Tetra Insights, 
            an AI-powered research platform trusted by enterprises, including Microsoft, 
            LexisNexis, and Trellix.
          </p>
        </div>
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl print:shadow-none border-4 border-consulting-accent/20 flex-shrink-0">
          <img
            src="/lovable-uploads/00f37ddf-a287-449b-9069-e8abbdd6d169.png"
            alt="Michael Bamberger"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="prose max-w-none bg-white/80 p-6 rounded-lg shadow-sm font-['Permanent_Marker'] text-2xl leading-relaxed">
        <p className="mb-4">
          Dear Future Partner,
        </p>
        <p className="mb-4">
          Throughout my journey of building AI products and embedding AI into customer-facing workflows, 
          I've gained deep insights into what truly works in AI implementation. My experience spans from 
          developing AI-powered products to helping organizations transform their operations with AI solutions.
        </p>
        <p className="mb-4">
          What I've learned is that success in AI isn't just about the technology—it's about understanding 
          your unique business needs and implementing solutions that create real, measurable value.
        </p>
        <p className="mb-6">
          If you're interested in using AI to enhance your business, let's talk!
        </p>
        <div className="text-3xl mt-4">
          Best regards,<br />
          <span className="text-4xl mt-2 block">Michael Bamberger</span>
        </div>
      </div>
    </div>
  </motion.div>
);