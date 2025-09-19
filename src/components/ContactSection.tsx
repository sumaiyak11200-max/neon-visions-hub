import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Instagram, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      handle: "@johndoe",
      color: "from-pink-500 to-purple-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/johndoe",
      handle: "John Doe",
      color: "from-blue-600 to-blue-500",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:john.doe@email.com",
      handle: "john.doe@email.com",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Phone",
      icon: Phone,
      url: "tel:+1234567890",
      handle: "+1 (234) 567-8900",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to bring your next project to life? I'm always excited to discuss new opportunities 
            and innovative challenges. Let's create something amazing together.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-strong p-6 rounded-xl neon-border hover:glow-secondary group transition-all duration-300 block"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center glow-primary`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-cyber-blue transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {link.handle}
                    </p>
                  </div>
                  
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="text-cyber-blue opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <Send className="w-5 h-5" />
                  </motion.div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-strong p-8 rounded-xl neon-border text-center"
        >
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you need a stunning website, a robust web application, or innovative AI solutions, 
            I'm here to help transform your vision into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="glass-strong px-8 py-6 text-lg neon-border hover:glow-primary"
            >
              <Mail className="mr-2 w-5 h-5" />
              Send Message
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="glass px-8 py-6 text-lg border-cyber-blue/30 hover:border-cyber-blue hover:glow-secondary"
            >
              <Phone className="mr-2 w-5 h-5" />
              Schedule Call
            </Button>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground">
            © 2024 John Doe. Crafted with passion and cutting-edge technology.
          </p>
        </motion.div>
      </div>

      {/* Background decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-40 h-40 border border-electric-purple/10 rounded-full pointer-events-none"
      />
      
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -left-20 w-32 h-32 border border-neon-cyan/10 rounded-lg pointer-events-none"
      />
    </section>
  );
};

export default ContactSection;