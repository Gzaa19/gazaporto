import { Home, Briefcase, Award, Share2, Moon, Sun, Newspaper } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const menuItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Projects", path: "/projects", icon: Briefcase },
  { name: "Certifications", path: "/certifications", icon: Award },
  { name: "Blogs", path: "/blogs", icon: Newspaper },
  { name: "Social", path: "/social", icon: Share2 },
];

export const Sidebar = () => {
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
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-6 top-16 h-[80vh] w-56 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-elegant flex-col items-start px-4 py-6 gap-6 z-50 hidden md:flex overflow-hidden"
    >
      {/* Profile header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2 w-full min-w-0"
      >
        <Avatar className="h-10 w-10">
          <AvatarImage src="/hero.jpg" alt="Gaza Al Ghozali Chansa" className="object-cover" />
        </Avatar>
        <div className="flex flex-col min-w-0">
          <span className="text-[13px] font-semibold truncate">gazaa_chansaa</span>
          <span className="text-[11px] text-muted-foreground truncate">gaza0alghozali@gmail.com</span>
        </div>
      </motion.div>

      {/* Menu */}
      <div className="flex flex-col gap-2 flex-1 w-full">
        {menuItems.map((item, index) => (
          <NavLink key={item.path} to={item.path} end={item.path === "/"}>
            {({ isActive }) => (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 300, damping: 30 }}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "relative group cursor-pointer rounded-xl px-3 py-2 transition-all duration-300 flex items-center gap-3",
                  isActive
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gradient-primary rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            )}
          </NavLink>
        ))}
      </div>

      {/* Theme toggle */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 300, damping: 30 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsDark(!isDark)}
        className="rounded-xl px-3 py-2 bg-muted hover:bg-accent text-foreground transition-all duration-300 w-full text-center"
        aria-label="Toggle theme"
      >
        <div className="flex items-center justify-center gap-2">
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          <span className="text-sm">Theme</span>
        </div>
      </motion.button>
    </motion.aside>
  );
};
