import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Clock, Star } from "lucide-react";
import RestaurantMap from "./RestaurantMap";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-transparent bg-gradient-saffron bg-clip-text mb-6">
            Order Now
          </h2>
          <p className="text-lg text-foreground/70 font-poppins mb-6">
            Ready to experience authentic Hyderabadi flavors?
          </p>
          <div className="w-24 h-1 bg-gradient-saffron mx-auto rounded-full"></div>
        </div>

        {/* Quick Order Buttons */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
            <div className="text-center">
              <Phone className="w-12 h-12 text-mint mx-auto mb-4" />
              <h3 className="font-poppins font-semibold text-lg mb-3">Call Now</h3>
              <Button variant="glass" className="w-full mb-2" asChild>
                <a href="tel:+61240746151">📞 Call Newcastle</a>
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-mint/20 hover:border-mint/40 transition-all duration-300 hover:shadow-glow">
            <div className="text-center">
              <MessageCircle className="w-12 h-12 text-saffron mx-auto mb-4" />
              <h3 className="font-poppins font-semibold text-lg mb-3">WhatsApp Order</h3>
              <Button variant="premium" className="w-full mb-2" asChild>
                <a href="https://wa.me/61240746151" target="_blank" rel="noopener noreferrer">
                  💬 WhatsApp Newcastle
                </a>
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-saffron/20 hover:border-saffron/40 transition-all duration-300 hover:shadow-glow">
            <div className="text-center">
              <Star className="w-12 h-12 text-spice-orange mx-auto mb-4" />
              <h3 className="font-poppins font-semibold text-lg mb-3">Online Delivery</h3>
              <Button variant="royal" className="w-full mb-2" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">🚚 Uber Eats</a>
              </Button>
              <Button variant="royal" className="w-full" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">🏪 Menulog</a>
              </Button>
            </div>
          </Card>
        </div>

        {/* Locations */}
        <div className="grid md:grid-cols-1 gap-8 mb-12 max-w-2xl mx-auto">
          {/* Newcastle Location */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-8 h-8 text-saffron flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-playfair font-bold text-2xl text-saffron mb-2">Newcastle</h3>
                <p className="text-foreground/80 font-poppins leading-relaxed">
                  456 Hunter Street<br />
                  Newcastle NSW 2300<br />
                  Australia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <Clock className="w-8 h-8 text-mint flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-poppins font-semibold text-mint mb-2">Opening Hours</h4>
                <div className="text-foreground/80 font-poppins text-sm space-y-1">
                  <p>Monday - Thursday: 11:00 AM - 9:30 PM</p>
                  <p>Friday - Sunday: 11:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <RestaurantMap />
          </Card>
        </div>

        {/* Contact Info */}
        <Card className="p-8 bg-gradient-royal text-center shadow-card">
          <h3 className="font-playfair font-bold text-2xl mb-4">Ready to Order?</h3>
          <p className="text-foreground/90 font-poppins mb-6 max-w-2xl mx-auto">
            Experience the authentic taste of Hyderabad. Call us now or visit our restaurant for the best biryani in Newcastle!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="premium" size="lg" className="mr-2" asChild>
              <a href="tel:+61240746151">📞 Call Newcastle</a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;