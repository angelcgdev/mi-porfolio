"use client";
import { usePathname, useRouter, useParams } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";

export const useNavBar = () => {
  const [menu, setMenu] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const router = useRouter();
  const path = usePathname();
  const params = useParams();
  const goBack = () => {
    router.back();
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function getSubpathWithoutLang(path: string) {
    const regex = new RegExp(`^\/[a-zA-Z_]+(.*)$`);
    const match = path.match(regex);
    if (match) {
      return match[1].length !== 0 ? match[1] : "/";
    } else {
      return "/";
    }
  }
  useEffect(() => {
    console.log(path);
    const pathWithOutLang = getSubpathWithoutLang(path ?? "");
    console.log(pathWithOutLang);
    if (pathWithOutLang !== "/") {
      return setIsHome(false);
    }
    return setIsHome(true);
  }, [path]);

  return { menu, setMenu, isHome, goBack, goTop };
};
