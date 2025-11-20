import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">
                <span className="text-gradient">Amen</span> George
              </h3>
              <p className="text-muted-foreground text-sm">
                Software Developer specializing in cloud architecture, backend development, and
                scalable solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Connect</h4>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:border-primary hover:text-primary transition-smooth"
                  asChild
                >
                  <a
                    href="https://github.com/ameng22"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:border-primary hover:text-primary transition-smooth"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/amen-george-0311a419a"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:border-primary hover:text-primary transition-smooth"
                  asChild
                >
                  <a href="mailto:amen.george@outlook.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                Open to full-time opportunities in cloud development and backend engineering.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 text-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Amen George. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
