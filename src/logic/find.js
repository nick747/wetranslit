import dictionary from "./dictionary";

export const findRussian = (buffer) => {
  const temp = buffer.toLowerCase();
  for (const [key, value] of Object.entries(dictionary)) {
    if (value.includes(temp)) {
      return buffer[0] === buffer[0].toUpperCase() ? key.toUpperCase() : key;
    }
  }
  return buffer;
};

export const findLatin = (buffer) => {
  const temp = buffer.toLowerCase();
  for (const [key, value] of Object.entries(dictionary)) {
    if (key === temp) {
      return buffer[0] === buffer[0].toUpperCase()
        ? `${value[0].charAt(0).toUpperCase()}${value[0].slice(1)}`
        : value[0];
    }
  }
  return buffer;
};
