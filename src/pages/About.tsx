import { motion } from "framer-motion";
import { Award, Code2, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const achievements = [
  {
    icon: Code2,
    title: "100+ Projects Completed",
    description: "Successfully delivered diverse web applications",
  },
  {
    icon: Award,
    title: "Award Winner",
    description: "Recognition for innovative solutions",
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Optimized performance in every project",
  },
];

const About = () => {
  return (
    <div className="min-h-screen py-20 px-6 lg:px-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer dedicated to creating exceptional digital experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card p-8 lg:p-12 rounded-2xl mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">My Story</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              I'm a full-stack developer with a passion for creating beautiful, functional,
              and user-friendly applications. With expertise in modern web technologies,
              I bring ideas to life through clean code and innovative design.
            </p>
            <p>
              My journey in tech started with curiosity and has evolved into a career
              focused on solving complex problems and building solutions that make a
              real impact. I believe in continuous learning and staying ahead of the curve
              with the latest technologies.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new frameworks, contributing
              to open source, or sharing knowledge with the developer community.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            >
              <Card className="glass-card p-6 hover:glow-cyan transition-all duration-300 group cursor-pointer">
                <achievement.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
