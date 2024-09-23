import React, { useState, useEffect } from "react";
import * as Styles from "./studentDetailsPopup.Styles";
import { get } from "@/services/baseService";
import { ClipLoader } from "react-spinners";
import { FaRegCopy } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface PopupProps {
  id: string;
  closePopup: (value: boolean) => void;
  openSecondPopup: (value: boolean) => void;
  sourceCaller: string;
}

export interface studentData {
  name: string;
  stuClass: string;
  age: number;
  marital_status: string;
  children: number;
  city: string;
  phone_number: string;
  email: string;
  avg_grade: number;
  image_path: string | null;
}
export const initialStudentData: studentData = {
  name: "",
  stuClass: "",
  age: -1,
  marital_status: "",
  children: -1,
  city: "",
  phone_number: "",
  email: "",
  avg_grade: -1,
  image_path: null,
};

const studentDetailsPopup: React.FC<PopupProps> = ({
  id,
  closePopup,
  openSecondPopup,
  sourceCaller,
}) => {
  const [studentData, setStudentData] =
    useState<studentData>(initialStudentData);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isDataAvailable, setIsDataAvailable] = useState<boolean>(true);
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setIsLoaded(true);
      const response = await get("studentDetails", id);

      if (response.name) {
        setIsDataAvailable(true);
        setStudentData(response);
      } else {
        setIsDataAvailable(false);
      }
    } catch (error) {
      console.error("Error fetching Student data:", error);
      setIsDataAvailable(false);
    } finally {
      setIsLoaded(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openInfoPopup = () => {
    openSecondPopup(true);
  };

  const {
    name,
    stuClass,
    age,
    marital_status,
    children,
    city,
    phone_number,
    email,
    avg_grade,
    image_path,
  } = studentData;

  const martialDetails =
    marital_status === "נשוי"
      ? ` בן ${age}, ${marital_status} + ${children}`
      : `בן ${age} ${marital_status}`;

  return (
    <Styles.PopupWindowShadow
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Styles.PopupContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Styles.PopupHead>
          {
            <Styles.MoreInfoButton
              onClick={(e) => {
                e.stopPropagation();
                openInfoPopup();
                closePopup(false);
              }}
            >
              מידע מורחב
            </Styles.MoreInfoButton>
          }

          <Styles.CancelIcon
            onClick={(e) => {
              e.stopPropagation();
              closePopup(false);
            }}
          >
            x
          </Styles.CancelIcon>
        </Styles.PopupHead>
        {isLoaded ? (
          <Styles.IsLoadedWrapper>
            <ClipLoader color="#0b2d94" size={50} />
          </Styles.IsLoadedWrapper>
        ) : (
          <React.Fragment>
            {isDataAvailable ? (
              <React.Fragment>
                <Styles.Image
                  src={image_path || "/person.png"}
                  onClick={() => {}}
                />

                <Styles.InfoContainer>
                  <Styles.HeaderInfoText>
                    {" "}
                    <Styles.CopyIcon
                      onClick={() => {
                        navigator.clipboard
                          .writeText(name)
                          .then(() => {
                            setCopyStatus("המידע הועתק בהצלחה");
                            setTimeout(() => {
                              setCopyStatus(null);
                            }, 2000);
                          })
                          .catch((error) => {
                            setCopyStatus("ההעתקה נכשלה אנא נסה שוב");
                          });
                      }}
                    ></Styles.CopyIcon>
                    {copyStatus && (
                      <Styles.CopyMassage>{copyStatus}</Styles.CopyMassage>
                    )}{" "}
                    {name}{" "}
                  </Styles.HeaderInfoText>
                  <Styles.InfoText>{stuClass}</Styles.InfoText>
                  <Styles.InfoText>{martialDetails}</Styles.InfoText>
                  <Styles.InfoText>{`מתגורר ב${city}`}</Styles.InfoText>
                  <Styles.InfoText>{phone_number}</Styles.InfoText>
                  <Styles.EmailText
                    onClick={() => {
                      window.open(`mailto:${email}`);
                      console.log("first");
                    }}
                  >
                    {email}
                  </Styles.EmailText>
                  <Styles.HeaderInfoText>
                    {`דירוג פדגוגי: ${avg_grade ? avg_grade : "אין מידע"}`}
                  </Styles.HeaderInfoText>
                </Styles.InfoContainer>
              </React.Fragment>
            ) : (
              <Styles.InfoErrorText>...אין נתונים להצגה</Styles.InfoErrorText>
            )}
          </React.Fragment>
        )}
      </Styles.PopupContainer>
    </Styles.PopupWindowShadow>
  );
};

export default studentDetailsPopup;
