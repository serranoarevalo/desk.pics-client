import { ChangeEvent, FormEvent } from "react";

interface IFormState {
  drinkName: string;
  photoUrl: string;
  locationName: string;
}

type screenState = "loggedOut" | "loggedIn" | "uploaded";

export interface IContainerState extends IFormState {
  uploading: boolean;
  hasFile: boolean;
  file?: Blob;
  screenState: screenState;
  loggedOutText: string;
}

export interface IPresenterProps extends IContainerState {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: (event: FormEvent) => void;
  fbCallback: (response: any) => void;
}
