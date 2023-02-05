import { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <MenuContext.Provider value={{ isOpen, open, close }}>
      {children}
    </MenuContext.Provider>
  );
};
