import "./FCL_map.scss";
import mapImg from "/FCL_map.png";

const FCL_map = () => {
    return (
        <div className="fcl-map-container">
            <div className="fcl-map-content-container">
                <div className="fcl-img-text-container">

                    <div className="fcl-map-img-container">
                        <img src={mapImg} alt="" className="fcl-map-img" />
                    </div>
                    <div className="fcl-map-text-container">
                        <div className="project-titles-container">
                            <h5 className="project-little-title"> FCL Nedir </h5>
                            <h3 className="fcl-map-title"> FCL Alanları </h3>
                        </div>
                        <p className="fcl-text"> Future Classroom Lab 6 farklı öğrenme alanından oluşmaktadır, bunlar Üretim, Etkileşim, Sunum, Araştırma, İş Birliği ve Geliştirme alanlarıdır. Her bir alan öğrenme ve öğretmede özel öneme sahip olan alanları vurgulamaktadır. Avrupa Okul Ağı tarafından Brüksel’de kurulan orijinal FCL mekanı birçok ülkeye ilham kaynağı olmuştur. Diğer ülkelerde kurulan Geleceğin Sınıfları veya mekanları orijinal alanın sahip olduğu donanımların hepsine sahip olmak zorunda değildir. Aslında tüm öğrenme laboratuvarları kurucularına, adapte edilen yerel bağlama ve yerel ihtiyaçlara göre sunulan teknolojiler ile oluşturulmaktadır. Ancak FCL’nin temel fikri olan Geleceğin Sınıflarında öğrenme alanları, pedagoji ve teknoloji entegrasyonu 3 ana bileşen olarak kurulan pek çok FCL’de mevcuttur. </p>
                    </div>

                </div>

                <div className="fcl-map-bottom-text-container">
                    <div className="project-titles-container">
                        <h5 className="project-little-title"> FCL Nedir </h5>
                        <h3 className="fcl-map-title"> FCL'nin Faydaları </h3>
                    </div>
                    <p className="fcl-text">FCL’de bulunan esnek öğrenme alanlarının öğrenciler için çok büyük faydası vardır. Öğrenciler, teknolojinin sadece bir mekanda olmasından ya da sadece belirli zaman dilimlerinde teknolojiye erişmekten ziyade, gün içinde teknolojiye daha fazla erişim imkanı elde etmektedir. Derslerde işbirliğinde bulunmaya ve farklı düşünceleri ele almaya yönelik daha fazla fırsata sahip olurlar. Böylelikle, öğrenciler akranlarıyla beraber ya da akran öğrenmesi gerçekleştirebilirler. Öğrenciler, kendi öğrenmelerinde aktif bir role sahiptir. Örneğin, bir öğrenci sınıfın farklı yerlerinde belirli bir zaman sınırı içinde belirli görevleri gerçekleştirebilirler. Öğrenciler, yapacakları etkinliklerin sırası ile ilgili kendi başlarına karar verebilir ve bu durum öğrencilerin daha bağımsız öğrenmelerine yardımcı olur. Ve en önemlisi de öğrenciler yeni öğrenme alanlarını sever ve okulda zaman geçirmekten mutluluk duyar.</p>
                    <p className="fcl-text"> FCL’de bulunan esnek öğrenme alanlarının aynı zamanda öğretmenler için de pek çok faydası bulunmaktadır. Okul çalışma şekillerinin paylaşılmasına yönelik şeffaf bir yaklaşım benimsediği için öğretmenlerin farklı pedagojileri keşfetmesi mümkün olur. Öğretmenler, bireysel ihtiyaçlarına göre öğrencileri gruplandırabilirler. Öğrenciler gruplar halindeyken fikirleri tartışmak için daha fazla fırsata sahip olduğundan öğretmen bireysel olarak her bir öğrenciyi daha yakından tanıyabilir. Öğretmenler, öğrencileri ders içindeki farklı görevlere katılmaları konusunda teşvik edebilir. </p>
                    <p className="fcl-text last-text">FCL, aynı zamanda tüm dünya ülkeleri için bir zorunluluk haline gelen STEM Eğitimini de desteklemekte ve uygun alan sunmaktadır. Projeye ve probleme dayalı yaklaşımla birlikte öğrenciler, gerçek dünya problemlerini düşünür, sorular sorar ve bu problemleri çözmek için araştırma yaparak öğrenir.Öğrenciler arkadaşlarıyla veya öğretmenleriyle birlikte iş birliği içinde yardımlaşarak, ortak zihinsel çalışmalara dahil olarak ders konularını öğrenir. Ders konularını öğretim ve öğrenme süreçleri, öğrencilerin kişisel ilgi, hedef ve öğrenme ihtiyaçlarını karşılayacak şekilde belirlenir. Ders konularının öğrenimi, disiplinler arası yaklaşımla birden fazla ders konusu içeriğinin ve becerilerinin bir araya getirilmesiyle gerçekleşir. Öğretim etkinlikleri, öğrencilerin farklı öğrenme tarzlarına, kabiliyetlerine ve hazır olma durumlarına ve seviyelerine göre tasarlanır ve gerçekleştirilir. FCL’ye ait tüm bu özellikler, FCL’nin okullardaki STEM Eğitimini ne denli büyük bir boyutta desteklediğinin kanıtıdır.</p>
                </div>
            </div>
        </div>
    )
}

export default FCL_map;