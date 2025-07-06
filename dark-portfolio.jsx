"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Code,
  Palette,
  Smartphone,
  Globe,
  Terminal,
  Zap,
} from "lucide-react"

export default function DarkPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState({})
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const skills = [
    { name: "React", level: 90, icon: <Code className="w-6 h-6" />, color: "from-cyan-400 to-cyan-600" },
    { name: "JavaScript", level: 85, icon: <Terminal className="w-6 h-6" />, color: "from-yellow-400 to-yellow-600" },
    { name: "UI/UX Design", level: 80, icon: <Palette className="w-6 h-6" />, color: "from-pink-400 to-pink-600" },
    { name: "Python & Django", level: 75, icon: <Smartphone className="w-6 h-6" />, color: "from-green-400 to-green-600" },
    { name: "Web Dev", level: 95, icon: <Globe className="w-6 h-6" />, color: "from-blue-400 to-blue-600" },
    { name: "Performance", level: 88, icon: <Zap className="w-6 h-6" />, color: "from-orange-400 to-orange-600" },
  ]

  const projects = [
    {
      title: "Dark E-Commerce",
      description: "A sleek e-commerce platform with dark UI and advanced animations",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "Node.js", "MongoDB", "Framer Motion"],
      github: "#",
      live: "#",
      accent: "cyan",
    },
    {
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency tracking with dark theme and neon accents",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "WebSocket", "Chart.js", "TailwindCSS"],
      github: "#",
      live: "#",
      accent: "green",
    },
    {
      title: "AI Chat Interface",
      description: "Modern chat interface with AI integration and dark mode",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "OpenAI", "Socket.io", "TypeScript"],
      github: "#",
      live: "#",
      accent: "purple",
    },
    {
      title: "Gaming Portfolio",
      description: "Interactive gaming portfolio with 3D elements and dark aesthetics",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Three.js", "React", "GSAP", "WebGL"],
      github: "#",
      live: "#",
      accent: "red",
    },
    {
      title: "Music Visualizer",
      description: "Audio visualization app with dark theme and neon effects",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Web Audio API", "Canvas", "React", "CSS3"],
      github: "#",
      live: "#",
      accent: "pink",
    },
    {
      title: "Code Editor",
      description: "Dark-themed code editor with syntax highlighting and themes",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Monaco Editor", "React", "Node.js", "WebSocket"],
      github: "#",
      live: "#",
      accent: "yellow",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Cursor Glow Effect */}
      <div
        className="fixed pointer-events-none z-50 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(0,255,255,0.1) 0%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: "all 0.1s ease-out",
        }}
      />

      {/* Background Grid */}
      <div className="fixed inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl z-40 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-cyan-400 glow-text">{"<DEV/>"}</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-gray-300 hover:text-cyan-400 transition-all duration-300 capitalize relative ${
                    activeSection === item ? "text-cyan-400" : ""
                  }`}
                >
                  {item}
                  {activeSection === item && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-300 hover:text-cyan-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 bg-gray-900/95 backdrop-blur-xl rounded-lg mx-4 mb-4">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-3 px-4 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300 capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4">
          <div className="animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="mb-8">
              <div className="text-cyan-400 text-lg mb-4 font-mono">{"// Welcome to my digital realm"}</div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                <span className="text-white">I'm </span>
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent glow-text">
                  Neesarg
                </span>
                <br />
                <span className="text-gray-400 text-4xl md:text-6xl">Developer</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light">
              Crafting digital experiences in the shadows of code, where creativity meets functionality in perfect
              darkness
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-black font-semibold px-8 py-4 rounded-none border-0 transition-all duration-300 transform hover:scale-105 glow-button"
              >
                <Terminal className="w-5 h-5 mr-2" />
                View Projects
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-none bg-transparent transition-all duration-300 font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Code Blocks */}
        <div className="absolute top-20 left-10 text-cyan-400/20 font-mono text-sm animate-pulse">
          {"{ code: 'life' }"}
        </div>
        <div className="absolute top-40 right-20 text-purple-400/20 font-mono text-sm animate-pulse delay-1000">
          {"console.log('hello')"}
        </div>
        <div className="absolute bottom-40 left-20 text-pink-400/20 font-mono text-sm animate-pulse delay-2000">
          {"function magic() {}"}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
              <span className="text-gray-500">About</span> <span className="text-cyan-400 glow-text">Me</span>
            </h2>
            <div className="text-center mb-16">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-lg rotate-6"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-lg -rotate-6"></div>
                  <div className="relative w-full h-full bg-gray-900 rounded-lg border border-gray-700 flex items-center justify-center overflow-hidden">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Profile"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-gray-300 space-y-6">
                  <p className="text-lg leading-relaxed">
                    I'm a <span className="text-cyan-400">full-stack developer</span> who thrives in the digital
                    darkness, crafting elegant solutions with over <span className="text-purple-400">6 years</span> of
                    experience in the shadows of code.
                  </p>
                  <p className="text-lg leading-relaxed">
                    My passion lies in creating <span className="text-pink-400">immersive digital experiences</span>{" "}
                    that push the boundaries of what's possible in web development, always with a preference for the
                    darker aesthetic.
                  </p>
                  <p className="text-lg leading-relaxed">
                    When I'm not coding, you'll find me exploring the depths of new technologies, contributing to
                    <span className="text-green-400"> open-source projects</span>, or mentoring fellow developers in the
                    art of dark-themed development.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <div className="text-2xl font-bold text-cyan-400">6+</div>
                    <div className="text-gray-400">Years Experience</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <div className="text-2xl font-bold text-purple-400">100+</div>
                    <div className="text-gray-400">Projects Completed</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <div className="text-2xl font-bold text-pink-400">50+</div>
                    <div className="text-gray-400">Happy Clients</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <div className="text-2xl font-bold text-green-400">∞</div>
                    <div className="text-gray-400">Coffee Consumed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
              <span className="text-gray-500">Skills &</span> <span className="text-cyan-400 glow-text">Arsenal</span>
            </h2>
            <div className="text-center mb-16">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={skill.name}
                  className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105 hover:border-cyan-400/50 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`text-transparent bg-gradient-to-r ${skill.color} bg-clip-text`}>
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </h3>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                      <div
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out glow-bar`}
                        style={{
                          width: isVisible.skills ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 150}ms`,
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm font-mono">{skill.level}%</span>
                      <span className="text-gray-500 text-xs">MASTERY</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ${isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
              <span className="text-gray-500">Featured</span> <span className="text-cyan-400 glow-text">Projects</span>
            </h2>
            <div className="text-center mb-16">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={project.title}
                  className="bg-gray-900/70 border-gray-700 backdrop-blur-sm overflow-hidden group hover:bg-gray-800/70 transition-all duration-500 transform hover:scale-105 hover:border-cyan-400/50"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          className="bg-gray-800/80 backdrop-blur-sm border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Button>
                        <Button
                          size="sm"
                          className="bg-gray-800/80 backdrop-blur-sm border border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live
                        </Button>
                      </div>
                    </div>

                    {/* Project Number */}
                    <div className="absolute top-4 left-4 text-6xl font-bold text-white/10 group-hover:text-cyan-400/20 transition-colors duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-gray-800/50 text-gray-300 border border-gray-600 hover:border-cyan-400/50 transition-colors duration-300 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
              <span className="text-gray-500">Get In</span> <span className="text-cyan-400 glow-text">Touch</span>
            </h2>
            <div className="text-center mb-16">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Ready to bring your darkest digital dreams to life? Let's collaborate and create something extraordinary
                together in the shadows of innovation.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-black font-semibold px-8 py-4 rounded-none transition-all duration-300 transform hover:scale-105 glow-button">
                  <Mail className="w-5 h-5 mr-2" />
                  neesargsoni@gmail.com
                </Button>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => window.open('https://github.com/Neesargsoni', '_blank')}
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded-none bg-transparent transition-all duration-300 w-12 h-12"
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => window.open('https://www.linkedin.com/in/neesarg-soni-487303299/', '_blank')}
                    className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black rounded-none bg-transparent transition-all duration-300 w-12 h-12"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Terminal-style contact info */}
              <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-6 font-mono text-left max-w-md mx-auto">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-400 text-sm ml-2">contact.sh</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-cyan-400">$</span> <span className="text-gray-300">whoami</span>
                  </div>
                  <div className="text-gray-400 ml-4">shadow_developer</div>
                  <div>
                    <span className="text-cyan-400">$</span> <span className="text-gray-300">cat status.txt</span>
                  </div>
                  <div className="text-green-400 ml-4">Available for projects</div>
                  <div>
                    <span className="text-cyan-400">$</span> <span className="text-gray-300">echo $RESPONSE_TIME</span>
                  </div>
                  <div className="text-purple-400 ml-4">{"< 24 hours"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 font-mono">
            © 2024 Shadow Developer. Crafted in the darkness with <span className="text-red-400">♥</span> and lots of{" "}
            <span className="text-yellow-400">☕</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
