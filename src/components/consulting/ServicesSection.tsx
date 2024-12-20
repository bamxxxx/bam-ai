import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const ServiceCard = ({ title, items }: { title: string; items: string[] }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-consulting-accent/50 transition-colors">
    <h3 className="text-xl font-semibold mb-4 text-consulting-text">{title}</h3>
    <ul className="space-y-2 list-none">
      {items.map((item, index) => (
        <li key={index} className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-consulting-accent rounded-full"></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const ServicesSection = () => (
  <motion.section 
    className="mb-16 print:mb-8"
    {...fadeIn}
  >
    <h2 className="text-2xl font-bold mb-6 text-consulting-text">Service Offerings</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ServiceCard
        title="AI Product Development"
        items={[
          "Rapid AI feature design and prototyping",
          "Building intelligent product capabilities",
          "Leveraging cutting-edge AI tools for accelerated development",
          "Research and iteration to get clear product-market fit"
        ]}
      />
      <ServiceCard
        title="Go-to-Market AI Optimization"
        items={[
          "Automated lead enrichment",
          "Personalized sales follow-up automation",
          "Cost reduction through intelligent process automation",
          "Enhanced marketing and sales funnel performance",
          "Tool and platform implementation"
        ]}
      />
      <ServiceCard
        title="Customer Success Automation"
        items={[
          "Proactive user engagement based on behavior patterns",
          "Automated onboarding and training workflows",
          "AI-powered customer health scoring and churn prediction",
          "Knowledge base optimization and self-service automation"
        ]}
      />
      <ServiceCard
        title="AI Team Training"
        items={[
          "Customized AI training for teams",
          "Combined with implementation of tools",
          "Rating and measurement of team's AI skills",
          "Hands-on expert mentorship"
        ]}
      />
    </div>
  </motion.section>
);