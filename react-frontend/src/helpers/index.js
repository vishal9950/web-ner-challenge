import axios from 'axios';

/**
 *
 * @param {string} inputText user input
 * @param {string} language language selected
 * @returns NER result from API
 */
export const getNERFromText = async (inputText, language) => {
  const options = {
    method: 'POST',
    url: '/entities',
    data: {
      language,
      text: inputText,
    },
  };
  try {
    const results = await axios(options);
    return results.data;
  } catch (err) {
    return 'Server Error';
  }
};

/**
 * A map of languages supported by backend
 */
export const languageMap = [
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'French' },
  { value: 'it', label: 'Italian' },
  { value: 'de', label: 'German' },
];

export default {};
