import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import BlackLogo from "./assets/Teni_Logo-01.png";
import heroBackground from "./assets/heroBackground.jpg";
import aboutBackground from "./assets/aboutBackground.jpg";
import { SiGooglemarketingplatform } from "react-icons/si";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Award,
  GraduationCap,
  Star,
  Facebook,
  Quote,
  Menu,
  X,
  ExternalLink,
  Rocket,
  PenTool,
  Figma,
  Blocks
} from "lucide-react";
import ServiceCard from "./components/custom/ServiceCard";
import { LuWebhook } from "react-icons/lu";
import { RiApps2AiLine } from "react-icons/ri";
import { SiMaterialdesignicons } from "react-icons/si";
import { cn } from "./lib/utils";
import BentoGrid from "./components/custom/BentoGrid";
import LogoMarquee from "./components/custom/LogoMarquee";
import CtaSection from "./components/custom/CtaSection";
import { RetroGrid } from "./components/magicui/retro-grid";
import { StaggerTestimonials } from "./components/stagger-testimonials";

// --- Utility data ---
const nav = [
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Profile", href: "#" }
];

const works = [
  {
    title: "Social Media Marketing",
    Icon: SiGooglemarketingplatform
  },
  { title: "Web Development", Icon: LuWebhook },
  { title: "Web Application", Icon: RiApps2AiLine },
  { title: "Creative Art", Icon: SiMaterialdesignicons }
];

const edu = [
  {
    title: "Creative Excellence",
    desc: `Unique, impactful designs tailored to your brand.`
  },
  {
    title: "End-to-End Solutions",
    desc: " From design to development to marketing, we’ve got you covered."
  },
  {
    title: "Client-Centric Approach",
    desc: "Your goals are our priority. Your goals are our priority."
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "PM, Horizon Fintech",
    text: "We struggled to stand out in a competitive market until we partnered with them. Their strategic ad campaigns and creative content helped us attract more leads and build stronger customer trust."
  },
  {
    name: "Rahul Verma",
    role: "Founder, Cartly",
    text: "customized marketing plan gave us measurable results in terms of brand awareness, engagement, and conversions."
  },
  {
    name: "Emily Chen",
    role: "Design Lead, Healthly",
    text: "Their SEO and social media campaigns helped us reach the right audience at the right time."
  }
];

const blog = [
  {
    title: "A 3‑week journey to a validated MVP",
    blurb: "How I scoped, prototyped and tested a finance tool in record time."
  },
  {
    title: "Motion as a storytelling tool",
    blurb:
      "Principles I use to add meaning (not noise) with micro‑interactions."
  },
  {
    title: "My favorite Figma workflow",
    blurb: "Components, tokens and auto‑layout patterns that scale."
  }
];

const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

function PlaceholderThumb({ label }) {
  return (
    <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 grid place-items-center overflow-hidden">
      <span className="text-zinc-500 text-sm">{label}</span>
    </div>
  );
}

function SectionHeader({ eyebrow, title, desc, color }) {
  return (
    <div className="text-center space-y-2">
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 text-violet-700 px-3 py-1 text-xs font-medium">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl/tight sm:text-[40px] font-extrabold tracking-tight w-full "
        )}
        style={{ color }}
      >
        {title}
      </h2>
      {desc && <p className="text-zinc-600 max-w-2xl mx-auto">{desc}</p>}
    </div>
  );
}

function Nav() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur">
      <div className={`${container} flex items-center justify-between p-6`}>
        <a href="#home" className="font-extrabold text-xl">
          <img src={BlackLogo} alt="logo" className="w-auto h-10" />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-[16px]">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="hover:text-violet-700 cursor-pointer"
            >
              {n.label}
            </a>
          ))}
          <Button className="rounded-lg p-6 cursor-pointer text-[16px] bg-slate-900 hover:bg-violet-700 hover:scale-105 transition-transform duration-200">
            Contact
          </Button>
        </nav>
        <button
          className="md:hidden p-2 rounded-lg border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className={`${container} py-3 grid gap-2`}>
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="py-2"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="bg-violet-700 text-white">
      <div
        className={`${container} grid lg:grid-cols-2 gap-10 items-center py-12 sm:py-16`}
      >
        <div className="space-y-6 ">
          <h1 className="text-4xl sm:text-[60px] font-extrabold tracking-tight">
            Helping Clients to
            <br /> Grow Business
            <br /> Digitally
          </h1>
          <p className="text-white/90 max-w-xl text-[20px]">
            Marketing That Clicks. Results That Stick.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button className="rounded-lg p-6 text-[18px] cursor-pointer bg-slate-900 hover:bg-slate-100 hover:text-black">
              Get in touch
            </Button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-square rounded-lg bg-white/10 border border-white/20">
            <img
              src={heroBackground}
              alt="background"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section id="home" className="bg-white text-violet-700">
      <div
        className={`${container} flex items-center gap-10 py-12 sm:py-16 h-[650px]`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-full w-[50%]"
        >
          <div className="aspect-square rounded-lg h-full w-full bg-white/10 border border-white/20">
            <img
              src={aboutBackground}
              alt="background"
              className="h-full w-full object-fill rounded-lg"
            />
          </div>
        </motion.div>

        <div className="space-y-6 w-[50%]">
          <h1 className="text-4xl sm:text-[50px] font-extrabold tracking-tight">
            Delivering Excellence in Web Development and Creative Arts.
          </h1>
          <p className="text-black max-w-xl text-[22px]">
            We are a leading digital solutions company specializing in Creative
            art, Social- media marketing, web development and Web App. We help
            businesses harness technology to streamline operations and
            accelerate growth.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-10">
            <Button className="rounded-lg p-6 text-[18px] cursor-pointer bg-slate-900 hover:bg-violet-700 hover:text-white hover:scale-105 transition-transform duration-200">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Works() {
  return (
    <section id="works" className="py-16 sm:py-20 bg-violet-700">
      <div className={`${container} space-y-10`}>
        <SectionHeader title="Services." color={"#f2f2f2"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-15">
          {works.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
            >
              <ServiceCard key={i} Icon={w.Icon} title={w.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-16 sm:py-20">
      <div className={`${container} space-y-10`}>
        <SectionHeader title="The Smart Choice." />
        <div className="grid md:grid-cols-3 gap-6">
          {edu.map((e) => (
            <Card key={e.title} className="rounded-lg bg-violet-700 text-white">
              <CardHeader>
                <CardTitle className="text-[24px] font-semibold">{e.title}</CardTitle>
                <p className="">{e.desc}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20">
      <h2 className="text-3xl sm:text-4xl w-full text-center font-extrabold tracking-tight">
        Happy Clients Say
      </h2>
      <p className="text-slate-700 w-full text-center mt-2">
        Some kind words from collaborators.
      </p>

      {/* <div className={`${container} space-y-10`}>
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Happy Clients Say
          </h2>
          <p className="text-white/80">Some kind words from collaborators.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="rounded-2xl bg-white/10 border-white/20 text-white"
            >
              <CardHeader>
                <Quote className="h-6 w-6" />
                <CardTitle className="text-base">{t.text}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/20" />
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-white/70 text-sm">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div> */}
      <StaggerTestimonials />
    </section>
  );
}

function Blog() {
  return (
    <section id="blog" className="py-16 sm:py-20">
      <div className={`${container} space-y-10`}>
        <SectionHeader
          title="Blog Update"
          desc="Stories and notes on process, craft and tools."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {blog.map((b) => (
            <Card key={b.title} className="rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <PlaceholderThumb label="Article Cover" />
              </CardContent>
              <CardHeader>
                <CardTitle className="text-lg">{b.title}</CardTitle>
                <p className="text-zinc-600">{b.blurb}</p>
                <div className="pt-2">
                  <Button
                    variant="ghost"
                    className="px-0 hover:text-violet-700"
                  >
                    Read more <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 h-[500px] w-full overflow-hidden"
    >
      {/* <RetroGrid className={`w-full h-full object-cover`}/> */}
      <div className={`${container} grid lg:grid-cols-2 gap-10 items-start`}>
        <div className="">
          <h1 className="text-[40px] font-semibold">Let’s connect there</h1>
          <h2>Just want to say hi? Drop a line.</h2>
          <div className="space-y-3 text-sm mt-5">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> hello@jon.design
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +91 90000 12345
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Kolkata, India
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 rounded-full border hover:bg-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="p-2 rounded-full border hover:bg-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 rounded-full border hover:bg-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <Card className="rounded-2xl">
          <CardContent className="p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your name" />
              <Input placeholder="Email address" type="email" />
            </div>
            <Input placeholder="Subject" />
            <Textarea
              placeholder="Write your message…"
              className="min-h-[140px]"
            />
            <Button className="rounded-lg bg-slate-900 hover:bg-violet-700 cursor-pointer hover:scale-105 transition-transform duration-200">
              Send Message
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t">
      <div
        className={`${container} py-10 flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-zinc-600`}
      >
        <p>© {new Date().getFullYear()} Teni. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-violet-700">
            Privacy
          </a>
          <a href="#" className="hover:text-violet-700">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav />
      <main>
        <Hero />
        <AboutUs />
        <Works />
        <BentoGrid />
        <Education />
        <Testimonials />
        <LogoMarquee />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
