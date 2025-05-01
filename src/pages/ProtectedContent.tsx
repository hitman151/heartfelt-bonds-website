
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePassword } from "@/contexts/PasswordContext";
import Navigation from "@/components/Navigation";
import ApologySection from "@/components/ApologySection";
import MemoriesSection from "@/components/MemoriesSection";
import MistakesSection from "@/components/MistakesSection";
import FutureSection from "@/components/FutureSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const ProtectedContent = () => {
  const { isAuthenticated } = usePassword();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  
  if (!isAuthenticated) {
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <ApologySection />
        <MemoriesSection />
        <MistakesSection />
        <FutureSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ProtectedContent;
