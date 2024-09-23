import React, { useState, useEffect } from "react";
import * as Styles from "./AddCustomerPopup.styles";
import { regxes } from "@/utils/validation_utils";
import { getAll, post } from "@/services/baseService";
import TechSelector, { CheckboxItem } from "./TechSelector";

interface AddCustomerProps {
  id: string;
  closePopup: () => void;
  refreshTable: () => void;
}
interface ValidationState {
  [key: string]: { isValid: boolean; error: string };
}

const AddCustomer: React.FC<AddCustomerProps> = ({
  id,
  closePopup,
  refreshTable,
}) => {
  const [input, setInput] = useState<{ [key: string]: string }>({});
  const [validation, setValidation] = useState<ValidationState>({});

  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
  const [technologies, setTechnologies] = useState<CheckboxItem[]>([]);
  const [hasSelectedTech, setHasSelectedTech] = useState<boolean>(false);
  const [showTechSelector, setShowTechSelector] = useState<boolean>(false);

  const EMPTY_FIELD_ERROR = "שדה חובה";

  const popupTitle = parseInt(id) >= 0 ? "עריכת לקוח:" : "לקוח חדש:";
  const inputFields = [
    { label: "שם לקוח", property: "company_name" },
    { label: "כתובת", property: "address" },
    { label: "איש קשר", property: "contact_name" },
    { label: "טלפון", property: "contact_phone" },
    { label: "מייל", property: "contact_email" },
  ];

  useEffect(() => {
    fetchTechs();
  }, []);

  const validateInputRegex = (property: string, value: string) => {
    let isValid = true;
    let error = "";
    if (value && typeof value === "string" && value.trim() !== "") {
      switch (property) {
        case "contact_name":
          isValid = regxes.word.test(value);
          error = isValid ? "" : "נא להזין אותיות בלבד";
          break;
        case "contact_phone":
          isValid = regxes.number.test(value);
          error = isValid ? "" : "נא להזין מספרים בלבד";
          break;
        case "contact_email":
          isValid = regxes.mail.test(value);
          error = isValid ? "" : "נא להזין כתובת מייל חוקית";
          break;
        default:
          break;
      }
    } else {
      error = EMPTY_FIELD_ERROR;
    }
    return { isValid, error };
  };

  const isRegexValid = () => {
    let isValid = true;
    const newValidation = { ...validation };
    inputFields.forEach((field) => {
      const { isValid: regexIsValid, error } = validateInputRegex(
        field.property,
        input[field.property]
      );
      if (!regexIsValid) {
        isValid = false;
        newValidation[field.property] = { isValid: false, error };
      }
    });
    setValidation(newValidation);
    return isValid;
  };

  const isNotEmptyValid = () => {
    const newValidation = { ...validation };
    let isValid = true;
    inputFields.forEach((field) => {
      if (!input[field.property]?.trim()) {
        isValid = false;
        newValidation[field.property] = {
          isValid: false,
          error: EMPTY_FIELD_ERROR,
        };
      }
    });
    setValidation(newValidation);
    return isValid;
  };

  const handleInputChange = (property: string, value: string) => {
    setInput({ ...input, [property]: value });

    const { isValid, error } = validateInputRegex(property, value);

    setValidation({ ...validation, [property]: { isValid, error } });
  };

  const openTechSelector = () => {
    setShowTechSelector(true);
  };

  const closeTechSelector = () => {
    setShowTechSelector(false);
  };

  const selectedChecker = (items: CheckboxItem[]): boolean => {
    return items.some((item) => item.isSelected === true);
  };

  const refreshTechList = (updatedTechList: CheckboxItem[]) => {
    setTechnologies(updatedTechList);
    setShowTechSelector(false);
    setHasSelectedTech(selectedChecker(updatedTechList));
  };

  const fetchTechs = async () => {
    try {
      const response = await getAll(`customers/techs`);
      const techs = response?.data;
      setTechnologies(techs);
      setHasSelectedTech(selectedChecker(techs));
    } catch (error) {
      console.error("Error fetching technologies list:", error);
    }
  };

  const renderSelectedTechs = () => {
    return technologies
      .filter((item) => item.isSelected)
      .map(({ name }: CheckboxItem) => (
        <Styles.TechHeader key={name}>
          <Styles.Label></Styles.Label>
          <Styles.RowWrapper>
            <Styles.TechField>{name}</Styles.TechField>
          </Styles.RowWrapper>
        </Styles.TechHeader>
      ));
  };

  const saveCustomer = async () => {
    if (isNotEmptyValid() && isRegexValid()) {
      const dataToAdd = { technologies, input };
      try {
        setFormSubmitting(true);
        await post("customers", dataToAdd);
        closePopup();
      } catch (error) {
        console.error("Error saving customer:", error);
      } finally {
        setFormSubmitting(false);
        refreshTable();
      }
    }
  };

  return (
    <Styles.PopupWindowShadow
      onClick={(e) => {
        e.stopPropagation();
        closePopup();
      }}
    >
      <Styles.PopupContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Styles.FixedUpper>
          <Styles.divHeder>
            <Styles.PopupLabel>{popupTitle}</Styles.PopupLabel>
            <Styles.CloseIcon
              onClick={(e) => {
                closePopup();
              }}
            />
          </Styles.divHeder>

          <Styles.InputsContainer>
            {inputFields.map((field) => (
              <Styles.RowWrapper key={field.property}>
                <Styles.Row>
                  <Styles.Label>{field.label}:</Styles.Label>
                  <Styles.Input
                    type="text"
                    placeholder=""
                    isValid={
                      !validation[field.property]?.error && !formSubmitting
                    }
                    onChange={(e) =>
                      handleInputChange(field.property, e.target.value)
                    }
                    onBlur={() =>
                      handleInputChange(field.property, input[field.property])
                    }
                    onFocus={() =>
                      setValidation({
                        ...validation,
                        [field.property]: { isValid: true, error: "" },
                      })
                    }
                    disabled={formSubmitting}
                  />
                </Styles.Row>

                {validation[field.property]?.error && (
                  <Styles.Error>
                    {validation[field.property]?.error}
                  </Styles.Error>
                )}
              </Styles.RowWrapper>
            ))}
          </Styles.InputsContainer>

          <Styles.TechHeader>
            <Styles.Label>טכנולוגיות:</Styles.Label>

            {showTechSelector && (
              <Styles.CollapseWrapper onClick={closeTechSelector}>
                <Styles.CollapseIcon />
              </Styles.CollapseWrapper>
            )}

            {!showTechSelector && hasSelectedTech && (
              <Styles.Update onClick={openTechSelector}>
                {"עדכון"}
              </Styles.Update>
            )}

            {!showTechSelector && !hasSelectedTech && (
              <Styles.Choose onClick={openTechSelector}>
                {"בחירת טכנולוגיות"}
              </Styles.Choose>
            )}
          </Styles.TechHeader>
        </Styles.FixedUpper>

        <Styles.DependedBottom>
          {!showTechSelector && hasSelectedTech && (
            <Styles.TechList>{renderSelectedTechs()}</Styles.TechList>
          )}

          {showTechSelector && (
            <TechSelector
              items={technologies}
              onClose={closeTechSelector}
              onSave={refreshTechList}
            />
          )}

          <Styles.NotesWrapper>
            <Styles.Label>{"הערות:"}</Styles.Label>
            <Styles.InputField
              rows={4}
              value={input.notes}
              onChange={(e) => {
                setInput({ ...input, notes: e.target.value });
              }}
            />
          </Styles.NotesWrapper>

          {!showTechSelector && (
            <Styles.SubmitButton
              onClick={saveCustomer}
              disabled={formSubmitting}
            >
              {"הוסף לקוח"}
            </Styles.SubmitButton>
          )}
        </Styles.DependedBottom>
      </Styles.PopupContainer>
    </Styles.PopupWindowShadow>
  );
};

export default AddCustomer;
