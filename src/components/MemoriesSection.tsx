
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, Calendar, Image, Music } from "lucide-react";

const MemoriesSection = () => {
  // Sample memories - replace with your actual memories
  const memories = [
    {
      date: "January 15, 2019",
      title: "The Day We Met",
      description: "Remember that rainy afternoon in the campus library? You shared your umbrella with me when I forgot mine."
    },
    {
      date: "March 20, 2020",
      title: "Road Trip Adventure",
      description: "Our spontaneous weekend road trip where we got lost and found that amazing little diner with the best milkshakes."
    },
    {
      date: "July 4, 2021",
      title: "Fireworks Night",
      description: "Watching fireworks from the rooftop and making those ridiculous future plans. I still have the napkin where we wrote them down."
    },
    {
      date: "December 24, 2021",
      title: "Holiday Cookie Baking",
      description: "The great cookie disaster in my kitchen where we set off the smoke alarm and had to explain to my neighbors why the hallway smelled like burnt chocolate."
    },
  ];

  // Sample photos - replace with your actual photo descriptions
  const photos = [
    { id: 1, description: "Us at the beach sunset, building that enormous sand castle" },
    { id: 2, description: "Your birthday surprise party where everyone wore silly hats" },
    { id: 3, description: "The hiking trip where we saw that family of deer" },
    { id: 4, description: "Coffee shop study session with our ridiculous tower of empty cups" },
    { id: 5, description: "Halloween costumes as salt and pepper shakers" },
  ];
  
  // Sample songs - replace with your actual playlist
  const songs = [
    { title: "Our Song", artist: "Taylor Swift", memory: "Always reminds me of our road trips" },
    { title: "Count On Me", artist: "Bruno Mars", memory: "The song that was playing when we made our friendship pact" },
    { title: "Good Old Days", artist: "Macklemore", memory: "Remember singing this at karaoke night?" },
    { title: "Lean On", artist: "Major Lazer", memory: "Our go-to dance song" },
  ];

  return (
    <section id="memories" className="py-12 bg-heartfelt-100/50 scroll-mt-16">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-8 animate-fade-in">
          <Book className="inline-block text-heartfelt-500 w-8 h-8 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Our Memory Lane</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These moments we shared mean so much to me. They're the foundation of our friendship and a reminder of what we can rebuild.
          </p>
        </div>
        
        <Tabs defaultValue="timeline" className="w-full animate-fade-in">
          <TabsList className="grid w-full grid-cols-3 md:max-w-md mx-auto mb-8">
            <TabsTrigger value="timeline">
              <Calendar className="w-4 h-4 mr-2" /> Timeline
            </TabsTrigger>
            <TabsTrigger value="photos">
              <Image className="w-4 h-4 mr-2" /> Photos
            </TabsTrigger>
            <TabsTrigger value="playlist">
              <Music className="w-4 h-4 mr-2" /> Playlist
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="timeline" className="animate-fade-in">
            <div className="relative border-l-2 border-heartfelt-300 ml-4 pl-8 space-y-10 py-4">
              {memories.map((memory, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] mt-1.5 h-5 w-5 rounded-full border-4 border-heartfelt-500 bg-white"></div>
                  <div className="mb-2">
                    <time className="text-sm font-normal leading-none text-muted-foreground">
                      {memory.date}
                    </time>
                    <h3 className="text-xl font-semibold font-playfair text-foreground mt-1">
                      {memory.title}
                    </h3>
                  </div>
                  <Card className="bg-white border-heartfelt-300">
                    <CardContent className="pt-6">
                      <p>{memory.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="photos" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {photos.map((photo) => (
                <Card key={photo.id} className="overflow-hidden border-heartfelt-300 shadow-md hover-scale">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Image className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-center italic">{photo.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center mt-6 text-sm text-muted-foreground">
              (Add your actual photos here by uploading them to the project)
            </p>
          </TabsContent>
          
          <TabsContent value="playlist" className="animate-fade-in">
            <Card className="border-heartfelt-300">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {songs.map((song, index) => (
                    <div key={index} className="border-b border-heartfelt-100 pb-4 last:border-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{song.title}</h4>
                          <p className="text-sm text-muted-foreground">{song.artist}</p>
                        </div>
                        <Music className="w-5 h-5 text-heartfelt-500" />
                      </div>
                      <p className="mt-2 text-sm italic">{song.memory}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <p className="text-center mt-6">
              <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-heartfelt-500 hover:text-heartfelt-400 story-link">
                <Music className="w-4 h-4 mr-2" />
                View Full Playlist
              </a>
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MemoriesSection;
