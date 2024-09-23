"use client";
import React from "react";
import * as Styles from "./Customers.styles";

export interface Customer {
  id?: string;
  companyName: string;
  address: string;
  contact: string;
}

const CustomerRow = ({ customerData }: { customerData: Customer }) => {
  const { id, companyName, address, contact } = customerData;

  return (
    <Styles.CustomerWrapper>
      <Styles.CustomerField>
        <Styles.button>כרטיס לקוח</Styles.button>
      </Styles.CustomerField>
      <Styles.CustomerField>{contact}</Styles.CustomerField>
      <Styles.CustomerField>{address}</Styles.CustomerField>
      <Styles.CustomerField>{companyName}</Styles.CustomerField>
    </Styles.CustomerWrapper>
  );
};

export default CustomerRow;
