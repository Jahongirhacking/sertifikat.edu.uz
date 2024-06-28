import { FC, ReactElement } from "react";

export default interface INavbar {
  Logo: ReactElement;
  anchors: IAnchor[];
  theme: "light" | "dark";
  children?: ReactElement | ReactElement[];
}

export interface IAnchor {
  text: string;
  link: string;
}
