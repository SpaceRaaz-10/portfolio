import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { 
  Figma, 
  Palette, 
  PenTool, 
  Layout, 
  Smartphone,
  Globe,
  Layers,
  Zap,
  Code,
  FileCode,
  Braces,
  Sparkles
} from "lucide-react";

const skills = [
  {
    name: "Figma",
    level: 92,
    icon: Figma,
    color: "from-purple-500 to-pink-500",
    description: "Design & Prototyping",
    category: "design"
  },
  {
    name: "Photoshop",
    level: 85,
    icon: Palette,
    color: "from-blue-500 to-cyan-500",
    description: "Image Editing",
    category: "design"
  },
  {
    name: "HTML",
    level: 85,
    icon: FileCode,
    color: "from-orange-600 to-red-500",
    description: "Semantic Markup",
    category: "development"
  },
  {
    name: "CSS",
    level: 85,
    icon: Code,
    color: "from-blue-500 to-cyan-400",
    description: "Styling & Animations",
    category: "development"
  },
  {
    name: "Illustrator",
    level: 80,
    icon: PenTool,
    color: "from-orange-500 to-yellow-500",
    description: "Vector Graphics",
    category: "design"
  },
  {
    name: "Prototyping",
    level: 70,
    icon: Smartphone,
    color: "from-green-500 to-teal-500",
    description: "Interactive Designs",
    category: "design"
  },
  {
    name: "Webflow",
    level: 60,
    icon: Globe,
    color: "from-indigo-500 to-purple-500",
    description: "No-Code Development",
    category: "development"
  },
  {
    name: "Adobe XD",
    level: 40,
    icon: Layout,
    color: "from-pink-500 to-rose-500",
    description: "UI/UX Design",
    category: "design"
  },
  {
    name: "JavaScript",
    level: 40,
    icon: Braces,
    color: "from-yellow-400 to-yellow-600",
    description: "Interactive Features",
    category: "development"
  },
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "design", label: "Design" },
  { id: "development", label: "Development" },
];

const additionalSkills = [
  { name: "User Research", icon: Layers },
  { name: "Wireframing", icon: Layout },
  { name: "Design Systems", icon: Zap },
  { name: "Motion Design", icon: Palette },
  { name: "Responsive Design", icon: Smartphone },
  { name: "Git & Version Control", icon: Code },
];

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const IconComponent = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group cursor-pointer"
    >
      <div className="relative bg-card p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50 hover:border-primary/30 overflow-hidden">
        {/* Animated Background Gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />
        
        {/* Glow Effect */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

        <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
            >
              <IconComponent className="w-7 h-7 text-primary-foreground" />
            </motion.div>
            <motion.span 
              className="text-3xl font-bold text-gradient"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              {skill.level}%
            </motion.span>
          </div>

          {/* Info */}
          <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">
            {skill.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {skill.description}
          </p>

          {/* Progress Bar */}
          <div className="relative h-3 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.08, duration: 1.2, ease: "easeOut" }}
              className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
            />
            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 -left-32 w-64 h-64 border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 -right-32 w-96 h-96 border border-accent/10 rounded-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">My Toolkit</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to transform ideas into exceptional digital experiences.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "bg-card border border-border hover:border-primary/50"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl blur-xl" />
          <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Additional <span className="text-gradient">Expertise</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {additionalSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.08, y: -5 }}
                    className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
