import { DarkBtn } from "../../DarkButton/DarkButton";

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
        <button role="menu" onClick={onChange} aria-label="menu bar button">
          <div id="toogle" className={open ? "active" : ""}></div>
        </button>
      </li>
    </ul>
  );
};
