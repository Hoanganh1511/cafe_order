type _T_TypeSession = "session" | "local";
export const SESSION_STORAGE = "session";
export const LOCAL_STORAGE = "local";
export function getDataSession(type: _T_TypeSession, key: string) {
  if (typeof Storage !== "undefined") {
    // process data
    let value = "";
    let data;
    if (type === SESSION_STORAGE) {
      value = sessionStorage.getItem(key) as string;
    }

    if (type === LOCAL_STORAGE) {
      value = localStorage.getItem(key) as string;
    }

    try {
      data = JSON.parse(value) || null;
    } catch (err) {
      data = value;
    }
    return data;
  }
  // console.log('This browser does not support local storage');
  return null;
}
export function setDataSession(type: _T_TypeSession, key: string, data: any) {
  if (typeof Storage !== "undefined") {
    if (!key) return false;
    // process data
    // save to storegae
    data = JSON.stringify(data);
    if (type === SESSION_STORAGE) {
      sessionStorage.setItem(key, data);
      return true;
    }

    if (type === LOCAL_STORAGE) {
      localStorage.setItem(key, data);
      return true;
    }
  }
  return null;
  // console.log('This Browser dont supported storeage');
}
