import { SidebarLink } from "@/components/SidebarItems";
import { Cog, Globe, HomeIcon, Package, ShoppingCart } from "lucide-react";

type AdditionalLinks = {
  // title: string;
  links: SidebarLink[];
};

export const defaultLinks: SidebarLink[] = [
  { href: "/dashboard", title: "Home", icon: HomeIcon },
  { href: "/account", title: "Account", icon: Cog },
  { href: "/settings", title: "Settings", icon: Cog },
];

export const additionalLinks: AdditionalLinks[] = [
  {
    // title: "Entities",
    links: [
      {
        href: "/dashboard",
        title: "Home",
        icon: HomeIcon,
      },
      {
        href: "/cat-products",
        title: "Cat Products",
        icon: Package,
      },
      {
        href: "/page-links",
        title: "Page Links",
        icon: Globe,
      },
      {
        href: "/pages",
        title: "Pages",
        icon: Globe,
      },
    ],
  },

];

