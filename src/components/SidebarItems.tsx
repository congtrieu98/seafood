"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { HomeIcon, LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { defaultLinks, additionalLinks } from "@/config/nav";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export interface SidebarLink {
  title: string;
  href: string;
  icon: LucideIcon;
}

const SidebarItems = () => {
  return (
    <>
      {/* <SidebarLinkGroup links={defaultLinks} /> */}
      {additionalLinks.length > 0
        ? additionalLinks.map((l, index) => (
          <SidebarLinkGroup
            links={l.links}
            // title={l.title}
            key={index}
          />
        ))
        : null}
    </>
  );
};
export default SidebarItems;

const SidebarLinkGroup = ({
  links,
  // title,
  border,
}: {
  links: SidebarLink[];
  // title?: string;
  border?: boolean;
}) => {
  const fullPathname = usePathname();
  const pathname = "/" + fullPathname.split("/")[1];

  return (
    <ul className="space-y-1">
      {links.map((link) => (
        <li key={link.title}>
          <Tooltip>
            <TooltipTrigger asChild>
              <SidebarLink link={link} active={pathname === link.href} />
            </TooltipTrigger>
            <TooltipContent side="right">{link.title}</TooltipContent>
          </Tooltip>
        </li>
      ))}
    </ul>
  );
};
const SidebarLink = ({
  link,
  active,
}: {
  link: SidebarLink;
  active: boolean;
}) => {
  return (
    <Link
      href={link.href}
      className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:h-8 md:w-8 ${active ? "bg-accent" : ""}`}
    >
      <link.icon className="h-5 w-5" />
    </Link>
    // <Link
    //   href={link.href}
    //   className={`group transition-colors p-2 inline-block hover:bg-popover hover:text-primary text-muted-foreground text-xs hover:shadow rounded-md w-full${active ? " text-primary font-semibold" : ""
    //     }`}
    // >
    //   <div className="flex items-center">
    //     <div
    //       className={cn(
    //         "opacity-0 left-0 h-6 w-[4px] absolute rounded-r-lg bg-primary",
    //         active ? "opacity-100" : "",
    //       )}
    //     />
    //     <link.icon className="h-3.5 mr-1" />
    //     <span>{link.title}</span>
    //   </div>
    // </Link>
  );
};
