import React from "react";
import * as Styles from "./SideBar.styles";
import { LinkButton } from "./SideBar";

interface Button {
  id: number;
  buttonName: string;
  url: string;
}

interface GenericButtonsProps {
  buttons: Button[];
  currentURL: string;
}

const GenericSideBarButtons: React.FC<GenericButtonsProps> = ({ buttons, currentURL }) => {
  return buttons.map((button) => {
    const { id, buttonName, url } = button;

    return (
      <Styles.SubButton key={id} isPressed={currentURL === url}>
        <LinkButton
          link={url}
          name={buttonName}
          isSubButton={true}
          isPressed={currentURL === url}
        />
      </Styles.SubButton>
    );
  });
};

export default GenericSideBarButtons;
