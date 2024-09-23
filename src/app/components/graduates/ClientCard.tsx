"use client";

import React, { useEffect, useState } from "react";
import * as Styles from "./ClientCard.styles";
import { get, put } from "@/services/baseService";
import { regxes } from "@/utils/validation_utils";
import { ClipLoader } from "react-spinners";

export interface Graduates {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  class_name: string;
  status: string;
}

export interface Customer {
  customer_id: string;
  company_name: string;
  address: string;
  technologies: string;
  contact_name: string;
  contact_phone: string;
  contact_email: string;
  notes: string;
}

interface CompanyCardProps {
  id: string;
  onClose_: () => void;
  onSave: () => void;
}

const statusOption: Record<string, string> = {
  עובד: "#BEDEAA",
  עזב: "#FFA07A",
  התקבל: "#99B3E7",
};

const CompanyCard: React.FC<CompanyCardProps> = ({
  id,
  onClose_: onClose,
  onSave,
}) => {
  const [customerData, setCustomerData] = useState<Customer>({} as Customer);
  const [validationWords, setValidationWords] = useState(true);
  const [validationEmail, setValidationEmail] = useState(true);
  const [validationPhone, setValidationPhone] = useState(true);
  const [graduatesList, setGraduatesList] = useState<Graduates[]>([]);
  const [isLoadedGraduates, setIsLoadedGraduates] = useState<boolean>(false);
  const [isLoadedDetails, setIsLoadedDetails] = useState<boolean>(false);
  const [isDataAvailableGraduates, setIsDataAvailableGraduates] =
    useState<boolean>(true);
  const [isDataAvailableDetails, setIsDataAvailableDetails] =
    useState<boolean>(true);
  const [initCustomerData, setInitCustomerData] = useState<Customer>(
    {} as Customer
  );

  const fetchCustomers = async () => {
    try {
      setIsLoadedDetails(true);
      const responseData = await get("customers", id);

      if (responseData) {
        setCustomerData(responseData);
        setInitCustomerData(responseData);
        setIsLoadedDetails(false);
        setIsDataAvailableDetails(true);
      } else {
        setIsDataAvailableDetails(false);
      }
    } catch (error) {
      console.error(`Error fetching details data.`, error);
      setIsDataAvailableDetails(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
    fetchGraduates();
  }, [id]);
  useEffect(() => {}, [isDataAvailableDetails]);
  const handleFieldChange = (key: string, value: string) => {
    let temp = { ...customerData };
    temp[key as keyof Customer] = value;
    setCustomerData(temp);
  };

  const saveChanges = async () => {
    if (initCustomerData !== customerData) {
      await put("customers", id, customerData);
      onSave();
      onClose();
    } else {
      onClose();
    }
  };

  const DisplayInterviews = () => {
    window.location.href = `interviews/${id}`;
  };

  const fetchGraduates = async () => {
    try {
      setIsLoadedGraduates(true);
      const graduatesData = await get("graduates", id);
      if (graduatesData.length > 0) {
        setGraduatesList(graduatesData);
        setIsLoadedGraduates(false);
        setIsDataAvailableGraduates(true);
      } else {
        setIsDataAvailableGraduates(false);
      }
    } catch (error) {
      console.error(`Error fetching graduates data.`, error);
      setIsDataAvailableGraduates(false);
    }
  };

  const renderGraduates = () => {
    return graduatesList?.map((graduates) => (
      <Styles.GraduateWrapper
        key={graduates.email}
        color={statusOption[graduates.status]}
      >
        <Styles.GraduateField>{graduates.status}</Styles.GraduateField>
        <Styles.GraduateField>{graduates.class_name}</Styles.GraduateField>
        <Styles.GraduateField>{graduates.email}</Styles.GraduateField>
        <Styles.GraduateField>{graduates.phone_number}</Styles.GraduateField>
        <Styles.GraduateField>{graduates.last_name}</Styles.GraduateField>
        <Styles.GraduateField>{graduates.first_name}</Styles.GraduateField>
      </Styles.GraduateWrapper>
    ));
  };
  return (
    <Styles.PopupWindowShadow>
      <Styles.container>
        <Styles.Header>
          <u> :כרטיס לקוח </u>
          <Styles.infoRowup></Styles.infoRowup>
        </Styles.Header>
        {isDataAvailableDetails ? (
          <>
            {isLoadedDetails ? (
              <Styles.TableInfoMassage>
                <ClipLoader
                  color="#0b2d94"
                  size={50}
                  loading={isLoadedDetails}
                />
              </Styles.TableInfoMassage>
            ) : (
              <>
                <Styles.infoRow>
                  <div>
                    <Styles.wrapper>
                      <Styles.rowField
                        type="text"
                        value={customerData?.company_name}
                        onChange={(e) =>
                          handleFieldChange("company_name", e.target.value)
                        }
                        placeholder={
                          customerData?.company_name ? "" : "שם הלקוח"
                        }
                      />
                    </Styles.wrapper>
                  </div>
                  <div>
                    <Styles.wrapper>
                      <Styles.rowField
                        type="text"
                        onChange={(e) =>
                          handleFieldChange("address", e.target.value)
                        }
                        value={customerData?.address || ""}
                        placeholder={customerData?.address ? "" : "כתובת"}
                      />
                    </Styles.wrapper>
                  </div>
                  <div>
                    <Styles.wrapper>
                      <Styles.technologiesRow
                        value={customerData?.technologies || ""}
                        placeholder={
                          customerData?.technologies ? "" : "טכנולוגיה"
                        }
                      />
                    </Styles.wrapper>
                  </div>
                </Styles.infoRow>
                <Styles.infoRowup />
                <Styles.infoRow>
                  <div>
                    <Styles.wrapper>
                      <Styles.rowField
                        type="text"
                        placeholder={
                          customerData?.contact_name ? "" : "איש קשר"
                        }
                        onChange={(e) => {
                          handleFieldChange("contact_name", e.target.value);
                          setValidationWords(regxes.word.test(e.target.value));
                        }}
                        value={customerData?.contact_name || ""}
                      />
                      {!validationWords && (
                        <Styles.Error> מכיל אותיות בלבד</Styles.Error>
                      )}
                    </Styles.wrapper>
                  </div>
                  <div>
                    <Styles.wrapper>
                      <Styles.rowField
                        type="tel"
                        placeholder={
                          customerData?.contact_phone ? "" : "מספר-איש קשר"
                        }
                        onChange={(e) => {
                          handleFieldChange("contact_phone", e.target.value);
                          setValidationPhone(
                            regxes.number.test(e.target.value)
                          );
                        }}
                        value={customerData?.contact_phone || ""}
                      />

                      {!validationPhone && (
                        <Styles.Error> מספר לא חוקי</Styles.Error>
                      )}
                    </Styles.wrapper>
                  </div>
                  <div>
                    <Styles.wrapper>
                      <Styles.rowField
                        type="email"
                        placeholder={
                          customerData?.contact_email ? "" : "מייל-איש קשר"
                        }
                        onChange={(e) => {
                          handleFieldChange("contact_email", e.target.value);
                          setValidationEmail(regxes.mail.test(e.target.value));
                        }}
                        value={customerData?.contact_email || ""}
                      />
                      {!validationEmail && (
                        <Styles.Error>הכנס מייל תקין</Styles.Error>
                      )}
                    </Styles.wrapper>
                  </div>
                </Styles.infoRow>
              </>
            )}
          </>
        ) : (
          <Styles.TableInfoMassage>...אין נתונים להצגה</Styles.TableInfoMassage>
        )}

        <Styles.infoRowup />

        <Styles.interviewButton onClick={DisplayInterviews}>
          רשימת ראיונות
        </Styles.interviewButton>

        <Styles.infoRowup />
        <Styles.Header>
          <u> :בוגרים בחברה </u>
        </Styles.Header>
        <Styles.TableHeaderRow>
          <Styles.tableHeader>שם פרטי</Styles.tableHeader>
          <Styles.tableHeader>שם משפחה</Styles.tableHeader>
          <Styles.tableHeader>נייד</Styles.tableHeader>
          <Styles.tableHeader>מייל</Styles.tableHeader>
          <Styles.tableHeader>כיתה במפתחים</Styles.tableHeader>
          <Styles.tableHeader>סטטוס</Styles.tableHeader>
        </Styles.TableHeaderRow>
        {isDataAvailableGraduates ? (
          <>
            {isLoadedGraduates && (
              <Styles.TableInfoMassage>
                <ClipLoader
                  color="#0b2d94"
                  size={50}
                  loading={isLoadedGraduates}
                />
              </Styles.TableInfoMassage>
            )}
            <Styles.Table>{renderGraduates()}</Styles.Table>
          </>
        ) : (
          <Styles.Table>
            <Styles.TableInfoMassage>
              ...אין נתונים להצגה
            </Styles.TableInfoMassage>
          </Styles.Table>
        )}
        <Styles.infoRowup />

        <Styles.notes>
          <Styles.textarea
            placeholder={customerData?.notes ? "" : "הערות"}
            onChange={(e) => {
              handleFieldChange("notes", e.target.value);
            }}
            value={customerData?.notes || ""}
          />
        </Styles.notes>
        <Styles.buttons>
          <Styles.CloseButton onClick={onClose}>סגור</Styles.CloseButton>
          <Styles.Save onClick={saveChanges}>שמור</Styles.Save>
        </Styles.buttons>
      </Styles.container>
    </Styles.PopupWindowShadow>
  );
};

export default CompanyCard;
