import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

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
  hidden: { x: 50, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export const WorkExperience = () => {
  // Static experiences data
  const experiences = [
    {
      id: 1,
      title: "React and Backend With AI",
      company: "Asah IED By Dicoding",
      startDate: "2025-08-18",
      endDate: null,
      current: true,
      description: "Built responsive web interfaces using React with JavaScript and TypeScript. Collaborated with design team to implement pixel-perfect UI components."
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Badan Pemeriksa Keuangan",
      startDate: "2025-07-01",
      endDate: "2025-08-01",
      current: false,
      description: "Restfull API with PHP and MySQL Server"
    }
  ];

  // Format date function
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  // Format period function
  const formatPeriod = (startDate: string, endDate?: string, current?: boolean) => {
    const start = formatDate(startDate);
    if (current) return `${start} - Present`;
    if (endDate) return `${start} - ${formatDate(endDate)}`;
    return start;
  };

  return (
    <section className="mb-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8 text-foreground"
      >
        Work Experience
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-6"
      >
        {experiences?.map((exp) => (
          <motion.div
            key={exp.id}
            variants={item}
            whileHover={{ x: -10 }}
            className="relative pr-8 pb-8 border-r-2 border-secondary last:pb-0"
          >
            <div className="absolute right-0 top-0 translate-x-1/2 bg-secondary rounded-full p-2">
              <Briefcase className="w-4 h-4 text-secondary-foreground" />
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 shadow-elegant hover:shadow-glow transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
              <p className="text-secondary font-medium mb-2">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-2">
                {formatPeriod(exp.startDate, exp.endDate, exp.current)}
              </p>
              <p className="text-sm text-foreground">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
