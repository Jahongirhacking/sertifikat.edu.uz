import { FC, ReactElement } from "react";

export default interface INavbar {
  Logo: FC;
  anchors: IAnchor[];
  children?: ReactElement | ReactElement[];
}

export interface IAnchor {
  text: string;
  link: string;
}
