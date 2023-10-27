const cartPageTitle = $(".cart-page-title");
const cartQuantityTitle = $(".cart-quantity-title");
const cartDeleteButton = $(".cart-delete-button");
const cartPriceTitle = $(".cart-price-title");
const cartItemOptionTitle = $(".cart-item-option-title");
const cartTotalTitle = $(".cart-total-title");
const cartUpdateButtonTitle = $(".cart-update-button-title");
const cartCheckoutButtonTitle = $(".cart-checkout-button-title");

const translateText = () => {
    let currentLocale = localStorage.getItem("locale");
    const lang = JSON.parse(localStorage.getItem("lang"));
  
    try {
      cartPageTitle.text(lang["languages"][currentLocale]["Cart"]);
      cartQuantityTitle.text(lang["languages"][currentLocale]["Quantity"]);
      cartDeleteButton.text(lang["languages"][currentLocale]["Delete"]);
      cartPriceTitle.text(lang["languages"][currentLocale]["Price"]);
      cartItemOptionTitle.text(lang["languages"][currentLocale]["Option"]);
      cartTotalTitle.text(lang["languages"][currentLocale]["Total"]);
      cartUpdateButtonTitle.text(lang["languages"][currentLocale]["Update"]);
      cartCheckoutButtonTitle.text(lang["languages"][currentLocale]["Check out"]);
    } catch (error) {
      // Handle the exception here
      // You can provide a fallback or default values for the texts
      // or perform any other necessary error handling logic
    }
  };
translateText();
languageToggleCheckbox.addEventListener("change",translateText);