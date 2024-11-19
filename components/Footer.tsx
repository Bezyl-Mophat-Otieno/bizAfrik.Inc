import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-primary mb-4">BizAfric Inc</h2>
            <p className="text-foreground/80 max-w-md">
              Empowering African businesses with innovative technology solutions.
              Building the future of digital transformation across the continent.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-foreground/80 hover:text-primary">About Us</a></li>
              <li><a href="#services" className="text-foreground/80 hover:text-primary">Services</a></li>
              <li><a href="#clients" className="text-foreground/80 hover:text-primary">Clients</a></li>
              <li><a href="#contact" className="text-foreground/80 hover:text-primary">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/80 hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/80 hover:text-primary">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-foreground/80 hover:text-primary">
                <Github size={20} />
              </a>
              <a href="mailto:contact@bizafric.com" className="text-foreground/80 hover:text-primary">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-foreground/60">
            © {new Date().getFullYear()} BizAfric Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}