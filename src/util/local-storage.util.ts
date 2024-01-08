export const saveItem = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getItem = (key: string) => {
  const valor = localStorage.getItem(key);
  if (valor) {
    return valor;
  }
  return "";
};

export const deleteItem = (key: string) => {
  localStorage.removeItem(key);
};
