import { Card } from "@/components/ui/card";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/20 py-12 px-4 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/723409d3-c710-4373-a1f5-04e053249215.png" 
              alt="IBR Logo" 
              className="h-24 mb-4"
            />
            <p className="text-foreground/70 font-poppins leading-relaxed mb-4">
              Bringing you the authentic royal flavors of Hyderabad with 100% Halal certified dishes. 
              Serving Newcastle since 2019 with love, tradition, and premium taste.
            </p>
            
            {/* Halal Badge */}
            <Card className="inline-block p-3 bg-card/30 backdrop-blur-sm border-mint/30">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-mint rounded-full flex items-center justify-center">
                  <span className="text-background font-bold text-sm">✓</span>
                </div>
                <span className="text-mint font-poppins font-semibold">100% Halal Certified</span>
              </div>
            </Card>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-bold text-lg text-saffron mb-4">Quick Links</h3>
            <ul className="space-y-2 font-poppins">
              <li><a href="#about" className="text-foreground/70 hover:text-saffron transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-foreground/70 hover:text-saffron transition-colors">Menu</a></li>
              <li><a href="#gallery" className="text-foreground/70 hover:text-saffron transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-saffron transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair font-bold text-lg text-saffron mb-4">Contact Info</h3>
            <div className="space-y-3 font-poppins text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-mint mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground/80">Newcastle: 551D Hunter Street Newcastle West 2302</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-mint flex-shrink-0" />
                <div>
                  <p className="text-foreground/80">Newcastle: 02 40746151</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-mint flex-shrink-0" />
                <p className="text-foreground/80">ibr.newcastle@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://www.instagram.com/ibr_newcastle/?hl=en" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-full flex items-center justify-center hover:border-saffron/50 hover:bg-saffron/10 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-saffron" />
          </a>
          <a 
            href="https://www.facebook.com/Ibrnewcastle?mibextid=wwXIfr&rdid=m8bXxTFR2HWdhZ2o&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19xPAYU65Q%2F%3Fmibextid%3DwwXIfr#" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-full flex items-center justify-center hover:border-saffron/50 hover:bg-saffron/10 transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 text-saffron" />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 font-poppins text-sm text-center md:text-left">
              © 2025 Indian Biryani Restaurant (IBR). All rights reserved.
            </p>
            
            <div className="flex items-center gap-4 text-sm font-poppins">
              <span className="text-foreground/60">Serving since 2019</span>
              <span className="text-mint">🕌 Halal Certified</span>
              <span className="text-saffron">📍 Newcastle</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;