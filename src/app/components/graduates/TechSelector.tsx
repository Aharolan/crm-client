import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import * as Styles from "./TechSelector.Styles";

export interface CheckboxItem {
  id?: number;
  name: string;
  isSelected?: boolean;
}

interface CheckboxListProps {
  header?: string;
  placeHolder?: string;
  items: CheckboxItem[];
  onClose: () => void;
  onSave: (selectedItems: CheckboxItem[]) => void;
  emptyMassage?: string;
}

const TechSelector: React.FC<CheckboxListProps> = ({
  header,
  placeHolder,
  items,
  onClose,
  onSave,
  emptyMassage,
}) => {
  const initialCheckboxItem: CheckboxItem = {
    name: "",
    isSelected: false,
  };

  const [checkboxItems, setCheckboxItems] = useState<CheckboxItem[]>(items);
  const [newCheckboxItem, setNewCheckboxItem] =
    useState<CheckboxItem>(initialCheckboxItem);
  const [isNameValid, setIsNameValid] = useState<boolean>(true);
  const lastCheckboxItemRef = useRef<HTMLDivElement>(null);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const handleCheckedChange = (itemName: string) => {
    const updatedItems = checkboxItems.map((item) =>
      item.name === itemName ? { ...item, isSelected: !item.isSelected } : item
    );
    setCheckboxItems(updatedItems);
  };

  useEffect(() => {
    setCheckboxItems(sortByChecked(items));
  }, []);

  const renderCheckboxItems = () => {
    return checkboxItems.map((item: CheckboxItem, index) => (
      <Styles.CheckboxListItem
        key={item.name}
        ref={index === checkboxItems.length - 1 ? lastCheckboxItemRef : null}
      >
        <Styles.Checkbox
          type="checkbox"
          style={{ backgroundColor: item.isSelected ? "#2d9c3c" : "#fff" }}
          checked={item.isSelected}
          onChange={() => handleCheckedChange(item.name)}
        />
        <Styles.Label>{item.name}</Styles.Label>
      </Styles.CheckboxListItem>
    ));
  };

  const addNewCheckboxItem = () => {
    if (!newCheckboxItem.name) {
      setIsNameValid(false);
      return;
    }

    if (checkboxItems.some((item) => item.name === newCheckboxItem.name)) {
      setIsNameValid(false);
      return;
    }

    setCheckboxItems([
      ...checkboxItems,
      { ...newCheckboxItem, isSelected: true },
    ]);
    setNewCheckboxItem(initialCheckboxItem);
    setIsNameValid(true);
    if (isFirstRender) setIsFirstRender(false);
  };

  useLayoutEffect(() => {
    if (!isFirstRender && lastCheckboxItemRef.current) {
      lastCheckboxItemRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [checkboxItems]);

  const sortByChecked = (checkBoxItems: CheckboxItem[]) => {
    return [...checkBoxItems].sort((a, b) => {
      if (a.isSelected && !b.isSelected) {
        return -1;
      }
      if (b.isSelected && !a.isSelected) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <Styles.CheckboxListContainer>
      <Styles.CheckboxListHead>
        <Styles.CloseWrapper onClick={onClose}></Styles.CloseWrapper>
        {header && <Styles.HeaderLabel>{header}</Styles.HeaderLabel>}
      </Styles.CheckboxListHead>
      <Styles.CheckboxListBody>
        <Styles.CheckboxListItemsContainer>
          {renderCheckboxItems()}
        </Styles.CheckboxListItemsContainer>

        <Styles.AddNewItemContainer>
          <Styles.AddButton onClick={addNewCheckboxItem} />
          <Styles.AddInputField
            maxLength={20}
            placeholder={placeHolder}
            value={newCheckboxItem.name}
            onChange={(e) => {
              setNewCheckboxItem({
                ...initialCheckboxItem,
                name: e.target.value,
              });
              setIsNameValid(true);
            }}
            onKeyDown={(e) => e.key === "Enter" && addNewCheckboxItem()}
          />
        </Styles.AddNewItemContainer>
        {!isNameValid && (
          <Styles.InfoMassage>נא ודא שהנתונים הוזנו כראוי</Styles.InfoMassage>
        )}
        {items.length === 0 && (
          <Styles.EmptyMassage>
            {emptyMassage ? emptyMassage : "תקלה בטעינת הנתונים"}
          </Styles.EmptyMassage>
        )}
      </Styles.CheckboxListBody>

      <Styles.SubmitButton onClick={() => onSave(checkboxItems)}>
        {"אישור"}
      </Styles.SubmitButton>
    </Styles.CheckboxListContainer>
  );
};
export default TechSelector;
