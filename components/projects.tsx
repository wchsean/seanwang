"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Leaf } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Secure Personal Cloud & NAS Infrastructure",
      description:
        "• Personal NAS on Unraid secured with FortiGate Firewall & VPN \n• Deployed Dockerized services with Nginx reverse proxy \n• Applied ISO 27001 principles for data protection",
      techStack: ["Unraid", "FortiGate", "VPN", "Docker", "Nextcloud"],
      github: null,
      demo: null,
      blog: null,
      image: "/images/projects/nas.png?height=200&width=400",
    },
    {
      title: "Pet Grooming Appointment System",
      description:
        "• Full-stack React + PostgreSQL platform for a local salon \n• Migrated 200+ Excel records using Python\n• Now used daily, reducing booking time by 40% ",
      techStack: ["React", "PostgreSQL", "Python", "Node.js", "Docker"],
      github: null,
      demo: null,
      blog: null,
      image: "/images/projects/petAppointment.png?height=200&width=400",
    },
    {
      title: "Nutrition Tracking Website",
      description:
        "• Mobile-first static website using HTML, CSS, and JavaScript \n• Hosted via Docker + Nginx with HTTPS\n• Designed for local use with privacy in mind",
      techStack: ["HTML", "JavaScript", "CSS", "Nginx"],
      github: null,
      demo: null,
      blog: null,
      image: "/images/projects/dietWeb.png?height=200&width=400",
    },
    {
      title: "Calendar Generator for Excel",
      description:
        "A dynamic Excel-based calendar system built with VBA, designed to automate daily schedule creation and holiday visualization. Users can define a custom date range and exclude specific dates, which the tool uses to generate individual daily sheets from a predefined template. The current day is automatically highlighted, and holidays are managed via a dedicated \"Holiday\" sheet — allowing color-coded labels and flexible tagging.",
      techStack: ["Excel VBA", "Excel Formulas", "Conditional Formatting", "Worksheet Generation"],
      github: null,
      demo: null,
      blog: null,
      image: "/images/projects/excelCalendar.png?height=200&width=400",
    },
    {
      title: "Self-Hosted Nextcloud with Secure Remote Access",
      description:
        "A fully self-hosted personal cloud solution using Nextcloud, configured for secure remote access via VPN and HTTPS. The server is reverse-proxied through Nginx Proxy Manager and equipped with valid SSL/TLS certificates, allowing seamless connection from the Nextcloud mobile and desktop apps. Integrated Collabora Office via Docker enables real-time online editing of Word documents directly in the cloud, creating a full-featured, secure private alternative to mainstream cloud services.",
      techStack: ["Nextcloud", "Nginx Proxy Manager", "VPN", "SSL/TLS Certificates (Let's Encrypt)","Collabora","Docker","Self-hosted NAS"],
      github: null,
      demo: null,
      blog: null,
      image: "/images/projects/nextcloud.png?height=200&width=400",
    },
    {
      title: "Job Scraper with Keyword Filtering & MongoDB Storage",
      description:
        "A Python-based web scraper built to automate job hunting on SEEK. The script fetches job listings, filters titles and descriptions based on inclusion/exclusion keywords, and extracts the most relevant content snippets. Matching results are structured and stored in MongoDB via Mongoose.",
      techStack: ["Python", "MongoDB", "Mongoose", "BeautifulSoup","selenium","Docker"],
      github: null,
      demo: null,
      blog: null,
      image: "/images/projects/pythonJobScraper.png?height=200&width=400",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-jungle-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 flex items-center justify-center gap-2">
            <Leaf className="h-6 w-6 text-jungle-500 dark:text-jungle-400" />
            Projects
            <Leaf className="h-6 w-6 text-jungle-500 dark:text-jungle-400" />
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Each project taught me something new — here are the ones I’m proud to share.
          </p>
          <div className="h-1 w-20 bg-jungle-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-slate-200 dark:border-jungle-800 hover:shadow-lg transition-shadow duration-300 dark:bg-jungle-800/30">
                <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-jungle-800 relative group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jungle-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 dark:text-white">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-jungle-100 dark:bg-jungle-700/50 text-jungle-800 dark:text-jungle-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-slate-600 dark:text-slate-300 text-base">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex gap-2 pt-2">
                  {project.github && (
                  <Button variant="outline" size="sm" asChild className="border-jungle-200 dark:border-jungle-700">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" /> GitHub
                    </a>
                  </Button>
                  )}
                  {project.demo && (
                    <Button variant="outline" size="sm" asChild className="border-jungle-200 dark:border-jungle-700">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" /> Demo
                      </a>
                    </Button>
                  )}
                  {project.blog && (
                    <Button variant="outline" size="sm" asChild className="border-jungle-200 dark:border-jungle-700">
                      <a href={project.blog} target="_blank" rel="noopener noreferrer">
                        Blog
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
