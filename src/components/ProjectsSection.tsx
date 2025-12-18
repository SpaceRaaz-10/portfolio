import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "FinanceFlow Dashboard",
    description:
      "A comprehensive fintech dashboard with real-time analytics, intuitive navigation, and seamless user experience.",
    category: "Web App",
    tools: ["Figma", "Webflow", "After Effects"],
    color: "from-purple-500 to-pink-500",
    image: "/src/assets/Project/mountain.jpg?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "EcoTrack Mobile App",
    description:
      "Sustainability tracking app helping users monitor and reduce their carbon footprint with gamified challenges.",
    category: "Mobile App",
    tools: ["Adobe XD", "Illustrator", "Principle"],
    color: "from-green-500 to-teal-500",
    image: "/src/assets/Project/gymapp.jpg?w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Artisan E-Commerce",
    description:
      "Premium marketplace for handcrafted goods featuring immersive product galleries and streamlined checkout.",
    category: "E-Commerce",
    tools: ["Figma", "Photoshop", "Webflow"],
    color: "from-orange-500 to-red-500",
    image: "/src/assets/Project/stripe.jpg?w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "MindfulMe Wellness",
    description:
      "Mental wellness platform with meditation guides, mood tracking, and personalized wellness journeys.",
    category: "Web App",
    tools: ["Figma", "Adobe XD", "Lottie"],
    color: "from-blue-500 to-cyan-500",
    image: "/src/assets/Project/realstateadmin.jpg?w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "TravelVerse Experience",
    description:
      "Immersive travel booking platform with 3D destination previews and AI-powered trip recommendations.",
    category: "Web App",
    tools: ["Figma", "Blender", "Webflow"],
    color: "from-indigo-500 to-purple-500",
    image: "/src/assets/Project/smoothjuice.jpg?w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "FoodieHub Delivery",
    description:
      "Food delivery app with real-time tracking, personalized recommendations, and seamless ordering experience.",
    category: "Mobile App",
    tools: ["Figma", "Illustrator", "Principle"],
    color: "from-yellow-500 to-orange-500",
    image: "/src/assets/Project/wokfolio.png?w=800&auto=format&fit=crop",
  },
];

export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my recent work showcasing design thinking,
            creativity, and attention to detail.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
                />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full bg-background/90 hover:bg-background"
                  >
                    <Eye className="w-5 h-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full bg-background/90 hover:bg-background"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <Badge variant="secondary" className="mb-3">
                  {project.category}
                </Badge>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
