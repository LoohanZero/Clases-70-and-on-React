import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [userID, setUserID] = useState();

  const handleUserClick = (event) => {
    setUserID(`${event.target.id}`);
  };


return <UserContext.Provider value={{userID, handleUserClick}}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;

