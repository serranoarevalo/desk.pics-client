import { ChangeEvent, FormEvent } from "react";

interface IFormState {
  drinkName: string;
  photoUrl: string;
  locationName: string;
}

export interface IContainerState extends IFormState {
  uploading: boolean;
  hasFile: boolean;
  file?: Blob;
  isLoggedIn: boolean;
  loggedOutText: string;
}

export interface IPresenterProps extends IContainerState {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: (event: FormEvent) => void;
  fbCallback: (response: any) => void;
}
