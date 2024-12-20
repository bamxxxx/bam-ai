import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  title: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Bhuvan Khanna",
    title: "General Manager | Tech Entrepreneur",
    image: "/lovable-uploads/1d369e11-0252-4bc0-a374-d12d70ae4c49.png",
    text: "Michael has an in-depth understanding of product development, digital strategy, and user research. Having worked with him for over five years on various projects, I have always been delighted by his professionalism and vast experience. His user-centric, data-driven approach lets him get to the meat of the problem quickly and come up with solutions that defy internal biases.",
  },
  {
    name: "Moshe Shmuel",
    title: "Sr. Manager, Product Design, HBO Max at WarnerMedia",
    image: "/lovable-uploads/b56ac487-44a0-4f14-956e-be08d868ece0.png",
    text: "Michael is one of the most passionate and professional individuals I have had the privilege of working with. During my time at DirecTV, Michael and his team conducted and excelled in any research activity we gave them and provided the most reliable, in-depth, and impactful insights a product innovation group could ask for.",
  },
  {
    name: "Rishi Sethi",
    title: "CEO at Method Mill",
    image: "/lovable-uploads/64867c8e-4e1e-4888-9379-948d7ec51e91.png",
    text: "Michael has a unique combination of being able to switch between product, marketing and sales. He's been one of the best mentors I've ever had and has changed the way I look at business. His user-centric approach makes him one of the most effective CEOs that I can vouch for.",
  },
  {
    name: "Nis Frome",
    title: "CRO at Coderbyte // GTM Advisor",
    image: "/lovable-uploads/408409c6-0b01-44a6-abfe-d52732ab8338.png",
    text: "Michael is a passionate leader who delivers on promises and inspires hustle, focus, and transparency, enabling everyone around him to grow stronger every day. He's smart and customer-driven, and has a knack for predicting market trends years before they take place.",
  },
  {
    name: "Olumayowa Máyo Fadina",
    title: "#DobermanDad",
    image: "/lovable-uploads/0e1bf090-b2c9-44ee-8e08-f3cad7861ec5.png",
    text: "Working with Michael was one of the most important experiences of my professional career. With Michael's coaching and mentorship, I went from doing simple lead generation and prospecting, to running my own demos, and even helping to close Fortune 500 accounts in a year.",
  },
  {
    name: "Drew Kevorkian",
    title: "President at ARES Scientific, CEO at ARES Distribution",
    image: "/lovable-uploads/ff3079f6-7941-4b60-9148-72b4ca80664d.png",
    text: "Michael is true professional. He is extremely knowledgeable, a great communicator, responsive and fair in his dealings. Working with Michael has helped elevate my businesses to a new level in the digital world.",
  },
  {
    name: "Ryan Jafari",
    title: "Tech Leader | Solutions Architect",
    image: "/lovable-uploads/6a809776-a2a2-41d1-9998-4cef4a16af9a.png",
    text: "I've worked with Michael for several years, and during that time we've collaborated to build innovative software that powers technology companies. You haven't worked with a true team player until you've worked with Michael — his management skills keep even the most opposing of forces united towards a common goal.",
  },
];

export const TestimonialsCarousel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16 print:mb-8"
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-consulting-text relative">
        <span className="relative inline-block group">
          What People Say
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-consulting-accent/30 rounded-full transform scale-x-75 transition-transform group-hover:scale-x-100"></span>
        </span>
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-consulting-accent/50 transition-colors h-full flex flex-col">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-consulting-text">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-consulting-muted">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <p className="text-consulting-text/80 text-sm flex-grow">
                  "{testimonial.text}"
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </motion.div>
  );
};