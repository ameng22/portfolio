import { Card } from "@/components/ui/card";
import { Code2, Cloud, Database, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description:
        "Expert in AWS services including Lambda, EC2, DynamoDB, and CloudFormation for scalable infrastructure",
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Proficient in React, Node.js, Laravel, and TypeScript for end-to-end application development",
    },
    {
      icon: Database,
      title: "Database Optimization",
      description:
        "Experienced in MySQL, DynamoDB, PostgreSQL, and NoSQL with focus on query performance",
    },
    {
      icon: Zap,
      title: "DevOps & CI/CD",
      description:
        "Automated pipelines with Docker, Kubernetes, and AWS CodePipeline for reliable deployments",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate software developer with a proven track record in building scalable,
              high-performance applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6 animate-slide-in">
              <h3 className="text-2xl font-semibold text-primary">Who I Am</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm an experienced software developer specializing in web, mobile, and backend
                  development with a strong focus on cloud architecture and system optimization.
                  Currently working at <span className="text-foreground font-semibold">Loom Analytics</span>,
                  where I build scalable solutions.
                </p>
                <p>
                  My expertise spans from frontend frameworks like React and Vue.js to backend
                  technologies including Node.js, Laravel, and Python. I have extensive experience
                  with AWS cloud services, implementing serverless architectures and Infrastructure
                  as Code solutions that reduce deployment times by up to 60%.
                </p>
                <p>
                  I thrive on solving complex technical challenges and optimizing system
                  performance. Whether it's improving server response times by 40% or architecting
                  microservices with Docker and Kubernetes, I'm committed to delivering
                  high-quality, efficient solutions.
                </p>
              </div>
            </div>

            <div className="space-y-4 animate-slide-up">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border/50 hover:border-primary/50 transition-smooth hover:glow-primary"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
