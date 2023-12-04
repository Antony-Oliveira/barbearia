export interface User {
    id: number;
    name: string;
    contact: string;
    email: string;
    email_verified_at: string;
    bookings: Booking[];
}

export interface Booking {
    id: number;
    booking_date: string;
    note?: string;
    total_price: number;
    services: Service[];
}

export interface Service {
    id: number;
    name: string;
    price: number;
    photo: string;
}
export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
