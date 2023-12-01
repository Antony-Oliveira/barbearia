import Home from "@/Components/Home/Home";
import NavBar from "@/Components/NavBar/NavBar";
import PageLoading from "@/Components/PageLoading/PageLoading";
import DataPicker from "@/Components/DataPicker/DataPicker";
function Calendar() {
    return (
        <>
           <Home></Home>
        <DataPicker></DataPicker>
           <NavBar></NavBar>
           <PageLoading />
        </>
    )
}

export default Calendar;
