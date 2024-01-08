import { TabList, Tabs, Tab, TabPanel, TabPanels } from "@chakra-ui/react";
import Header from '@/Components/Header/Header';
import NavAdmin from '@/Components/NavAdmin/NavAdmin';
import PageLoading from '@/Components/PageLoading/PageLoading';
import RevenueDatePicker from '@/Components/RevenueDatePicker/RevenueDatePicker';
import Bookings from "./ManagerBookings";
import BookingForm from "@/Components/BookingForm/BookingForm";
import UserList from "@/Components/UserList/UserList";
import { useEffect, useState } from "react";

const Dashboard = ({ services, users }: any) => {
    useEffect(() => {
        console.dir(users)
    }, [])

    const [id, setId] = useState<number | undefined>();
    const [activeTab, setActiveTab] = useState<number>(0);
    const onBookingFor = (id: number) => {
        setId(id);
        setActiveTab(1);
    }
    return (
        <>
            <Header text="Admin" />
            <Tabs defaultIndex={0} index={activeTab} isLazy variant={'soft-rounded'} align='center' onChange={(index) => setActiveTab(index)}>
                <TabList mb={5} gap={0} >

                    <Tab _selected={{ bg: '#5CC6BA', color: '#fff' }}>
                        Clientes
                    </Tab>
                    <Tab _selected={{ bg: '#5CC6BA', color: '#fff' }}>
                        Agendar
                    </Tab>
                    <Tab _selected={{ bg: '#5CC6BA', color: '#fff' }}>
                        Faturamento
                    </Tab>
                </TabList>

                <TabPanels>

                    <TabPanel>
                        <UserList onUserSelect={onBookingFor} users={users} />
                    </TabPanel>
                    <TabPanel>
                        <BookingForm id={id} services={services} formNeed></BookingForm>
                    </TabPanel>
                    <TabPanel>
                        <RevenueDatePicker />

                    </TabPanel>
                </TabPanels>
            </Tabs>

            <NavAdmin activePage="Dashboard" />
            <PageLoading />
        </>
    );
};

export default Dashboard;
