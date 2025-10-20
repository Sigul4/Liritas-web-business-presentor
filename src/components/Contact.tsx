import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-50 rounded-full mb-4">
            <span className="text-sm text-emerald-600">Get In Touch</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your project? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-sm text-muted-foreground mb-2">Our team is here to help</p>
            <a href="mailto:hello@liritas.com" className="text-emerald-600 hover:underline">
              hello@liritas.com
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-sm text-muted-foreground mb-2">Mon-Fri from 8am to 5pm</p>
            <a href="tel:+1234567890" className="text-emerald-600 hover:underline">
              +1 (234) 567-890
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold mb-2">Visit Us</h3>
            <p className="text-sm text-muted-foreground mb-2">Come say hello</p>
            <p className="text-emerald-600">
              123 Tech Street, San Francisco, CA
            </p>
          </Card>
        </div>

        <Card className="p-8 max-w-2xl mx-auto mt-12">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-2">Subject</label>
              <Input id="subject" placeholder="How can we help?" />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <Textarea id="message" placeholder="Tell us about your project..." rows={5} />
            </div>

            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
