
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Heart } from "lucide-react";

const ApologySection = () => {
  return (
    <section id="apology" className="py-12 scroll-mt-16">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-8 animate-fade-in">
          <Heart className="inline-block text-heartfelt-400 w-8 h-8 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">Dear Friend</h1>
          <p className="text-muted-foreground">A heartfelt message for you</p>
        </div>
        
        <Card className="mb-8 bg-gradient-to-br from-heartfelt-100 to-white border-heartfelt-300 shadow-md animate-fade-in">
          <CardHeader className="pb-2">
            <h2 className="text-2xl font-semibold font-playfair text-center">My Heartfelt Apology</h2>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p>
              I've spent a lot of time thinking about what happened between us, and I want you to know how deeply sorry I am for hurting you.
            </p>
            <p>
              I created this website as a way to express my sincerest apology for the pain I caused when I [specific action]. I understand now how my words and actions affected you, and I take full responsibility.
            </p>
            <p className="font-medium">
              Our friendship means the world to me, and I miss the connection we once had.
            </p>
            <p>
              I understand if you need time and space, but I want you to know that I'm committed to being a better friend and making things right between us, if you're willing to give me that chance.
            </p>
            <div className="pt-4">
              <p className="italic">
                "True friendship isn't about being inseparable; it's being separated and nothing changes."
              </p>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
          <Card className="bg-white border-heartfelt-300 shadow-md">
            <CardHeader className="pb-2">
              <h3 className="text-xl font-semibold font-playfair">What I've Learned</h3>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Through this experience, I've learned valuable lessons about:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>The importance of thoughtful communication</li>
                <li>Being present and listening with empathy</li>
                <li>Respecting boundaries and different perspectives</li>
                <li>Taking responsibility for my actions</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-heartfelt-300 shadow-md">
            <CardHeader className="pb-2">
              <h3 className="text-xl font-semibold font-playfair">My Promise To You</h3>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Moving forward, I promise to:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Be more mindful of your feelings</li>
                <li>Communicate more openly and honestly</li>
                <li>Give you the space you need when you ask for it</li>
                <li>Be the friend you deserve</li>
                <li>Never take our friendship for granted again</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApologySection;
