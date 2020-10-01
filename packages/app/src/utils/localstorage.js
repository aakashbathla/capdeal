/**
 * Purpose: A Utility to store Key Pair value in localStorage
 *
 */
export class LocalStorageUtil {
  constructor() {
    this.storage = {};
    if (isStorageUsable()) {
      this.storage = window.localStorage;
    }
  }

  /** @function
   * Purpose: get Value from localStorage
   * @param { string } name Key Name
   */
  getItem = (key) => {
    return isStorageUsable() && typeof this.storage !== "undefined"
      ? this.storage.getItem(key)
      : "";
  };

  /** @function
   * Purpose: save Value against key into localStorage
   * @param { string } name Key Name
   * @param { string } value Key Value
   */
  saveItem = (key, localStoragevalue) => {
    // eslint-disable-next-line no-unused-expressions
    isStorageUsable() && this.storage.setItem(key, localStoragevalue);
  };

  /** @function
   * Purpose: remove Key Pair Value from localStorage
   * @param { string } name Key Name
   */
  removeItem = (key) => {
    // eslint-disable-next-line no-unused-expressions
    isStorageUsable() && this.storage.removeItem(key);
  };
}

/** @function
 * Purpose: to check if localStroage available or not
 */
export const isStorageUsable = () => {
  if (typeof window === "undefined") {
    return false;
  }
  const storage = window.localStorage;
  try {
    storage.setItem("testkey", "test");
    storage.removeItem("testkey");
  } catch (e) {
    if (e.code === DOMException.QUOTA_EXCEEDED_ERR && storage.length === 0) {
      return false;
    }
  }
  return true;
};
