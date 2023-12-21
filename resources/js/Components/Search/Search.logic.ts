import { useState, useMemo, useEffect, useCallback } from "react";
import { Booking } from "@/types";

interface UseSearchProps {
    bookings: Booking[];
    onSearch: (bookings: Booking[]) => void;
}

const useSearch = ({ bookings = [], onSearch }: UseSearchProps) => {
    const [searchText, setSearchText] = useState<string>("");

    const filteredBookings = useMemo(() => {
        if (!searchText.trim()) {
            return bookings;
        }

        const lowerCaseSearchText = searchText.toLowerCase();

        return bookings.filter((booking) => {
            return (
                booking?.user?.name?.toLowerCase().includes(lowerCaseSearchText) ||
                booking?.user?.contact?.includes(lowerCaseSearchText)
            );
        });
    }, [bookings, searchText]);


    useEffect(() => {
        onSearch(filteredBookings);
    }, [filteredBookings, onSearch]);

    return {
        searchText,
        setSearchText,
        filteredBookings,
    };
};

export default useSearch;
