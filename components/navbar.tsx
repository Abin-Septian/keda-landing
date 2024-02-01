import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import Link from "next/link";
import { AlignJustify, Palette } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import LoginCard from "./loginCard";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 w-screen bg-white transition-all duration-700 ${isScrolled ? "bg-opacity-100 shadow" : "bg-opacity-0"}`}
    >
      <div className="m-auto flex w-full max-w-screen-xl justify-between p-4">
        <Link href={"#home"} className="flex items-center gap-3">
          <div>
            <Palette size={40} />
          </div>
          <div className="hidden text-lg font-semibold tracking-wider md:block">
            HOME
          </div>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <Link href={"#about"}>
            <div className="p-3 text-lg font-semibold uppercase">About</div>
          </Link>
          <Link href={"#pricing"}>
            <div className="p-3 text-lg font-semibold uppercase">Pricing</div>
          </Link>
          <Link href={"#contact"}>
            <div className="p-3 text-lg font-semibold uppercase">Contact</div>
          </Link>
          <Button
            className="w-32 border-sky-400 text-sky-400"
            variant={"outline"}
            onClick={() => setIsOpen(true)}
          >
            Login
          </Button>
        </div>
        <div className="inline-block md:hidden">
          <Drawer>
            <DrawerTrigger>
              <AlignJustify />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Menu</DrawerTitle>
              </DrawerHeader>
              <div className="flex flex-col space-y-1 divide-y text-center">
                <Link href={"#about"}>
                  <DrawerTrigger className="p-3">About</DrawerTrigger>
                </Link>
                <Link href={"#pricing"}>
                  <DrawerTrigger className="p-3">Pricing</DrawerTrigger>
                </Link>
                <Link href={"#contact"}>
                  <DrawerTrigger className="p-3">Contact</DrawerTrigger>
                </Link>
              </div>

              <DrawerFooter>
                <Link href={"/login"} className="w-full">
                  <Button className="w-full">Login</Button>
                </Link>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={() => setIsOpen(!open)}>
        <DialogContent>
          <DialogHeader>
            <div className="py-6">
              <LoginCard />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Navbar;
