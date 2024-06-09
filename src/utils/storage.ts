const getData = (key: string) => {
  if (typeof window === "undefined") return;
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const addData = <T>(key: string, newData: T) => {
  const data = getData(key);
  data.push(newData);
  localStorage.setItem(key, JSON.stringify(data));
};

const removeData = <T extends { id: string }>(key: string, id: string) => {
  const data = getData(key);
  const updatedData = data.filter((element: T) => element.id !== id);
  localStorage.setItem(key, JSON.stringify(updatedData));
};

const editData = <T extends { id: string }>(
  key: string,
  id: string,
  newData: T
) => {
  const data = getData(key);
  const updatedData = data.map((element: T) =>
    element.id === id ? newData : element
  );
  localStorage.setItem(key, JSON.stringify(updatedData));
};

export { getData, addData, editData, removeData };
