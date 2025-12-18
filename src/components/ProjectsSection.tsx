import { motion } from "framer-motion";
import { ExternalLink, Eye, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { link } from "fs";
import { useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Mountain Info Website",
    description:
      "The Mountain Website project focuses on designing a modern, user-friendly platform that highlights Nepal’s and Different country mountains.",
    category: "Website",
    tools: ["Figma"],
    color: "from-orange-400 to-white-400",
    image: "/src/assets/Project/mountain.jpg?w=800&auto=format&fit=crop",
    link: "https://www.figma.com/proto/9OIa2uO1DQjcy5Fya6l2ck/Mountain-Website-UI?node-id=1-2&t=twaFoTIvA57snx2g-6&starting-point-node-id=1%3A2",
  },
  {
    id: 2,
    title: "Gym Tracker App",
    description:
      "A modern and user-friendly gym app designed in Figma, focused on tracking workouts, personalized fitness plans, and visualizing progress through a clean, motivating interface.",
    category: "Mobile App",
    tools: ["Figma", "Photoshop", "Framer"],
    color: "from-pink-500 to-white-500",
    image: "/src/assets/Project/gymapp.jpg?w=800&auto=format&fit=crop",
    link: "https://www.figma.com/proto/yjojigF68gGpcYtQ6yCCZJ/Fitness-App?node-id=221-124&t=twaFoTIvA57snx2g-6&starting-point-node-id=221%3A124",
  },
  {
    id: 3,
    title: "Stripe Redesign",
    description:
      "A polished, trust-first payment platform redesigned inspired by Stripe.",
    category: "Business Website",
    tools: ["Figma", "Photoshop"],
    color: "from-purple-500 to-white-500",
    image: "/src/assets/Project/stripe.jpg?w=800&auto=format&fit=crop",
    link: "https://www.figma.com/proto/iXsz1YtBV5iuM3qr0eQcBn/Stripe?node-id=1-4&t=twaFoTIvA57snx2g-6",
  },
  {
    id: 4,
    title: "Real Estate Admin Dashboard",
    description:
      "This project is a Real Estate Admin Dashboard built for easy property management. Users can add, edit, and delete listings, track agents, and view key metrics like total properties, revenue, and sales.",
    category: "Backend Dashboard",
    tools: ["Figma"],
    color: "from-cyan-500 to-skyblue-500",
    image: "/src/assets/Project/realstateadmin.jpg?w=800&auto=format&fit=crop",
    link: "https://www.figma.com/proto/xWQfnMOJSh2FS4TWICAG5c/Real-State-Admin?page-id=0%3A1&node-id=1-2&viewport=237%2C-29%2C0.21&t=gBhWsboZYotTI9R4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&show-proto-sidebar=1",
  },
  {
    id: 5,
    title: "Smoothie Juice Website",
    description:
      "Drop Smoothie is a vibrant and refreshing smoothie juice brand concept.",
    category: "Website",
    tools: ["Figma", "Illustrator", "Photoshop"],
    color: "from-orange-500 to-white-500",
    image: "/src/assets/Project/smoothjuice.jpg?w=800&auto=format&fit=crop",
    link: "https://www.figma.com/proto/sHFagBdhzgngDgpOLJrIpz/Smootte-Juice-UI?node-id=10-219&t=twaFoTIvA57snx2g-6&starting-point-node-id=10%3A219",
  },
  {
    id: 6,
    title: "Workfolio Website",
    description:
      "This project is a marketing-focused portfolio website designed to clearly showcase skills and work. I used strong visuals, structured content, and clean layouts to create a modern, user-centered platform for presenting achievements.",
    category: "Website",
    tools: ["Figma"],
    color: "from-purple-500 to-white-500",
    image: "/src/assets/Project/wokfolio.png?w=800&auto=format&fit=crop",
    link: "https://www.figma.com/proto/agI8fBcaQi8XdZS5glDn8p/GetWorkFolio?page-id=0%3A1&node-id=1-2&p=f&viewport=1064%2C-841%2C0.26&t=ghPS375fjHnIt6Ho-1&scaling=scale-down&content-scaling=fixed",
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && e.target === modalRef.current) {
      setSelectedProject(null);
    }
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
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

        {/* Projects Grid */}
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
                    onClick={() => setSelectedProject(project)}
                  >
                    <Eye className="w-5 h-5" />
                  </Button>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full bg-background/90 hover:bg-background"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  </a>
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

        {/* View All Projects Button */}
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

      {/* Modal */}
      {selectedProject && (
        <div
          ref={modalRef}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        >
          <div className="relative bg-background rounded-2xl shadow-lg max-w-3xl w-full mx-4">
            <button
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-auto rounded-2xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary font-semibold hover:underline"
              >
                Open in Figma
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}