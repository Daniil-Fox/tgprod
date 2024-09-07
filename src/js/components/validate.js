import { validateForms } from "./../functions/validate-forms.js";
const checks1 = [
  {
    selector: ".form__check",
    errorMessage: "Выберите чекбоксы",
  },
];
const checks2 = [
  {
    selector: ".form__check",
    errorMessage: "Выберите чекбоксы",
  },
];
const rules1 = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".input-email",
    rules: [
      {
        rule: "required",
      },
      {
        rule: "email",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
];
const rules2 = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".input-email",
    rules: [
      {
        rule: "required",
      },
      {
        rule: "email",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
  {
    ruleSelector: ".modal-select",
    rules: [
      {
        rule: "required",
      },
    ],
  },
];

const afterForm = () => {
  alert("Спасибо за заявку! С вами свяжутся в ближайшее время.");
};

validateForms(".contacts-form", rules1, checks1, afterForm);
validateForms(".modal-form", rules2, checks2, afterForm);
