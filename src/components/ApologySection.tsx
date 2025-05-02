
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Heart } from "lucide-react";

const ApologySection = () => {
  return (
    <section id="apology" className="py-12 scroll-mt-16">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-8 animate-fade-in">
          <Heart className="inline-block text-heartfelt-400 w-8 h-8 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">Dear Manasvi</h1>
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
            I created this website to sincerely apologize for the pain I caused jab hum tumse itna galat tarika se baat kiye. I now realize how my harsh words aur beizzati wala language jo tha tumko kitna hurt kiya. Mereko samajh aa gaya hai ki mera galti tha, aur hum apne actions ka pura responsibility lete h
            </p>
            <p className="font-medium">
              Our jo bhi wala bond ya kuch bhi bol lo means a lot to me, and I miss the connection we once had.
            </p>
            <p>
              I understand if you need time and space,ek saal se zyada ho gaya hai aur mereko tumse baat krne ke baad realize hua but I want you to know that I'm committed to being a acha wala dost last time senior vagera kya kya bole the but this time i want to make things right between us, if you're willing to give me that chance.
            </p>
            <div className="pt-4">
              <p className="italic">
                "yuh mujhko na kr daafa apni zindagi se.Daant lo agar ho khafa."
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
                <li>Apne hisab se sab kuch nahi krne ka</li>
                <li>Hamesha mera maarzi nahi chalane ka</li>
                <li>Taking responsibility for my actions</li>
                <li>Last but not least ...trying to be a acha </li>
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
                <li>First of all I respect you</li>
                <li>Communicate more openly and honestly jo abhi nahi krte hue aarhe the</li>
                <li>Promise jaise kuch nahi,I only trust actions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApologySection;
