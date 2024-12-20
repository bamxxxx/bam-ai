import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const ClientsSection = () => (
  <motion.section 
    className="mb-16 print:mb-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
    {...fadeIn}
  >
    <h2 className="text-2xl font-bold mb-8 text-consulting-text">Trusted By Industry Leaders</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
      <img
        src="/lovable-uploads/d124a4cd-8ea5-442e-b853-9a347c175fb4.png"
        alt="Google"
        className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all"
      />
      <img
        src="/lovable-uploads/49dbcb9c-93ec-4a28-ab7c-086ac195f87d.png"
        alt="LexisNexis"
        className="h-8 md:h-12 object-contain grayscale hover:grayscale-0 transition-all"
      />
      <img
        src="/lovable-uploads/4fce34fd-e378-4d7a-9d41-fea088a42854.png"
        alt="Salesforce"
        className="h-8 md:h-12 object-contain grayscale hover:grayscale-0 transition-all"
      />
      <img
        src="/lovable-uploads/6d9d9915-5ecf-41a2-86b6-9446c021fded.png"
        alt="Toyota"
        className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all"
      />
      <img
        src="/lovable-uploads/4efaf28b-83d0-4841-90ce-0d8a584a3868.png"
        alt="DirectTV"
        className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 transition-all"
      />
      <img
        src="/lovable-uploads/d7949964-afe3-4b8a-a072-b4aa69297315.png"
        alt="Trellix"
        className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 transition-all"
      />
    </div>
  </motion.section>
);