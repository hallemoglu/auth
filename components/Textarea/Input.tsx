interface InputProps {
    inputType: "text" | "email";
    inputPlaceholder: string;
    inputClass?: string;
    inputValue?: string;
    inputMaxLength?: number;
    inputRef?: React.RefObject<HTMLInputElement> | null;
    inputError?: string;
    inputStatus: boolean;
    inputTabIndex: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ inputType, inputPlaceholder, inputClass, inputMaxLength, inputValue, inputRef = null, inputError, inputStatus, inputTabIndex, onChange }) => {
    return (
        <>
        <input 
            type={ inputType } 
            placeholder={ inputPlaceholder }
            className={ inputClass + " text-sm rounded-md border border-gray-400 py-4 px-4 focus:outline-none active:outline-none focus:border focus:border-purple-500" }
            maxLength={ inputMaxLength }
            value={ inputValue }
            ref={ inputRef }
            disabled={ inputStatus }
            tabIndex={ inputTabIndex }
            onChange={ (e) => onChange && onChange(e) }
        />
        <span className="text-xs text-red-500">{ inputError }</span>
        </>
    )
}

export default Input;
