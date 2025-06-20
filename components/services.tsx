"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database, Lock, Server, PanelTop, Settings, Workflow, Leaf } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Full-Stack Development",
      description:
        "• Build scalable and maintainable web applications using React, Node.js, and PostgreSQL.",
      icon: <PanelTop  className="h-10 w-10 text-jungle-500" />,
    },
    {
      title: "Secure System Architecture ",
      description: "• Design secure networks and applications using ISO 27001, NIST CSF, FortiGate Firewall, and VPNs.",
      icon: <Lock className="h-10 w-10 text-jungle-500" />,
    },
    {
      title: "Containerization & DevOps",
      description:
        "• Deploy applications with Docker, Nginx, and secure reverse proxy configurations.",
      icon: <Database className="h-10 w-10 text-jungle-500" />,
    },
    {
      title: "Data Integration & Automation",
      description:
        "• Migrate and process structured business data using Python, PostgreSQL, and scripting tools.",
      icon: <Server className="h-10 w-10 text-jungle-500" />,
    },
  ]

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="services" className="py-20 bg-white dark:bg-jungle-950 relative overflow-hidden">
      {/* Jungle vines decoration */}
      <div className="absolute -left-4 top-0 w-24 h-full opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 600"><path d="M30,0 Q60,100 20,200 Q-20,300 30,400 Q80,500 30,600" stroke="%239ab354" fill="none" strokeWidth="5" /></svg>\')',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        />
      </div>

      <div className="absolute -right-4 top-0 w-24 h-full opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-full h-full"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 600"><path d="M70,0 Q40,100 80,200 Q120,300 70,400 Q20,500 70,600" stroke="%239ab354" fill="none" strokeWidth="5" /></svg>\')',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
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
            Services
            <Leaf className="h-6 w-6 text-jungle-500 dark:text-jungle-400" />
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            From database design to deployment — I help you build systems that scale, last, and stay secure.
          </p>
          <div className="h-1 w-20 bg-jungle-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-slate-200 dark:border-jungle-800 hover:shadow-md transition-shadow duration-300 dark:bg-jungle-900/30">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full p-2 bg-jungle-100 dark:bg-jungle-800">{service.icon}</div>
                  <CardTitle className="text-xl text-slate-800 dark:text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 dark:text-slate-300 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" onClick={scrollToContact} className="bg-jungle-600 hover:bg-jungle-700 text-white">
            Let's Work Together
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
