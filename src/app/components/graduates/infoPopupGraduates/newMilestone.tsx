"use client";

import React, { useState, useEffect } from "react";
import * as Styles from "./newMilestone.Styles";
import { Milestones } from "../../candidates/candidate/infoPopup/candidateTypes";
import { Customer } from "../ClientCard";
import { getColumn } from "@/services/baseService";

interface NewMilestoneProps {
  id: string;
  addNewMilestone: (newMilestone: any) => void;
}

const NewMilestone: React.FC<NewMilestoneProps> = ({ id, addNewMilestone }) => {
  const [customerName, setCustomerName] = useState<Customer[]>([]);
  const [input, setInput] = useState({
    company_name: "",
    position: "",
    date: new Date().toISOString().split("T")[0],
    event_name: "",
  });

  const [validationError, setValidationError] = useState<string | null>(null);

  const fetchCompanyName = async () => {
    try {
      const responseData = await getColumn("customers", "company_name");
      setCustomerName(responseData);
    } catch (error) {
      console.error(`Error fetching details data.`, error);
    }
  };

  useEffect(() => {
    fetchCompanyName();
  }, []);

  const handleInputChange = (property: keyof Milestones, value: string) => {
    setInput((prevInput) => ({ ...prevInput, [property]: value }));
  };

  const validateForm = () => {
    if (!input.event_name || !input.position || !input.company_name) {
      setValidationError("↓ נא הזן שדות חובה ↓");
      return false;
    }
    setValidationError(null);
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      addNewMilestone(input);
      setInput({
        company_name: "",
        position: "",
        date: new Date().toISOString().split("T")[0],
        event_name: "",
      });
    }
  };

  return (
    <>
      {validationError && <Styles.Error>{validationError}</Styles.Error>}
      <Styles.GraduateWrapper>
        <Styles.AddButton onClick={handleSubmit}></Styles.AddButton>
        <Styles.GraduateFieldSelect
          onChange={(e) => handleInputChange("event_name", e.target.value)}
        >
          <option
            value=""
            disabled
            selected
            hidden
            style={{ color: "#FFFFFF" }}
          >
            סטטוס
          </option>
          <option value="לא עבר">לא עבר</option>
          <option value="עזב">עזב</option>
          <option value="עצמאי">עצמאי</option>
          <option value="התקבל">התקבל</option>
        </Styles.GraduateFieldSelect>
        <Styles.GraduateFieldInput
          type="date"
          value={input.date}
          onChange={(e) => handleInputChange("date", e.target.value)}
          readOnly
          style={{ textAlign: "center", fontSize: "1vw" }}
        />

        <Styles.GraduateFieldInput
          placeholder="משרה"
          onChange={(e) => handleInputChange("position", e.target.value)}
        ></Styles.GraduateFieldInput>
        <Styles.GraduateFieldSelect
          onChange={(e) => handleInputChange("company_name", e.target.value)}
        >
          <option selected>שם לקוח</option>
          {customerName.map((customer) => (
            <option value={customer.company_name} key={customer.company_name}>
              {customer.company_name}
            </option>
          ))}
        </Styles.GraduateFieldSelect>
      </Styles.GraduateWrapper>
    </>
  );
};

export default NewMilestone;
