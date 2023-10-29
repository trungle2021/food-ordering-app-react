const cartTitle = $(".cart-title");
const cartQuantityTitle = $(".cart-quantity-title");
const cartPriceTitle = $(".cart-price-title");
const cartTotalMoneyTitle = $(".cart-total-money-title");
const cartItemDeleteButtonText = $(".cart-item-delete-button-text");
const cartUpdateButtonText = $(".cart-update-button-text");
const cartCheckoutButtonText = $(".cart-checkout-button-text");

validLocaleAndLangFromLocalStorage
  .then((lastModifiedLang) => {
    if (!langFetchTime || !storedLang || langFileIsModified(lastModifiedLang)) {
      return setMultiLangToLocalStorage;
    } else {
      translateText();
    }
  })
  .then((response) => {
    if (response !== undefined) {
      response.lang.then((lang) => {
        localStorage.setItem("lang", JSON.stringify(lang));
        localStorage.setItem("langFetchTime", response.lastModified);
        translateText();
      });
    }
  });

const translateText = () => {
let currentLocale = localStorage.getItem("locale");
let lang = JSON.parse(localStorage.getItem("lang"));


cartTitle.text(lang["languages"][currentLocale]["Cart"])
cartQuantityTitle.text(lang["languages"][currentLocale]["Quantity"])
cartPriceTitle.text(lang["languages"][currentLocale]["Price"])
cartTotalMoneyTitle.text(lang["languages"][currentLocale]["Total"])
cartItemDeleteButtonText.text(lang["languages"][currentLocale]["Delete"])
cartUpdateButtonText.text(lang["languages"][currentLocale]["Update"])
cartCheckoutButtonText.text(lang["languages"][currentLocale]["Check out"])
};

languageToggleCheckbox.addEventListener("change", translateText);
