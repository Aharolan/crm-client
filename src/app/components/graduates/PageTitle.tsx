"use client";

import React from "react";
import * as Styles from "./Customers.styles";

type PageTitleProps = {
  title: string;
};

const PageTitle = (props: PageTitleProps) => {
  return <Styles.TableCaption>{props.title}</Styles.TableCaption>;
};

export default PageTitle;
