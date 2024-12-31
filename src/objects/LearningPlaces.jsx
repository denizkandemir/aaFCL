import placeImg1 from "/aafcl-class11.jpg";
import placeImg2 from "/aafcl-class12.jpg";
import placeImg3 from "/aafcl-class13.jpg";
import placeImg4 from "/aafcl-class14.jpg";
import placeImg5 from "/aafcl-class15.jpg";
import placeImg6 from "/aafcl-class16.jpg";
import cardImg1 from "/robotic-hand.png";
import cardImg2 from "/production.png";
import cardImg3 from "/presentation.png";
import cardImg4 from "/observation.png";
import cardImg5 from "/data-science.png";
import cardImg6 from "/motivation.png";

const LearningPlaces = [

    {
        id:1,
        imgs: [
            { img: placeImg1, id: 1 },
            { img: placeImg2, id: 2 },
            { img: placeImg3, id: 3 },
            { img: placeImg4, id: 4 },
            { img: placeImg5, id: 5 },
            { img: placeImg6, id: 6 }
        ],
        svg:cardImg1,
        text:"Öğrencilerin fikirlerini özgürce ifade ettiği, tartışmalar ve aktif katılımla öğrenmeyi destekleyen bir iletişim merkezi.",
        title:"Etkileşim Alanı",
        pageText:"Etkileşim alanında öğrencilerimiz farklı teknolojileri kullanarak öğrenme sürecine aktif olarak katlırlar.​Etkileşim alanında; akıllı tahta,açık eğitim kaynakları,interaktif öğrenme içerikleri,tabletler,ses sitemi,zeka ve strateji eğitim seti,VR Box,JBL Hoparlör,Kişisel akıllı telefonlar kullanılmaktadır.",
        pageText2:"Etkileşim alanında öğrencilerimiz farklı teknolojileri kullanarak öğrenme sürecine aktif olarak katlırlar.​Etkileşim alanında; akıllı tahta,açık eğitim kaynakları,interaktif öğrenme içerikleri,tabletler,ses sitemi,zeka ve strateji eğitim seti,VR Box,JBL Hoparlör,Kişisel akıllı telefonlar kullanılmaktadır.",
    },
    {
        id:2,
        imgs: [
            { img: placeImg5, id: 1 },
            { img: placeImg6, id: 2 },
            { img: placeImg4, id: 3 },
            { img: placeImg3, id: 4 },
            { img: placeImg2, id: 5 },
            { img: placeImg1, id: 6 }
        ],
        svg:cardImg5,
        text:"Yaratıcı fikirlerin projelere dönüştüğü, yenilikçi düşüncenin ve problem çözme becerilerinin öne çıktığı bir öğrenme ortamı.",
        title:"Geliştirme Alanı",
        pageText:"Geliştirme alanında öğrencilerimiz kendi öğrenme hızlarına uygun ve teknolojileri kullanarak öğrenme sürecine aktif olarak katılırlar.Geliştirme alanında çalışma köşesi,(zemin halısı,armut koltuklar,sehpa )mini kütüphane (Türkçe  ve İngilizce kitaplar,dergiler,zeka ve strateji oyun seti,tablet ve akıllı telefonlar bulunmaktadır.",
        pageText2:"Geliştirme alanında öğrencilerimiz kendi öğrenme hızlarına uygun ve teknolojileri kullanarak öğrenme sürecine aktif olarak katılırlar.Geliştirme alanında çalışma köşesi,(zemin halısı,armut koltuklar,sehpa )mini kütüphane (Türkçe  ve İngilizce kitaplar,dergiler,zeka ve strateji oyun seti,tablet ve akıllı telefonlar bulunmaktadır.",

    },

    {
        id:3,
        imgs: [
            { img: placeImg4, id: 1 },
            { img: placeImg1, id: 2 },
            { img: placeImg2, id: 3 },
            { img: placeImg3, id: 4 },
            { img: placeImg5, id: 5 },
            { img: placeImg6, id: 6 }
        ],        
        svg:cardImg4,
        text:"Bilgiye ulaşma becerilerini geliştiren, merak edilen konuların derinlemesine incelendiği modern bir keşif alanı.",
        title:"Araştırma Alanı",
        pageText:"Araştırma alanında öğrencilerimiz bilgi ve veri okuryazarlığı yeterlik düzeyi bağlamında online ortamlarda araştırma yaparlar, kendileri için ihtiyaç duydukları veriye, bilgiye veya dijital içeriklere nasıl erişebileceklerini; elde ettikleri içeriklere ve bilginin kaynağına eleştirel bakmayı ve bilgiyi kendi çalışmaları için nasıl organize edip kullanabileceklerini öğrenirler. ",
        pageText2:"​Araştırma alanında bilgsayarlar,yazıcı,tabletler,3D yazıcı, drone, teleskop, robot masası, mbot, 3 adet arduino eğitim seti,STEM tasarım ve üretim ünitesi, yenilenebilir güneş enerji deney seti, rüzgar enerjisi deney seti bulunmaktadır.",

    },

    {
        id:4,
        imgs: [
            { img: placeImg2, id: 1 },
            { img: placeImg1, id: 2 },
            { img: placeImg3, id: 3 },
            { img: placeImg4, id: 4 },
            { img: placeImg5, id: 5 },
            { img: placeImg6, id: 6 }
        ],
        svg:cardImg2,
        text:"Düşüncelerin somut sonuçlara dönüştüğü, uygulamalı çalışmalara olanak sağlayan bir tasarım ve üretim alanı.",
        title:"Üretim Alanı",
        pageText:"Üretim alanında; öğrencilerimiz bağımsız hareket ederek hayatla bağlantılı problem durumları üzerine çalışmalar planlamakta, takım çalışması eşliğinde ve  modern teknolojileri kullanarak somut ürünler ortaya koymaktadırlar.Üretim alanında; yeşil perde, softbox ışık seti,2 dijital kamera, video düzenleme yazılımı, müzik enstrümanları (bağlama,gitar,piano,davul,org …)gibi araçlar, kaynaklar bulunmaktadır.",
        pageText2:"Üretim alanında; öğrencilerimiz bağımsız hareket ederek hayatla bağlantılı problem durumları üzerine çalışmalar planlamakta, takım çalışması eşliğinde ve  modern teknolojileri kullanarak somut ürünler ortaya koymaktadırlar.Üretim alanında; yeşil perde, softbox ışık seti,2 dijital kamera, video düzenleme yazılımı, müzik enstrümanları (bağlama,gitar,piano,davul,org …)gibi araçlar, kaynaklar bulunmaktadır.",

    },

    {
        id:5,
        imgs: [
            { img: placeImg3, id: 1 },
            { img: placeImg1, id: 2 },
            { img: placeImg2, id: 3 },
            { img: placeImg4, id: 4 },
            { img: placeImg5, id: 5 },
            { img: placeImg6, id: 6 }
        ],
        svg:cardImg3,
        text:"Sunum alanı, öğrencilerin projelerini sergileyerek kendilerini ifade etme fırsatı buldukları bir sahne ortamıdır.",
        title:"Sunum Alanı",
        pageText:"Sunum alanında öğrencilerimiz ürettikleri çalışmaları sunarlar. Özellikle online kaynakları etik çerçevede ve e-güvenliğe dikkat edilerek aktif olarak kullanırlar  ve  çalışmalarını dijital ortamlarda sunarlar; diğer öğrencilerle etkileşim kurarlar geri bildirim alırlar. Drama, tartışma ve panel etkinliklerimizi bu alanda yapılmaktadır.",
        pageText2:"Ayrıca bu alan dahilinde 'Uzay Teması' çalışmamız devam etmektedir.Sunum alanında esnek tribün oturma düzeni, bilgisayar, HD projeksiyon, projeksiyon perdesi, ses sistemi, interaktif online araçlar,(Web 2.0,log,websitesi)karaoke mikrofon ve 3 boyutlu (ingilizce) ahşap dünya haritası bulunmaktadır.",

    },

    {
        id:6,
        imgs: [
            { img: placeImg6, id: 1 },
            { img: placeImg1, id: 2 },
            { img: placeImg2, id: 3 },
            { img: placeImg3, id: 4 },
            { img: placeImg4, id: 5 },
            { img: placeImg5, id: 6 }
        ],        
        svg:cardImg6,
        text: "Ekip çalışmasını teşvik eden, ortak hedeflere ulaşmak için birlikte çalışmayı destekleyen paylaşım odaklı bir ortam.",
        title:"İşbirliği Alanı",
        pageText:"İşbirliği alanında öğrencilerimiz modern teknolojileri ve online dijital ortamları ve web 2. araçlarını kullanarak  işbirliği sürecine aktif olarak katılırlar. Sınıfımızda yapılan çalışmalar “ Harmanlamış Öğrenme” yaklaşımına  uygun olduğu için öğrenciler okul dışında da işbirliğini dijital ortamlarda sürdürürler.",
        pageText2:" Ayrıca bu alanda doğa teması çalışması(Eko-Bahçe) hazırlığı devam etmektedir.İşbirliği alanında portatif beyaz tahta, işbirlikçi  esnek masalar, tabletler, online sunum, zihin haritalama, anket  e-kitap ve interaktif oyun uygulamalar, sanal ve arttırılmış gerçeklik uygulamaları,eko-bahçe mevcuttur.",
  
    },
    
]

export default LearningPlaces;