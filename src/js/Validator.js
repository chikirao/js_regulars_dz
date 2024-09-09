export default class Validator {
    validateUsername(username) {
      const regex = /^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z]$/;
      const hasMoreThanThreeDigits = /\d{4,}/.test(username);
      return regex.test(username) && !hasMoreThanThreeDigits;
    }
  }
  