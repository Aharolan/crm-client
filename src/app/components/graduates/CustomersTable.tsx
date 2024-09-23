"use client";
import React, { useState } from "react";
import * as Styles from "./GenericTable/Buttons.Styles";
import Table from "./GenericTable/table";
import AddCustomer from "./AddCustomerPopup";
import CompanyCard from "./ClientCard";

const CustomersTable = () => {
  const [isOpen, setIsOpen] = useState<string>("");
  const [clientId, setClientId] = useState<number>(-1);
  const [shouldUpdateTable, setShouldUpdateTable] = useState<number>(0);

  const ClientCardButton: React.FC<{
    id: number;
    name: string;
    buttonName: string;
  }> = ({ id, buttonName }) => (
    <Styles.Button
      onClick={() => {
        setIsOpen(`${buttonName}${id}`);
        setClientId(id);
      }}
    >
      {buttonName}
    </Styles.Button>
  );

  const ClientCardPopup: React.FC = () => (
    <CompanyCard
      id={String(clientId)}
      onClose_={() => {
        setIsOpen("");
      }}
      onSave={handleSave}
    />
  );

  const AddCustomerButton: React.FC = () => (
    <Styles.AddButton
      onClick={() => {
        setIsOpen("showAddCustomer");
        setClientId(-1);
      }}
    >
      {"הוסף לקוח"}
    </Styles.AddButton>
  );

  const CustomerAdder: React.FC = () => (
    <AddCustomer
      id={String(clientId)}
      closePopup={() => {
        setIsOpen("");
        setClientId(-1);
      }}
      refreshTable={handleSave}
    />
  );

  const handleSave = () => {
    setShouldUpdateTable((prev) => prev + 1);
  };

  return (
    <Table
      key={shouldUpdateTable}
      pageTableHeader="רשימת לקוחות"
      tableHeaders={[
        { name: "" },
        { name: "איש קשר", sort: "contact_name" },
        { name: "כתובת", sort: "address" },
        { name: "שם הלקוח", sort: "company_name" },
      ]}
      addButton={{
        name: "הוסף לקוח",
        button: AddCustomerButton,
        popup: CustomerAdder,
        openPopup: () => setIsOpen("showAddCustomer"),
        isPopupOpen: isOpen,
        updateTable: handleSave,
      }}
      tableNameToFetch="customers"
      buttons={[
        {
          name: "כרטיס לקוח",
          component: ClientCardButton,
          popup: ClientCardPopup,
          isPopupOpen: isOpen,
        },
      ]}
    />
  );
};

export default CustomersTable;