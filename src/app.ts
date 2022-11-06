const displayMonth = document.querySelector(
  ".box__displayExpDate--displayMonth"
) as HTMLSelectElement;
const displayYear = document.querySelector(
  ".box__displayExpDate--displayYear"
) as HTMLSelectElement;
const displayCardNumber = document.querySelector(
  ".box__cardNumber--displayCardNumber"
) as HTMLSelectElement;
const displayCardHolder = document.querySelector(
  ".box__cardHolder--displayCardHolder"
) as HTMLSelectElement;
const cardNumberInput = document.querySelector(".data__form--cardNumber") as HTMLInputElement;
const cardHolderInput = document.querySelector(".data__form--cardHolder") as HTMLInputElement;
const cardMonthInput = document.querySelector(".data__form--monthExp") as HTMLInputElement;
const cardYearInput = document.querySelector(".data__form--yearExp") as HTMLInputElement;

const format = (s: number[]) => {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
};

const pad = (num: number, size: number): string => {
  let s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
};

cardNumberInput.addEventListener("input", () => {
  const cardNumberArray: number[] = [];
  cardNumberArray.push(parseInt(cardNumberInput.value));
  displayCardNumber.textContent = format(cardNumberArray);
  cardNumberInput.value == "" ? (displayCardNumber.textContent = "#### #### #### ####") : false;
  displayCardNumber.textContent == "#### #### #### ####"
    ? displayCardNumber.classList.add("responsiveCardNumber")
    : false;
});

cardHolderInput.addEventListener("input", () => {
  displayCardHolder.textContent = cardHolderInput.value;
  displayCardHolder.textContent == "" ? (displayCardHolder.textContent = "John Smith") : false;
});

cardMonthInput.addEventListener("input", () => {
  displayMonth.textContent = cardMonthInput.value;
  displayMonth.textContent == "" ? (displayMonth.textContent = "00") : false;
  let month = Number(displayMonth.textContent);
  let monthConverted = pad(month, 2);
  displayMonth.textContent?.length == 1 ? (displayMonth.textContent = monthConverted) : false;
});

cardYearInput.addEventListener("input", () => {
  displayYear.textContent = cardYearInput.value;
  displayYear.textContent == "" ? (displayYear.textContent = "00") : false;
  let year = Number(displayYear.textContent);
  let yearConverted = pad(year, 2);
  displayYear.textContent?.length == 1 ? (displayYear.textContent = yearConverted) : false;
});
