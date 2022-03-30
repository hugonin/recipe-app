import { useTheme } from "../hooks/useTheme";

export default function Footer() {
  const { mode } = useTheme();
  return (
    <footer
      className={`footer footer-center p-4 ${mode} bg-primary text-accent`}
    >
      <div>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by JHDK Web Design</p>
      </div>
    </footer>
  );
}
