import React, { FC } from "react";
import { IIconProps } from "../type";

export const IconCaretDown: FC<IIconProps> = ({ size = 16, color='white' }) => {
    const size16 = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.14279 6.126L7.55548 10.7619C7.61049 10.8366 7.67873 10.8965 7.75551 10.9376C7.8323 10.9787 7.91581 11 8.00032 11C8.08483 11 8.16835 10.9787 8.24513 10.9376C8.32191 10.8965 8.39015 10.8366 8.44516 10.7619L11.8579 6.126C12.1835 5.6835 11.9135 5 11.413 5H4.58665C4.08614 5 3.81612 5.6835 4.14279 6.126Z" fill={color}/>
    </svg>
    
    const size24 = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.24988 8.87667L11.2221 16.6031C11.3184 16.7276 11.4378 16.8275 11.5721 16.896C11.7065 16.9645 11.8527 17 12.0006 17C12.1485 17 12.2946 16.9645 12.429 16.896C12.5633 16.8275 12.6828 16.7276 12.779 16.6031L18.7512 8.87667C19.3212 8.13917 18.8487 7 17.9728 7H6.02663C5.15075 7 4.6782 8.13917 5.24988 8.87667Z" fill={color}/>
    </svg>
    
    const size32 = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.99986 11.8355L14.9628 22.1375C15.0912 22.3035 15.2504 22.4367 15.4296 22.528C15.6087 22.6194 15.8036 22.6666 16.0008 22.6666C16.198 22.6666 16.3928 22.6194 16.572 22.528C16.7512 22.4367 16.9104 22.3035 17.0387 22.1375L25.0017 11.8355C25.7616 10.8522 25.1316 9.33331 23.9637 9.33331H8.03553C6.86769 9.33331 6.23763 10.8522 6.99986 11.8355Z" fill={color}/>
    </svg>    
    
    switch (size.toString()) {
        case '16':
            return size16;
        case '24':
            return size24;
        case '32':
            return size32;
        default:
            return size16;
    }
}