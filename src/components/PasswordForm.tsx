
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePassword } from "@/contexts/PasswordContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Lock } from "lucide-react";

const PasswordForm = () => {
  const [password, setPassword] = useState("");
  const { authenticate } = usePassword();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (authenticate(password)) {
      toast({
        title: "Access Granted",
        description: "Welcome to this heartfelt space.",
        duration: 3000,
      });
      navigate("/content");
    } else {
      toast({
        variant: "destructive",
        title: "Incorrect Password",
        description: "Please try again with the correct password.",
        duration: 3000,
      });
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-heartfelt-300 animate-fade-in">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 bg-heartfelt-200 p-3 rounded-full w-14 h-14 flex items-center justify-center">
          <Lock className="h-6 w-6 text-heartfelt-500" />
        </div>
        <CardTitle className="text-2xl font-playfair">This Message is For You</CardTitle>
        <CardDescription>
          Please enter the password to access this heartfelt message.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Input
                id="password"
                type="password"
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-heartfelt-300 focus:border-heartfelt-500"
              />
              <p className="text-xs text-muted-foreground italic">
                Hint: Try "your nickname jo hum kbhi kbhi bulate the + sorry"
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-heartfelt-500 hover:bg-heartfelt-500/90">
            Unlock Message
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default PasswordForm;
