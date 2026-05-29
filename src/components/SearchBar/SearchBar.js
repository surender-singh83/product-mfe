import { jsx as _jsx } from "react/jsx-runtime";
const SearchBar = ({ value, placeholder = "Search Products", className = "", onChange, onSubmit, }) => {
    // const navigate = useNavigate();
    // // const makeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // //   const val = event.target.value;
    // //   navigate(`/search?keyword=${val}`);
    // // };
    const handleChange = (event) => {
        onChange(event.target.value);
    };
    const handleKeyDown = (event) => {
        if (event.key === "Enter && onSubmit") {
            if (onSubmit) {
                onSubmit(value);
                onChange(value);
            }
        }
    };
    return (_jsx("input", { type: "text", onChange: handleChange, placeholder: placeholder, onKeyDown: handleKeyDown, value: value, name: "input", className: `border-1 rounded-sm px-2 ${className}` }));
};
export default SearchBar;
