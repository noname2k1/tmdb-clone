export const convertToTitleCase = (rawString) => {
  if (!rawString) return '';
  const words = rawString.split(' ');
  const titleCaseWords = words.map((word) => {
    const firstLetter = word[0].toUpperCase();
    const rest = word.slice(1).toLowerCase();
    return `${firstLetter}${rest}`;
  });
  return titleCaseWords.join(' ');
};
