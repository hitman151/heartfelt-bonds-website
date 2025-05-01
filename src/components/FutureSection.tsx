
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Tree } from "lucide-react";

const FutureSection = () => {
  const futureActivities = [
    "Have a casual coffee catchup when you're ready",
    "Visit the art exhibition we always talked about",
    "Take that cooking class we bookmarked",
    "Go on a weekend hiking trip to reconnect with nature",
    "Volunteer together at the animal shelter",
    "Watch that movie we've both been wanting to see",
    "Try that new restaurant that opened downtown"
  ];

  return (
    <section id="future" className="py-12 bg-heartfelt-200/50 scroll-mt-16">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-8 animate-fade-in">
          <Calendar className="inline-block text-heartfelt-500 w-8 h-8 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Looking Forward</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm hopeful for our friendship's future. Here's how I envision rebuilding our connection, 
            at your pace and comfort level.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in">
          <Card className="border-heartfelt-300 shadow-md">
            <CardHeader className="pb-2">
              <h3 className="text-xl font-semibold font-playfair">My Vision For Our Friendship</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                I hope that with time, patience, and consistent effort on my part, we can rebuild a friendship that's even stronger than before—one founded on mutual respect, clear communication, and genuine care.
              </p>
              <p>
                I envision us being able to laugh together again, to share our thoughts freely, and to support each other through life's challenges and celebrations.
              </p>
              <p>
                Most importantly, I hope for a friendship where you feel valued, respected, and heard—always.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-heartfelt-300 shadow-md">
            <CardHeader className="pb-2">
              <h3 className="text-xl font-semibold font-playfair">Our Friendship Bucket List</h3>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Things I'd love for us to do together when you're ready:
              </p>
              <ul className="space-y-2">
                {futureActivities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="inline-block bg-heartfelt-100 text-heartfelt-500 rounded-full p-1 mt-0.5">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {activity}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center animate-fade-in">
          <Card className="max-w-lg mx-auto border-heartfelt-300 shadow-md">
            <CardHeader className="pb-2">
              <div className="mx-auto mb-2">
                <Tree className="h-8 w-8 text-heartfelt-500" />
              </div>
              <h3 className="text-xl font-semibold font-playfair">Symbolic New Beginning</h3>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>
                I've planted a tree in honor of our friendship through the One Tree Planted organization.
              </p>
              <p>
                Like this tree, I hope our friendship can grow stronger with care, patience, and time.
                It symbolizes my commitment to nurturing our relationship and my hope for its renewal.
              </p>
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center mt-4">
                <Tree className="h-16 w-16 text-muted-foreground animate-pulse-gentle" />
              </div>
              <p className="text-sm text-muted-foreground italic mt-2">
                (You can add an actual certificate image here)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
