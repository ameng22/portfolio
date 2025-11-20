import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Loom Analytics",
      location: "North York, ON",
      role: "Software Developer",
      period: "September 2024 - Present",
      achievements: [
        "Built optimized Node.js and Laravel backend services with WebSocket-based real-time communication, improving server response times by 40%",
        "Managed DynamoDB, optimizing query performance and ensuring scalable data storage for high-volume workloads",
        "Designed and maintained microservices architecture, deploying with Docker + Kubernetes for scalable, fault-tolerant systems",
        "Built automated CI/CD pipelines with AWS CodePipeline, CodeBuild, and CodeDeploy, reducing release cycle times",
        "Implemented CloudFormation templates for IaC, reducing deployment time by 60%",
        "Managed AWS infrastructure including EC2, S3, SQS, SNS, and CloudWatch",
      ],
      technologies: [
        "AWS",
        "Node.js",
        "Laravel",
        "DynamoDB",
        "Docker",
        "Kubernetes",
        "TypeScript",
      ],
    },
    {
      company: "Freelancer",
      location: "London, ON",
      role: "Web and Software Developer",
      period: "June 2023 - December 2024",
      achievements: [
        "Delivered full-stack web and mobile solutions using Laravel, React.js, Kotlin, and MySQL",
        "Built Kite Travels platform with travel listings and admin dashboard",
        "Developed Le Style salon booking platform, reducing manual bookings by 50%",
        "Created Kotlin mobile apps with REST API integration and Firebase authentication",
        "Managed server deployments and optimized APIs for performance",
      ],
      technologies: ["Laravel", "React", "Kotlin", "MySQL", "Firebase", "REST APIs"],
    },
    {
      company: "Inmakes Infotech",
      location: "India (Remote)",
      role: "Jr. Software Tester Co-op",
      period: "April 2024 - August 2024",
      achievements: [
        "Executed manual and automated test cases using TestNG and Selenium",
        "Logged and tracked issues in JIRA, ensuring higher application stability",
      ],
      technologies: ["Selenium", "TestNG", "JIRA"],
    },
    {
      company: "Deloitte USI",
      location: "Bengaluru, India",
      role: "Associate Analyst",
      period: "September 2021 - December 2022",
      achievements: [
        "Developed and optimized data models and queries in SAP BW/4HANA, leading to 30% improvement in user engagement",
        "Integrated SAP HANA views and custom ABAP logic to enhance data extraction processes",
        "Documented BW/4HANA architecture and ETL processes",
      ],
      technologies: ["SAP BW/4HANA", "SAP HANA", "ABAP"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building scalable solutions and optimizing performance across diverse projects
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 bg-card border-border/50 hover:border-primary/50 transition-smooth animate-slide-up hover:glow-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                          <p className="text-primary font-medium">
                            {exp.company} · {exp.location}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-1.5 font-bold">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
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

export default Experience;
