export const isValidImage = value => {
  if (!value) return true; // trigger valid nhưng bị false ở required
  if (typeof value !== "string") return false;
  const validFormats = ["png", "jpeg", "jpg", "svg"];
  const extension = value.split(".").pop();
  return validFormats.includes(extension);
};

export const isValidUrl = value => {
  if (!value) return true;
  if (typeof value !== "string") return false;

  const extension = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  //   const regex = new RegExp(extension);
  //   return value.match(regex) ? true : false;
  return extension.test(value);
};

export const sameAs = (getValues, field) => value => {
  if (!value) return true;
  if (typeof value !== "string") return false;
  const compareToValue = getValues()[field];
  return compareToValue === value;
};
