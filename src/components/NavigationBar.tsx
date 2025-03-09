import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { IceCream, Menu } from "lucide-react";

interface NavigationBarProps {
  menuItems?: Array<{
    label: string;
    href: string;
    subItems?: Array<{
      label: string;
      href: string;
      description?: string;
    }>;
  }>;
}

const NavigationBar = ({
  menuItems = [
    { label: "Home", href: "/" },
    { label: "About & Technology", href: "/about" },
    { label: "Locations", href: "/locations" },
    { label: "Contact", href: "/contact" },
  ],
}: NavigationBarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D] transition-all duration-300",
        isScrolled
          ? "bg-opacity-90 backdrop-blur-sm shadow-md"
          : "bg-opacity-100",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center space-x-2">
              <img src="/robocream-logo.png" alt="RoboCream" className="h-12" />
              <span className="text-xl font-bold text-white">RoboCream</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger>
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-3 p-4 w-[400px]">
                            {item.subItems.map((subItem) => (
                              <li key={subItem.label} className="row-span-3">
                                <NavigationMenuLink asChild>
                                  <a
                                    href={subItem.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#59D1C5]/20 hover:text-white focus:bg-[#59D1C5]/20 focus:text-white"
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {subItem.label}
                                    </div>
                                    {subItem.description && (
                                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        {subItem.description}
                                      </p>
                                    )}
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors hover:text-[#59D1C5] hover:border-b-2 hover:border-[#59D1C5] focus:text-[#59D1C5] focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        >
                          {item.label}
                        </a>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
