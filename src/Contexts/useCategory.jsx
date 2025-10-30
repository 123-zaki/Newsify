import { createContext, useState } from "react";

export const useCategory = createContext();

export function CategoryProvider({ children }) {
  const [category, setCategory] = useState("general");

  return (
    <useCategory.Provider value={[category, setCategory]}>
      {children}
    </useCategory.Provider>
  );
}
