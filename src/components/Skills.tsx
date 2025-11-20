import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & AWS",
      color: "primary",
      skills: [
        "AWS Lambda",
        "EC2",
        "DynamoDB",
        "S3",
        "CloudFormation",
        "CloudWatch",
        "SQS/SNS",
        "RDS",
        "IAM",
        "Auto Scaling",
        "ELB",
        "Kinesis",
      ],
    },
    {
      title: "Backend Development",
      color: "accent",
      skills: [
        "Node.js",
        "Laravel",
        "Django",
        "Flask",
        "Express.js",
        "REST APIs",
        "WebSockets",
        "Microservices",
        "Serverless",
      ],
    },
    {
      title: "Frontend Development",
      color: "primary",
      skills: [
        "React.js",
        "TypeScript",
        "Vue.js",
        "Angular",
        "Electron",
        "React Native",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Programming Languages",
      color: "accent",
      skills: ["JavaScript/TypeScript", "Python", "PHP", "Java", "Kotlin", "Swift", "C/C++"],
    },
    {
      title: "Databases",
      color: "primary",
      skills: [
        "MySQL",
        "PostgreSQL",
        "DynamoDB",
        "MongoDB",
        "Redis",
        "SQLite",
        "NoSQL",
      ],
    },
    {
      title: "DevOps & Tools",
      color: "accent",
      skills: [
        "Docker",
        "Kubernetes",
        "Git/GitHub",
        "CI/CD Pipelines",
        "Nginx",
        "Jenkins",
        "JIRA",
        "Postman",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive expertise across modern technologies and frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border/50 hover:border-primary/50 transition-smooth animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3
                  className={`text-xl font-semibold mb-4 ${
                    category.color === "primary" ? "text-primary" : "text-accent"
                  }`}
                >
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs hover:bg-primary/20 hover:border-primary transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
