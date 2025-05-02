import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, Calendar, Image, Music } from "lucide-react";

const MemoriesSection = () => {
  // Memory timeline - keep your text
  const memories = [
    {
      date: "I guess AUG end, 2019",
      title: "The Day We Met",
      description: "Jab hum actual mei notice kiye and you were crying sitting in the backseat"
    },
    {
      date: "OCT 18, 2019",
      title: "Iss din se sab start hua 😢",
      description: "The day I was completely broken but I found a feeling aur ek insan(chudail) who still matters the most"
    },
    {
      date: "idk i guess around nov, 2019",
      title: "when you were crying",
      description: "IDK kyu ro rhi thi but iam still the same person infact a more mature guy now ,who gave you the handkerchief"
    },
    {
      date: "Yh bhi nahi pata, 2021",
      title: "this one is for all the assignments jo tum mere liye likhi h",
      description: "College k starting mei toh bhot yaad aaya iske liye😂, but thank you jitna bhi busy thi atleast 1 page toh likh hi deti thi....but tum mere liye zrurt pe available thi in short yh bolna tha mereko "
    },
  ];

  // PHOTOS - ONLY REPLACE THESE IMAGE NAMES
  const photos = [
    { 
      id: 1, 
      description: "pliz mt daraoooo",
      src: "/images/img1.jpg" // Put your image in public/images folder
    },
    { 
      id: 2, 
      description: "Im sorry🙂",
      src: "/images/img2.jpg" // Put your image in public/images folder
    },
  ];

  // SONGS - ONLY REPLACE THESE AUDIO NAMES
  const songs = [
    { 
      title: "TU baat kare ya na mujhse", 
      artist: "bulleya song", 
      memory: "",
      src: "/audio/audio1.mp3" // Put your audio in public/audio folder
    },
    { 
      title: "Mein kaha kho gya aesa kya hogya ", 
      artist: "Mehrama", 
      memory: "",
      src: "/audio/audio2.mp3" // Put your audio in public/audio folder
    },
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

          {/* Timeline Section - Keep as is */}
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

          {/* Fixed Photos Section */}
          <TabsContent value="photos" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {photos.map((photo) => (
                <Card key={photo.id} className="overflow-hidden border-heartfelt-300 shadow-md hover:scale-[1.02] transition-transform h-full">
                  <div className="aspect-video bg-muted relative">
                    <img 
                      src={photo.src}
                      alt={photo.description}
                      className="w-full h-full object-contain absolute inset-0 p-2"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-center italic">{photo.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Fixed Audio Section */}
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
                      <audio 
                        controls 
                        className="w-full mt-3"
                        onError={(e) => console.log('Audio error:', e)}
                      >
                        <source src={song.src} type="audio/mpeg" />
                        Your browser does not support audio
                      </audio>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <p className="text-center mt-6">
              <button className="inline-flex items-center text-heartfelt-500 hover:text-heartfelt-400 story-link">
                <Music className="w-4 h-4 mr-2" />
                Play All Songs
              </button>
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MemoriesSection;