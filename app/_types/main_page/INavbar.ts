export default interface INavbar {
  theme: "light" | "dark";
  isSignedIn: boolean;
  className?: string;
}

export interface IAnchor {
  text: string;
  link: string;
}
