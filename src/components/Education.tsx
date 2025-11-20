import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Post Graduate Certificate",
      field: "Mobile Applications Development",
      institution: "Fanshawe College",
      location: "London, ON",
      period: "May 2023 - August 2024",
      gpa: "4.1 CGPA",
      honors: ["President's Honour Roll"],
      highlights: [
        "Specialized in mobile app development with Kotlin and Swift",
        "Built full-stack applications with REST APIs and Firebase",
        "Completed capstone project: Quizmaster Android Application",
      ],
    },
    {
      degree: "Bachelor of Science",
      field: "Computer Science",
      institution: "Union Christian College",
      location: "Aluva, India",
      period: "June 2018 - April 2021",
      gpa: "7.4 GPA",
      honors: [],
      highlights: [
        "Strong foundation in algorithms, data structures, and software engineering",
        "Completed multiple web development projects",
        "Developed PsyTech Web Application for college psychology department",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Education</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Academic foundation and continuous learning
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 bg-card border-border/50 hover:border-primary/50 transition-smooth animate-slide-up hover:glow-primary"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg mt-1">
                          <GraduationCap className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                          <p className="text-primary font-medium">{edu.field}</p>
                          <p className="text-muted-foreground">
                            {edu.institution} · {edu.location}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                      <Badge className="bg-accent/10 text-accent border-accent/20">
                        {edu.gpa}
                      </Badge>
                    </div>
                  </div>

                  {edu.honors.length > 0 && (
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-accent" />
                      {edu.honors.map((honor, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-accent/10 text-accent border-accent/20"
                        >
                          {honor}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <ul className="space-y-2 text-muted-foreground">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-1.5 font-bold">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
