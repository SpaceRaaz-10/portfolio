import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Facebook,
  Dribbble,
  Mail,
  MapPin,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative border-t border-border/50 bg-background overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-12 md:grid-cols-4"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Raj Sigdel
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Creative designer crafting clean, meaningful digital experiences that inspire and engage.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@rajsigdel.com" className="hover:text-primary transition-colors">
                  rajsigdel1000@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
              Navigate
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[2px] bg-primary group-hover:w-4 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/raj-sigdel/", label: "LinkedIn" },
                { icon: Twitter, href: "https://x.com/raj_sigdell", label: "Twitter" },
                { icon: Facebook, href: "https://www.facebook.com/raj.sigdelll", label: "Facebook" },
                { icon: Dribbble, href: "https://dribbble.com/rajspace", label: "Dribbble" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground pt-4">
              Available for freelance projects and collaborations
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Raj Sigdel. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
