
import { useState } from "react";
import { usePassword } from "@/contexts/PasswordContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Home, User, Book, Calendar, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const { logout } = usePassword();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("apology");

  const navigateTo = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const menuItems = [
    { id: "apology", icon: Heart, label: "Apology" },
    { id: "memories", icon: Book, label: "Memories" },
    { id: "mistakes", icon: User, label: "Reflection" },
    { id: "future", icon: Calendar, label: "Future" },
    { id: "contact", icon: MessageCircle, label: "Message Me" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Button variant="ghost" onClick={() => navigateTo("apology")} className="font-playfair">
            <Heart className="w-4 h-4 mr-2 text-heartfelt-400" /> Heartfelt Message
          </Button>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-2">
            {menuItems.map((item) => (
              <Button 
                key={item.id}
                variant="ghost" 
                size="sm"
                onClick={() => navigateTo(item.id)}
                className={cn(
                  "hidden md:flex",
                  activeSection === item.id && "bg-muted"
                )}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </Button>
            ))}
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <Home className="w-4 h-4 mr-2" />
              Exit
            </Button>
          </nav>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div className="md:hidden flex overflow-auto scrollbar-hide border-t">
        <div className="flex w-full justify-between px-2">
          {menuItems.map((item) => (
            <Button 
              key={item.id}
              variant="ghost" 
              size="sm" 
              onClick={() => navigateTo(item.id)}
              className={cn(
                "flex flex-col items-center py-2 px-1",
                activeSection === item.id && "bg-muted"
              )}
            >
              <item.icon className="w-4 h-4 mb-1" />
              <span className="text-xs">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
