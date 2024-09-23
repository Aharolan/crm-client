import React, { ChangeEvent } from "react";
import * as Styles from "./GenericTable/Buttons.Styles";

interface initialNewInterview {
  customerID: number;
  position: string;
  date: string;
  candidatesIDs: number[];
  technologiesIDs: number[];
  newTechnologiesNames: string[];
}

const initialNewInterview: initialNewInterview = {
  customerID: -1,
  position: "",
  date: "0000-00-00",
  candidatesIDs: [],
  technologiesIDs: [],
  newTechnologiesNames: [],
};

interface InterviewFormProps {
  setNewInterview: React.Dispatch<React.SetStateAction<initialNewInterview>>;
  customers: customersForm[];
}

interface customersForm {
  id?: number;
  name: string;
  isSelected?: boolean;
}

const InterviewForm: React.FC<InterviewFormProps> = ({
  customers,
  setNewInterview,
}) => {
  const today = new Date();
  const formattedToday = today.toISOString().split("T")[0];

  return (
    <Styles.InputsContainer>
      <Styles.InputRow>
        <Styles.Label>שם לקוח:</Styles.Label>
        <Styles.inputSelect
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setNewInterview((prev) => ({
              ...prev,
              customerID: Number(e.target.value),
            }))
          }
        >
          <Styles.optionMenu value={""} />
          {customers.map((customer) => (
            <Styles.optionMenu key={customer.id} value={customer.id}>
              {customer.name}
            </Styles.optionMenu>
          ))}
        </Styles.inputSelect>
      </Styles.InputRow>
      <Styles.InputRow>
        <Styles.Label>משרה:</Styles.Label>
        <Styles.Input
          type="text"
          isValid={true}
          onChange={(e) => {
            setNewInterview((prev) => ({ ...prev, position: e.target.value }));
          }}
        />
      </Styles.InputRow>
      <Styles.InputRow>
        <Styles.Label>תאריך:</Styles.Label>
        <Styles.Input
          type="date"
          isValid={true}
          data-date-format="DD MMMM YYYY"
          min={formattedToday}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNewInterview((prev) => ({ ...prev, date: e.target.value }))
          }
        />
      </Styles.InputRow>
    </Styles.InputsContainer>
  );
};

export default InterviewForm;
