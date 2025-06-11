import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"; // Make sure these icons exist in lucide-react

const FooterComp = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Contact Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold border-b border-white pb-2 w-fit">
            Contact Us
          </h2>
          <p className="text-base md:text-lg">
            <span className="font-semibold">Email:</span>{" "}
            kiransurdigitalmarketing@gmail.com
          </p>
          <p className="text-base md:text-lg">
            <span className="font-semibold">Phone:</span> 9082053525
          </p>
        </div>

        {/* Follow Us Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold border-b border-white pb-2 w-fit">
            Follow Us
          </h2>
          <div className="flex gap-6 mt-3">
            <a href="#" aria-label="Facebook">
              <Facebook className="hover:text-orange-400 transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="hover:text-orange-400 transition" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="hover:text-orange-400 transition" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="hover:text-orange-400 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-600 pt-6">
        © {new Date().getFullYear()} Kiran Sur Digital Marketing. All rights
        reserved.
      </div>
    </footer>
  );
};

export default FooterComp;
