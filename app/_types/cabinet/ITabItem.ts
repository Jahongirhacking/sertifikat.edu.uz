import { ReactElement } from "react";

export default interface ITabItem {
  key: string;
  label: string;
  children: ReactElement;
}
