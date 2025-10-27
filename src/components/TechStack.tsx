import { motion } from "framer-motion";
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiPostgresql, 
  SiTailwindcss, 
  SiMongodb, 
  SiExpress, 
  SiNextdotjs, 
  SiPython, 
  SiMysql,    
  SiDocker, 
  SiOracle, 
  SiGit, 
  SiJavascript, 
  SiPhp, 
  SiLaravel,
  SiHtml5,
  SiCss3,
  SiC,
  SiGooglecolab
} from "react-icons/si";

const technologies = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Oracle", icon: SiOracle, color: "#F80000" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "C", icon: SiC, color: "#A8B9CC" },
  { name: "Google Colab", icon: SiGooglecolab, color: "#F9AB00" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { scale: 0, opacity: 0, rotate: -180 },
  show: { scale: 1, opacity: 1, rotate: 0 },
};

export const TechStack = () => {
  return (
    <section className="mb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-foreground text-left"
        >
          Tech Stack
        </motion.h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={item}
              whileHover={{ y: -8, scale: 1.05 }}
              animate={{
                y: [0, -5, 0],
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                y: {
                  duration: 2 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 3 + index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="bg-transparent dark:bg-card/25 dark:backdrop-blur-md border border-transparent dark:border-border/40 rounded-md p-4 md:p-5 flex flex-col items-center gap-2 md:gap-3 shadow-none dark:shadow-elegant hover:dark:shadow-glow transition-shadow duration-300 group"
            >
              <tech.icon 
                className="w-8 h-8 md:w-9 md:h-9 group-hover:scale-110 transition-transform duration-200" 
                style={{ color: tech.color }} 
              />
              <span className="text-sm font-medium text-foreground text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
