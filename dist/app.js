"use strict";
const displayMonth = document.querySelector(".box__displayExpDate--displayMonth");
const displayYear = document.querySelector(".box__displayExpDate--displayYear");
const displayCardNumber = document.querySelector(".box__cardNumber--displayCardNumber");
const displayCardHolder = document.querySelector(".box__cardHolder--displayCardHolder");
const cardNumberInput = document.querySelector(".data__form--cardNumber");
const cardHolderInput = document.querySelector(".data__form--cardHolder");
const cardMonthInput = document.querySelector(".data__form--monthExp");
const cardYearInput = document.querySelector(".data__form--yearExp");
const format = (s) => {
    return s.toString().replace(/\d{4}(?=.)/g, "$& ");
};
const pad = (num, size) => {
    let s = num + "";
    while (s.length < size)
        s = "0" + s;
    return s;
};
cardNumberInput.addEventListener("input", () => {
    const cardNumberArray = [];
    cardNumberArray.push(parseInt(cardNumberInput.value));
    displayCardNumber.textContent = format(cardNumberArray);
    cardNumberInput.value == "" ? (displayCardNumber.textContent = "#### #### #### ####") : false;
    displayCardNumber.textContent == "#### #### #### ####" ? displayCardNumber.classList.add("responsiveCardNumber") : false;
});
cardHolderInput.addEventListener("input", () => {
    displayCardHolder.textContent = cardHolderInput.value;
    displayCardHolder.textContent == "" ? (displayCardHolder.textContent = "John Smith") : false;
});
cardMonthInput.addEventListener("input", () => {
    var _a;
    displayMonth.textContent = cardMonthInput.value;
    displayMonth.textContent == "" ? (displayMonth.textContent = "00") : false;
    let month = Number(displayMonth.textContent);
    let monthConverted = pad(month, 2);
    ((_a = displayMonth.textContent) === null || _a === void 0 ? void 0 : _a.length) == 1 ? (displayMonth.textContent = monthConverted) : false;
});
cardYearInput.addEventListener("input", () => {
    var _a;
    displayYear.textContent = cardYearInput.value;
    displayYear.textContent == "" ? (displayYear.textContent = "00") : false;
    let year = Number(displayYear.textContent);
    let yearConverted = pad(year, 2);
    ((_a = displayYear.textContent) === null || _a === void 0 ? void 0 : _a.length) == 1 ? (displayYear.textContent = yearConverted) : false;
});
//# sourceMappingURL=app.js.map