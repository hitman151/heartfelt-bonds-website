
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 border-t">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center text-sm text-muted-foreground">
          <span>Created with</span>
          <Heart className="h-4 w-4 mx-1 text-heartfelt-400" />
          <span>for our friendship</span>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          This site is private and created just for you.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
