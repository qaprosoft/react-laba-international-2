import { ChangeEvent, KeyboardEvent } from 'react';

export default interface ITextInputProps {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDownHandler: (event: KeyboardEvent<HTMLInputElement>) => void;
  value: string;
  disabled: boolean;
  placeholder?: string;
  externalStyles: string;
}
