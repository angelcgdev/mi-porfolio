import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useHeader = () => {
  const [isHome, setIsHome] = useState(true);
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const goTop = () => {
    router.push("", undefined, { scroll: false });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (router.asPath.includes("/#") || router.asPath === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [router.asPath]);

  return { goBack, goTop, isHome };
};
