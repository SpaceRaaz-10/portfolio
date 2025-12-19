import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Coffee, Users, Briefcase, Heart, MapPin, Calendar, Star, Zap, BookOpen, Palette, Download, Laptop, Gamepad, Code } from "lucide-react";
import rajPhoto from "@/assets/raj.jpg";
import { UserRound } from "lucide-react";

const stats = [
  { label: "Years Learning UX", value: 1.5, suffix: "", icon: Laptop },
  { label: "Projects Completed", value: 10, suffix: "+", icon: Award },
  { label: "Design Skills", value: 10, suffix: "+", icon: Palette },
  { label: "Cups of Coffee", value: 250, suffix: "+", icon: Coffee },
];

const journey = [
  { year: "2024", title: "Learning UX/UI Design", description: "Started self-learning UX/UI design from online sources" },
  { year: "Jan 2025", title: "SEO & Graphic Design", description: "Started Working as Graphic Designer & SEO At Blaze Mountain Trabel" },
  { year: "2025", title: "Web Desiging", description: "Building Projects and continuing to build more" },
];

const interests = [
  { icon: Heart, label: "Design Trends" },
  { icon: BookOpen, label: "Learning" },
  { icon: Gamepad, label: "Games" },
  { icon: Zap, label: "Creativity" },
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-gradient">
      {count}{suffix}
    </span>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [100, -100]), {
    stiffness: 100,
    damping: 30
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [5, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 bg-muted/30 overflow-hidden relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Based in Nepal</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image with 3D Effect */}
          <motion.div
            ref={imageRef}
            style={{ y, rotateZ: rotate, scale }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto">
              {/* Decorative Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border-2 border-dashed border-primary/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-16 border border-accent/10 rounded-full"
              />

              {/* Main Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl group"
              >
                <img
                  src={rajPhoto}
                  alt="Raj Sigdel - Aspiring UX/UI Designer"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                {/* Floating Name Tag */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-md p-4 rounded-2xl border border-border/50"
                >
                  <h3 className="text-xl font-bold">Raj Sigdel</h3>
                  <p className="text-muted-foreground text-sm">Aspiring UX/UI & Web Designer</p>
                </motion.div>
              </motion.div>

              {/* Floating Person */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                animate={{ y: [0, -8, 0] }}
                className="absolute -top-4 -right-4 z-20 bg-gradient-primary p-4 rounded-2xl shadow-xl"
              >
                <UserRound className="w-9 h-9 text-primary-foreground opacity-90" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                animate={{ y: [0, 8, 0] }}
                className="absolute -bottom-4 -left-4 z-20 bg-card p-4 rounded-2xl shadow-xl border border-border flex items-center gap-2"
              >
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Available</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-6 text-lg text-muted-foreground mb-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                I'm <span className="text-foreground font-semibold">Raj Sigdel</span>,
                an aspiring UX/UI designer with about 1 year of self-learning experience.
                I'm new to this field but deeply passionate about creating meaningful digital experiences.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Currently, I work as a <span className="text-foreground font-semibold">Graphic Designer at Blaze Mountains Travels</span> while
                pursuing my passion for UX/UI design through self-learning. I've completed <span className="text-foreground font-semibold">almost 7 personal projects</span> to
                build my skills and portfolio.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                While I'm still developing my technical skills in tools like Figma and Web Development related software,
                I bring <span className="text-foreground font-semibold">creativity, dedication, and a strong design eye</span> from my
                graphic design background. I'm eager to grow and take on new challenges in UX/UI.
              </motion.p>
            </div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {interests.map((interest, index) => {
                const IconComponent = interest.icon;
                return (
                  <motion.div
                    key={interest.label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
                  >
                    <IconComponent className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{interest.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-4"
            >
              <motion.a
                href="/Raj_Sigdel_Resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-lg hover:shadow-glow transition-all"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-card p-6 md:p-8 rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300 text-center border border-border/50 group-hover:border-primary/30">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  >
                    <IconComponent className="w-7 h-7 text-primary" />
                  </motion.div>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <div className="text-sm text-muted-foreground mt-2 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            My <span className="text-gradient">Journey</span>
          </h3>

          {/* Timeline Line */}
          <div className="absolute left-1/2 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {journey.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={`w-full md:w-[calc(50%-2rem)] bg-card p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all border border-border/50 hover:border-primary/30 ${index % 2 === 0 ? "md:text-right" : ""
                    }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm font-bold text-primary">{item.year}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>

                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                  className="hidden md:flex w-4 h-4 rounded-full bg-gradient-primary shadow-lg ring-4 ring-background z-10"
                />

                {/* Spacer for alignment */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
