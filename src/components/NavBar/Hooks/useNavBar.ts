import {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  MutableRefObject,
} from "react";
import { useRouter } from "next/router";
import { WebContext } from "../../../context/web-context";

export const useNavBar = () => {
  const [menu, setMenu] = useState(false);

  return { menu, setMenu };
};
