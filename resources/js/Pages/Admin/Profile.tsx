import Header from "@/Components/Header/Header";
import PageLoading from "@/Components/PageLoading/PageLoading";
import NavAdmin from "../../Components/NavAdmin/NavAdmin";

const Profile = () => {
    return (
        <>
            <Header text="Profile" />
            <NavAdmin activePage="Profile" />
            <PageLoading />
        </>
    )
}

export default Profile;
