import Header from "@/Components/Header/Header";
import PageLoading from "@/Components/PageLoading/PageLoading";
import NavAdmin from "../../Components/NavAdmin/NavAdmin";

const Dashboard = () => {

    return (
        <>
            <Header text="Admin" />
                
            <NavAdmin activePage="Dashboard" />
            <PageLoading />w
        </>
    )
}

export default Dashboard;
