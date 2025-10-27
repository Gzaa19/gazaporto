import { useState } from "react";
import { motion } from "framer-motion";
import { Outlet, Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Award, 
  FolderOpen, 
  Briefcase, 
  GraduationCap, 
  Code, 
  User,
  Menu, 
  X,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Portfolio', href: '/admin/portfolio', icon: User },
    { name: 'Certificates', href: '/admin/certificates', icon: Award },
    { name: 'Projects', href: '/admin/projects', icon: FolderOpen },
    { name: 'Work Experience', href: '/admin/work-experience', icon: Briefcase },
    { name: 'Education', href: '/admin/education', icon: GraduationCap },
    { name: 'Tech Stack', href: '/admin/tech-stack', icon: Code },
  ];

  const isActive = (href: string) => {
    if (href === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{ x: sidebarOpen ? 0 : -280 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-70 bg-white shadow-xl border-r border-gray-200",
          "lg:translate-x-0 lg:static lg:inset-0 lg:w-64"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200 bg-white">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <LayoutDashboard className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-lg font-bold text-gray-900">Admin Panel</h1>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-1"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                    active
                      ? "bg-blue-50 text-blue-700 shadow-sm border-l-4 border-blue-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  )}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon className={cn(
                    "mr-3 h-5 w-5 flex-shrink-0 transition-colors",
                    active ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"
                  )} />
                  <span className="truncate">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-3 border-t border-gray-200 bg-gray-50">
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              size="sm"
            >
              <LogOut className="mr-3 h-4 w-4" />
              <span className="text-sm">Logout</span>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Top bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 lg:static lg:overflow-y-visible">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden mr-2"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Portfolio Admin
                </h2>
                <p className="text-sm text-gray-500 hidden sm:block">
                  Manage your portfolio content
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Online</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;