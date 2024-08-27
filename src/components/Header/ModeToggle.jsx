import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../store/theme";
import { useEffect } from "react";

export function ModeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  // Update the theme class and save to local storage on theme change
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Sun
            className={`transition-all duration-300 ${
              theme === "dark" ? "opacity-0 scale-0" : "opacity-100 scale-100"
            }`}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <Moon
            className={`transition-all duration-300 ${
              theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => dispatch(lightTheme())}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => dispatch(darkTheme())}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
