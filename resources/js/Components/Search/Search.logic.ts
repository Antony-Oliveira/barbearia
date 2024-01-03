import { useState, useMemo, useEffect } from "react";
import { Booking } from "@/types";

interface UseSearchProps {
    bookings: Booking[];
    onSearch: (bookings: Booking[]) => void;
}

const useSearch = ({ bookings = [], onSearch }: UseSearchProps) => {
    const [searchText, setSearchText] = useState<string>("");
    const [filterTerm, setFilterTerm] = useState<string>("all");

    const filteredBookings = useMemo(() => {
        const lowerCaseSearchText = searchText.toLowerCase();
        const textFilteredBookings = bookings.filter((booking) => {
            return (
                booking?.user?.name?.toLowerCase().includes(lowerCaseSearchText) ||
                booking?.user?.contact?.includes(lowerCaseSearchText)
            );
        });

        if (filterTerm === "confirmed") {
            return textFilteredBookings.filter((booking) =>{ return booking.isConfirmed });
        } else if (filterTerm === "notConfirmed") {
            return textFilteredBookings.filter((booking) => { return !booking.isConfirmed} );
        }
        return textFilteredBookings;
    }, [bookings, searchText, filterTerm]);

    useEffect(() => {
        onSearch(filteredBookings);
    }, [filteredBookings, onSearch]);

    return {
        searchText,
        setSearchText,
        filteredBookings,
        filterTerm,
        setFilterTerm
    };
};

export default useSearch;
