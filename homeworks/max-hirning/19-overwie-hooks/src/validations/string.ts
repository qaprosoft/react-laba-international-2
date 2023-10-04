export function isValidValue(value: string) {
  const regex = /^[^#^&*\\|/<>`~]+$/;
  return regex.test(value);
}