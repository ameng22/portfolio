import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "amen.george@outlook.com",
      link: "mailto:amen.george@outlook.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(519) 702-5089",
      link: "tel:+15197025089",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Toronto, Ontario, Canada",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ameng22",
      link: "https://github.com/ameng22",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/amen-george",
      link: "https://www.linkedin.com/in/amen-george-0311a419a",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's discuss how I can contribute to your team and projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Contact Information */}
            <Card className="p-8 bg-card border-border/50 space-y-6 animate-slide-in">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-foreground hover:text-primary transition-smooth font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 bg-card border-border/50 space-y-6 animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
              <div className="space-y-4 mb-8">
                {socialLinks.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-smooth">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent transition-smooth font-medium"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Open to full-time opportunities in cloud development, backend engineering, and
                  full-stack roles.
                </p>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary transition-smooth"
                  asChild
                >
                  <a href="mailto:amen.george@outlook.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Me an Email
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          {/* Availability Note */}
          <Card className="p-6 bg-accent/5 border-accent/20 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-accent rounded-full mt-2 animate-pulse" />
              <div>
                <h4 className="font-semibold mb-2 text-accent">Available for Opportunities</h4>
                <p className="text-muted-foreground">
                  I'm currently seeking full-time roles in cloud development, backend engineering,
                  and full-stack positions. Particularly interested in roles involving AWS,
                  serverless architecture, and scalable system design.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
