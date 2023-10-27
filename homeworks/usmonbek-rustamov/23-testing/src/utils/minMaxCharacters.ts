export default function minMaxCharacters(min: number, max: number) {
  return (text: string) => {
    if (text.length < min) {
      throw new Error(`Field should contain at least ${min} characters`);
    }
    if (text.length > max) {
      throw new Error(`Field cannot exceed ${max} characters`);
    }
  };
}
