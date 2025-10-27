import { useState } from "react";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Simple authentication - in production, this should be handled by a proper auth system
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simple authentication check
    if (credentials.username === "admin" && credentials.password === "admin123") {
      setIsAuthenticated(true);
      toast.success("Login successful!");
      navigate("/admin/dashboard");
    } else {
      toast.error("Invalid credentials. Use admin/admin123");
    }
    
    setLoading(false);
  };

  if (isAuthenticated) {
    navigate("/admin/dashboard");
    return null;
  }

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block mb-4"
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full p-4 mx-auto w-fit">
                  <Lock className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              
              <CardTitle className="text-2xl font-bold text-gray-900">
                Admin Login
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Sign in to access the admin dashboard
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter username"
                    value={credentials.username}
                    onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      value={credentials.password}
                      onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Signing in...
                    </div>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 mr-2" />
                      Sign In
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">Demo Credentials:</p>
                <p className="text-sm text-blue-700">Username: admin</p>
                <p className="text-sm text-blue-700">Password: admin123</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Admin;
