import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Kite Travels",
      description:
        "Full-featured travel listing platform with comprehensive admin dashboard for managing destinations, bookings, and user inquiries. Integrated payment gateway and email notification system.",
      technologies: ["Laravel", "React", "MySQL", "Bootstrap", "REST APIs"],
      highlights: ["Admin Dashboard", "Payment Integration", "Email Notifications"],
      link: "http://kitetravels.in/",
    },
    {
      title: "Quizmaster Android Application",
      description:
        "Full-featured quiz application built as capstone project. Includes user authentication, real-time scoring, multiple question types, and progress tracking.",
      technologies: ["Kotlin", "Firebase", "REST APIs", "Android SDK"],
      highlights: ["Real-time Scoring", "Firebase Auth", "Offline Support"],
      github: "https://github.com/ameng22/QuizMaster.git",
    },
    {
      title: "PsyTech Web Application",
      description:
        "Functional web application developed for college psychology department. Features student assessment tools, resource library, and administrative controls.",
      technologies: ["PHP", "MySQL", "Bootstrap", "jQuery"],
      highlights: ["Assessment Tools", "Resource Library", "Admin Panel"],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcase of real-world applications and solutions built with modern technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border/50 hover:border-primary/50 transition-smooth group animate-slide-up hover:glow-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, i) => (
                      <Badge
                        key={i}
                        className="bg-accent/10 text-accent border-accent/20 text-xs"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    {project.link && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                        asChild
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
