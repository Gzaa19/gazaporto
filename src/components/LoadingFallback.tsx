import { motion } from "framer-motion";

const LoadingFallback = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-subtle">
      <div className="relative flex flex-col items-center">
        {/* Soft glow background to match theme */}
        <motion.div
          className="absolute -z-10 w-40 h-40 rounded-full bg-gradient-primary blur-2xl opacity-40"
          animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Gradient ring spinner */}
        <motion.div
          aria-label="Loading"
          className="w-14 h-14 rounded-full border-4 border-muted border-t-primary shadow-glow"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />

        {/* Subtle animated label */}
        <motion.span
          className="mt-4 text-sm font-medium text-muted-foreground tracking-wide"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6], y: [0, -2, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          Loading content...
        </motion.span>
      </div>
    </div>
  );
};

export default LoadingFallback;