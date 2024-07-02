import { StaticImageData } from "next/image";

export default interface ICertificateIcon {
  key: ICertificateKey;
  title: string;
  img: StaticImageData;
}

export type ICertificateKey =
  | "usa"
  | "telescope"
  | "germany"
  | "gene"
  | "france"
  | "chemistry"
  | "italy"
  | "laptop"
  | "spain"
  | "abacus"
  | "turkey"
  | "lightBulb"
  | "uae"
  | "magnifyingGlass"
  | "southKorea"
  | "pen"
  | "japan"
  | "book"
  | "china";
