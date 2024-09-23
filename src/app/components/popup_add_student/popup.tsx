"use client";
import React, { useState } from "react";
import * as Styles from "./addStudentPopup.styles";
import { studentStatus } from "./studentEnums";
import { validation } from "@/utils/validation_utils";

interface PopupProps {
  onClose: () => void;
  onSave: (newStudent: student) => void;
}

export interface student {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  mailAddress: string;
  status: string;
}

const studentDefault: student = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  mailAddress: "",
  status: "",
};

const rules = {
  exist: ["firstName", "lastName", "phoneNumber", "mailAddress", "status"],
  mail: ["mailAddress"],
  word: ["firstName", "lastName"],
  number: ["phoneNumber"],
};

const AddStudentPopup = ({ onClose, onSave }: PopupProps) => {
  const [errors, setErrors] = useState<string[]>([]);
  const [currentStudent, setCurrentStudent] = useState<student>(studentDefault);

  const handleSave = () => {
    let errors_ = validation(rules, currentStudent);

    if (errors_.length) {
      setErrors(errors_);
      return;
    }

    onSave(currentStudent);
  };

  return (
    <Styles.PopupWindowShadow>
      <Styles.PopupContainer>
        <Styles.divHeder>
          <Styles.label>:תלמיד חדש</Styles.label>
          <Styles.cancelButton onClick={onClose}>x</Styles.cancelButton>
        </Styles.divHeder>
        <Styles.inputContainer>
          :שם פרטי
          <Styles.Input
            error={errors.includes("status")}
            type="text"
            onChange={(e) =>
              setCurrentStudent({
                ...currentStudent,
                firstName: e.target.value,
              })
            }
          />
        </Styles.inputContainer>
        <Styles.inputContainer>
          :שם משפחה
          <Styles.Input
            error={errors.includes("status")}
            type="text"
            onChange={(e) =>
              setCurrentStudent({ ...currentStudent, lastName: e.target.value })
            }
          />
        </Styles.inputContainer>
        <Styles.inputContainer>
          :נייד
          <Styles.Input
            error={errors.includes("status")}
            type="text"
            onChange={(e) =>
              setCurrentStudent({
                ...currentStudent,
                phoneNumber: e.target.value,
              })
            }
          />
        </Styles.inputContainer>
        <Styles.inputContainer>
          :מייל
          <Styles.Input
            error={errors.includes("status")}
            type="text"
            onChange={(e) =>
              setCurrentStudent({
                ...currentStudent,
                mailAddress: e.target.value,
              })
            }
          />
        </Styles.inputContainer>
        <Styles.inputContainer>
          :מצב משפחתי
          <Styles.InputSelect
            error={errors.includes("status")}
            onChange={(e) =>
              setCurrentStudent({
                ...currentStudent,
                status: e.target.value,
              })
            }
            value={currentStudent.status}
          >
            <option value=""> </option>
            {...Object.entries(studentStatus).map(([key, value]) => (
              <option value={key}>{value}</option>
            ))}
          </Styles.InputSelect>
        </Styles.inputContainer>
        <Styles.saveButton onClick={handleSave}>הוסף תלמיד</Styles.saveButton>
      </Styles.PopupContainer>
    </Styles.PopupWindowShadow>
  );
};

export default AddStudentPopup;
