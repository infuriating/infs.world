export const calculateReadTime = (text: string) => {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);

  return readTime;
};

export const getAgeFromBirthdate = (birthdate: string) => {
  const ageDiff = Date.now() - new Date(birthdate).getTime();
  const ageDate = new Date(ageDiff);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  return age;
};
