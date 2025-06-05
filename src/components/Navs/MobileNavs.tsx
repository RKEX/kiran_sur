import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const MobileNavs = () => {
  return (
    <>
      <div className="flex justify-between items-center shadow-2xl p-4 bg-white sticky top-0 z-50">
        {/* Logo */}
        <div className="text-orange-500 text-xl font-bold">
          {" "}
          <a href="/">Kiran Sur</a>
        </div>

        {/* Dropdown Navigation */}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <Menu className="text-orange-500" size={32} />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-48 bg-white shadow-lg rounded-md">
              <DropdownMenuItem>
                <a
                  className="text-orange-500 font-semibold text-lg w-full"
                  href="/"
                >
                  Home
                </a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <a
                  className="text-orange-500 font-semibold text-lg w-full"
                  href="/consultation"
                >
                  Consultation
                </a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <a
                  className="text-orange-500 font-semibold text-lg w-full"
                  href="/courses"
                >
                  Courses
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default MobileNavs;
