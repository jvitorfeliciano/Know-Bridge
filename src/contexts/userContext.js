import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext();

export default UserContext;

export function UserProvider({ children }) {
    const [userData, setUserData] = useLocalStorage("userData");
    const [update, setUpdate] =  useState(false);

    return <UserContext.Provider value={{ userData, setUserData, setUpdate, update }}>{children}</UserContext.Provider>;
}
