import { useEffect } from "react";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    document.title = "AI Strategy Consulting - Michael Bamberger";
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-consulting-bg text-consulting-text">
      <div className="max-w-[1200px] mx-auto px-6 py-12 print:py-8">
        {/* Hero Section */}
        <motion.div 
          className="flex flex-col-reverse md:flex-row items-center gap-8 mb-16 print:mb-8"
          {...fadeIn}
        >
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
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
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl print:shadow-none">
            <img
              src="/photo-1581092795360-fd1ca04f0952"
              alt="Michael Bamberger"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.section 
          className="mb-16 print:mb-8"
          {...fadeIn}
        >
          <h2 className="text-2xl font-bold mb-6">Who I Am</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="prose max-w-none">
              <ul className="space-y-2">
                <li>Founded 3 successful tech companies</li>
                <li>Raised over $35M in venture funding</li>
                <li>Generated $100M+ in cumulative revenue</li>
                <li>Expert in digital strategy, research, and product development</li>
                <li>Dartmouth College Alumnus (AB Economics)</li>
              </ul>
            </div>
            <div className="prose max-w-none">
              <p>
                Having been on the front-lines of building AI products and embedding AI into 
                all customer facing workflows, Michael has developed deep expertise in how to 
                strategize, implement, and iterate AI solutions.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section 
          className="mb-16 print:mb-8"
          {...fadeIn}
        >
          <h2 className="text-2xl font-bold mb-6">Service Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">AI Product Development</h3>
              <ul className="space-y-2 text-sm">
                <li>Rapid AI feature design and prototyping</li>
                <li>Building intelligent product capabilities</li>
                <li>Leveraging cutting-edge AI tools</li>
                <li>Research and iteration for product-market fit</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Go-to-Market AI Optimization</h3>
              <ul className="space-y-2 text-sm">
                <li>Automated lead enrichment</li>
                <li>Personalized sales follow-up automation</li>
                <li>Cost reduction through process automation</li>
                <li>Enhanced marketing and sales performance</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Customer Success Automation</h3>
              <ul className="space-y-2 text-sm">
                <li>Proactive user engagement</li>
                <li>Automated onboarding workflows</li>
                <li>AI-powered health scoring</li>
                <li>Knowledge base optimization</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">AI Team Training</h3>
              <ul className="space-y-2 text-sm">
                <li>Customized AI training for teams</li>
                <li>Implementation of tools</li>
                <li>Rating and measurement of AI skills</li>
                <li>Hands-on expert mentorship</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Approach Section */}
        <motion.section 
          className="print:mb-0"
          {...fadeIn}
        >
          <h2 className="text-2xl font-bold mb-6">Approach</h2>
          <div className="prose max-w-none">
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
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Index;