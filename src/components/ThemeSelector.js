import { useTheme } from "../hooks/useTheme";
import modeIcon from "../assets/mode-icon.svg";

export default function ThemeSelector() {
  const { changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  return (
    <div className="w-6 h-6 m-0.5">
      <img
        onClick={toggleMode}
        src={modeIcon}
        alt="dark/light toggle icon"
        style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
      />
    </div>
  );
}
