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
      <div className="relative transform -rotate-1">
        <div className="absolute inset-0 bg-white/80 rounded-lg shadow-md transform rotate-1 translate-y-1"></div>
        <div className="absolute inset-0 bg-white/90 rounded-lg shadow-md transform rotate-[0.5deg] translate-y-0.5"></div>
        <div className="prose max-w-none bg-white p-8 rounded-lg shadow-lg relative transform rotate-0 font-['Caveat'] text-[1.75rem] leading-relaxed">
          <p className="mb-4">
            Dear Future Partner,
          </p>
          <p className="mb-4">
            Throughout my journey of building AI products and embedding AI into customer-facing workflows, 
            I've gained <span className="bg-gradient-to-r from-yellow-200/70 to-yellow-300/70 -rotate-1 inline-block px-1">deep insights into what truly works in AI implementation</span>. My experience spans from 
            developing AI-powered products to helping organizations transform their operations with AI solutions.
          </p>
          <p className="mb-4">
            What I've learned is that success in AI isn't just about the technology—it's about understanding 
            your unique business needs and <span className="bg-gradient-to-r from-purple-200/70 to-purple-300/70 rotate-1 inline-block px-1">implementing solutions that create real, measurable value</span>.
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
    </div>
  </motion.div>
);