'use client';
import React, { useState } from "react";
import Icon from "@/components/Icon/Icon";

enum PasswordVisibilityIcon {
    Eye = "Eye",
    EyeOff = "EyeOff",
} 

interface PasswordProps {
    inputType: "password" | "text";
    inputPlaceholder: string;
    inputClass?: string;
    inputMaxLength?: number;
    inputRef?: React.RefObject<HTMLInputElement> | null;
    inputValue?: string;
    inputError?: string;
    inputStatus: boolean;
    inputTabIndex: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Password: React.FC<PasswordProps> = ({inputType, inputPlaceholder, inputValue, inputClass, inputMaxLength, inputRef = null, inputError, inputStatus, inputTabIndex, onChange}) => {

    const [type, setType] = useState(inputType);
    const [icon, setIcon] = useState(PasswordVisibilityIcon.Eye);

    const toggleInputType = () => {
        setType((prevState) => (prevState === "text" ? "password" : "text"));
        setIcon((prevState) => (prevState === PasswordVisibilityIcon.Eye ? PasswordVisibilityIcon.EyeOff : PasswordVisibilityIcon.Eye));
    }

    return (
        <>
        <input 
            type={ type } 
            placeholder={ inputPlaceholder }
            className={ inputClass + " text-sm rounded-md border border-gray-400 py-3 px-2 focus:outline-none active:outline-none focus:border focus:border-purple-500" }
            maxLength={ inputMaxLength }
            ref={ inputRef }
            value={ inputValue }
            disabled={ inputStatus }
            tabIndex={ inputTabIndex }
            onChange={(e) => onChange && onChange(e)}
        />
        <button type="button" className="absolute top-3 right-3" onClick={ toggleInputType }>
            <Icon name={icon} color={ "brown" } size={20} />
        </button>
        <span className="text-xs text-red-500">{ inputError }</span>
        </>
    )
}

export default Password;