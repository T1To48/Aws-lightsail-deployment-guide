export const lokalStorage = (method, key, value) => {
  switch (method) {
    case "set":
      localStorage.setItem(key, JSON.stringify(value));
      return `${key} Successfully, ADDED!`;
    case "get":
      const storedValue = localStorage.getItem(key);
      if (
        storedValue === null ||
        storedValue === "undefined" ||
        storedValue === undefined
      ) {
        return;
      }
      return storedValue ? JSON.parse(storedValue) : false;

    case "remove":
      localStorage.removeItem(key);
      return `${key} Successfully, REMOVED!`;
    case "clear":
      localStorage.clear();
      return `localStorage Successfully, WIPED OUT!`;
    default:
      return "undefined function parameters";
  }
};
