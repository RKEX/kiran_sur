"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNavs = () => {
  const [showTools, setShowTools] = useState(false);

  return (
    <div className="shadow-2xl p-4 bg-black sticky top-0 z-50 md:hidden">
      <div className="flex justify-between items-center container mx-auto">
        {/* Logo */}
        <div className="text-orange-500 text-xl font-bold">
          <a className="flex items-center gap-2" href="/">
            <div className="border-2 font-normal border-orange-500 p-2 text-2xl">
              KS
            </div>
            <div className="antialiased text-xl">digital</div>
          </a>
        </div>

        {/* Sidebar Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <button aria-label="Open menu">
              <Menu size={32} className="text-orange-500" />
            </button>
          </SheetTrigger>

          {/* Sidebar Menu Content */}
          <SheetContent
            side="right"
            className="w-64 bg-gray-950 text-orange-500"
          >
            <SheetHeader>
              <SheetTitle className="text-orange-500 text-lg">Menu</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-4 text-lg font-semibold px-4 mt-4">
              <a href="/">Home</a>
              <a href="/blog">Blog</a>

              {/* Tools Dropdown */}
              <div>
                <button
                  className="text-left w-full "
                  onClick={() => setShowTools(!showTools)}
                >
                  Tools {showTools ? "▲" : "▼"}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-600 ease-in-out ${
                    showTools ? "max-h-96 mt-2" : "max-h-0"
                  }`}
                >
                  <div className="ml-4 flex flex-col gap-2 text-base text-orange-400">
                    <a
                      className="border border-orange-500 w-full px-5 py-2 rounded-lg"
                      href="/tools/seo"
                    >
                      SEO Analyser
                    </a>
                    <a
                      className="border border-orange-500 w-full px-5 py-2 rounded-lg"
                      href="/tools/invoice"
                    >
                      Invoice Maker
                    </a>
                    <a
                      className="border border-orange-500 w-full px-5 py-2 rounded-lg"
                      href="/tools/keywords"
                    >
                      Keywords Analyser
                    </a>
                    <a
                      className="border border-orange-500 w-full px-5 py-2 rounded-lg"
                      href="/tools/audit"
                    >
                      Site Audit Analyser
                    </a>
                  </div>
                </div>
              </div>

              <a href="/about">About Us</a>
              <a href="/contact">Contact Us</a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNavs;
