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
    <h2 className="text-3xl font-bold mb-12 text-center text-consulting-text relative">
      <span className="relative inline-block group">
        Trusted By Industry Leaders
        <span className="absolute -bottom-2 left-0 right-0 h-1 bg-consulting-accent/30 rounded-full transform scale-x-75 transition-transform group-hover:scale-x-100"></span>
      </span>
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
      <img
        src="/lovable-uploads/bb33df10-5ccf-4ee2-bb56-c56a100ff1fc.png"
        alt="Microsoft"
        className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all"
      />
      <img
        src="/lovable-uploads/371ed1ea-1523-42b7-82e3-398edce53dff.png"
        alt="Tenable"
        className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all"
      />
      <img
        src="/lovable-uploads/cb5a2989-6efb-4d2f-9db5-26a1e6763ad1.png"
        alt="PingIdentity"
        className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all"
      />
      <img
        src="/lovable-uploads/bfaf641c-e404-450f-8e54-171c72ebb3c5.png"
        alt="Blizzard"
        className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all"
      />
      <img
        src="/lovable-uploads/a10b3971-aa89-48c7-b413-852b992ddeb9.png"
        alt="PWC"
        className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all"
      />
      <img
        src="/lovable-uploads/73c31c10-3c80-414c-af34-fba26834ceac.png"
        alt="Vanguard"
        className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all"
      />
      <img
        src="/lovable-uploads/a151a038-74ee-4a1a-8b38-2ab2fa1da2b0.png"
        alt="Saatchi"
        className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all"
      />
      <img
        src="/lovable-uploads/ab9e8c3c-d4b7-42aa-829f-42a408562af0.png"
        alt="UnionBank"
        className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all"
      />
      <img
        src="/lovable-uploads/93eeccad-d9dd-4537-a900-6077d532a5f5.png"
        alt="MuleSoft"
        className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all"
      />
      <img
        src="/lovable-uploads/e195ff73-122c-4b49-beb4-8307ab499cef.png"
        alt="FireEye"
        className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all"
      />
      <img
        src="/lovable-uploads/1dfb13f8-c514-44f2-804e-bcad17d628b5.png"
        alt="Bloomin Brands"
        className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all"
      />
      <img
        src="/lovable-uploads/1b7769d3-3d51-4041-bdce-b3e518a2a77f.png"
        alt="Pfizer"
        className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all"
      />
    </div>
  </motion.section>
);
