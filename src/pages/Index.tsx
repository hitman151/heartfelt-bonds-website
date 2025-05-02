
import PasswordForm from "@/components/PasswordForm";
import { usePassword } from "@/contexts/PasswordContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
          <h1 className="text-3xl font-bold font-playfair mb-2">A Heartfelt Message</h1>
          <p className="text-muted-foreground">For someone special</p>
        </div>
        <PasswordForm />
      </div>
    </div>
  );
};

export default Index;