import { Card } from "./ui/card";
import { Code, Cloud, Smartphone, Database, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored solutions built to meet your unique business requirements and scale with your growth.",
    color: "text-emerald-600"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Migrate, deploy, and manage your applications with our comprehensive cloud services.",
    color: "text-green-600"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    color: "text-teal-600"
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Transform raw data into actionable insights with advanced analytics and BI solutions.",
    color: "text-lime-600"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with enterprise-grade security solutions and best practices.",
    color: "text-emerald-700"
  },
  {
    icon: Zap,
    title: "DevOps & Automation",
    description: "Streamline your development pipeline with cutting-edge DevOps practices and tools.",
    color: "text-green-700"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-50 rounded-full mb-4">
            <span className="text-sm text-emerald-600">Our Services</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Comprehensive Software Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to deployment, we provide end-to-end software development services 
            that empower your business to thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow bg-white border-border">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} bg-opacity-10 flex items-center justify-center mb-4`}>
                  <Icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
