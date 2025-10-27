import { Home, Briefcase, Award, Share2, Newspaper, Moon, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Projects", path: "/projects", icon: Briefcase },
  { name: "Certification", path: "/certifications", icon: Award },
  { name: "Blogs", path: "/blogs", icon: Newspaper },
  { name: "Social", path: "/social", icon: Share2 },
];

export const BottomNavigation = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 bg-card backdrop-blur-lg border-t border-border z-50 md:hidden overflow-hidden"
    >
      <div className="flex items-center justify-around px-2 py-3">
        {menuItems.map((item, index) => (
          <NavLink key={item.path} to={item.path} end={item.path === "/"}>
            {({ isActive }) => (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 300, damping: 30 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "relative overflow-hidden flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 min-w-[56px]",
                  isActive
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <item.icon className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium truncate max-w-[48px]">
                  {item.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="active-pill-bottom"
                    className="absolute inset-0 bg-gradient-primary rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            )}
          </NavLink>
        ))}
        
        {/* Theme Toggle Button */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 300, damping: 30 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsDark(!isDark)}
          className="relative overflow-hidden flex flex-col items-center justify-center p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300 min-w-[56px]"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-5 h-5 mb-1" /> : <Moon className="w-5 h-5 mb-1" />}
          <span className="text-xs font-medium">Theme</span>
        </motion.button>
      </div>
    </motion.nav>
  );
};