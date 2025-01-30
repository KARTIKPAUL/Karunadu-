import React, { createContext, useState, useEffect } from 'react'; 
import { jwtDecode } from 'jwt-decode';  // Corrected import for jwt-decode
import Cookies from 'js-cookie';  // Import the js-cookie library

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // To show loading until we verify the token

  // Check for token and user data in cookies when the component mounts
  useEffect(() => {
    const token = Cookies.get('token');
    const storedUser = Cookies.get('user');

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Current time in seconds

        // Check if token is expired
        if (decodedToken.exp < currentTime) {
          logout(); // Token is expired, log out the user
        } 
        else {
          setUser(decodedToken);  // Set user info from the decoded token
        }
      } catch (error) {
        console.error("Invalid token", error);
        logout(); // Logout in case of invalid token
      }
    }

    setLoading(false); // Set loading to false after the check is complete
  }, []);

  const login = (token) => {
    Cookies.set('token', token, { expires: 7 });  // Set the token in cookies with an expiration of 7 days

    try {
      const decodedToken = jwtDecode(token);
      console.log("Decoded Token:", decodedToken);
      setUser(decodedToken)
      console.log(decodedToken)
    } catch (error) {
      console.error("Invalid token provided during login", error);
    }
  };

  const logout = () => {
    Cookies.remove('token');  // Remove the token from cookies
    setUser(null);
  };

  if (loading) {
    return <div>Loading...</div>; // Render a loading state until token is checked
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
