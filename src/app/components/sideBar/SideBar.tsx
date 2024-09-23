import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Styles from "./SideBar.styles";
import StudentsButtons from "./StudentsButtons";
import GraduatesButtons from "./GraduatesButtons";
import CandidatesButtons from "./CandidatesButtons";

const sidebarButtons = {
  candidates: "מועמדים",
  graduates: "בוגרים",
  students: "תלמידים",
};

export const LinkButton = ({
  link,
  name,
  isSubButton,
  isPressed,
  color,
  fontSize,
  isMenu,
}: {
  link: string;
  name: string;
  isSubButton?: boolean;
  isPressed?: boolean;
  color?: string;
  fontSize?: string;
  isMenu?: boolean;
}) => {
  return (
    <Styles.LinkWrapper
      $sub={isSubButton ? "true" : ""}
      $menu={isMenu ? "true" : ""}
    >
      <Link href={link} style={{ textDecoration: "none" }}>
        <Styles.StyledLink
          $sub={isSubButton ? "true" : ""}
          $pressed={isPressed ? "true" : ""}
          $color={color}
          $fontsize={fontSize}
        >
          {name}
        </Styles.StyledLink>
      </Link>
    </Styles.LinkWrapper>
  );
};

const SideBar = () => {
  const [subButtons, setSubButtonsStates] = useState<{
    [key: string]: boolean;
  }>({
    [sidebarButtons.candidates]: false,
    [sidebarButtons.graduates]: false,
    [sidebarButtons.students]: false,
  });

  const userRole = sessionStorage.getItem("user_role");
  const pathname = usePathname();

  const buttons = [
    {
      id: 1,
      buttonName: sidebarButtons.candidates,
      url: "/candidates",
      subButtonsURLs: ["/sorting-days"],
      button: <CandidatesButtons currentURL={pathname} />,
    },
    {
      id: 2,
      buttonName: sidebarButtons.students,
      url: "/students",
      button: <StudentsButtons currentURL={pathname} />,
      subButtonsURLs: [
        "/students/classes",
        "/students/courses",
        "/students/students_list",
        "/students/grades",
        "/students/feedbacks",
      ],
    },
    {
      id: 3,
      buttonName: sidebarButtons.graduates,
      url: "/graduates",
      button: <GraduatesButtons currentURL={pathname} />,
      subButtonsURLs: [
        "/graduates/interviews",
        "/graduates/customers",
        "/graduates/graduatesList",
        "/graduates/InterviewsCandidates",
      ],
    },
  ];

  useEffect(() => {
    const activeButton = buttons.find((button) => {
      return (
        pathname === button.url ||
        (button.subButtonsURLs && button.subButtonsURLs.includes(pathname))
      );
    });

    if (activeButton) {
      setSubButtonsStates((prev) => ({
        ...prev,
        [activeButton.buttonName]: true,
      }));
    }

    const activeButtonName = activeButton ? activeButton.buttonName : null;
    closeOtherSubButtons(activeButtonName ? activeButtonName : "");
  }, [pathname]);

  const closeOtherSubButtons = (buttonName: string) => {
    Object.keys(subButtons).forEach((key) => {
      if (key !== buttonName) {
        setSubButtonsStates((prev) => ({
          ...prev,
          [key]: false,
        }));
      }
    });
  };

  return (
    <Styles.Sidebar>
      {buttons.map((mainButton) => {
        const { id, buttonName, url, button, subButtonsURLs } = mainButton;
        return (
          <React.Fragment key={id}>
            <Styles.Button
              isPressed={
                !!(pathname === url || subButtonsURLs?.includes(pathname))
              }
            >
              <LinkButton link={url} name={buttonName} />
              <Styles.ArrowIconsWrapper
                onClick={(e) => {
                  e.preventDefault();
                  setSubButtonsStates((prev) => ({
                    ...prev,
                    [buttonName]: !prev[buttonName],
                  }));
                }}
              >
                {subButtons[buttonName] ? (
                  <Styles.ArrowDownIcon />
                ) : (
                  <Styles.ArrowBackIcon />
                )}
              </Styles.ArrowIconsWrapper>
            </Styles.Button>
            {subButtons[buttonName] && button}
          </React.Fragment>
        );
      })}
      {userRole === "מנהל" && (
        <Styles.Button isPressed={pathname === "/users"} key={"לרשימת משתמשים"}>
          <LinkButton link={"/users"} name={"לרשימת משתמשים"} isMenu={true} />
        </Styles.Button>
      )}
    </Styles.Sidebar>
  );
};

export default SideBar;
