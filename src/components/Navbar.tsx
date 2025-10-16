import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { LogoIcon } from "./Icons";
import { routeList, RouteProps, socialLinks } from "@/lib/menus";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/30 rounded-full px-6 py-3 shadow-lg shadow-black/5 dark:shadow-black/20">
        {/* Container utama dengan flex justify-between */}
        <div className="flex justify-between items-center w-full">
          
          {/* Logo - selalu di kiri */}
          <div className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="font-bold text-lg sm:text-xl flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="block">
                <LogoIcon />
              </div>
              <span className="hidden sm:block">Lyra Digital</span>
            </a>
          </div>

          {/* Desktop Navigation - di tengah */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <nav className="flex items-center gap-2">
                {routeList.map((route: RouteProps) => (
                  <NavigationMenuItem key={route.label}>
                    <a
                      rel="noreferrer noopener"
                      href={route.href}
                      className="px-5 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/60 dark:hover:bg-gray-800/60 rounded-full transition-all duration-200"
                    >
                      {route.label}
                    </a>
                  </NavigationMenuItem>
                ))}
              </nav>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Social Links & Theme Toggle - di kanan */}
          <div className="hidden md:flex items-center gap-2">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                rel="noreferrer noopener"
                href={href}
                target="_blank"
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/60 dark:hover:bg-gray-800/60 rounded-full transition-all duration-200"
                title={label}
              >
                {icon}
              </a>
            ))}
            <div className="ml-3">
              <ModeToggle />
            </div>
          </div>

          {/* Mobile Menu Trigger - selalu di pojok kanan */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="p-2 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 rounded-full transition-all duration-200">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu Icon</span>
              </SheetTrigger>

              <SheetContent side="right" className="w-80">
                <SheetHeader className="text-left">
                  <SheetTitle className="font-bold text-xl flex items-center gap-2">
                    <LogoIcon />
                    Lyra Digital Technology
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-2 mt-8">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="w-full text-left px-4 py-3 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                    >
                      {label}
                    </a>
                  ))}
                  <ModeToggle />

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 px-4">
                      Follow Us
                    </p>
                    <div className="flex gap-2 px-4">
                      {socialLinks.map(({ href, label, icon }) => (
                        <a
                          key={label}
                          rel="noreferrer noopener"
                          href={href}
                          target="_blank"
                          className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                          title={label}
                        >
                          {icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
};