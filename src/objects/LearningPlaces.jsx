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
        littleImg:placeImg1,
        littleImg2:placeImg2,
        bigImg:placeImg3,
        svg:cardImg1,
        text:"Öğrencilerin fikirlerini özgürce ifade ettiği, tartışmalar ve aktif katılımla öğrenmeyi destekleyen bir iletişim merkezi.",
        title:"Etkileşim Alanı",
        pageText:"Öğretmenler öğrenci katılımını ve etkileşimini arttırmak için teknolojiyi kullanırlar. Geleneksel öğrenme ortamlarında tüm öğrencilerin aktif olarak katılımının sağlanması aşılması gereken bir zorluktur. Çözümler tabletler ve akıllı telefonlar gibi bireysel cihazlarla, interaktif beyaz tahta ve interaktif öğrenme içerikleri arasında değişiklik gösterir. ",
        pageText2:"Etkileşim alanı öğrenmede hem öğrencilerin hem de öğretmenlerin aktif katılımlarını gerektirir. Sınıfımızın etkileşim alanında yeşil perde, ses ve görüntü kaydedici cihaz ve tabureler bulunmaktadır.",
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
        littleImg:placeImg1,
        littleImg2:placeImg2,
        bigImg:placeImg3,
        svg:cardImg5,
        text:"Yaratıcı fikirlerin projelere dönüştüğü, yenilikçi düşüncenin ve problem çözme becerilerinin öne çıktığı bir öğrenme ortamı.",
        title:"Geliştirme Alanı",
        pageText:"İnformal öğrenme ve kendini yansıtma (self-reflection) için bir alandır. Öğrenci çalışmasını bağımsız olarak kendi hızında yapabilir. Ayrıca öğrenciler okulda ve evde formal sınıf düzenlemelerinin dışında kendi ilgi alanlarına yoğunlaşarak informal öğrenmeler gerçekleştirebilir. ",
        pageText2:"Öz yönelimli öğrenmeyi güçlendirecek yollar sunarak okul, öğrenenlerin kendini yansıtma ve üst bilişsel becerilerini destekler. Sınıfımızın geliştirme alanında 1 adet ayrılan altıgen masa bireysel çalışma için ayrılmıştır. 6 adet tabure ve kitaplar bulunmaktadır.",

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
        littleImg:placeImg1,
        littleImg2:placeImg2,
        bigImg:placeImg3,
        svg:cardImg4,
        text:"Bilgiye ulaşma becerilerini geliştiren, merak edilen konuların derinlemesine incelendiği modern bir keşif alanı.",
        title:"Araştırma Alanı",
        pageText:"Öğrenciler kendilerini keşfetmek için teşvik edilirler; onlara pasif dinleyiciler olmaları yerine aktif katılımcı olmaları için fırsatlar verilir. Araştırma alanında, öğretmenler öğrencilerin kritik düşünme becerilerini geliştirmek için sorgulamaya dayalı ve proje tabanlı öğrenme fırsatları sunar. ",
        pageText2:"​Sınıfımızın araştırma alanında, 4 bilgisayar, bilgisayar masaları, 4 sandalye, 1 robotik kodlama masası (FFL standartlarına uygun), 5 adet Bee Bot, 2 Adet Matatalab, 1 Adet Ozobot, 6 Adet Cody Rocky, 6 Adet M bot, 2 Adet 4D kartlar, 1 Adet mikroskop, akıl ve zeka oyunları bulunmaktadır.",

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
        littleImg:placeImg1,
        littleImg2:placeImg2,
        bigImg:placeImg3,
        svg:cardImg2,
        text:"Düşüncelerin somut sonuçlara dönüştüğü, uygulamalı çalışmalara olanak sağlayan bir tasarım ve üretim alanı.",
        title:"Üretim Alanı",
        pageText:"Üretim alanında, öğrenciler gerçek bilginin inşası etkinlikleri ile çalışırlar. Yorumlama, analiz, grup çalışmaları ve değerlendirme üretim sürecinin önemli parçalarıdır. Yaparak yaşayarak öğrenmenin hayata geçirildiği, öğrencilerin proje tabanlı öğrenme ile ince becerilerinin geliştirildiği alandır. ",
        pageText2:"Sınıfımızın üretim alanında bir bilgisayar, bir 3D yazıcı ve 3D yazıcıya ait parçaları depolamak adına sürgülü dolap ve tabureler bulunmaktadır.",

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
        littleImg:placeImg1,
        littleImg2:placeImg2,
        bigImg:placeImg3,
        svg:cardImg3,
        text:"Sunum alanı, öğrencilerin projelerini sergileyerek kendilerini ifade etme fırsatı buldukları bir sahne ortamıdır.",
        title:"Sunum Alanı",
        pageText:"Öğrenciler, çalışmalarını sunmak, paylaşmak ve geri bildirim almak için çeşitli araçlara ve becerilere ihtiyaç duyarlar. Bu süreç, yalnızca öğrencilerin bireysel gelişimlerine katkıda bulunmakla kalmaz, aynı zamanda onların iletişim ve iş birliği becerilerini geliştirmelerine de olanak tanır. Çalışmaların sunumu, öğrencilerin yaptıkları işleri yalnızca sergilemekle sınırlı kalmayıp, aynı zamanda diğer öğrenciler, öğretmenler ve hatta geniş bir kitle ile etkileşim kurmalarını sağlar",
        pageText2:"Etkileşimli tahta, öğrencilerin görsel ve dijital içeriklerini etkili bir şekilde sunmalarına olanak tanırken, sunum köşesi ise onların kendilerini özgürce ifade edebilecekleri bir platform sunar. Minderler ve tabureler ise, diğer öğrencilerin bu sunumları rahat bir şekilde dinlemelerine ve aktif bir şekilde katılmalarına olanak tanıyan bir ortam oluşturur.",

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
        littleImg:placeImg1,
        littleImg2:placeImg2,
        bigImg:placeImg3,
        svg:cardImg6,
        text: "Ekip çalışmasını teşvik eden, ortak hedeflere ulaşmak için birlikte çalışmayı destekleyen paylaşım odaklı bir ortam.",
        title:"İşbirliği Alanı",
        pageText:"Öğrenme alanlarında başkaları ile işbirliği içinde çalışmak çok önemlidir. Araştırma, üretim ve sunum çalışmaları boyunca takım çalışmaları gerçekleştirilir. İşbirliğinin kalitesini grup içindeki aidiyet duygusu, sorumluluk paylaşımı ve karar verme süreci belirler. Oyunla ve interaktif öğrenme ile öğrenmenin kalıcı olması hedeflenmektedir.",
        pageText2:"Sınıfımızın işbirliği alanında 1 altıgen ayrılıp birleşen masa, 6 adet renkli tabureler bulunmaktadır.",
  
    },
    
]

export default LearningPlaces;