import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowUpRight, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "TechMart E-Commerce Platform",
    category: "E-Commerce",
    description: "A comprehensive e-commerce solution with real-time inventory management, AI-powered product recommendations, and seamless payment integration serving over 100,000 users.",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MDQ0Mjg2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    year: "2024",
    results: "+250% revenue increase"
  },
  {
    title: "MediConnect Health App",
    category: "Healthcare",
    description: "HIPAA-compliant telemedicine platform connecting patients with healthcare providers, featuring video consultations, electronic prescriptions, and medical records management.",
    image: "https://images.unsplash.com/photo-1722235623200-59966a71af50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MDUzODMzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React Native", "Python", "MongoDB", "WebRTC"],
    year: "2024",
    results: "50,000+ consultations"
  },
  {
    title: "FinFlow Banking Solution",
    category: "Fintech",
    description: "Modern digital banking platform with advanced fraud detection, instant transfers, and comprehensive financial analytics for SMBs and individual users.",
    image: "https://images.unsplash.com/photo-1554260570-e9689a3418b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYXBwbGljYXRpb258ZW58MXx8fHwxNzYwNTA4NzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Vue.js", "Java", "MySQL", "Kubernetes"],
    year: "2023",
    results: "$2B+ transactions"
  },
  {
    title: "EduPro Learning Platform",
    category: "Education",
    description: "Interactive online learning platform with live classes, AI-driven personalized learning paths, and comprehensive student progress tracking used by 200+ schools.",
    image: "https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NjA1MDY4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Angular", "Node.js", "Redis", "Docker"],
    year: "2023",
    results: "100,000+ students"
  },
  {
    title: "ShopNow Mobile Experience",
    category: "Retail",
    description: "Cross-platform mobile shopping application with AR product visualization, one-tap checkout, and personalized shopping experiences for a major retail chain.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYwNTAyMjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Flutter", "Firebase", "GraphQL", "ARKit"],
    year: "2024",
    results: "4.8★ app rating"
  },
  {
    title: "LogiTrack Supply Chain",
    category: "Logistics",
    description: "Enterprise logistics management system with real-time tracking, route optimization, and predictive analytics reducing delivery times by 40%.",
    image: "https://images.unsplash.com/photo-1695548808535-f875a4e76c5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBzb2Z0d2FyZXxlbnwxfHx8fDE3NjA1MzgzMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React", "Python", "PostgreSQL", "TensorFlow"],
    year: "2023",
    results: "40% faster delivery"
  }
];

export function Projects() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-50 rounded-full mb-4">
            <span className="text-sm text-emerald-600">Our Work</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore some of our recent success stories and see how we've helped businesses 
            transform their operations through innovative software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white border-border">
              <div className="relative overflow-hidden aspect-video">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-semibold group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </h3>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="flex-shrink-0 -mt-1 -mr-2 group-hover:text-emerald-600"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{project.year}</span>
                  </div>
                  <div className="text-sm font-semibold text-emerald-600">
                    {project.results}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
