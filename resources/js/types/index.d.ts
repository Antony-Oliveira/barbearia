export interface User {
    id: number;
    name: string;
    contact: string;
    bookings: Booking[];
}

export interface Booking {
    id: number;
    date: string;
    time: string;
    note?: string;
    total_price: number;
    services: Service[];
    isConfirmed: boolean;
    user: User;
}

export interface Service {
    id: number;
    name: string;
    price: number;
    photo: string;
}

export interface IBookingFormData {
    user: User;
    userExists: boolean;
}
export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
