import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import clsx from "clsx";
import WhiteLogo from "@/assets/Teni_Logo-04.png";
import { AnimatePresence, motion } from "framer-motion";

const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Profile", href: "/profile" },
];

const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

export default function Nav({ sticky = true }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header
      className={clsx(
        "top-5 z-40 w-full h-max text-violet-700 py-4 max-[450px]:py-0"
      )}
    >
      <div
        className={`${container} flex items-center justify-between !px-20 max-[450px]:!px-5 py-6 rounded-full max-[450px]:rounded-none bg-violet-700 backdrop-blur-lg text-white`}
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
              className="hover:scale-105 transition-transform duration-200 cursor-pointer text-[24px]"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <ScrollLink to="contact" smooth={true} duration={500}>
          <Button className="rounded-full p-6 cursor-pointer text-[20px] bg-white hover:bg-black hover:text-white text-black hover:scale-105  transition-transform duration-200 max-[450px]:hidden">
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

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden border-t bg-white overflow-hidden"
          >
            <div className={`${container} py-3 grid gap-2 text-[20px]`}>
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

            <ScrollLink to="contact" smooth={true} duration={500}>
              <div className="px-5 w-full h-max ">
                <Button className="rounded-full w-full h-max p-4 cursor-pointer text-[20px] bg-violet-700 text-white hover:scale-105 transition-transform duration-200">
                  Contact
                </Button>
              </div>
            </ScrollLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
