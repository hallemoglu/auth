interface InputProps {
    inputType: "text" | "email";
    inputPlaceholder: string;
    inputClass?: string;
    inputValue?: string;
    inputRef?: React.RefObject<HTMLInputElement> | null;
    inputError?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ inputType, inputPlaceholder, inputClass, inputValue, inputRef = null, inputError, onChange }) => {
    return (
        <>
        <input 
            type={inputType} 
            placeholder={inputPlaceholder}
            className={inputClass + " text-sm rounded-md border border-gray-400 py-4 px-4 focus:outline-none active:outline-none focus:border focus:border-purple-500"}
            value={inputValue}
            ref={inputRef}
            onChange={(e) => onChange && onChange(e)}
        />
        <span className="text-sm text-red-500">{inputError}</span>
        </>
    )
}

export default Input;
