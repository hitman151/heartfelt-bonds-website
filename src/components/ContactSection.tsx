
import { useState } from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim()) {
      // In a real implementation, this would send the message to you
      // For now, we'll just show a success toast
      toast({
        title: "Message received",
        description: "Thank you for your response. I appreciate you taking the time to reach out.",
        duration: 5000,
      });
      setMessage("");
    } else {
      toast({
        variant: "destructive",
        title: "Empty message",
        description: "Please enter a message before sending.",
        duration: 3000,
      });
    }
  };

  return (
    <section id="contact" className="py-12 scroll-mt-16">
      <div className="container max-w-2xl mx-auto px-4">
        <div className="text-center mb-8 animate-fade-in">
          <MessageCircle className="inline-block text-heartfelt-500 w-8 h-8 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Send Me A Message</h2>
          {/* <p className="text-muted-foreground max-w-lg mx-auto">
            I understand if you need time, but whenever you're ready, I'd love to hear from you. 
            Your response means the world to me, even if it's just to let me know you've seen this.
          </p> */}
        </div>
        
        <Card className="border-heartfelt-300 shadow-md animate-fade-in">
          <form onSubmit={handleSubmit}>
            <CardHeader className="pb-2">
              <h3 className="text-xl font-semibold font-playfair"></h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Textarea 
                    placeholder=" Idhar abhi msg mat krna database connect nahi kiye hai mysql ka password ka prblm hogya🥹 "
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[150px] border-heartfelt-300 focus:border-heartfelt-500"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-sm text-muted-foreground">
                Your response is private between us.
              </p>
              <Button 
                type="submit"
                className="bg-heartfelt-500 hover:bg-heartfelt-500/90"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
