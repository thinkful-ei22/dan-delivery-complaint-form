export const required = value => value ? undefined : 'value required..';
export const notEmpty = value => value.trim() !== '' ? undefined : 'cannot be empty..';
export const exactLength = value => value.length === 5 ? undefined : 'value must contain exactly 5 characters';
// eslint-disable-next-line
export const onlyNumbers = value => value == Number(value) ? undefined : 'your tracking number must only contain digits';