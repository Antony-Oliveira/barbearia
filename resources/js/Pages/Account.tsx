import Home from "@/Components/Home/Home";
import NavBar from "@/Components/NavBar/NavBar";
import PageLoading from "@/Components/PageLoading/PageLoading";

function Account() {
    return (
        <>
           <Home></Home>
           <p>Olá, Mundo!</p>
           <p>Account</p>
           <NavBar></NavBar>
           <PageLoading />
        </>
    )
}

export default Account;
