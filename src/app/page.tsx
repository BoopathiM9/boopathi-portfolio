"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Download,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  Cpu,
  Cloud,
  Brain,
  CheckCircle2,
  Send,
  ChevronRight,
} from "lucide-react";
import Navbar from "../components/Navbar";

export default function Home() {
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const certificationsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    experience: experienceRef,
    projects: projectsRef,
    skills: skillsRef,
    certifications: certificationsRef,
    contact: contactRef,
  };

  const skillCategories = [
    {
      title: "Generative AI & Machine Learning",
      icon: <Brain className="w-5 h-5 text-purple-400" />,
      skills: [
        "AWS Bedrock",
        "LLMs & Prompt Engineering",
        "Agentic AI Workflows",
        "TensorFlow / Keras",
        "OpenCV Computer Vision",
        "Data Analytics & Modeling",
        "Scikit-learn",
      ],
    },
    {
      title: "Cloud & Backend Architecture",
      icon: <Cloud className="w-5 h-5 text-cyan-400" />,
      skills: [
        "AWS (Bedrock, Lambda, S3, IAM)",
        "Serverless Pipelines",
        "REST APIs & JSON",
        "Java Full Stack",
        "Spring Boot",
        "Distributed Systems Concepts",
      ],
    },
    {
      title: "Frontend & Full Stack Engineering",
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      skills: [
        "Next.js 15",
        "React 19",
        "TypeScript / JavaScript",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "Framer Motion",
        "Responsive UI/UX",
      ],
    },
    {
      title: "Databases & Development Tools",
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      skills: [
        "MySQL",
        "MongoDB",
        "Git & GitHub",
        "VS Code",
        "Eclipse IDE",
        "Jupyter Notebook",
        "Postman",
      ],
    },
  ];

  const experiences = [
    {
      role: "Data & AI Intern",
      company: "Cloud Kinetics",
      location: "Chennai Office, Tamil Nadu",
      period: "August 2026 — October 2026",
      type: "Corporate Internship",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
      description: [
        "Selected for core Data & AI Internship at Cloud Kinetics Chennai office to research and develop enterprise AI applications.",
        "Engineered Generative AI workflows and agent architectures utilizing AWS Bedrock foundation models, prompt pipelines, and APIs.",
        "Built serverless backend integration pipelines with AWS Lambda, S3, and Python for automated document parsing, token tracking, and inference.",
        "Conducted cloud technical exercises, benchmarking latency, hallucination rates, and multi-tenant cloud architecture.",
      ],
      skills: ["AWS Bedrock", "Generative AI", "AWS Lambda", "Python", "Cloud Architecture"],
    },
    {
      role: "Python & Data Analytics Intern",
      company: "Optimus Technocrates",
      location: "Remote / On-site",
      period: "July 2024 — August 2024",
      type: "Completed Internship",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      description: [
        "Hands-on immersion in Python logic building, data cleansing, exploratory data analysis, and software module architecture.",
        "Engineered end-to-end task modules in Python to automate analysis workflows and solved core computational problems.",
        "Collaborated with cross-functional team members to deliver real-time data analysis modules on schedule.",
      ],
      skills: ["Python", "Data Analysis", "Logic Building", "Software Modules"],
    },
  ];

  const projects = [
    {
      title: "Amazon Bedrock Retail AI Agent",
      badge: "Enterprise GenAI & AWS",
      description:
        "Autonomous conversational and transactional retail agent built using AWS Bedrock foundation models and AWS Lambda action groups. Enables automated order management, personalized catalog recommendations, and real-time inventory queries.",
      tech: ["AWS Bedrock", "AWS Lambda", "Python", "Generative AI", "Next.js"],
      highlights: [
        "Multi-step agent orchestration with action groups",
        "Serverless execution with AWS Lambda",
        "Real-time knowledge integration and conversational fallback",
      ],
      gradient: "from-purple-900/40 via-indigo-900/30 to-purple-950/40",
      border: "border-purple-500/30",
    },
    {
      title: "Lumbar Spine Abnormality Detection",
      badge: "Computer Vision & Healthcare AI",
      description:
        "Deep learning and computer vision framework designed to detect spinal abnormalities from X-ray imagery. Implemented image preprocessing, adaptive filtering, and feature extraction to assist medical professionals with early diagnostic support.",
      tech: ["Python", "OpenCV", "Deep Learning", "Image Preprocessing", "NumPy"],
      highlights: [
        "Automated spinal bone segmentation from X-rays",
        "Noise reduction and contrast enhancement filters",
        "High-accuracy abnormality classification pipeline",
      ],
      gradient: "from-cyan-900/40 via-blue-900/30 to-slate-900/40",
      border: "border-cyan-500/30",
    },
    {
      title: "Synwell Care — Wellness Monitoring Platform",
      badge: "Predictive Health & Web App",
      description:
        "Intelligent wellness tracking system integrating machine learning algorithms to analyze vital parameters and daily lifestyle habits. Features a modern dashboard for real-time metric inputs, trend forecasts, and personalized health recommendations.",
      tech: ["Python", "Machine Learning", "React", "REST API", "MySQL"],
      highlights: [
        "Real-time health vitals analysis and alerts",
        "Interactive analytics dashboards and metric visualization",
        "Secure CRUD management for user health records",
      ],
      gradient: "from-emerald-900/40 via-teal-900/30 to-slate-900/40",
      border: "border-emerald-500/30",
    },
    {
      title: "Safe Haven — Women's Safety & Emergency Response",
      badge: "Emergency Geolocation & Analytics",
      description:
        "Safety and emergency alert platform that triggers rapid emergency notifications, live GPS location dispatch, and analytical safety heatmaps to protect women in emergency situations.",
      tech: ["Python", "Geospatial Analytics", "Flask", "React", "MySQL"],
      highlights: [
        "One-touch SOS distress trigger with geolocation",
        "Incident analytics and danger-zone mapping",
        "Responsive emergency contact dispatch notifications",
      ],
      gradient: "from-pink-900/40 via-purple-900/30 to-slate-900/40",
      border: "border-pink-500/30",
    },
  ];

  const certifications = [
    {
      title: "Gen AI Powered Data Analytics Job Simulation",
      issuer: "TATA Group & Forage",
      highlight: "Generative AI & Data Analytics",
      icon: <Brain className="w-5 h-5 text-purple-400" />,
      link: null,
    },
    {
      title: "Distributed Systems",
      issuer: "NPTEL (IIT)",
      highlight: "Elite Certification",
      icon: <Award className="w-5 h-5 text-amber-400" />,
      link: "/NPTL.pdf",
    },
    {
      title: "Foundation of Cloud IoT Edge ML",
      issuer: "NPTEL (IIT)",
      highlight: "Elite + Silver Certification",
      icon: <Cloud className="w-5 h-5 text-cyan-400" />,
      link: "/NPTL.pdf",
    },
    {
      title: "Fundamental Algorithms: Design & Analysis",
      issuer: "NPTEL (IIT)",
      highlight: "Elite Certification",
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      link: "/NPTL.pdf",
    },
    {
      title: "Technical Paper Presentation on AI & ML",
      issuer: "Selvam Engineering College",
      highlight: "Research & Paper Presentation",
      icon: <Sparkles className="w-5 h-5 text-indigo-400" />,
      link: null,
    },
  ];

  const educationList = [
    {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      institution: "Muthayammal Engineering College (Autonomous)",
      university: "Anna University",
      period: "2022 — 2026",
      score: "CGPA: 7.8 / 10",
      details:
        "Specialized coursework in Machine Learning, Deep Learning, Cloud Computing, Distributed Systems, Algorithms, and Object-Oriented Software Engineering.",
    },
    {
      degree: "Higher Secondary Certificate (HSC - 12th)",
      institution: "SRV Matric Higher Secondary School, Attur",
      university: "State Board",
      period: "2020 — 2022",
      score: "Score: 76%",
      details: "Major in Mathematics, Physics, Chemistry, and Computer Science.",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC - 10th)",
      institution: "SRV Matric Higher Secondary School, Attur",
      university: "State Board",
      period: "2019 — 2020",
      score: "Score: 86%",
      details: "Strong academic foundation in science, mathematics, and analytical reasoning.",
    },
  ];

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 6000);
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <>
      <Navbar sectionRefs={sectionRefs} />

      <main className="min-h-screen bg-[#070314] text-slate-100 overflow-x-hidden selection:bg-purple-500 selection:text-white">
        {/* Glow ambient background effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px]" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-32">
          {/* ================= HERO SECTION ================= */}
          <section
            ref={homeRef}
            className="flex flex-col items-center text-center pt-8 sm:pt-16 pb-12"
          >
            {/* Live status badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-200 text-xs sm:text-sm font-medium backdrop-blur-md mb-8 shadow-lg shadow-purple-950/40"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Data &amp; AI Intern @ Cloud Kinetics (Chennai Office)</span>
            </motion.div>

            {/* Profile Avatar with Glowing Ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mb-8 group"
            >
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-cyan-500 to-indigo-600 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#070314] shadow-2xl">
                <Image
                  src="/Boopathi.profile.jpg"
                  alt="Boopathi M"
                  width={192}
                  height={192}
                  priority
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  Boopathi M
                </span>
              </h1>
              <p className="text-lg sm:text-2xl text-purple-200/90 font-medium max-w-3xl mx-auto mb-6">
                Data &amp; AI Intern @ Cloud Kinetics | B.Tech AI &amp; Data Science
              </p>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
                Architecting intelligent AI agent workflows, AWS Bedrock applications, and full-stack software solutions.
                Passionate about turning modern AI breakthroughs into enterprise-ready cloud products.
              </p>

              {/* Call to action buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() =>
                    sectionRefs.projects.current?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-cyan-300" />
                  Explore Featured Projects
                </button>

                <a
                  href="/Boopathi_Resume.pdf"
                  download="Boopathi_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/15 backdrop-blur-md transition-all duration-300"
                >
                  <Download className="w-4 h-4 text-purple-300" />
                  Resume (PDF)
                </a>

                <a
                  href="/Boopathi_Resume.docx"
                  download="Boopathi_Resume.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-semibold border border-white/10 backdrop-blur-md transition-all duration-300 text-sm"
                >
                  <Download className="w-4 h-4 text-cyan-300" />
                  Word (DOCX)
                </a>

                <a
                  href="https://www.linkedin.com/in/Boopathi-M-60341b269/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#0077b5]/20 hover:bg-[#0077b5]/30 text-cyan-300 font-semibold border border-[#0077b5]/40 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-4xl mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {[
                { label: "Current Role", val: "Gen AI Intern", sub: "Cloud Kinetics" },
                { label: "Academic Standing", val: "7.8 CGPA", sub: "B.Tech AI & DS '26" },
                { label: "NPTEL Certified", val: "3x Elite", sub: "Distributed & Cloud ML" },
                { label: "Core Focus", val: "GenAI & Cloud", sub: "AWS Bedrock & Python" },
              ].map((metric, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm text-center"
                >
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{metric.label}</p>
                  <p className="text-xl sm:text-2xl font-bold text-white">{metric.val}</p>
                  <p className="text-xs text-purple-300/80 mt-0.5">{metric.sub}</p>
                </div>
              ))}
            </motion.div>
          </section>

          {/* ================= ABOUT SECTION ================= */}
          <section ref={aboutRef} className="scroll-mt-28">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                Background & Mindset
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                About Me
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
                <p>
                  I am a passionate <strong className="text-white">AI & Data Science Undergrad</strong> (2026 Batch) currently working as a{" "}
                  <strong className="text-purple-300">Generative AI and Cloud Intern at Cloud Kinetics</strong> in Chennai.
                </p>
                <p>
                  My technical focus centers on bridging machine learning and cloud engineering: designing intelligent agents using <strong className="text-cyan-300">AWS Bedrock</strong>, deploying serverless architectures with <strong className="text-white">AWS Lambda</strong>, and building scalable full-stack web applications with <strong className="text-white">Python, Java, and React/Next.js</strong>.
                </p>
                <p>
                  With certified expertise from <strong className="text-purple-300">NPTEL (Distributed Systems, Cloud IoT Edge ML, and Algorithms)</strong> and simulation credentials from <strong className="text-cyan-300">TATA Group & Forage</strong>, I enjoy solving hard engineering challenges and turning cutting-edge research into dependable software.
                </p>

                <div className="pt-4 flex flex-wrap gap-4 text-sm text-slate-300">
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                    <MapPin className="w-4 h-4 text-rose-400" />
                    <span>Chennai / Attur, India</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    <span>Muthayammal Engg College (Anna Univ)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                    <Briefcase className="w-4 h-4 text-purple-400" />
                    <span>Available for Opportunities</span>
                  </div>
                </div>
              </div>

              {/* Highlights cards */}
              <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-900/30 to-slate-900/40 border border-purple-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300">
                      <Brain className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-white">GenAI & LLM Workflows</h3>
                  </div>
                  <p className="text-sm text-slate-400">
                    Prompt engineering, multi-agent frameworks, AWS Bedrock foundation models, and computer vision with OpenCV.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-slate-900/40 border border-cyan-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300">
                      <Cloud className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-white">Cloud & Distributed Systems</h3>
                  </div>
                  <p className="text-sm text-slate-400">
                    Hands-on cloud orchestration on AWS, Lambda microservices, distributed architectures, and serverless backends.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-slate-900/40 border border-indigo-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-white">Full Stack & Databases</h3>
                  </div>
                  <p className="text-sm text-slate-400">
                    Proficient in Python, Java, Next.js, React, MySQL, and building user-centric responsive interfaces.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ================= EXPERIENCE SECTION ================= */}
          <section ref={experienceRef} className="scroll-mt-28">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                Professional Journey
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                Experience & Internships
              </h2>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${exp.badgeColor}`}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-lg text-purple-300 font-medium mt-1">
                        {exp.company} <span className="text-slate-400 text-sm font-normal">• {exp.location}</span>
                      </p>
                    </div>
                    <span className="inline-flex items-center text-xs font-medium px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5 mb-6 text-slate-300 text-sm sm:text-base">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ================= PROJECTS SECTION ================= */}
          <section ref={projectsRef} className="scroll-mt-28">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                Technical Highlights
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                Featured Projects
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mt-2 text-sm sm:text-base">
                Real-world software engineering and AI implementations, spanning Generative AI agents, computer vision, and healthcare platforms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((proj, idx) => (
                <div
                  key={idx}
                  className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-br ${proj.gradient} border ${proj.border} hover:scale-[1.01] transition-transform duration-300 shadow-xl flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-purple-200 border border-white/10">
                        {proj.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{proj.title}</h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      {proj.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {proj.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                          <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-lg bg-black/40 text-purple-200 border border-purple-500/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ================= SKILLS MATRIX SECTION ================= */}
          <section ref={skillsRef} className="scroll-mt-28">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                Skills & Tech Stack
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">{cat.icon}</div>
                    <h3 className="font-semibold text-white text-base">{cat.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1.5 rounded-lg bg-white/5 hover:bg-purple-600/20 hover:text-purple-200 hover:border-purple-500/40 text-slate-300 border border-white/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ================= CERTIFICATIONS SECTION ================= */}
          <section ref={certificationsRef} className="scroll-mt-28">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                Credentials
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                Certifications & Achievements
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10">{cert.icon}</div>
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {cert.highlight}
                      </span>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-1">{cert.title}</h3>
                    <p className="text-sm text-slate-400 mb-4">{cert.issuer}</p>
                  </div>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold mt-2 pt-3 border-t border-white/5"
                    >
                      <span>View Credential Document</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ================= EDUCATION SECTION ================= */}
          <section className="scroll-mt-28">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                Academics
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                Education
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        {edu.score}
                      </span>
                    </div>
                    <p className="text-purple-300 text-sm font-medium">
                      {edu.institution} <span className="text-slate-400">• {edu.university}</span>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-400 pt-1">{edu.details}</p>
                  </div>
                  <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 self-start sm:self-auto shrink-0">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ================= CONTACT SECTION ================= */}
          <section ref={contactRef} className="scroll-mt-28">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                Let&apos;s Connect
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mt-2 text-sm sm:text-base">
                Looking for a GenAI developer, full-stack engineer, or cloud specialist? Feel free to reach out directly or send a message.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
              {/* Contact Information Cards */}
              <div className="lg:col-span-5 space-y-4">
                <a
                  href="https://www.linkedin.com/in/Boopathi-M-60341b269/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 flex items-center gap-4 transition-all duration-300 group block"
                >
                  <div className="p-3 rounded-xl bg-[#0077b5]/20 text-[#00a0dc] group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">LinkedIn Profile</p>
                    <p className="text-white font-semibold text-sm sm:text-base group-hover:text-cyan-400 transition-colors">
                      Boopathi M
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:boopathi11std@gmail.com"
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 flex items-center gap-4 transition-all duration-300 group block"
                >
                  <div className="p-3 rounded-xl bg-purple-500/20 text-purple-300 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Email Address</p>
                    <p className="text-white font-semibold text-sm sm:text-base group-hover:text-purple-300 transition-colors">
                      boopathi11std@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+918825991927"
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 flex items-center gap-4 transition-all duration-300 group block"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-300 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Direct Contact</p>
                    <p className="text-white font-semibold text-sm sm:text-base group-hover:text-emerald-300 transition-colors">
                      +91 8825991927
                    </p>
                  </div>
                </a>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-rose-500/20 text-rose-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Location</p>
                    <p className="text-white font-semibold text-sm sm:text-base">
                      Chennai / Salem, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-6">
                  Fill out the form below and I will get back to you promptly.
                </p>

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Sarah Connor"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Discussing an opportunity, project, or collaboration..."
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-purple-600/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {formStatus === "submitting" ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {formStatus === "success" && (
                    <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm text-center">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs sm:text-sm text-center">
                      Something went wrong. Please email directly at boopathi11std@gmail.com
                    </div>
                  )}
                </form>
              </div>
            </div>
          </section>
        </div>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-white/10 bg-[#05020f] py-8 text-center text-xs text-slate-400">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Boopathi M. All rights reserved.</p>
            <div className="flex items-center gap-4 text-slate-400">
              <a
                href="https://www.linkedin.com/in/Boopathi-M-60341b269/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="/Boopathi_Resume.pdf"
                download
                className="hover:text-purple-300 transition-colors"
              >
                Download Resume
              </a>
              <span>•</span>
              <a
                href="mailto:boopathi11std@gmail.com"
                className="hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
