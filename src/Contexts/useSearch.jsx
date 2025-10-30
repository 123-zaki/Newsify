import { createContext, useState } from "react";

export const useSearch = createContext();

export function SearchProvider({ children }) {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <useSearch.Provider value={[openSearch, setOpenSearch]}>
      {children}
    </useSearch.Provider>
  );
}
