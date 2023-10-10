export type ImageType = {
  id: number;
  url: string;
  firstName: string;
  lastName: string;
};

export type ImageStateType = {id: number; url: string; fullname: string};

export function isErrorMessage(e: any): e is {message: string} {
  return !!e && 'message' in e;
}
