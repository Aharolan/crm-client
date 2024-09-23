"use client";
import React from "react";
import PageTitle from "./PageTitle";
import * as Styles from "./Customers.styles";
import CustomersTable from "./CustomersTable";

const CustomersList = () => {
  return (
    <Styles.Container>
      <Styles.Row>
        <PageTitle title={"רשימת לקוחות"}></PageTitle>
        <Styles.AddCustomerButton>הוסף לקוח</Styles.AddCustomerButton>
      </Styles.Row>
      <CustomersTable></CustomersTable>
    </Styles.Container>
  );
};

export default CustomersList;
