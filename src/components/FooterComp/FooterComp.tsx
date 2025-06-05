import { Facebook, Instagram, TwitterIcon, LinkedinIcon } from "lucide-react";

const FooterComp = () => {
  return (
    <footer className="bg-black text-white px-6 py-8">
      <div className=" lg:flex justify-between items-center   ">
        {/* Contact Section */}
        <div className="space-y-3">
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
        <div className="py-3">
          <h2 className="text-2xl font-bold border-b border-white pb-2 w-fit">
            Follow Us
          </h2>
          <div className="flex gap-4 mt-5">
            <a href="#" aria-label="Facebook">
              <Facebook className="text-white hover:text-orange-400" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="text-white hover:text-orange-400" />
            </a>
            <a href="#" aria-label="Twitter">
              <TwitterIcon className="text-white hover:text-orange-400" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <LinkedinIcon className="text-white hover:text-orange-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} Kiran Sur Digital Marketing. All rights
        reserved.
      </div>
    </footer>
  );
};

export default FooterComp;
