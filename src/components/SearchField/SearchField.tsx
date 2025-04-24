import { StyledSearchFieldContainer, StyledSearchFieldInput } from "./styles";

/**
 * SearchField is a reusable search input component with an icon.
 * It provides a styled input field with a search icon and handles user input changes.
 * 
 * @component
 * @example
 * ```jsx
 * <SearchField
 *   placeholder="Search contacts..."
 *   onChange={(e) => console.log(e.target.value)}
 * />
 * ```
 */
type SearchFieldProps = {
  /** Placeholder text to display when the input is empty */
  placeholder?: string;
  /** Callback function that is called when the input value changes */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Icon to display in the search field */
  icon?: React.ReactNode;
};

export default function SearchField({ placeholder, onChange, icon }: SearchFieldProps) {
  return (
    <StyledSearchFieldContainer>
      {icon && icon}
      <StyledSearchFieldInput placeholder={placeholder} onChange={onChange} />
    </StyledSearchFieldContainer>
  );
}