import React, { useState, useRef, useLayoutEffect } from "react";
import * as Styles from "./genericCheckboxList.styles";

interface CheckboxItem {
  id?: number;
  name: string;
  isSelected?: boolean;
  classNumber: string;
}

interface CheckboxListProps {
  width?: string;
  height?: string;
  header: string;
  placeHolder?: string;
  items: CheckboxItem[];
  closeIcon?: React.ReactElement;
  defaultIcon?: boolean;
  emptyMassage?: string;
  relevantClasses: string[];
  onClose: () => void;
  onSave: (selectedItems: CheckboxItem[]) => void;
}

const CandidatesCheckboxList: React.FC<CheckboxListProps> = ({
  width,
  height,
  header,
  placeHolder,
  items,
  onClose,
  onSave,
  closeIcon,
  defaultIcon,
  emptyMassage,
  relevantClasses,
}) => {

  const [showAll, setShowAll] = useState(true);
  const [currentClass, setCurrentClass] = useState<string>();
  const [checkboxItems, setCheckboxItems] = useState<CheckboxItem[]>(items);
  const lastCheckboxItemRef = useRef<HTMLDivElement>(null);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const handleCheckedChange = (itemName: string) => {
    const updatedItems = checkboxItems.map((item) =>
      item.name === itemName ? { ...item, isSelected: !item.isSelected } : item
    );
    setCheckboxItems(updatedItems);
  };

  const renderCheckboxItems = () => {
    return checkboxItems.map((item: CheckboxItem, index) => (
      <Styles.CheckboxListItem
        key={item.id}
        ref={index === checkboxItems.length - 1 ? lastCheckboxItemRef : null}
      >
        <Styles.Checkbox
          type="checkbox"
          checked={item.isSelected}
          onChange={() => handleCheckedChange(item.name)}
        />
        <Styles.Label>{item.name}</Styles.Label>
      </Styles.CheckboxListItem>
    ));
  };

  const renderFilteredCheckboxItems = () => {
    return checkboxItems.map((item: CheckboxItem, index) => (
      item.classNumber === currentClass && (
        <Styles.CheckboxListItem
          key={index}
          ref={index === checkboxItems.length - 1? lastCheckboxItemRef : null}
        >
          <Styles.Checkbox
            type="checkbox"
            checked={item.isSelected}
            onChange={() => handleCheckedChange(item.name)}
          />
          <Styles.Label>{item.name}</Styles.Label>
        </Styles.CheckboxListItem>
      )
    ));
  };

  useLayoutEffect(() => {
    if (!isFirstRender && lastCheckboxItemRef.current) {
      lastCheckboxItemRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [checkboxItems]);

  const filterCandidates = (search_: string) => {
    if (search_) {
      setCurrentClass(search_)
      setShowAll(false)
    } else {
      setShowAll(true)
    }
  };

  return (
    <Styles.CheckboxListContainer width={width} height={height}>
      <Styles.CheckboxListHead>
      <Styles.CloseWrapper onClick={onClose}>
          {closeIcon
            ? closeIcon
            : defaultIcon && <Styles.CloseIcon></Styles.CloseIcon>}
        </Styles.CloseWrapper>
        <Styles.HeaderLabel>{header}</Styles.HeaderLabel>
      </Styles.CheckboxListHead>
      <Styles.CheckboxListBody>
      <Styles.filterContainer>
            :מכיתה
            <Styles.inputSelect
              onChange={(key) => {
                filterCandidates(key.target.value);
              }}>
              <option value={""}></option>
              {relevantClasses.map((key) => (
                <option value={key} key={key}>{key}</option>
              ))}
            </Styles.inputSelect>
      </Styles.filterContainer>
        {showAll && renderCheckboxItems()}
        {!showAll && renderFilteredCheckboxItems()}
        {items.length === 0 && (
          <Styles.EmptyMassage>
            {emptyMassage ? emptyMassage : ".אין נתונים להצגה"}
          </Styles.EmptyMassage>
        )}
      </Styles.CheckboxListBody>

      <Styles.ConfirmButton onClick={() => onSave(checkboxItems)}>
        אישור
      </Styles.ConfirmButton>
    </Styles.CheckboxListContainer>
  );
};

export default CandidatesCheckboxList;
