import Contact from "../Components/Contact/Contact";
import { useEffect } from "react";

const ContactPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <Contact/>
    )
}

export default ContactPage;