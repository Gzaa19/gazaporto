import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import { BottomNavigation } from "@/components/BottomNavigation";
import LoadingFallback from "@/components/LoadingFallback";


const Index = lazy(() => import("./pages/Index"));
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Blogs from "./pages/Blogs";
import Social from "./pages/Social";
import NotFound from "./pages/NotFound";



const queryClient = new QueryClient();
const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen bg-gradient-subtle relative">
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

const App = () => {
  useEffect(() => {
    const preloads = [
      import("./pages/Certifications"),
      import("./pages/Blogs"),
      import("./pages/Social"),
      import("./pages/Admin"),
      import("./pages/NotFound"),
    ];
    Promise.allSettled(preloads).catch(() => {});
  }, []);

  return (
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
              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
