/**
 * match a date yyyy-mm-dd
 */
export const DATE_REGEX = new RegExp(
    "([12]d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]d|3[01]))"
);
/**
 * match a username
 */
export const USERNAME_REGEX = new RegExp("^[a-z0-9_-]{3,15}$");
/**
 * Minimum eight characters,
 * at least one upper case English letter,
 * one lower case English letter,
 * one number and one special character
 */
export const PASSWORD_REGEX = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
);
/**
 * Should catch most names
 */
export const NAME_REGEX = new RegExp("([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}");
