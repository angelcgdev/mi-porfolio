import { DarkBtn } from "../../DarkButton/DarkButton";
import { MenuButton } from "./MenuButton";

export const MobileMainOptions = ({
  open,
  onChange,
}: {
  open: boolean;
  onChange: () => void;
}) => {
  return (
    <ul className="flex flex-row gap-2">
      <li>
        <DarkBtn />
      </li>
      <li className="md:hidden">
        <MenuButton onClick={onChange} open={open} />
      </li>
    </ul>
  );
};
