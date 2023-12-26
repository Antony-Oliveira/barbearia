import React from "react";
import useSearch from "./Search.logic";
import { Booking } from "@/types";
import { Center, InputGroup, InputLeftElement, InputRightAddon, Input} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
    bookings: Booking[];
    onSearch: (filteredBookings: Booking[]) => void;
}

const Search: React.FC<SearchProps> = ({ bookings, onSearch }) => {
    const { searchText, setSearchText } = useSearch({
        bookings, onSearch
    });

    return (
        <Center>
            <InputGroup alignContent={'center'} w={350} my={7}>
                <InputLeftElement><FaSearch /></InputLeftElement>
                <Input
                    type="text"
                    placeholder="Buscar por nome/telefone"
                    _placeholder={{ textAlign: "center" }}
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </InputGroup>
        </Center>

    );
};

export default Search;
