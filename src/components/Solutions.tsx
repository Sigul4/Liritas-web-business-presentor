import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Building2, ShoppingCart, HeartPulse, GraduationCap } from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "Scalable enterprise software for large organizations and corporations.",
    features: ["ERP Systems", "CRM Platforms", "Workflow Automation"]
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Complete e-commerce platforms that drive sales and customer engagement.",
    features: ["Online Stores", "Payment Integration", "Inventory Management"]
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "HIPAA-compliant healthcare solutions for modern medical practices.",
    features: ["Patient Management", "Telemedicine", "Health Records"]
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Innovative ed-tech solutions for schools, universities, and online learning.",
    features: ["LMS Platforms", "Virtual Classrooms", "Student Portals"]
  }
];

export function Solutions() {
  return (
    <section id="solutions" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-50 rounded-full mb-4">
            <span className="text-sm text-emerald-600">Industry Solutions</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Tailored for Your Industry
          </h2>
          <p className="text-lg text-muted-foreground">
            We understand that every industry has unique challenges. Our solutions are 
            customized to meet the specific needs of your sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 bg-white border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-600 to-green-400 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                    <p className="text-muted-foreground">{industry.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="ghost" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
