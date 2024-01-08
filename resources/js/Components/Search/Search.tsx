import React from "react";
import useSearch from "./Search.logic";
import { Booking, User } from "@/types";
import { Center, InputGroup, InputLeftElement, Input, Select } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
    bookings?: Booking[];
    users?: User[];
    onSearch: (filteredItems: Booking[] | User[] | undefined) => void;
    filterNeed: boolean | undefined;
}

const Search: React.FC<SearchProps> = ({ bookings, users, onSearch, filterNeed = false }) => {
    const { searchText, setSearchText, filterTerm, setFilterTerm } = useSearch({
        bookings, onSearch, filterNeed, users
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
            {filterNeed ?? (
                <Select
                    value={filterTerm}
                    onChange={(e) => setFilterTerm(e.target.value)}
                    mb={4}
                    placeholder="Selecionar"
                >
                    <option value="all">Todos</option>
                    <option value="confirmed">Confirmados</option>
                    <option value="notConfirmed">Não Confirmados</option>
                </Select>
            )}
        </Center>

    );
};

export default Search;
