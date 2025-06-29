import React, {createContext, useState, useContext} from 'react';

type UserContextType = {
  avatar: string | null;
  setAvatar: (avatar: string | null) => void;
  name: string;
  setName: (name: string) => void;
};

const UserContext = createContext<UserContextType>({
  avatar: null,
  setAvatar: () => {},
  name: 'John',
  setName: () => {},
});

export const UserProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [name, setName] = useState('John');
  return (
    <UserContext.Provider value={{avatar, setAvatar, name, setName}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
