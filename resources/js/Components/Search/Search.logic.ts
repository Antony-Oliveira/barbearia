import { useState, useMemo, useEffect } from "react";
import { Booking, User } from "@/types";

interface UseSearchProps {
    bookings?: Booking[];
    users?: User[];
    onSearch: (filteredItems: Booking[] | User[] | undefined) => void;
    filterNeed: boolean | undefined;
}

const useSearch = ({ bookings, onSearch, filterNeed = false, users }: UseSearchProps) => {
    const [searchText, setSearchText] = useState<string>("");
    const [filterTerm, setFilterTerm] = useState<string>("all");

    const filteredItems = useMemo(() => {
        const lowerCaseSearchText = searchText.toLowerCase();
        if (bookings) {
            const textFilteredBookings = bookings.filter((booking) => {
                return (
                    booking?.user?.name?.toLowerCase().includes(lowerCaseSearchText) ||
                    booking?.user?.contact?.includes(lowerCaseSearchText)
                );
            });

            if (filterTerm === "confirmed") {
                return textFilteredBookings.filter((booking) => { return booking.isConfirmed });
            } else if (filterTerm === "notConfirmed") {
                return textFilteredBookings.filter((booking) => { return !booking.isConfirmed });
            }
            return textFilteredBookings;
        } else if (users) {
            const textFilteredUsers = users.filter((user) => {
                return (
                    user?.name?.toLowerCase().includes(lowerCaseSearchText) ||
                    user?.contact?.includes(lowerCaseSearchText)
                );
            });


            return textFilteredUsers;
        }
    }, [bookings,users, searchText, filterTerm]);

    useEffect(() => {
        onSearch(filteredItems);
    }, [filteredItems, onSearch]);

    return {
        searchText,
        setSearchText,
        filteredItems,
        filterTerm,
        setFilterTerm
    };
};

export default useSearch;
