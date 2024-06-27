import { StaticImageData } from "next/image";
import { ReactElement } from "react";

export default interface ICard {
    img: StaticImageData;
    keywords: string[];
    title: string;
    className?: string;
    children: ReactElement | ReactElement[];
}