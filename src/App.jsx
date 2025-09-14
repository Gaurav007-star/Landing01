import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import BlackLogo from "./assets/Teni_Logo-01.png";
import WhiteLogo from "./assets/Teni_Logo-04.png";

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
  Facebook,
  Quote,
  Menu,
  X,
  ExternalLink
} from "lucide-react";
import ServiceCard from "./components/custom/ServiceCard";
import { LuWebhook } from "react-icons/lu";
import { RiApps2AiLine } from "react-icons/ri";
import { SiMaterialdesignicons } from "react-icons/si";
import { cn } from "./lib/utils";
import BentoGrid from "./components/custom/BentoGrid";
import LogoMarquee from "./components/custom/LogoMarquee";
import CtaSection from "./components/custom/CtaSection";
import { StaggerTestimonials } from "./components/stagger-testimonials";
import choiceOne from "./assets/choice/choiceOne.jpg";
import choiceTwo from "./assets/choice/choiceTwo.jpg";
import choiceThree from "./assets/choice/choiceThree.jpg";
import { Link as ScrollLink, Element } from "react-scroll";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin
} from "react-icons/fa";
import { Link, useNavigate } from "react-router";

// --- Utility data ---
const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Profile", href: "/profile" }
];

const works = [
  {
    title: "Social Media Marketing",
    Icon: SiGooglemarketingplatform,
    desc: "strategies that boost visibility, branding, and ROI."
  },
  {
    title: "Web Development",
    Icon: LuWebhook,
    desc: "delivering digital experiences that elevate your business online."
  },
  {
    title: "Web Application",
    Icon: RiApps2AiLine,
    desc: "We create next-gen apps that saves time and cost."
  },
  {
    title: "Creative Art Designing",
    Icon: SiMaterialdesignicons,
    desc: "We craft bold visuals that turn data into impactful stories."
  }
];

const Choice = [
  {
    title: "Creative Excellence",
    desc: `Unique, impactful designs tailored to your brand.`,
    image: choiceOne
  },
  {
    title: "End-to-End Solutions",
    desc: " From design to development to marketing, we’ve got you covered.",
    image: choiceTwo
  },
  {
    title: "Client-Centric Approach",
    desc: "Your goals are our priority. Your goals are our priority.",
    image: choiceThree
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

export function SectionHeader({ eyebrow, title, desc, color, size }) {
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
        style={{ color, fontSize: size }}
      >
        {title}
      </h2>
      {desc && <p className="text-zinc-600 max-w-2xl mx-auto">{desc}</p>}
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  return (
    <header className="absolute top-5 z-40 w-full h-max text-violet-700">
      <div
        className={`${container} flex items-center justify-between !px-20 py-6 rounded-full bg-violet-700 backdrop-blur-lg text-white`}
      >
        <img
          src={WhiteLogo}
          alt="logo"
          className="w-auto h-10 cursor-pointer"
          onClick={() => navigate("/")}
        />

        <nav className="hidden md:flex items-center gap-6 text-[16px] w-[30%] h-full rounded-full justify-center">
          {nav.map((n) => (
            <Link
              key={n.href}
              to={n.href}
              className="hover:text-black cursor-pointer text-[24px]"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <ScrollLink to="contact" smooth={true} duration={500}>
          <Button className="rounded-full p-6 cursor-pointer text-[20px] bg-white hover:bg-black hover:text-white text-black hover:scale-105  transition-transform duration-200">
            Contact
          </Button>
        </ScrollLink>
        <button
          className="md:hidden p-2 rounded-full border"
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

// import homeBanner1 from "./assets/homeBanner1.jpg";
// import homeBanner2 from "../assets/homeBanner2.jpg";
// import homeBanner3 from "../assets/homeBanner3.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="text-black h-screen w-full flex items-center justify-center pt-20 min-[1600px]:px-[10vw]"
    >
      <div className="left-side w-[50%] h-full  flex flex-col items-center justify-center">
        <div className="box space-y-2">
          <h1 className="text-4xl sm:text-[60px] font-extrabold tracking-tight">
            Helping Clients <br /> to Grow <br /> Business Digitally
          </h1>
          <p className=" max-w-xl text-[20px]">
            Marketing That Clicks. Results That Stick.
          </p>
          <div className="w-full h-max flex flex-wrap  gap-3 mt-10">
            <Button className="rounded-full p-6 text-[18px] cursor-pointer bg-slate-900 hover:bg-slate-100 hover:text-black">
              Get in touch
            </Button>

            <Button className="rounded-full p-6 text-[18px] cursor-pointer bg-violet-700 hover:bg-slate-100 hover:text-black">
              Our Services
            </Button>
          </div>
        </div>
      </div>

      <div className="right-side w-[50%] h-full p-10 flex items-center justify-center pr-20">
        <img
          src={heroBackground}
          alt=""
          className="object-cover w-[400px] h-[400px] rounded-md"
          style={{
            clipPath:
              "polygon(4% 0, 94% 0, 100% 0, 100% 81%, 79% 100%, 50% 100%, 0 100%, 0 0)"
          }}
        />
      </div>

      <div className="social absolute rotate-90 right-0 flex items-center gap-2 font-bold">
        <h1>Follow us on ---------------</h1>
        <FaFacebookSquare className="text-[20px] text-violet-700" />
        <FaInstagramSquare className="text-[20px] text-violet-700" />
        <FaLinkedin className="text-[20px] text-violet-700" />
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section id="home" className="bg-white text-black">
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
            <Button className="rounded-full p-6 text-[18px] cursor-pointer bg-slate-900 hover:bg-violet-700 hover:text-white hover:scale-105 transition-transform duration-200">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="works" className="py-16 sm:py-20">
      <div className={`${container} space-y-10`}>
        <SectionHeader
          title="Our Services."
          desc={"Driving Innovation with Digital Mastery"}
          color={"black"}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-15">
          {works.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
            >
              <ServiceCard
                key={i}
                Icon={w.Icon}
                title={w.title}
                desc={w.desc}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SmartChoice() {
  return (
    <section id="education" className="py-16 sm:py-20 bg-[#121212] text-white">
      <div className={`${container} space-y-10`}>
        <SectionHeader title="The Smart Choice." />
        <div className="grid md:grid-cols-3 gap-6">
          {Choice.map((item) => {
            return (
              <div className="card-wrapper w-full overflow-hidden rounded-lg relative border-2 border-violet-700 h-[400px] flex flex-col items-center justify-center hover:shadow-[-5px_6px_0px_#7008e7] transition-transform duration-200 cursor-pointer">
                <h1 className="text-[35px] text-center font-semibold mb-1 uppercase">
                  {item.title}
                </h1>
                <p className="text-[20px] text-center w-full p-4">
                  {item.desc}
                </p>
              </div>
            );
          })}
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

export function Contact() {
  return (
    <Element
      name="contact"
      id="contact"
      className="py-16 sm:py-20 h-[500px] w-full overflow-hidden"
    >
      {/* <RetroGrid className={`w-full h-full object-cover`}/> */}
      <div className={`${container} grid lg:grid-cols-2 gap-10 items-start`}>
        <div className="">
          <img src={BlackLogo} alt="" className="w-auto h-20 mb-8" />
          <h1 className="text-[40px] font-semibold">Let’s connect </h1>
          <h2>Just want to say hi? Drop a line.</h2>
          <div className="space-y-3 text-sm mt-5">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> teni.700121@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +91 83368 56076
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
    </Element>
  );
}

export function Footer() {
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
        <Services />
        <BentoGrid />
        <SmartChoice />
        <Testimonials />
        <LogoMarquee />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
