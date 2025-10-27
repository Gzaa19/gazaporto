import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconType } from "react-icons";
import {
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiSocketdotio,
  SiMongodb,
  SiChartdotjs,
} from "react-icons/si";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

// Faster, smoother animation for tech icons
const iconContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0 },
  },
};

const iconItem = {
  hidden: { opacity: 0, y: 6, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const Projects = () => {
  // Map technology names to react-icons and brand colors
  const techIconMap: Record<string, IconType> = {
    React: SiReact,
    "Node.js": SiNodedotjs,
    PostgreSQL: SiPostgresql,
    "Express.js": SiExpress,
    JavaScript: SiJavascript,
    "Tailwind CSS": SiTailwindcss,
    TypeScript: SiTypescript,
    "Socket.io": SiSocketdotio,
    MongoDB: SiMongodb,
    "Chart.js": SiChartdotjs,
  };

  // Brand colors for icons; fallback to theme color for techs without distinct brand
  const techBrandColors: Record<string, string | undefined> = {
    React: "#61DAFB",
    "Node.js": "#5FA04E",
    PostgreSQL: "#336791",
    "Express.js": undefined, // use theme color to avoid plain black/white
    JavaScript: "#F7DF1E",
    "Tailwind CSS": "#06B6D4",
    TypeScript: "#3178C6",
    "Socket.io": undefined,
    MongoDB: "#47A248",
    "Chart.js": "#FF6384",
  };

  // Static projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Collecta",
      description: "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "PostgreSQL", "Express.js", "JavaScript", "Tailwind CSS"],
      githubUrl: "https://github.com/Gzaa19/CollectaMarket.git",
      featured: true
    },
    {
      id: 2,
      title: "LokalOKE",
      description: null,
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "JavaScript", "Tailwind CSS"],
      githubUrl: "https://github.com/Gzaa19/LokalOKE.git",
      featured: true
    },
        {
      id: 3,
      title: "Portofolio",
      description: null,
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/Gzaa19/Portofolio.git",
      liveUrl: "https://portofolio-gzaa19.vercel.app/",
      featured: true
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.15] mb-4 bg-gradient-primary bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground">
            A showcase of my projects
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-8"
        >
          {projects?.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-elegant hover:shadow-glow transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <motion.div variants={iconContainer} initial="hidden" animate="show" className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map((tech) => {
                    const techName = String(tech);
                    const Icon = techIconMap[techName];
                    if (!Icon) return null;
                    const color = techBrandColors[techName];
                    return (
                      <motion.div
                        key={`${project.id}-${techName}`}
                        variants={iconItem}
                        className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-lg border border-border bg-card/40 shadow-elegant hover:shadow-glow transition-shadow duration-300"
                        aria-label={techName}
                        title={techName}
                      >
                        <Icon
                          className={`w-6 h-6 md:w-7 md:h-7 ${color ? "" : "text-primary"}`}
                          style={color ? { color } : undefined}
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button 
                      size="sm" 
                      className="gap-2" 
                      variant="default"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button 
                      size="sm" 
                      className="gap-2" 
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Projects;
