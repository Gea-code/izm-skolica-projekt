import React from "react";
import './home/Home.css';
import { Link} from "react-router-dom";

const Linkovi = () => {
  return (
    <div className="container klasa-za-red">
       <div className="row">
            <div className="col-md-4 col-sm-12 korisni-linkovi-prvi">
                <h1>Dežurne veterinarske službe na području grada Zagreba</h1>
                <h4><Link to="https://www.vef.unizg.hr/" target="_blank">Veterinarski fakultet</Link></h4>
                <h4><Link to="https://vetti-buba.hr/" target="_blank">Veterinarska klinika Buba</Link></h4>
                <h4><Link to="https://klinika-kreszinger.com/" target="_blank">Veterinarska klinika Kreszinger</Link></h4>
                <h4><Link to="https://www.veterinabranimir.hr/" target="_blank">Veterina Branimir</Link></h4>
                <h4><Link to="https://www.facebook.com/planetzivotinja/?locale=hr_HR" target="_blank">Planet životinja</Link></h4>
                <h4><Link to="https://www.morna.hr/" target="_blank">Veterinarska ambulanta Morna</Link></h4>
                <h4><Link to="Happy Vet veterinarska specijalistička ambulanta" target="_blank">Happy Vet veterinarska specijalistička ambulanta </Link></h4>
            </div>
            <div className="col-md-4 col-sm-12 korisni-linkovi-drugi">
                <h1>Pet shopovi</h1>
                <h4><Link to="https://shop.zoo-vili.hr/" target="_blank">Zoo Vili</Link></h4>
                <h4><Link to="https://sape.hr/?srsltid=AfmBOor2HYxlaoLT031WHT1KwySHxXyuwuVlAxBGdFaS6kPIKz4qOw7o" target="_blank">Pet Shop Šape</Link></h4>
                <h4><Link to="https://www.zoocity.hr/" target="_blank">Zoo City</Link></h4>
                <h4><Link to="https://www.pet-centar.hr/" target="_blank">Pet Centar</Link></h4>
                <h4><Link to="https://www.petatelier.hr/" target="_blank">Pet Atelier</Link></h4>
                <h4><Link to="https://ohana.hr/" target="_blank">Pet Shop Ohana</Link></h4>
            </div>
            <div className="col-md-4 col-sm-12 korisni-linkovi-prvi">
                <h1>Korisne poveznice</h1>
                <h4><Link to="https://tierarzt-karlsruhe-durlach.de/hr/pas-jeo-cokoladu/">Što ako vaš pas pojede čokoladu?</Link></h4>
                <h4><Link to="https://www.pet-centar.hr/blogs/pitajte-veterinara/pas-pojeo-otrov-za-stakore?srsltid=AfmBOopgiWe-WCviN_n9RRPofjzSiW6Tc40wLjs2YBjqnId06kE0zKIO">Što ako vaš pas pojede otrov za štakore?</Link></h4>
                <h4><Link to="https://www.pet-centar.hr/blogs/pitajte-veterinara/kako-bez-posjete-veterinaru-smiriti-povracanje-u-pasa-izbor-namirnica-za-kuhani-obrok?srsltid=AfmBOooNmDdRjP3qYxbm553qOcC0FM86RjvjXK8OB-NWGwn18wYt-Z5P">Upomoć, moj pas povraća!</Link></h4>
                <h4><Link to="https://www.zooplus.hr/magazin/psi/zdravlje-njega-pasa/proljev-kod-psa">Upomoć, moj pas ima proljev!</Link></h4>
                <h4><Link to="https://www.zooplus.hr/magazin/psi/zdravlje-njega-pasa/svrbez-kod-pasa">Upomoć, moj se pas nekontrolirano češe!</Link></h4>
                <h4><Link to="https://www.zooplus.hr/magazin/psi/zdravlje-njega-pasa/cijepljenje-psa">Važna cjepiva za pse</Link></h4>
                <h4><Link to="https://www.zagreb.info/kucni-ljubimci/raj-cetveronozne-prijatelje-popisali-smo-psece-parkove-zagrebu/71643/">Popis livada i parkova za pse u Zagrebu</Link></h4>
                <h4><Link to="https://www.zagreb.info/kucni-ljubimci/popis-plaza-za-pse-bezbrizno-ljetovanje-s-kucnim-ljubimcima/68871/">Popis plaža za pse u Hrvatskoj</Link></h4>
            </div>

    </div>
    </div>
  );
};

export default Linkovi;