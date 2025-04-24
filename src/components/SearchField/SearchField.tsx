import { StyledSearchFieldContainer, StyledSearchFieldInput } from "./styles";
import SearchIcon from "../../icons/SearchIcon";

type SearchFieldProps = {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchField({ placeholder, onChange }: SearchFieldProps) {
  return (
    <StyledSearchFieldContainer>
      <SearchIcon />
      <StyledSearchFieldInput placeholder={placeholder} onChange={onChange} />
    </StyledSearchFieldContainer>
  );
}