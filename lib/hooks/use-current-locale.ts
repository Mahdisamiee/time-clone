import { useState, useEffect } from "react";

const useCurrentLocale = () => {
  const [currentLocale, setCurrentLocale] = useState("");

  useEffect(() => {
    // This runs after the component is mounted on the client side
    setCurrentLocale(document.documentElement.lang);
    console.log(document.documentElement.lang);
  }, []);

  return currentLocale
};

export default useCurrentLocale;
