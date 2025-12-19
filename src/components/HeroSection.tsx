import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const techStack = [
  { name: "Figma", color: "from-purple-500 to-pink-500" },
  { name: "Adobe XD", color: "from-pink-500 to-rose-500" },
  { name: "Photoshop", color: "from-blue-600 to-blue-400" },
  { name: "Illustrator", color: "from-orange-500 to-yellow-500" },
  { name: "Webflow", color: "from-indigo-500 to-blue-500" },
  { name: "HTML", color: "from-orange-600 to-red-500" },
  { name: "CSS", color: "from-blue-500 to-cyan-400" },
  { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
];

const roles = ["No Comfort Zone", "Always Evolving", "Vision First"];

function TypewriterText() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < role.length) {
          setCurrentText(role.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <span className="text-gradient">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  );
}

// Simplified floating icon with fewer animations
function FloatingIcon({ name, color, delay, x, y }: { name: string; color: string; delay: number; x: number; y: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { delay, duration: 0.5 },
        scale: { delay, duration: 0.5 },
        y: { 
          delay: delay + 0.5, 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          repeatType: "reverse"
        },
      }}
      className="absolute hidden lg:flex will-change-transform"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${color} text-primary-foreground text-sm font-medium shadow-lg`}>
        {name}
      </div>
    </motion.div>
  );
}

// Optimized mouse follower with reduced blur
function MouseFollower() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 30, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed w-[300px] h-[300px] rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-2xl pointer-events-none z-0 hidden lg:block will-change-transform"
      style={{ x: springX, y: springY }}
    />
  );
}

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const iconPositions = [
    { x: 5, y: 20 }, { x: 85, y: 15 }, { x: 8, y: 65 }, { x: 88, y: 70 },
    { x: 15, y: 40 }, { x: 82, y: 45 }, { x: 3, y: 85 }, { x: 90, y: 35 }
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <MouseFollower />

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/90 dark:bg-background/95" />
      </div>

      {/* Simplified Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.2) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Optimized Floating Gradient Orbs - Reduced blur and complexity */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl will-change-transform"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl will-change-transform"
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, -40, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Tech Icons - Reduced number shown */}
      {techStack.slice(0, 6).map((tech, index) => (
        <FloatingIcon
          key={tech.name}
          name={tech.name}
          color={tech.color}
          delay={0.3 + index * 0.1}
          x={iconPositions[index].x}
          y={iconPositions[index].y}
        />
      ))}

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="text-center mb-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1]">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block text-gradient mt-2">
                Raj Sigdel
              </span>
            </h1>
          </motion.div>

          {/* Typewriter Role */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-8"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold h-[1.3em]">
              <TypewriterText />
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-center leading-relaxed"
          >
            I craft <span className="text-foreground font-medium">beautiful, user-centered</span> digital
            experiences that inspire, engage, and leave a lasting impression. Let's create
            something <span className="text-foreground font-medium">extraordinary</span> together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="group relative bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-7 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Play className="w-5 h-5 fill-current" />
                View My Work
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="px-8 py-7 text-lg font-semibold rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                Get In Touch
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
          >
            {[
              { value: "1.5+", label: "Years Experience" },
              { value: "10+", label: "Projects Done" },
              { value: "30+", label: "Happy Clients" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center group"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
        </motion.div>
      </motion.div>
    </section>
  );
}