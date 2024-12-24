import "./HomepageCollage.scss";
import collage from "/aafcl-collage3.png";



const HomepageCollage = () => {
 return(
  <div className="collage-container">
    <div className="collage-content-container">
      <div className="collage-imgs-container">
        <img src={collage} alt="" className="collage-img" />
      </div>
      <div className="collage-texts-container">
        <h2 className="collage-title">
          Projemiz: Smyrna Force
        </h2>
        <p className="collage-p"> 
        Smyrna force (forging reinforced classes for education), İzmir İl  Milli Eğitim Müdürlüğü bünyesinde açılan okul eğitimi akreditasyon programı kapsamında basvurdugumuz projemizin adıdır. Bu projemizin geçmesi durumunda ortak olduğumuz okulun öğretmenleri ile deneyim paylaşımları gerçekleştirilecektir. Eğitim öğretim ortamlarının esnek olması, öğrenci merkezli hale gelmesi, öğrencilerin öğrenme süreçlerini eglenceli hale getirecektir.
        </p>
        <h2 className="collage-title title2">
          FCL Sınıfımız
        </h2>
        <p className="collage-p">Smyrna FCL sınıfının hedef kitlesi okulumuz Şehit Uzman Çavuş Ali Akdoğan İlkokulu bunyesinde 1,2,3 ve 4.  sınıflarında öğrenim gören öğrencilerdir.
        </p>
        <p className="collage-p">
        Öğrenme alanlarındaki malzeme ve teknolojik donanım, Matematik, Türkçe, Fen ve Sosyal Bilimler, İngilizce, Bilişim, Müzik vb. farklı okul derslerinin amaç ve kazanımlarına hitap edecek çeşitliliktedir. Bunun dışında sınıf, okul bazında öğretmenlerin mesleki gelişimine yönelik etkinlikler ve ders dışı öğrenci etkinlikleri için bir öğrenme ortamı ve ayrıca okulda yürütülen Erasmus+ eTwinning ve Tübitak, Teknofest (Ulusal Projeler) gibi projeler için uygulama alanı olarak tasarlanmıştır. Bununla birlikte, aktif öğrenme, yaparak yaşayarak öğrenme gibi öğrencinin aktif katılım sağladığı uygulamaları içermektedir.
        </p>
      </div>
    </div>
  </div>
 )
}

export default HomepageCollage;