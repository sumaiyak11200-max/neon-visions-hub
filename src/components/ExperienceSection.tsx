import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Building, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ExperienceSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "CyberVision",
      position: "Full Stack Developer Intern",
      period: "2023 - Present",
      description: "Developed a comprehensive student course and payment management website with modern technologies.",
      achievements: [
        "Built responsive course management system",
        "Integrated secure payment processing",
        "Implemented user authentication and authorization",
        "Optimized database queries for better performance",
      ],
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
    },
    {
      company: "Freelance Projects",
      position: "Web Developer",
      period: "2022 - Present",
      description: "Created custom websites for various clients including e-commerce and business solutions.",
      achievements: [
        "Delivered 15+ successful projects",
        "Specialized in carpet company e-commerce platform",
        "Maintained 100% client satisfaction rate",
        "Implemented SEO best practices",
      ],
      tech: ["Next.js", "React", "Tailwind CSS", "WordPress"],
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey in software development and the projects that shaped my expertise.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-cyber-blue to-electric-purple"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
              } md:w-1/2 pl-12 md:pl-0`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
                className="absolute left-2 md:left-auto md:right-[-12px] w-6 h-6 bg-cyber-blue rounded-full glow-primary border-4 border-background"
                style={{
                  left: index % 2 === 0 ? 'calc(50% - 12px)' : 'calc(50% - 12px)',
                }}
              />

              <div className="glass-strong p-8 rounded-xl neon-border hover:glow-secondary group transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <Building className="w-8 h-8 text-cyber-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg font-semibold text-cyber-blue mb-2">
                      {exp.company}
                    </h4>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h5 className="font-semibold mb-3 text-foreground">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="glass px-3 py-1 rounded-full text-sm text-cyber-blue border border-cyber-blue/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="glass border-cyber-blue/30 hover:border-cyber-blue hover:glow-primary"
                >
                  Learn More
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;