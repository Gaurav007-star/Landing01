import { LuWebhook } from "react-icons/lu";
import { RiApps2AiLine } from "react-icons/ri";
import { SiGooglemarketingplatform, SiMaterialdesignicons } from "react-icons/si";


import choiceOne from "../assets/choice/choiceOne.jpg";
import choiceTwo from "../assets/choice/choiceTwo.jpg";
import choiceThree from "../assets/choice/choiceThree.jpg";



export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Profile", href: "/profile" },
];

export const works = [
  {
    title: "Social Media Marketing",
    Icon: SiGooglemarketingplatform,
    desc: "strategies that boost visibility, branding, and ROI.",
  },
  {
    title: "Web Development",
    Icon: LuWebhook,
    desc: "delivering digital experiences that elevate your business online.",
  },
  {
    title: "Web Application",
    Icon: RiApps2AiLine,
    desc: "We create next-gen apps that saves time and cost.",
  },
  {
    title: "Creative Art Designing",
    Icon: SiMaterialdesignicons,
    desc: "We craft bold visuals that turn data into impactful stories.",
  },
];

export const Choice = [
  {
    title: "Creative Excellence",
    desc: `Unique, impactful designs tailored to your brand.`,
    image: choiceOne,
  },
  {
    title: "End-to-End Solutions",
    desc: " From design to development to marketing, we’ve got you covered.",
    image: choiceTwo,
  },
  {
    title: "Client-Centric Approach",
    desc: "Your goals are our priority. Your goals are our priority.",
    image: choiceThree,
  },
];

export const testimonials = [
  {
    name: "Priya Sharma",
    role: "PM, Horizon Fintech",
    text: "We struggled to stand out in a competitive market until we partnered with them. Their strategic ad campaigns and creative content helped us attract more leads and build stronger customer trust.",
  },
  {
    name: "Rahul Verma",
    role: "Founder, Cartly",
    text: "customized marketing plan gave us measurable results in terms of brand awareness, engagement, and conversions.",
  },
  {
    name: "Emily Chen",
    role: "Design Lead, Healthly",
    text: "Their SEO and social media campaigns helped us reach the right audience at the right time.",
  },
];

export const blog = [
  {
    title: "A 3‑week journey to a validated MVP",
    blurb: "How I scoped, prototyped and tested a finance tool in record time.",
  },
  {
    title: "Motion as a storytelling tool",
    blurb:
      "Principles I use to add meaning (not noise) with micro‑interactions.",
  },
  {
    title: "My favorite Figma workflow",
    blurb: "Components, tokens and auto‑layout patterns that scale.",
  },
];