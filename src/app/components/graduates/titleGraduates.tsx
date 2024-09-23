"use client";

import * as Styles from "../users/UsersTable.styles";

type TitleGraduatesProps = {
  title: string;
};

const TitleGraduates = (props: TitleGraduatesProps) => {
  return <Styles.TableCaption>{props.title}</Styles.TableCaption>;
};

export default TitleGraduates;
