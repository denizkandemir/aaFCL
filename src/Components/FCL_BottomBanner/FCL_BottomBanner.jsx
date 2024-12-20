import "./FCL_BottomBanner.scss";
import bottomBanner from "/aafcl-bottom-banner.png";

const FCL_BottomBanner = () => {
    return (
        <div className="bottom-banner-container">
            <div className="bottom-banner-content-container">
                <div className="banner-img-container">
                    <img src={bottomBanner} alt="" className="bottom-banner-img" />
                </div>
                <div className="banner-text-container">
                    <div className="project-titles-container">
                        <h5 className="project-little-title"> FCL Nedir </h5>
                        <h3 className="banner-title"> Geleceğin Sınıfları ve Eğitim Tasarımı </h3>
                    </div>
                    <p className="banner-text"> Ülkeler akıllı, sürdürülebilir ve kapsamlı bir büyüme, bununla beraber gelen daha refah toplumlar için bazı öncelikler belirlemektedirler. Teknolojik ve pedagojik öncelikleri dünya ile ortak bir şekilde belirleyebilmek önemlidir. Ülkemizin gelişmişlik düzeyinin artması için öğrencilerimizin ve öğretmenlerimizin 21.  Yüzyıl dijital becerilerini kazanmaları gerekmektedir. Yani gelecekteki dünyaya çocuklarımızı hazırlarken onların hangi beceriler ile donatılması gerektiğini bu günden belirlemek gerekmektedir. Öğrencilerin eğitimi ile nereye ulaşmak istiyoruz, gelecekte onların yaşayacakları dünyaya çocuklarımızı hazırlıyorsak nasıl bir eğitimle bunu yapabiliriz, mevcut eğitim sistemimiz, alt yapımız, müfredatımız ve okul donanımlarımız ile bunlara nasıl ulaşabiliriz gibi soruların yanıtlarını bulmak durumundayız. FCL çalışması bu ve benzeri soruların cevaplarını dünya ile aynı zamanda aramak ve bulmak için oluşturulmuş bir yapıdır. FCL projesi başta Eğitimde FATİH Projesi olmak üzere eğitimde etkin teknoloji kullanımı için ders planlarından, geleceğin sınıf tasarımına kadar geniş bir yelpazede kaynak sağlamaktadır. </p>
                    <p className="banner-text"> Future Classroom Lab bilgi ve iletişim teknolojilerinde gelişen ve değişen yeniliklerin incelenmesini ve bu değişim ve gelişimlerin eğitim ortamlarında kullanılabilirliğine yönelik araştırmaları yapılmasını amaçlamaktadır. Öğretmenler öğrenci öğrenmelerinde oldukça önemli bir role sahiptir. Öğretmenler ve okul müdürleri dijital okuryazarlık, sürdürülebilir profesyonel gelişimler, güncel girişimler, profesyonel öğrenme ağlarına ve ikili ilişkilere dahil olma fırsatları konusunda desteğe ihtiyaç duymaktadır. Öğretmenler kendi bilgi, değer, tutum ve yeterlilikleri ile sağladıkları profesyonel gelişimleri  ile her bir öğrencinin sahip olduğu potansiyeli ortaya çıkarabilmeleri için onlara destek olacaktır. FCL ile birlikte öğrencileri derin ve aktif bir öğrenme ortamına dahil ederek yenilikçi pedagojileri, metotları, kaynakları ve uygun öğrenme ortamları sağlanmaktadır. Online dersler, uzaktan eğitim kaynakları ile birlikte öğrencilerin her zaman ve her yerde öğrenmeleri sağlanarak eğitimde yönetim, organizasyon ve eğitime erişim anlayışı değişmekte ve öğrencilerin modern dünya önceliklerine dünya ile aynı zamanda erişimi sağlanmaktadır.</p>
                </div>
            </div>
        </div>
    )
}

export default FCL_BottomBanner;