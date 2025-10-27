import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  // Static portfolio data
  const portfolio = {
    name: "Gaza Al Ghozali Chansa",
    title: "Full Stack Developer || Software Engineer",
    description: "Create modern web applications and AI solutions that solve real-world problems. Passionate about clean code, and user experience.",
    avatar: "/hero.jpg",
    resume: "/Curriculum Vitae Gaza Al Ghozali Chansa.pdf"
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, staggerChildren: 0.1 }}
      className="mb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
        {/* Photo Section - Top on mobile, Left on desktop */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative order-1 lg:order-1 w-full flex justify-center"
        >
          <div className="relative z-10 w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[26rem] lg:w-96 lg:h-[28rem] xl:w-[28rem] xl:h-[32rem] rounded-2xl bg-card shadow-2xl">
            <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center overflow-hidden">
            {/* Real hero photo */}
            <img 
              src={portfolio?.avatar || "/hero.jpg"} 
              alt={portfolio?.name || "Gaza Al Ghozali Chansa"} 
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          </div>
          
          {/* Floating decoration behind the photo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 w-16 h-16 sm:w-20 sm:h-20 bg-accent rounded-full blur-xl opacity-40 -z-10 pointer-events-none"
          />
        </motion.div>

        {/* Content Section - Bottom on mobile, Right on desktop */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 sm:space-y-6 order-2 lg:order-2 text-left w-full"
        >
          <div className="space-y-3 sm:space-y-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-left"
            >
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-muted-foreground mb-1 sm:mb-2">
                Hi, I'm
              </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {portfolio?.name ?? "Gaza Al Ghozali Chansa"}
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 justify-start"
            >
              <Badge variant="secondary" className="text-xs sm:text-sm px-3 sm:px-4 py-1">
                {portfolio?.title ?? "ML/AI Developer"}
              </Badge>
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed text-left"
            >
              {portfolio?.description ?? "I create modern web applications and AI solutions that solve real-world problems. Passionate about clean code, user experience, and innovative technologies."}
            </motion.p>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start items-start"
          >
            <Button variant="outline" className="gap-2 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto" onClick={() => navigate('/social')} aria-label="Go to Social">
              <Mail className="w-4 h-4" />
              Get In Touch
            </Button>
            <Button 
              className="gap-2 bg-gradient-primary hover:opacity-90 transition-opacity text-sm sm:text-base px-4 sm:px-3 py-2 sm:py-3 w-full sm:w-auto"
              onClick={() => (portfolio?.resume ? window.open(portfolio.resume, '_blank') : undefined)}
            >
              <Download className="w-4 h-4" />
              {portfolio?.resume ? 'Download Resume' : 'View My Work'}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
