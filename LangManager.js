const fs = require('fs');

function getTranslations(key, lang) {
  try {
    const jsonData = fs.readFileSync(`./lang/${lang}.json`);
    const translations = JSON.parse(jsonData);
    
    const translation = translations[key];

    if (!translation) {
      const errorMessage = `ERR_MISSING_LANG_001: No translation found for key "${key}" in language **${lang}**.`;
      console.error(`Error Code: ERR_MISSING_LANG_001\n${errorMessage}`);
      return errorMessage;
    }

    return translation;
  } catch (error) {
    console.error(`ERROR LOADING TRANSLATIONS FOR ${lang}:`, error);
    const errorMessage = `ERR_MISSING_LANG_002: Error loading translations for language ${lang}.`;
    console.error(`Error Code: ERR_MISSING_LANG_002\n${errorMessage}`);
    return errorMessage;
  }
}

module.exports = { getTranslations };
