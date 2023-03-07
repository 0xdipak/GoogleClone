import { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
  const [imsgeSearch, setImageSearch] = useState(false);

  return (
    <Context.Provider
      value={{
        imsgeSearch,
        setImageSearch,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
