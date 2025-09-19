import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Brain, Code2, Database, Rocket } from 'lucide-react';

const AboutSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building scalable web applications with modern technologies",
    },
    {
      icon: Brain,
      title: "AI/ML Engineering",
      description: "Emerging expertise in machine learning and artificial intelligence",
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "Designing robust server architectures and APIs",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Passionate about cutting-edge technologies and solutions",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Full Stack Developer with a growing expertise in AI/ML engineering. 
            I love creating innovative solutions that bridge the gap between creative design and 
            cutting-edge technology. My journey involves building scalable applications and 
            exploring the endless possibilities of artificial intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-strong p-6 rounded-xl neon-border hover:glow-secondary group transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-4"
                >
                  <Icon className="w-12 h-12 text-cyber-blue group-hover:text-electric-purple transition-colors duration-300" />
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {skill.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-10 -right-10 w-32 h-32 border border-electric-purple/20 rounded-full pointer-events-none"
        />
        
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-10 -left-10 w-24 h-24 border border-neon-cyan/20 rounded-lg pointer-events-none"
        />
      </div>
    </section>
  );
};

export default AboutSection;