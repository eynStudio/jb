export const setObj = (key: string, obj: Object) => localStorage.setItem(key, JSON.stringify(obj));
export const getObj = (key: string) => JSON.parse(localStorage.getItem(key));