export function useLocalStorage() {
  function setItem(key, value) {
    return localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
  }

  function getItem(key) {
    const data = localStorage.getItem(key);

    try {
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
  }

  function remove(key) {
    localStorage.removeItem(key);
  }

  return { getItem, setItem, remove };
}
