import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../contexts/UserContext";

import AppNav from "./AppNav";
import HomeNav from "./HomeNav";

export default function Header() {
  const user = useContext(UserContext);
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (user.user !== null) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [user.user]);
  return isLoggedIn ? <AppNav /> : <HomeNav />;
}
