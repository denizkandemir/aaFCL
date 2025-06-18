import Admin from "../Components/Admin/Admin";
import Banner from "../Components/Banner/Banner";
import adminImg from "/aafcl-admin.png";

const AdminPage = () => {
    return (
       <>
        <Banner img={adminImg} responsiveImg={adminImg} text={"Etkinlik Düzenle"} location={"Admin"}  />
        <Admin/>
       </>
    )
}

export default AdminPage;