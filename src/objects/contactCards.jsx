import emailImg from "/email.png";
import phoneImg from "/phone-call.png";
import locationImg from "/google-maps.png";
import schoolImg from "/educational.png";
import PhoneSvg from "../svgs/PhoneSvg";
import LocationSvg from "../svgs/LocationSvg";
import MailSvg from "../svgs/MailIcon";
import WebsiteSvg from "../svgs/WebsiteSvg";

const contactCards = [

    {
        id:1,
        img: emailImg,
        svg: <MailSvg/>,
        text:"Mail Adresimiz",
        info:"osmagaziokulu@gmail.com",
        link:"mailto:osmagaziokulu@gmail.com",
    },
 
    {
        id:2,
        img: phoneImg,
        svg: <PhoneSvg/>,
        text:"Telefon Numaramız",
        info:"02323711015",
        link:"tel:02323711015",
    },

    {
        id:3,
        img: schoolImg,
        svg: <WebsiteSvg/>,
        text:"Okulumuzun Websitesi",
        info:"sehituzmancavusali akdoganilkokul.meb",
        link:"https://sehituzmancavusaliakdoganilkokul.meb.k12.tr",
    },

    {
        id:4,
        img: locationImg,
        svg: <LocationSvg/>,
        text:"Okul Adresi",
        info:"Osmangazi Mah. Yavuz Cad. 307, Bayraklı/İzmir",
        link:"",
    },
];

export default contactCards;