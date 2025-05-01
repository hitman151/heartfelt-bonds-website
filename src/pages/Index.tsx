
import PasswordForm from "@/components/PasswordForm";
import { usePassword } from "@/contexts/PasswordContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HeartHandshake } from "lucide-react";

const Index = () => {
  const { isAuthenticated } = usePassword();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/content");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-heartfelt-100 to-heartfelt-200/30 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4 animate-float">
            <HeartHandshake className="h-8 w-8 text-heartfelt-400" />
          </div>
          <h1 className="text-3xl font-bold font-playfair mb-2">A Heartfelt Message</h1>
          <p className="text-muted-foreground">For someone special</p>
        </div>
        <PasswordForm />
      </div>
    </div>
  );
};

export default Index;
