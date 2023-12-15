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
    inputRef?: React.RefObject<HTMLInputElement> | null;
    inputError?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Password: React.FC<PasswordProps> = ({inputType, inputPlaceholder, inputClass, inputRef = null, inputError,  onChange}) => {

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
            ref={ inputRef }
            onChange={(e) => onChange && onChange(e)}
        />
        <button type="button" className="absolute top-3 right-3" onClick={ toggleInputType }>
            <Icon name={icon} color={"#493f3f"} size={20} />
        </button>
        <span className="text-sm text-red-500">{ inputError }</span>
        </>
    )
}

export default Password;