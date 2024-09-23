export const regxes: Record<string, RegExp> = {
  word: /^[a-zA-Z\u0590-\u05fe ]*$/,
  number: /^\d*$/,
  mail: /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,
  phoneNumber: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
};

const err_descrption: Record<string, string> = {
  id: "נא הזן תעודת זהות חוקית",
  word: "שדות שמות אמורים להכיל אותיות בלבד",
  number: "שדות מספרים אמורים להכיל מספרים בלבד",
  mail: "נא הזן כתובת מייל חוקית",
  phone: "אנא הזן מספר חוקי",
  exist: "נא מלא שדות חובה",
};

export const validateId = (id: string): boolean => {
  if (!regxes["number"].test(id) || id.length != 9) {
    return false;
  }

  let sum = id
    .split("")
    .map((digit, index) => {
      let res = parseInt(digit);
      if (index % 2 === 1) {
        res *= 2;
      }
      if (res > 9) {
        res -= 9;
      }
      return res;
    })
    .reduce((a, b) => a + b);

  return sum % 10 === 0;
};

export const validation = (
  rules: Record<string, string[] | Record<string, string[]>>,
  data: Record<string, any>,
  _recursion_errors?: Set<string>
) => {
  let errors: Set<string> = new Set();
  let failed: string[] = [];

  Object.entries(rules).forEach(([rule, fileds]) => {
    let _failed = [];
    if (!Array.isArray(fileds)) {
      let [field, _fields]: [string, string[]] = Object.entries(
        fileds as Record<string, string[]>
      )[0];
      _failed = data[field].map((ele: string[]) =>
        validation({ [rule]: _fields }, ele, errors)
      );
      if (_failed.some((sub_array: string[]) => sub_array.length)) {
        errors.add(rule);
        failed = [...failed, ..._failed];
      }
    } else {
      switch (rule) {
        case "id":
          _failed = fileds.filter(
            (field) => data[field] && !validateId(data[field])
          );
          break;
        case "exist":
          console.log("hi");
          _failed = fileds.filter((field) => !data[field]);
          break;
        default:
          _failed = fileds.filter(
            (field) => data[field] && !regxes[rule].test(data[field])
          );
      }
      if (_failed.length) {
        errors.add(rule);
        failed = [...failed, ..._failed];
      }
    }
  });

  if (!_recursion_errors) {
    let err_string = "";
    errors.forEach((rule) => (err_string += `\n${err_descrption[rule]}`));
    err_string && alert(err_string);
  } else {
    errors.forEach((item) => _recursion_errors.add(item));
  }
  return failed;
};
