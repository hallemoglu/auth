interface InputProps {
    inputRef?: React.RefObject<HTMLInputElement> | null,
    inputError?: string,
    inputValue?: boolean;
    inputTabIndex: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

const Checkbox: React.FC<InputProps> = ({ inputRef, inputError, inputValue, inputTabIndex, onChange }) => {
    return(
        <>
        <input 
            type="checkbox" 
            className="border border-gray-400 mr-2"
            ref={ inputRef }
            checked={ inputValue }
            tabIndex={ inputTabIndex }
            onChange={(e) => onChange && onChange(e)}
        />
        
        </>
    )
}

export default Checkbox;