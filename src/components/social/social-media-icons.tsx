"use client";

import { useInView } from "motion/react";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";
import { config } from "@/data/config";
import Link from "next/link";
import { useToast } from "../ui/use-toast";

const LINK_BUTTONS = [
  {
    name: "Github",
    href: config.social.github,
    // No hardcoded color — inherits the theme's foreground color so it
    // stays visible in both light and dark mode instead of only dark.
    icon: <SiGithub size={"24"} />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <SiLinkedin size={"24"} />,
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  const { toast } = useToast();
  return (
    <div ref={ref} className="z-10 flex">
      {show && (
        <>
          {LINK_BUTTONS.map((button) => (
            <Link href={button.href} key={button.name} target="_blank">
              <Button variant={"ghost"}>{button.icon}</Button>
            </Link>
          ))}
          <Button
            variant={"ghost"}
            onClick={() => {
              navigator.clipboard.writeText(config.email);
              toast({ description: "Email copiado al portapapeles." });
            }}
          >
            <Mail size={24} />
          </Button>
        </>
      )}
    </div>
  );
};

export default SocialMediaButtons;
