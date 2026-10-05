import { useEffect } from "react";

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} — Agri Scale Solutions`
      : "Agri Scale Solutions — Websites, branding, and herd records";
  }, [title]);
}
