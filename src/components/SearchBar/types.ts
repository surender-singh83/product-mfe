export interface SearchBarProps {
    value: string;
    placeholder?: string;
    className?: string;
    onChange: (value: string) => void;
    onSubmit?: (value: string) => void; 
}