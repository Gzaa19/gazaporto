import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "Diponegoro University",
    year: "2023 - Present",
    description: "Specialized in Software Engineering and AI",
  },
  {
    degree: "Senior High School",
    school: "SMA N 20 Batam City",
    year: "2020 - 2023",
    description: "Focus on Science and Mathematics",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { x: -50, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export const Education = () => {
  return (
    <section className="mb-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8 text-foreground"
      >
        Education
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-6"
      >
        {education.map((edu) => (
          <motion.div
            key={edu.degree}
            variants={item}
            whileHover={{ x: 10 }}
            className="relative pl-8 pb-8 border-l-2 border-primary last:pb-0"
          >
            <div className="absolute left-0 top-0 -translate-x-1/2 bg-primary rounded-full p-2">
              <GraduationCap className="w-4 h-4 text-primary-foreground" />
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 shadow-elegant hover:shadow-glow transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h3>
              <p className="text-primary font-medium mb-2">{edu.school}</p>
              <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
              <p className="text-sm text-foreground">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
