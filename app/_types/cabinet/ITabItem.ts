import { ReactElement } from "react";

export default interface ITabItem {
  key: string;
  label: string | ReactElement;
  children?: ReactElement;
  icon?: ReactElement;
}
