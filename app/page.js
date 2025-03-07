"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ExternalLink, Mail, MapPin, Phone } from "lucide-react"

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState({})
  const [activeSection, setActiveSection] = useState("about")
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))

          if (entry.isIntersecting) {
            if (entry.target.id === "contact-section") {
              setActiveSection("contact")
            } else {
              setActiveSection("about")
            }
          }
        })
      },
      { threshold: 0.3 },
    )

    const sections = document.querySelectorAll(".observe-section")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="logo.png"
              alt="Kineton Logo"
              width={40}
              height={40}
            />
            <span className="text-xl font-bold">Kineton</span>
          </Link>
          <div className="flex space-x-8">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className={`text-sm font-medium transition-colors ${
                activeSection === "about" ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className={`text-sm font-medium transition-colors ${
                activeSection === "contact" ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={aboutRef}
        id="hero-section"
        className="observe-section relative min-h-screen flex items-center justify-center pt-20"
        style={{
          backgroundImage:
            `url("/bg.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">Pioneering the Future</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fadeIn animation-delay-300">
              At Kineton, we're navigating the digital landscape to create innovative solutions for tomorrow's
              challenges.
            </p>
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => scrollToSection(contactRef)}
                className="bg-transparent hover:bg-white/10 text-white border border-white rounded-full px-8 py-3 transition-all duration-300 flex items-center space-x-2 animate-fadeIn animation-delay-600"
              >
                <span>Learn More</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="observe-section py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div
              className={`transition-all duration-1000 transform ${isVisible["about-section"] ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold mb-12 text-center">Our Mission</h2>
              <p className="text-xl mb-8 leading-relaxed">
                Kineton is dedicated to pushing the boundaries of what's possible in the digital realm. We combine
                cutting-edge technology with creative thinking to develop solutions that transform industries and
                improve lives.
              </p>
              <p className="text-xl mb-12 leading-relaxed">
                Our interdisciplinary team of experts works at the intersection of science, technology, and design to
                tackle complex challenges and create meaningful impact in the world.
              </p>
            </div>

            <div
              className={`mt-24 transition-all duration-1000 transform ${isVisible["about-section"] ? "translate-y-0 opacity-100 delay-300" : "translate-y-20 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold mb-12 text-center">Our Approach</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4">Innovate</h3>
                  <p className="text-gray-300">
                    We embrace curiosity and creative thinking to develop novel solutions to complex problems.
                  </p>
                </div>
                <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4">Collaborate</h3>
                  <p className="text-gray-300">
                    We bring together diverse perspectives and expertise to create more robust and effective solutions.
                  </p>
                </div>
                <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4">Impact</h3>
                  <p className="text-gray-300">
                    We measure our success by the positive change we create in the world through our work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team-section" className="observe-section py-24 bg-black relative">
        <div className="container mx-auto px-6 relative z-10">
          <div
            className={`transition-all duration-1000 transform ${isVisible["team-section"] ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
          >
            <h2 className="text-4xl font-bold mb-16 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamMember
                name="John Smith"
                title="CEO and Founder"
                bio="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
                delay={0}
              />
              <TeamMember
                name="Jane Doe"
                title="Director of Operations"
                bio="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
                delay={200}
              />
              <TeamMember
                name="Michael Brown"
                title="Senior SEO Specialist"
                bio="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
                delay={400}
              />
              <TeamMember
                name="Emily Johnson"
                title="PPC Manager"
                bio="3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
                delay={600}
              />
              <TeamMember
                name="Brian Williams"
                title="Social Media Specialist"
                bio="4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
                delay={800}
              />
              <TeamMember
                name="Sarah Kim"
                title="Content Creator"
                bio="2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries"
                delay={1000}
              />
            </div>
            <div className="flex justify-center mt-12">
              <button className="bg-black hover:bg-white/10 text-white border border-white rounded-full px-8 py-3 transition-all duration-300">
                See all team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact-section" className="observe-section py-24 bg-black/90 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div
            className={`max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible["contact-section"] ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-gray-300 mb-8">
                  We'd love to hear from you. Reach out to us with any questions, partnership opportunities, or just to
                  say hello.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-white mt-1" />
                    <div>
                      <h4 className="font-bold">Address</h4>
                      <p className="text-gray-300">123 Innovation Way, Tech City, TC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="text-white mt-1" />
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p className="text-gray-300">info@kineton.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="text-white mt-1" />
                    <div>
                      <h4 className="font-bold">Phone</h4>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-black font-medium py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-AxJ4bCdthUOaQdRt62btUJzXWT33iX.png"
                alt="Kineton Logo"
                width={30}
                height={30}
              />
              <span className="text-lg font-bold">Kineton</span>
            </div>
            <div className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Kineton. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function TeamMember({ name, title, bio, delay = 0 }) {
  return (
    <div
      className="bg-black border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all duration-300 team-card"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-[#9AFF00]/20 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <Image
                src={`/placeholder.svg?height=56&width=56`}
                alt={name}
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 bg-black p-1 rounded-full border border-white/10">
            <ExternalLink size={12} />
          </div>
        </div>
        <div className="ml-4">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
      </div>
      <p className="text-sm text-gray-300">{bio}</p>
    </div>
  )
}

