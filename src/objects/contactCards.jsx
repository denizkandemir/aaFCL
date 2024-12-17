import emailSvg from "/email.png";
import phoneSvg from "/phone-call.png";
import locationSvg from "/google-maps.png";
import schoolSvg from "/educational.png";

const contactCards = [

    {
        id:1,
        img: emailSvg,
        text:"Mail Adresimiz",
        info:"osmagaziokulu@gmail.com",
        link:"mailto:osmagaziokulu@gmail.com",
    },
 
    {
        id:2,
        img: phoneSvg,
        text:"Telefon Numaramız",
        info:"02323711015",
        link:"tel:02323711015",
    },

    {
        id:3,
        img: schoolSvg,
        text:"Okulumuzun Websitesi",
        info:"sehituzmancavusali akdoganilkokul.meb",
        link:"https://sehituzmancavusaliakdoganilkokul.meb.k12.tr",
    },

    {
        id:4,
        img: locationSvg,
        text:"Okul Adresi",
        info:"Osmangazi Mah. Yavuz Cad. 307, Bayraklı/İzmir",
        link:"",
    },
];

export default contactCards;