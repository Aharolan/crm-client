"use client";

import TopNav from "./TopNav";
import SideBar from "./components/sideBar/SideBar";
import React, {useEffect, useState} from "react";
import * as Styles from "./layout.style";
import PopLogin from "./components/login/popupLogin";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [firstName, setFirstName] = useState<string>("");
  const [needLogin, setNeedLogin] = useState<boolean>(false);

  useEffect(() => {
    // Ensure the code runs only on the client side
    if (typeof window !== "undefined") {
      const storedFirstName = sessionStorage.getItem("user_first_name") || "";
      setFirstName(storedFirstName);
      setNeedLogin(storedFirstName === "");
    }
  }, []);

  // let firstName = sessionStorage.getItem("user_first_name") || "";
  // const [needLogin, setNeedLogin] = useState(firstName === "");
  const onClose = () => {
    setNeedLogin(false);
  };

  return (
    <html lang="en">
      <body>
        <Styles.Size>
          <Styles.Container>
            <TopNav />
            <Styles.Warper>
              <SideBar />
              <Styles.Main>
                {needLogin ? <PopLogin onClose={onClose} /> : children}
              </Styles.Main>
            </Styles.Warper>
          </Styles.Container>
        </Styles.Size>
      </body>
    </html>
  );
}
