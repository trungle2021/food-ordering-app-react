const languageToggleCheckbox = document.getElementById("language-toggle");
const currentLocale = localStorage.getItem("locale");
const storedLang = localStorage.getItem("lang");
const langFetchTime = localStorage.getItem("langFetchTime");
const langURLInAsset = "{{lang_asset_url}}";

const langFileIsModified = (lastModifiedLang) => {
  const result =
    new Date(langFetchTime).getTime() !== new Date(lastModifiedLang).getTime();
  return result;
};
const setMultiLangToLocalStorage = new Promise((resolve, reject) => {
  fetch(langURLInAsset)
    .then((response) => {
      if (response.ok) {
        resolve({
          lang: response.json(),
          lastModified: response.headers.get("last-modified"),
        });
      } else {
        reject("Failed to fetch lang json");
      }
    })
    .catch((error) => {
      reject(error);
    });
});

const setLocaleToLocalStorage = () => {
  localStorage.setItem("locale", "vi");
};
const handleLanguageToggleClick = () => {
  if (languageToggleCheckbox.checked) {
    localStorage.setItem("locale", "vi");
  } else {
    languageToggleCheckbox.checked = false;
    localStorage.setItem("locale", "en");
  }
};
const getLastModifiedLang = new Promise((resolve, reject) => {
  fetch(langURLInAsset, { method: "HEAD" })
    .then((response) => {
      const lastModifiedLang = response.headers.get("last-modified");
      resolve(lastModifiedLang);
    })
    .catch((error) => {
      reject(error);
    });
});
//check "locale" and "lang" key in localStorage
const validLocaleAndLangFromLocalStorage = new Promise((resolve, reject) => {
  if (!currentLocale) {
    setLocaleToLocalStorage();
  }
  getLastModifiedLang
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});



validLocaleAndLangFromLocalStorage
  .then((lastModifiedLang) => {
    if (!langFetchTime || !storedLang || langFileIsModified(lastModifiedLang)) {
      return setMultiLangToLocalStorage;
    }
  })
  .then((response) => {
    response.lang.then((lang) => {
      localStorage.setItem("lang", JSON.stringify(lang));
      localStorage.setItem("langFetchTime", response.lastModified);
    });
  });
languageToggleCheckbox.addEventListener("change", handleLanguageToggleClick);
