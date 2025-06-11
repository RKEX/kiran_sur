"use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const DesktopNavs = () => {
  const [open, setOpen] = useState(false);

  const underlineHover =
    "relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <div className="shadow-2xl p-4 bg-black border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-orange-500 text-xl font-bold">
          <a className="flex items-center gap-2" href="/">
            <div className="border-2 font-normal border-orange-500 p-2">KS</div>
            <div className="antialiased text-lg">digital</div>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-10 items-center">
          <a
            className={`text-orange-500 font-semibold text-lg ${underlineHover}`}
            href="/"
          >
            Home
          </a>
          <a
            className={`text-orange-500 font-semibold text-lg ${underlineHover}`}
            href="/consultation"
          >
            Blog
          </a>

          {/* Tools Menu with Hover + Click */}
          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger asChild>
                <button
                  className={`text-left text-orange-500 text-lg font-semibold ${underlineHover} focus:outline-none focus-visible:outline-none`}
                  onClick={() => setOpen((prev) => !prev)}
                >
                  Tools ▾
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mt-3 bg-black shadow-xl rounded-md">
                <DropdownMenuItem>
                  <a
                    href="/tools/seo"
                    className={`w-full text-lg text-orange-500 font-semibold ${underlineHover}`}
                  >
                    SEO Analyser
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a
                    href="/tools/invoice"
                    className={`w-full text-lg text-orange-500 font-semibold ${underlineHover}`}
                  >
                    Invoice Maker
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a
                    href="/tools/seo"
                    className={`w-full text-lg text-orange-500 font-semibold ${underlineHover}`}
                  >
                    Keywords Analyser
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a
                    href="/tools/seo"
                    className={`w-full text-lg text-orange-500 font-semibold ${underlineHover}`}
                  >
                    Site Audit Analyser
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <a
            href="/about"
            className={`text-orange-500 text-lg font-semibold ${underlineHover}`}
          >
            About Us
          </a>
          <a
            href="/contact"
            className={`text-orange-500 text-lg font-semibold ${underlineHover}`}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavs;
