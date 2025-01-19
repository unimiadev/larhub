import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
