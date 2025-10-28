import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Sidebar } from "@/components/Sidebar";
import { BottomNavigation } from "@/components/BottomNavigation";
import LoadingFallback from "@/components/LoadingFallback";


const Index = lazy(() => import("./pages/Index"));
const Projects = lazy(() => import("./pages/Projects"));
const Certifications = lazy(() => import("./pages/Certifications"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Social = lazy(() => import("./pages/Social"));
const Admin = lazy(() => import("./pages/Admin"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();


const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen bg-gradient-subtle relative">
    {/* Animated Background Dots */}
    <div className="animated-bg">
      <div className="bg-dot"></div>
      <div className="bg-dot"></div>
      <div className="bg-dot"></div>
      <div className="bg-dot"></div>
      <div className="bg-dot"></div>
      <div className="bg-dot"></div>
      <div className="bg-dot"></div>
      <div className="bg-dot"></div>
      <div className="bg-dot"></div>
      <div className="bg-dot"></div>
      <div className="bg-dot"></div>
      <div className="bg-dot"></div>
      <div className="bg-dot"></div>
      <div className="bg-dot"></div>
      <div className="bg-dot"></div>
      <div className="bg-dot"></div>
      <div className="bg-dot"></div>
      <div className="bg-dot"></div>
      <div className="bg-dot"></div>
      <div className="bg-dot"></div>
    </div>
    
    <div className="relative z-10">
      <Sidebar />
    </div>
    <main className="flex-1 ml-0 md:ml-56 lg:ml-56 p-8 md:p-12 lg:p-16 pb-20 md:pb-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </main>
    <div className="relative z-20">
      <BottomNavigation />
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Public routes with main layout */}
          <Route path="/" element={<MainLayout><Index /></MainLayout>} />
          <Route path="/projects" element={<MainLayout><Projects /></MainLayout>} />
          <Route path="/certifications" element={<MainLayout><Certifications /></MainLayout>} />
          <Route path="/blogs" element={<MainLayout><Blogs /></MainLayout>} />
          <Route path="/social" element={<MainLayout><Social /></MainLayout>} />
          
          {/* Admin login route */}
          <Route path="/admin" element={<Admin />} />
          
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
