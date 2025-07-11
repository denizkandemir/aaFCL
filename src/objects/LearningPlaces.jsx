import cardImg1 from "/robotic-hand.png";
import cardImg2 from "/production.png";
import cardImg3 from "/presentation.png";
import cardImg4 from "/observation.png";
import cardImg5 from "/data-science.png";
import cardImg6 from "/motivation.png";

//Etkileşim Alanı
import interactionImg1 from "/etkileşim1.jpg";
import interactionImg2 from "/etkileşim2.jpg";
import interactionImg3 from "/etkileşim3.jpg";
import interactionImg4 from "/etkileşim4.jpg";

//Geliştime Alanı
import developmentImg5 from "/geliştirme5.jpg";
import developmentImg6 from "/geliştirme6.jpg";
import developmentImg7 from "/geliştirme7.jpg";
import developmentImg8 from "/geliştirme8.jpg";
import developmentImg9 from "/geliştirme9.jpg";
import developmentImg10 from "/geliştirme10.jpg";
import developmentImg11 from "/geliştirme11.jpg";
import developmentImg12 from "/geliştirme12.jpg";
import developmentImg13 from "/geliştirme13.jpg";
import developmentImg14 from "/geliştirme14.jpg";
import developmentImg15 from "/geliştirme15.jpg";
import developmentImg16 from "/geliştirme16.jpg";
import developmentImg17 from "/geliştirme17.jpg";
import developmentImg18 from "/geliştirme18.jpg";

//Araştırma alanı
import researchImg1 from "/araştırma1.jpg";
import researchImg2 from "/araştırma2.jpg";
import researchImg3 from "/araştırma3.jpg";
import researchImg4 from "/araştırma4.jpg";
import researchImg5 from "/araştırma5.jpg";
import researchImg6 from "/araştırma6.jpg";
import researchImg7 from "/araştırma7.jpg";
import researchImg8 from "/araştırma8.jpg";
import researchImg9 from "/araştırma9.jpg";
import researchImg10 from "/araştırma10.jpg";
import researchImg11 from "/araştırma11.jpg";

//Üretim Alanı
import productionImg1 from "/üretim1.jpg";
import productionImg2 from "/üretim2.jpg";
import productionImg3 from "/üretim3.jpg";
import productionImg4 from "/üretim4.jpg";
import productionImg5 from "/üretim5.jpg";
import productionImg6 from "/üretim6.jpg";

//Sunum Alanı
import presentationImg1 from "/sunum1.jpg";
import presentationImg2 from "/sunum2.jpg";
import presentationImg3 from "/sunum3.jpg";
import presentationImg4 from "/sunum4.jpg";
import presentationImg5 from "/sunum5.jpg";
import presentationImg6 from "/sunum6.jpg";
import presentationImg7 from "/sunum7.jpg";
import presentationImg8 from "/sunum8.jpg";
import presentationImg9 from "/sunum9.jpg";

//İşbirliği Alanı
import teamWorkImg1 from "/işbirliği1.jpg";
import teamWorkImg2 from "/işbirliği2.jpg";
import teamWorkImg3 from "/işbirliği3.jpg";
import teamWorkImg4 from "/işbirliği3.jpg";
import teamWorkImg5 from "/işbirliği5.jpg";
import teamWorkImg6 from "/işbirliği6.jpg";
import teamWorkImg7 from "/işbirliği7.jpg";
import teamWorkImg8 from "/işbirliği8.jpg";


const LearningPlaces = [
 
    {
        id:1,
       imgs: [
            { url: developmentImg6, _id: 1 },
            { url: developmentImg12, _id: 2 },
            { url: developmentImg18, _id: 3 },
            { url: developmentImg9, _id: 4 },
            { url: developmentImg10, _id: 5 },
            { url: developmentImg11, _id: 6 },
            { url: developmentImg13, _id: 7 },
            { url: developmentImg14, _id: 8 },
            { url: developmentImg15, _id: 9 },
            { url: developmentImg16, _id: 10 },
            { url: developmentImg5, _id: 11 },
            { url: developmentImg17, _id: 12 },
            { url: developmentImg7, _id: 13 },
            { url: developmentImg8, _id: 14 },
        
        ],
        littleImg:developmentImg13,
        littleImg2:developmentImg12,
        bigImg:developmentImg14,
        svg:cardImg5,
        path:"/geliştirmeAlanı",
        text:"Yaratıcı fikirlerin projelere dönüştüğü, yenilikçi düşüncenin ve problem çözme becerilerinin öne çıktığı bir öğrenme ortamı.",
        title:"Geliştirme Alanı",
        pageText:"İnformal öğrenme ve kendini yansıtma (self-reflection) için bir alandır. Öğrenci çalışmasını bağımsız olarak kendi hızında yapabilir. Ayrıca öğrenciler okulda ve evde formal sınıf düzenlemelerinin dışında kendi ilgi alanlarına yoğunlaşarak informal öğrenmeler gerçekleştirebilir. ",
        pageText2:"Öz yönelimli öğrenmeyi güçlendirecek yollar sunarak okul, öğrenenlerin kendini yansıtma ve üst bilişsel becerilerini destekler. Sınıfımızın geliştirme alanında 1 adet ayrılan altıgen masa bireysel çalışma için ayrılmıştır. 6 adet tabure ve kitaplar bulunmaktadır.",

    },

    {
        id:2,
       imgs: [
            { url: researchImg1, _id: 1 },
            { url: researchImg2, _id: 2 },
            { url: researchImg7, _id: 3},
            { url: researchImg9, _id: 4 },
            { url: researchImg11, _id: 5 },
            { url: researchImg8, _id: 6 },
            { url: researchImg3, _id: 7 },
            { url: researchImg4, _id: 8 },
            { url: researchImg5, _id: 9 },
            { url: researchImg6, _id: 10 },
            { url: researchImg10, _id: 11 },
        ],
        littleImg:researchImg11,
        littleImg2:researchImg10,
        bigImg:researchImg2,
        svg:cardImg4,
        path:"/araştırmaAlanı",
        text:"Bilgiye ulaşma becerilerini geliştiren, merak edilen konuların derinlemesine incelendiği modern bir keşif alanı.",
        title:"Araştırma Alanı",
        pageText:"Öğrenciler kendilerini keşfetmek için teşvik edilirler; onlara pasif dinleyiciler olmaları yerine aktif katılımcı olmaları için fırsatlar verilir. Araştırma alanında, öğretmenler öğrencilerin kritik düşünme becerilerini geliştirmek için sorgulamaya dayalı ve proje tabanlı öğrenme fırsatları sunar. ",
        pageText2:"​Sınıfımızın araştırma alanında, 4 bilgisayar, bilgisayar masaları, 4 sandalye, 1 robotik kodlama masası (FFL standartlarına uygun), 5 adet Bee Bot, 2 Adet Matatalab, 1 Adet Ozobot, 6 Adet Cody Rocky, 6 Adet M bot, 2 Adet 4D kartlar, 1 Adet mikroskop, akıl ve zeka oyunları bulunmaktadır.",

    },

    {
        id:3,
       imgs: [
            { url: productionImg5, _id: 1 },
            { url: productionImg6, _id: 2 },
            { url: productionImg2, _id: 3 },
            { url: productionImg3, _id: 4 },
            { url: productionImg4, _id: 5 },
            { url: productionImg1, _id: 6 },
        ],
        littleImg:productionImg3,
        littleImg2:productionImg4,
        bigImg:productionImg6,
        svg:cardImg2,
        path:"/üretimAlanı",
        text:"Düşüncelerin somut sonuçlara dönüştüğü, uygulamalı çalışmalara olanak sağlayan bir tasarım ve üretim alanı.",
        title:"Üretim Alanı",
        pageText:"Üretim alanında, öğrenciler gerçek bilginin inşası etkinlikleri ile çalışırlar. Yorumlama, analiz, grup çalışmaları ve değerlendirme üretim sürecinin önemli parçalarıdır. Yaparak yaşayarak öğrenmenin hayata geçirildiği, öğrencilerin proje tabanlı öğrenme ile ince becerilerinin geliştirildiği alandır. ",
        pageText2:"Sınıfımızın üretim alanında bir bilgisayar, bir 3D yazıcı ve 3D yazıcıya ait parçaları depolamak adına sürgülü dolap ve tabureler bulunmaktadır.",

    },

    {
        id:4,
       imgs: [
        
            { url: presentationImg4, _id: 1 },
            { url: presentationImg5, _id: 2 },
            { url: presentationImg3, _id: 3 },
            { url: presentationImg6, _id: 4 },
            { url: presentationImg7, _id: 5 },
            { url: presentationImg8, _id: 6 },
            { url: presentationImg9, _id: 7 },
            { url: presentationImg1, _id: 8 },
            { url: presentationImg2, _id: 9 },
        ],
        littleImg:presentationImg9,
        littleImg2:presentationImg7,
        bigImg:presentationImg6,
        svg:cardImg3,
        path:"/sunumAlanı",
        text:"Sunum alanı, öğrencilerin projelerini sergileyerek kendilerini ifade etme fırsatı buldukları bir sahne ortamıdır.",
        title:"Sunum Alanı",
        pageText:"Öğrenciler, çalışmalarını sunmak, paylaşmak ve geri bildirim almak için çeşitli araçlara ve becerilere ihtiyaç duyarlar. Bu süreç, yalnızca öğrencilerin bireysel gelişimlerine katkıda bulunmakla kalmaz, aynı zamanda onların iletişim ve iş birliği becerilerini geliştirmelerine de olanak tanır. Çalışmaların sunumu, öğrencilerin yaptıkları işleri yalnızca sergilemekle sınırlı kalmayıp, aynı zamanda diğer öğrenciler, öğretmenler ve hatta geniş bir kitle ile etkileşim kurmalarını sağlar",
        pageText2:"Etkileşimli tahta, öğrencilerin görsel ve dijital içeriklerini etkili bir şekilde sunmalarına olanak tanırken, sunum köşesi ise onların kendilerini özgürce ifade edebilecekleri bir platform sunar. Minderler ve tabureler ise, diğer öğrencilerin bu sunumları rahat bir şekilde dinlemelerine ve aktif bir şekilde katılmalarına olanak tanıyan bir ortam oluşturur.",

    },

    {
        id:5,
       imgs: [
            { url: interactionImg2, _id: 1 },
            { url: interactionImg1, _id: 2 },
            { url: interactionImg3, _id: 3 },
            { url: interactionImg4, _id: 4 },
        ],
        littleImg:interactionImg1,
        littleImg2:interactionImg4,
        bigImg:interactionImg2,
        svg:cardImg1,
        path:"/etkileşimAlanı",
        text:"Öğrencilerin fikirlerini özgürce ifade ettiği, tartışmalar ve aktif katılımla öğrenmeyi destekleyen bir iletişim merkezi.",
        title:"Etkileşim Alanı",
        pageText:"Öğretmenler öğrenci katılımını ve etkileşimini arttırmak için teknolojiyi kullanırlar. Geleneksel öğrenme ortamlarında tüm öğrencilerin aktif olarak katılımının sağlanması aşılması gereken bir zorluktur. Çözümler tabletler ve akıllı telefonlar gibi bireysel cihazlarla, interaktif beyaz tahta ve interaktif öğrenme içerikleri arasında değişiklik gösterir. ",
        pageText2:"Etkileşim alanı öğrenmede hem öğrencilerin hem de öğretmenlerin aktif katılımlarını gerektirir. Sınıfımızın etkileşim alanında yeşil perde, ses ve görüntü kaydedici cihaz ve tabureler bulunmaktadır.",
    },

    {
        id:6,
       imgs: [
            { url: teamWorkImg1, _id: 1 },
            { url: teamWorkImg2, _id: 2 },
            { url: teamWorkImg3, _id: 3 },
            { url: teamWorkImg4, _id: 4 },
            { url: teamWorkImg5, _id: 5 },
            { url: teamWorkImg6, _id: 6 },
            { url: teamWorkImg7, _id: 7 },
            { url: teamWorkImg8, _id: 8 },
        ],
        littleImg:teamWorkImg4,
        littleImg2:teamWorkImg5,
        bigImg:teamWorkImg7,
        svg:cardImg6,
        path:"/işbirliğiAlanı",
        text: "Ekip çalışmasını teşvik eden, ortak hedeflere ulaşmak için birlikte çalışmayı destekleyen paylaşım odaklı bir ortam.",
        title:"İşbirliği Alanı",
        pageText:"Öğrenme alanlarında başkaları ile işbirliği içinde çalışmak çok öneml_idir. Araştırma, üretim ve sunum çalışmaları boyunca takım çalışmaları gerçekleştirilir. İşbirliğinin kalitesini grup içindeki a_idiyet duygusu, sorumluluk paylaşımı ve karar verme süreci belirler. Oyunla ve interaktif öğrenme ile öğrenmenin kalıcı olması hedeflenmektedir.",
        pageText2:"Sınıfımızın işbirliği alanında 1 altıgen ayrılıp birleşen masa, 6 adet renkli tabureler bulunmaktadır.",
    },
    
    
]

export default LearningPlaces;