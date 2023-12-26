import { format, startOfMonth } from "date-fns";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";

export interface RevenueDataPickerProps {
    onMonthSelect?: (month: number) => void;
    onDateSelect?: (day: string) => void;
}

interface iFinancialSummary {
    revenue: number;
    clientCount: number;
}

interface iResponseData {
    revenue: number;
    clientCount: number;
}

interface iDataPost {
    day?: string;
    date?: string;
}

const useRevenue = () => {
    const [date, setDate] = useState<Date>(new Date());
    const [dailyFinancialSummary, setDailyRevenue] = useState<iFinancialSummary>();
    const [monthlyFinancialSummary, setMonthRevenue] = useState<iFinancialSummary>();
    const [isDailyLoading, setIsDailyLoading] = useState(false);
    const [isMonthlyLoading, setIsMonthlyLoading] = useState(false);

    const fetchMonthData = async (selectedDate: Date) => {
        try {
            setIsMonthlyLoading(true);
            const formattedMonth = format(selectedDate, 'Y-M-d');
            const { data }: AxiosResponse<iResponseData, iDataPost> = await window.axios.post(route('revenue.month', { date: formattedMonth }));
            setMonthRevenue({ ...data });
        } catch (error) {
            // ...
        } finally {
            setIsMonthlyLoading(false);
        }
    };

    useEffect(() => {
        const fetchInitialData = async () => {
            await onDateChange(date);
            await fetchMonthData(date);
        };

        fetchInitialData();
    }, []);

    const onDateChange = async (day: Date) => {
        try {
            setIsDailyLoading(true);
            const formattedDay = format(day, 'Y-M-d');
            const { data } = await window.axios.post(route('revenue.day'), { day: formattedDay });
            setDate(day);
            setDailyRevenue({ ...data });

        } catch (error) {
            // ...
        } finally {
            setIsDailyLoading(false);
        }
    };

    const onMonthChange = (selectedDate: Date) => {
        fetchMonthData(selectedDate);
        onDateChange(startOfMonth(selectedDate));
    };

    return { date, setDate, onDateChange, onMonthChange, dailyFinancialSummary, monthlyFinancialSummary, isDailyLoading, isMonthlyLoading };
};

export { useRevenue };
