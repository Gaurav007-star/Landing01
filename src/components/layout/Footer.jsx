import React from "react";

const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

export default function Footer() {
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
