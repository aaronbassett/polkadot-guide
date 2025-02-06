"use client";

import { PlusGridItem } from "@/components/PlusGrid";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { type FC, useState } from "react";
import ModeToggle from "./ModeToggle";
const MobileNav: FC = () => {
  return (
    <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-3">
          {/* Mobile chapters menu */}
          <div className="flex flex-col space-y-2">
            <h4 className="font-medium">Chapters</h4>
            {/* Add chapter links */}
          </div>

          {/* Mobile resources menu */}
          <div className="flex flex-col space-y-2">
            <h4 className="font-medium">Resources</h4>
            {/* Add resource links */}
          </div>
        </div>

        {/* Dark mode toggle */}
        <div className="flex items-center">
          <ModeToggle />
        </div>
      </div>
    </ScrollArea>
  );
};

const MobileNavButton: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <PlusGridItem className="navbar-end relative lg:hidden">
      <div
        className="flex size-12 items-center justify-center self-center"
        aria-label="Open main menu"
      >
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet>
      </div>
    </PlusGridItem>
  );
};

export { MobileNav, MobileNavButton };
