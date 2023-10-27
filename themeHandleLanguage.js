
const languageToggleCheckbox = document.getElementById("language-toggle");
let currentLocale = localStorage.getItem("locale");
const langURLInAsset = "{{lang_asset_url}}";

const checkFileIsUpdated = async (langURLInAsset) => {
	const response = await fetch(langURLInAsset, { method: 'HEAD' });
    const serverTimestamp = response.headers.get('last-modified');
	

}
//check "locale" and "lang" key in localStorage
const validLocaleAndLangFromLocalStorage = () => {
  const storedLocale = localStorage.getItem("locale");
  const storedLang = localStorage.getItem("lang");
  if (!storedLocale && !storedLang) {
    setMultiLangToLocalStorage();
    setLocaleToLocalStorage();
  } else if (!storedLocale) {
    setLocaleToLocalStorage();
  } else {
    setMultiLangToLocalStorage();
  }
};
const getMultiLangFromAsset = (assetURL) => {
  return fetch(assetURL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to fetch lang json");
      }
    })
    .catch((error) => {
      console.log("Error:", error);
      return null;
    });
};
const setMultiLangToLocalStorage = () => {
  getMultiLangFromAsset(langURLInAsset)
    .then((multiLang) => {
      if (multiLang) {
        localStorage.setItem("lang", JSON.stringify(multiLang));
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};
const setLocaleToLocalStorage = () => {
  localStorage.setItem("locale", "vi");
};
const handleLanguageToggleClick = () => {
  if (languageToggleCheckbox.checked) {
    localStorage.setItem("locale", "vi");
  } else {
    localStorage.setItem("locale", "en");
  }
};



if (currentLocale === "en") {
  languageToggleCheckbox.checked = false;
}
validLocaleAndLangFromLocalStorage();
languageToggleCheckbox.addEventListener("change", handleLanguageToggleClick);
