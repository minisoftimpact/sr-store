import { useState } from "react";
import { NavigationContext } from "../context";

function NavigationProvider({ children }) {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <NavigationContext.Provider value={{ activeNav, setActiveNav }}>
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationProvider;
