import clsx, { ClassArray } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassArray) {
    const CLASS_NAMES =  clsx(...inputs);
    return twMerge(CLASS_NAMES);
}