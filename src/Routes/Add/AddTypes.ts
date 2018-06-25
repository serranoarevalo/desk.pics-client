import { ChangeEvent, FormEvent } from "react";

interface IFormState {
  drinkName: string;
  photoUrl: string;
  locationName: string;
  hasFile: boolean;
}

export interface IContainerState extends IFormState {
  uploading: boolean;
}

export interface IPresenterProps extends IContainerState {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: (event: FormEvent) => void;
}
