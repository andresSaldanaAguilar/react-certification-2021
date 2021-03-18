import React, { createContext, useContext, useState } from 'react';

const SearchStateContext = createContext();
const SearchDispatchContext = createContext();

function Search({ children }) {
  const [search, setSearch] = useState('');
  return (
    <SearchStateContext.Provider value={search}>
      <SearchDispatchContext.Provider value={setSearch}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchStateContext.Provider>
  );
}
function useSearchState() {
  const context = useContext(SearchStateContext);
  if (context === undefined) {
    throw new Error('useSearchState must be used within a Search');
  }
  return context;
}
function useSearchDispatch() {
  const context = useContext(SearchDispatchContext);
  if (context === undefined) {
    throw new Error('useSearchDispatch must be used within a Search');
  }
  return context;
}
export { Search, useSearchState, useSearchDispatch };
