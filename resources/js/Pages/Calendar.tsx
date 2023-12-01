import Home from "@/Components/Home/Home";
import NavBar from "@/Components/NavBar/NavBar";
import PageLoading from "@/Components/PageLoading/PageLoading";

function Calendar() {
    return (
        <>
           <Home></Home>
           <p>Olá, Mundo!</p>
           <p>Calendar</p>

           <NavBar></NavBar>
           <PageLoading />
        </>
    )
}

export default Calendar;
