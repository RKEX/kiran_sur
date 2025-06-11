"use client";
import { useState, useEffect } from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { IconCloud } from "@/components/magicui/icon-cloud";
import Image from "next/image";
import { Meteors } from "@/components/magicui/meteors";

const awards = [
  {
    src: "/l1.png",
    title: "AdAge",
    subtitle: "Recognized for Workplace Excellence",
    bg: "bg-[#FF5A29]",
  },
  {
    src: "/pmw.png",
    title: "PMW",
    subtitle: "Awarded as a Top Performing Agency",
    bg: "bg-[#E44A12]",
  },
  {
    src: "/google.png",
    title: "Google",
    subtitle: "A Certified Google Premier Partner Agency",
    bg: "bg-[#D84710]",
  },
  {
    src: "/campaign.png",
    title: "Campaign",
    subtitle: "Recognized as Global Industry Leader",
    bg: "bg-[#FF6A2B]",
  },
  {
    src: "/inc.png",
    title: "Inc.",
    subtitle: "Celebrated for Exceptional Work Culture",
    bg: "bg-[#FF5A29]",
  },
];

const slugs = [
  "google",
  "meta",
  "youtube",
  "facebook",
  "instagram",
  "linkedin",
  "googleads",
  "googleanalytics",
  "mailchimp",
  "hubspot",
  "tiktok",
  "x",
];

export default function Page() {
  const [typingKey, setTypingKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingKey((prev) => prev + 1);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`);

  return (
    <div className="grid place-items-center">
      {/* Hero Section */}
      <div className="bg-[url('/banner.jpg')] bg-no-repeat bg-center bg-cover w-full">
        <div className="bg-black/70 h-full w-full flex items-center px-4 py-10">
          <div className="container mx-auto text-white text-center lg:text-left">
            <div className="w-full mx-auto lg:mx-0">
              <TextAnimate
                once
                className="text-3xl lg:text-6xl font-bold leading-tight "
                animation="slideLeft"
                by="word"
                duration={2}
              >
                Empowering Your Digital Marketing Journey with Precision and
                Performance.
              </TextAnimate>
            </div>
            <div className="h-1 w-24 lg:w-48 bg-orange-500 my-6 mx-auto lg:mx-0" />
            <div className="w-[90vw] lg:max-w-[65vw] mx-auto lg:mx-0">
              <TextAnimate
                className="sm:text-xl  lg:text-2xl font-semibold"
                animation="blurInUp"
                by="word"
                once
              >
                We power digital marketing with precision and performance. As a
                full-service digital marketing agency, we help brands — big and
                small — connect meaningfully with their audience across today’s
                complex digital landscape. Leveraging AI-driven strategies, we
                are built for speed and efficiency, adapting seamlessly to the
                ever-evolving demands of modern consumers.
              </TextAnimate>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition">
                Learn more
              </button>
              <button className="text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-md font-medium transition">
                Join us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Award Section */}
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`${award.bg} flex flex-col items-center justify-center p-6 sm:py-10 h-48 sm:h-60 lg:h-64`}
            >
              <Image
                src={award.src}
                alt={award.title}
                width={160}
                height={70}
                className="mb-3"
              />
              <p className="text-black text-xl font-medium text-center leading-tight">
                {award.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tagline Section */}
      <div className="lg:pt-24 pt-12 bg-gray-100 w-full">
        <div className="text-orange-500 font-bold text-xl text-center">
          KS digital
        </div>
        <div className="pb-6 flex-col flex mt-6 gap-6 lg:px-5 px-2 text-center">
          <TypingAnimation
            key={typingKey}
            className="text-black text-3xl text-center lg:text-6xl font-bold"
          >
            We embrace ownership.
          </TypingAnimation>
          <p className="text-center text-xl lg:text-4xl font-semibold text-black">
            Redefining what an agency should be.
          </p>
        </div>
        <div className="flex justify-center">
          <hr className="h-1 w-24 lg:w-48 bg-orange-500 mb-6 mx-auto" />
        </div>
        <div className="px-6 mb-6 text-center lg:text-2xl">
          <p>
            We’re a full-service global digital marketing agency — created by
            marketers, for marketers. From scrappy startups to enterprise
            powerhouses, <br className="hidden lg:block" />
            we fuel growth through strategic support, expert insights, and
            next-gen technology.
          </p>
        </div>
      </div>

      {/* Tool Cards */}
      <div className="bg-gray-100 w-full py-6 px-6 lg:px-12 flex flex-wrap justify-center gap-6">
        {[
          {
            title: "SEO Analyzer",
            desc: "Boost your website’s visibility with our powerful SEO Analyzer. Uncover technical issues, keyword gaps, and optimization opportunities in seconds. Upgrade your rankings — get the tool trusted by marketers who want real results.",
          },
          {
            title: "Keyword Analyzer",
            desc: "Discover high-performing keywords and uncover hidden ranking opportunities. Our tool helps you dominate search results with accurate data, keyword trends, and competitor analysis — all in one place.",
          },
          {
            title: "Site Audit Analyzer",
            desc: "Run in-depth audits to identify broken links, performance issues, and technical SEO errors. Optimize your site health for better speed, usability, and search visibility — effortlessly.",
          },
          {
            title: "Invoice Maker",
            desc: "Create professional invoices in minutes. Customize, send, and track payments with ease using our intuitive tool — perfect for freelancers, agencies, and businesses of all sizes.",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-2xl p-6 w-full sm:w-[320px]"
          >
            <div className="flex justify-center items-center mb-3">
              <div className="border-2 border-orange-500 text-orange-500 p-2 text-2xl font-bold">
                KS
              </div>
              <div className="ml-2 text-orange-500 text-xl">digital</div>
            </div>
            <div className="text-2xl font-bold text-center mb-2">
              {card.title}
            </div>
            <p className="text-gray-700 text-sm text-center">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Icon Cloud Section */}
      <div className="relative flex bg-black w-full flex-col items-center justify-center overflow-hidden border-b">
        <Meteors number={30} />
        <div className="w-full text-white px-4 py-24">
          <div className="max-w-7xl mx-auto text-center mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Trusted by Global Digital Leaders
            </h2>
            <p className="text-lg md:text-xl font-medium text-white/90 max-w-2xl mx-auto">
              We collaborate with industry-leading platforms to deliver the best
              results in digital marketing.
            </p>
          </div>

          <div className="relative flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[400px]">
            <IconCloud images={images} />
          </div>

          <div className="mt-12 text-center px-4">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Powering growth with global technology leaders.
            </h3>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              From Google and Meta to HubS
pot and TikTok — our integrated
              strategies and partnerships deliver measurable outcomes that move
              your business forward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 
