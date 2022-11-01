export class ValidationError extends Error {
  constructor(props) {
    super("");
    this.errors = new Map(Object.entries(props));
  }

  getErrors(key, subkey) {
    let keyErrors = [];
    const noneFieldErrors = this.errors.get("nonFieldErrors") || [];

    if (subkey === undefined) {
      keyErrors = this.errors.get(key) || [];
    } else {
      // for APIs that send a list of objects, some errors may be nested. use subkey to access nested errors
      if (!this.errors.has(key)) return [];
      keyErrors = this.errors.get(key); // this is an array of {error_key: ["error message"]} objects

      if (Array.isArray(keyErrors)) {
        keyErrors
          // eslint-disable-next-line no-prototype-builtins
          .filter((obj) => obj.hasOwnProperty(subkey))
          .map((obj) => obj[subkey]);
      } else if (
        typeof keyErrors[subkey] === "object" &&
        keyErrors[subkey] !== null
      ) {
        let nestedValues = [];
        Object.keys(keyErrors[subkey]).forEach((key) => {
          let value = keyErrors[subkey][key];
          nestedValues = nestedValues.concat(value);
        });
        keyErrors = nestedValues;
      } else {
        keyErrors = keyErrors[subkey] || [];
      }
    }
    return keyErrors.concat(noneFieldErrors);
  }
  hasErrors(key, subkey) {
    let keyErrors = false;

    if (!subkey) {
      keyErrors = this.errors.has(key);
    } else {
      // for APIs that send a list of objects, some errors may be nested. use subkey to access nested errors
      if (!this.errors.has(key)) return false;
      keyErrors = this.errors.get(key); // this is an array of {error_key: ["error message"]} objects

      if (Array.isArray(keyErrors)) {
        // eslint-disable-next-line no-prototype-builtins
        keyErrors.some((obj) => obj.hasOwnProperty(subkey));
      } else {
        keyErrors = subkey in keyErrors;
      }
    }

    return keyErrors || this.errors.has("nonFieldErrors");
  }

  addError(key, message) {
    this.errors.set(key, message);
  }

  deleteError(key) {
    this.errors.delete(key);
  }

  getDetailError() {
    return this.errors;
  }
}
