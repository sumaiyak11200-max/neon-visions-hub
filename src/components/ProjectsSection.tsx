import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Student Course Management",
      description: "A comprehensive platform for managing student courses and payments with modern UI/UX.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🎓",
      category: "Web Application",
      status: "Live",
    },
    {
      title: "Carpet Company Website",
      description: "E-commerce platform for a carpet company with inventory management and online ordering.",
      tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
      image: "🏪",
      category: "E-commerce",
      status: "Live",
    },
    {
      title: "AI Chat Assistant",
      description: "Intelligent chatbot using machine learning for customer service automation.",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      image: "🤖",
      category: "AI/ML",
      status: "In Progress",
    },
    {
      title: "Task Management Tool",
      description: "Collaborative project management platform with real-time updates and team features.",
      tech: ["Vue.js", "Express", "Socket.io", "Redis"],
      image: "📋",
      category: "Productivity",
      status: "Live",
    },
    {
      title: "Weather Analytics",
      description: "Data visualization platform for weather patterns using machine learning predictions.",
      tech: ["React", "D3.js", "Python", "AWS"],
      image: "🌤️",
      category: "Data Science",
      status: "Live",
    },
    {
      title: "Portfolio Generator",
      description: "Automated portfolio generation tool for developers with customizable themes.",
      tech: ["React", "Node.js", "GraphQL", "Docker"],
      image: "💼",
      category: "Tool",
      status: "Coming Soon",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work spanning web development, AI/ML, and innovative digital solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-strong rounded-xl overflow-hidden neon-border hover:glow-secondary group transition-all duration-300"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-cyber-blue/20 to-electric-purple/20 flex items-center justify-center text-6xl relative overflow-hidden">
                {project.image}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/50 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`glass px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' ? 'text-green-400 border-green-400/30' :
                    project.status === 'In Progress' ? 'text-yellow-400 border-yellow-400/30' :
                    'text-blue-400 border-blue-400/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Category */}
                <div className="absolute top-4 left-4">
                  <span className="glass px-3 py-1 rounded-full text-xs text-cyber-blue">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-cyber-blue transition-colors">
                    {project.title}
                  </h3>
                  <Sparkles className="w-5 h-5 text-electric-purple animate-float" />
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="glass px-2 py-1 rounded text-xs text-cyan-300 border border-cyber-blue/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 glass border-cyber-blue/30 hover:border-cyber-blue hover:glow-primary"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass border-electric-purple/30 hover:border-electric-purple"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button
            size="lg"
            className="glass-strong px-8 py-6 neon-border hover:glow-primary"
          >
            View All Projects
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;