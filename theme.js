`
Nếu langFetchTime là undefined => tải mới file languages.json
Nếu langFetchTime và lastModified !== => tải mới file languages.json
Nếu lang là undefined => tải mới file languages.json
Nếu locale là undefined => set lại locale là "vi"

if (typeof locale === 'undefined' ){
    setLocaleToLocalStorage();
}
if (typeof langFetchTime === 'undefined' || typeof lang === 'undefined' || new Date(langFetchTime) !== new Date(lastModified)){
    setMultiLangToLocalStorage();
}


`