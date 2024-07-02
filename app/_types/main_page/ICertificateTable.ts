export default interface ICertificateTable<T> {
  professions: IOption[];
  specialties: IOption[];
  options: IOption[];
  columns: IColumn[];
  data: T[];
  dataType: "language" | "science";
  info: string;
}

export interface IOption {
  label: string;
  value: string;
}

export interface ILanguageTable {
  key: string;
  name: string;
  a1: string;
  a2: string;
  b1: string;
  b2: string;
  c1: string;
  c2: string;
}

export interface IScienceTable {
  key: string;
  name: string;
  type: string;
  max: string;
  proportional: string;
}

export interface IColumn {
  title: string;
  dataIndex: string;
  key: string;
}
