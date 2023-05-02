"use client";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";

export const useNavBar = () => {
  const [menu, setMenu] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const router = useRouter();
  const path = usePathname();
  const goBack = () => {
    router.back();
  };

  const goTop = (e: MouseEvent<HTMLAnchorElement>) => {
    console.log("=======>");
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    if (path !== "/") {
      return setIsHome(false);
    }
    return setIsHome(true);
  }, [path]);

  return { menu, setMenu, isHome, goBack, goTop };
};
