import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-foreground">About Me</h2>
        <div className="bg-transparent dark:bg-card/25 dark:backdrop-blur-md border border-transparent dark:border-border/40 rounded-xl p-6 sm:p-8 shadow-none dark:shadow-elegant">
          <p className="text-base sm:text-lg text-foreground leading-relaxed mb-4">
            I specialize in building modern web applications and AI-powered solutions that solve real-world problems. I am passionate about clean code, scalable architectures, and delivering outstanding user experiences
          </p>
        </div>
      </div>
    </motion.section>
  );
};
