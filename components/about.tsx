"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf } from "lucide-react"

export default function About() {
  const skills = [
    { name: "Python", icon: <span className="text-2xl">🐍</span>, color: "bg-blue-100 dark:bg-blue-900" },
    { name: "Nginx", icon: <span className="text-2xl">🌐</span>, color: "bg-jungle-100 dark:bg-jungle-900" },
    { name: "PostgreSQL", icon: <span className="text-2xl">🐘</span>, color: "bg-indigo-100 dark:bg-indigo-900" },
    { name: "Docker", icon: <span className="text-2xl">🐳</span>, color: "bg-cyan-100 dark:bg-cyan-900" },
    { name: "NAS", icon: <span className="text-2xl">☁️</span>, color: "bg-orange-100 dark:bg-orange-900" },
    { name: "Network Security", icon: <span className="text-2xl">🛡️</span>, color: "bg-red-100 dark:bg-red-900" },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-jungle-950 relative overflow-hidden">
      {/* Jungle background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0 bg-contain"
          style={{
            backgroundImage: `url('/images/background.png')`,
            backgroundPosition: "center",
            backgroundSize: "80%",
            backgroundRepeat: "no-repeat",
            filter: "blur(2px)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 flex items-center justify-center gap-2">
            <Leaf className="h-6 w-6 text-jungle-500 dark:text-jungle-400" />
            About Me
            <Leaf className="h-6 w-6 text-jungle-500 dark:text-jungle-400" />
          </h2>
          <div className="h-1 w-20 bg-jungle-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-b from-jungle-800/50 to-jungle-950/50 rounded-lg overflow-hidden relative">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <img
                  src="/images/sean.png"
                  alt="Sean Wang - Backend Developer"
                  className="w-full h-full object-contain p-4"
                />
              </motion.div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-jungle-900/90 to-transparent p-6">
                <h3 className="text-white text-xl font-bold">Sean Wang</h3>
                <p className="text-jungle-200">a Full-Stack Developer and Cybersecurity Specialist</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Hi, I’m Sean Wang — a Full-Stack Developer and Cybersecurity Specialist based in Australia, with a Master’s in Cybersecurity and a passion for building reliable, secure systems.

            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              I started out tinkering with hardware and building my own NAS. Since then, I’ve designed scalable appointment platforms, migrated legacy data into PostgreSQL, and built secure self-hosted cloud infrastructure using Docker and FortiGate firewalls.

            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              I specialize in full-stack development using React, PostgreSQL, and Node.js — with security-first architecture at the core. Whether streamlining operations for small businesses or hardening cloud access, I deliver solutions that create measurable impact.

            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {skills.map((skill, index) => (
                <Card key={index} className={`border-none ${skill.color}`}>
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="mb-2">{skill.icon}</div>
                    <span className="font-medium text-slate-800 dark:text-white">{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
