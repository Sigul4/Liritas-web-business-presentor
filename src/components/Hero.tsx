import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-emerald-50 rounded-full">
              <span className="text-sm text-emerald-600">🚀 Next-Gen Software Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-400 bg-clip-text text-transparent">
                Intelligent Software
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              We build cutting-edge software solutions that drive innovation, streamline operations, 
              and accelerate growth for businesses worldwide.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold">500+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <p className="text-3xl font-bold">98%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <p className="text-3xl font-bold">12+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-400 rounded-3xl blur-3xl opacity-20"></div>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDQ2NTcwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern technology workspace"
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
