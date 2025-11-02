import React, { useState } from "react";
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
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import toast from "react-hot-toast";

const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

export default function Contact() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [captcha, setCaptcha] = useState(null);
  const [loading, setLoading] = useState(false);

  const inputValueHandler = (e) => {
    setUserDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  function CaptchaHandler(value) {
    // console.log("Captcha value:", value);
    if (value) {
      setCaptcha(value);
    }
  }

  const SubmitContactHandler = async (e) => {
    e.preventDefault();
    const data = {
      ...userDetails,
      captchaKey: captcha,
    };
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/sendmail",
        data
      );
      // console.log("Send response", response);
      toast.success(response.data?.message);
      setLoading(false);
      setUserDetails({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message);
      setLoading(false);
      // console.log(error);
    }
  };

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
          <form className="p-6 space-y-4" onSubmit={SubmitContactHandler}>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                placeholder="Your name"
                name="name"
                onChange={inputValueHandler}
                required
              />
              <Input
                placeholder="Email address"
                type="email"
                name="email"
                onChange={inputValueHandler}
                required
              />
            </div>
            <Input
              placeholder="Subject"
              name="subject"
              onChange={inputValueHandler}
              required
            />
            <Textarea
              placeholder="Write your message…"
              className="min-h-[140px]"
              name="message"
              onChange={inputValueHandler}
              required
            />
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_GOOGLE_CAPTCHA_SITE_KEY}
              onChange={CaptchaHandler}
            />

            <Button
              className="rounded-lg bg-slate-900 hover:bg-violet-700 cursor-pointer hover:scale-105 transition-transform duration-200"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </Card>
      </div>
    </Element>
  );
}
