import { ReactElement } from "react";

export default interface ICertificateLists {
  title: string;
  description: string;
  children?: ReactElement | ReactElement[];
}
