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
              src="/lovable-uploads/00f37ddf-a287-449b-9069-e8abbdd6d169.png"
              alt="Michael Bamberger"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Introduction Section */}
        <motion.section 
          className="mb-16 print:mb-8 prose max-w-none"
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

        {/* Who I Am Section */}
        <motion.section 
          className="mb-16 print:mb-8"
          {...fadeIn}
        >
          <h2 className="text-2xl font-bold mb-6">Who I Am</h2>
          <p className="mb-4">A seasoned tech entrepreneur with a proven track record:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Founded 3 successful tech companies</li>
            <li>Raised over $35M in venture funding</li>
            <li>Generated $100M+ in cumulative revenue</li>
            <li>Expert in digital strategy, research, and product development</li>
            <li>Dartmouth College Alumnus (AB Economics)</li>
          </ul>
        </motion.section>

        {/* Value Proposition Section */}
        <motion.section 
          className="mb-16 print:mb-8"
          {...fadeIn}
        >
          <h2 className="text-2xl font-bold mb-6">Unique Value Proposition</h2>
          <p className="mb-4">Specialized in AI-powered transformation of customer-facing business functions:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Product Development</li>
            <li>Go-to-Market Strategy</li>
            <li>Sales Automation</li>
            <li>Marketing Optimization</li>
            <li>Customer Success Enhancement</li>
          </ul>
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
              <ul className="space-y-2 list-disc pl-6">
                <li>Rapid AI feature design and prototyping</li>
                <li>Building intelligent product capabilities</li>
                <li>Leveraging cutting-edge AI tools for accelerated development</li>
                <li>Research and iteration to get clear product-market fit</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Go-to-Market AI Optimization</h3>
              <ul className="space-y-2 list-disc pl-6">
                <li>Automated lead enrichment</li>
                <li>Personalized sales follow-up automation</li>
                <li>Cost reduction through intelligent process automation</li>
                <li>Enhanced marketing and sales funnel performance</li>
                <li>Tool and platform implementation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Customer Success Automation</h3>
              <ul className="space-y-2 list-disc pl-6">
                <li>Proactive user engagement based on behavior patterns</li>
                <li>Automated onboarding and training workflows</li>
                <li>AI-powered customer health scoring and churn prediction</li>
                <li>Knowledge base optimization and self-service automation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">AI Team Training</h3>
              <ul className="space-y-2 list-disc pl-6">
                <li>Customized AI training for teams</li>
                <li>Combined with implementation of tools</li>
                <li>Rating and measurement of team's AI skills</li>
                <li>Hands-on expert mentorship</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Approach Section */}
        <motion.section 
          className="mb-16 print:mb-8"
          {...fadeIn}
        >
          <h2 className="text-2xl font-bold mb-6">Approach</h2>
          <h3 className="text-xl font-semibold mb-4">Strategic + Implementation</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Comprehensive AI strategy development</li>
            <li>Hands-on implementation support</li>
            <li>Focus on delivering measurable business value</li>
          </ul>
        </motion.section>

        {/* Why Work With Me Section */}
        <motion.section 
          className="print:mb-0"
          {...fadeIn}
        >
          <h2 className="text-2xl font-bold mb-6">Why Work With Me</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Entrepreneurial experience building AI-powered solutions</li>
            <li>Deep understanding of technology and business strategy</li>
            <li>Proven track record of successful AI integration</li>
            <li>Focused on tangible business outcomes</li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
};

export default Index;