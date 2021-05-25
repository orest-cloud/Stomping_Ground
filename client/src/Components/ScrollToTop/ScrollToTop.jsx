import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {

    // Only scroll to top if link is clicked. NOT back/forward buttons
    if (history.action === "PUSH") {
      window.scrollTo(0, 0);
    }
    
  }, [pathname, history]);

  return null;
}