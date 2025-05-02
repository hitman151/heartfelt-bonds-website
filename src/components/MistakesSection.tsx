
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { User, Check } from "lucide-react";

const MistakesSection = () => {
  // Sample mistakes - replace with your actual reflections
  const mistakes = [
    {
      mistake: "Not listening when you needed to talk",
      reflection: "Apne hisab se apne marzi chalate.",
      improvement: "I had already realized this bhot aage "
    },
    {
      mistake: "Talked to you very rudely",
      reflection: "Mera kbhi aesa intention nahi h ya tha ki tumko kabhi Hurt kare",
      improvement: "already bhot aage hogye isliye wait kr rhe the tumhara msg aane ka but aaya nahi isliye daaaru pine ka wait kr rhe the taki tumse baat kr paaye"
    },
    {
      mistake: "Aage ab bata nahi skte hai kya mistake krenge ",
      reflection: "I dont know what mistakes i will make but i will always fix them",
      improvement: "........."
    }
  ];

  // Promise tracker progress
  const promises = [
    { promise: "Check in regularly without expecting anything in return", progress: 75 },
    { promise: "Ab se ache se baat krenge with full understanding", progress: 100000 },
    { promise: "Respect your boundaries", progress: 90 },
    { promise: "Be honest about my feelings", progress: 80 },
    { promise: "Take responsibility for my actions", progress: 85 }
  ];

  return (
    <section id="mistakes" className="py-12 scroll-mt-16">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-8 animate-fade-in">
          <User className="inline-block text-heartfelt-500 w-8 h-8 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">My Reflection</h2>
          {/* <p className="text-muted-foreground max-w-2xl mx-auto">
            I've spent time reflecting on the mistakes I've made and how I can grow from them. 
            This isn't just about words—it's about actions and change.
          </p> */}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in">
          <div>
            <h3 className="text-xl font-semibold font-playfair mb-6">Where I Went Wrong</h3>
            <div className="space-y-6">
              {mistakes.map((item, index) => (
                <Card key={index} className="border-heartfelt-300 shadow-sm">
                  <CardHeader className="pb-2 pt-4">
                    <h4 className="font-medium text-lg text-heartfelt-500">{item.mistake}</h4>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm">{item.reflection}</p>
                    <div className="flex items-start gap-2 text-sm bg-heartfelt-100/50 p-3 rounded-md">
                      <Check className="w-4 h-4 text-heartfelt-500 mt-0.5" />
                      <p><span className="font-medium">My progress:</span> {item.improvement}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold font-playfair mb-6">My Promise Tracker</h3>
            <Card className="border-heartfelt-300 shadow-sm">
              <CardContent className="pt-6">
                {/* <p className="mb-6">
                  These are the commitments I'm making to be a better friend to you. 
                  I'm tracking my progress to keep myself accountable.
                </p> */}
                <div className="space-y-5">
                  {promises.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{item.promise}</span>
                        <span className="text-sm font-medium">{item.progress}%</span>
                      </div>
                      <Progress value={item.progress} className="h-2" indicatorClassName="bg-heartfelt-500" />
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t text-sm">
                  {/* <p className="italic text-muted-foreground">
                    I know actions speak louder than words. This tracker helps me stay focused on making real change.
                  </p> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MistakesSection;
