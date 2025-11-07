import React from "react";
import { createContext, useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";




export const UserContext = createContext();
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) { // user already set from login
        setLoading(false);
        return;
    }

        const accessToken = localStorage.getItem("token");
        if (!accessToken) {
            setLoading(false);
            return;
        }
        const fetchUser = async () => {
            try {
                const response = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE);
                setUser(response.data.user || response.data);
            } catch (error) {
                console.error("User not authenticated", error);
                clearUser();
            }
            finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    // 👇 ADD THIS DEBUG EFFECT
  useEffect(() => {
    console.log("USER CONTEXT STATE:", { user, loading });
  }, [user, loading]);

  // ✅ END OF DEBUG SECTION

    const updateUser = (userData) => {
        setUser(userData);
        localStorage.setItem("token", userData.token);
        setLoading(false);
    }
    const clearUser = () => {
        setUser(null);
        localStorage.removeItem("token");
        setLoading(false);
    }
    return (
        <UserContext.Provider value={{ user, loading, updateUser, clearUser }}>
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;