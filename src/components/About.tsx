import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { CheckCircle2 } from "lucide-react";

const values = [
  "Innovation-driven approach",
  "Client-centric solutions",
  "Agile development methodology",
  "Quality assurance excellence"
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-400 rounded-3xl blur-3xl opacity-20"></div>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjA1MTE3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Software development team collaboration"
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-emerald-50 rounded-full">
              <span className="text-sm text-emerald-600">About Liritas</span>
            </div>
            
            <h2 className="text-4xl font-bold">
              Building the Future of Software, One Project at a Time
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Founded in 2013, Liritas has grown from a small startup to a leading software 
              development company serving clients across the globe. Our team of expert developers, 
              designers, and strategists are passionate about creating software that makes a difference.
            </p>

            <div className="space-y-3">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span>{value}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
