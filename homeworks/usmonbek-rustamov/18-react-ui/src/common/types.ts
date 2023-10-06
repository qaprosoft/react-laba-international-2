export type CamelCase<T> = {
  [K in keyof T as K extends `${infer first}_${infer second}`
    ? `${Lowercase<first>}${Capitalize<second>}`
    : K]: T[K];
};

export type AvatarData = {
  id: number;
  first_name: string;
  last_name: string;
  url: string;
};
