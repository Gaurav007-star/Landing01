import React from "react";
import { Element } from "react-scroll";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import BlackLogo from "@/assets/Teni_Logo-01.png";

const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

export default function Contact() {
  return (
    <Element
      name="contact"
      id="contact"
      className="py-16 sm:py-20 h-max w-full overflow-hidden"
    >
      <div className={`${container} grid lg:grid-cols-2 gap-10 items-start`}>
        <div>
          <img src={BlackLogo} alt="Teni Logo" className="w-auto h-20 mb-8" />
          <h1 className="text-[40px] font-semibold">Let’s connect</h1>
          <h2>Just want to say hi? Drop a line.</h2>
          <div className="space-y-3 text-sm mt-5">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> teni.700121@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +91 7059179945
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Kolkata, India
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/teni-teni-341424390/"
                target="_blank"
                className="p-2 rounded-full border hover:bg-violet-700 hover:text-white hover:scale-105 transition-transform duration-500"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61580939469487"
                target="_blank"
                className="p-2 rounded-full border hover:bg-violet-700 hover:text-white hover:scale-105 transition-transform duration-500"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/teni_tech/"
                target="_blank"
                className="p-2 rounded-full border hover:bg-violet-700 hover:text-white hover:scale-105 transition-transform duration-500"
                aria-label="Instagram"
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
