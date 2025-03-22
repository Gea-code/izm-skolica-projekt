import React from "react";
import {Link} from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Home.css';


const Home= () => {

   return(
<>
<div class="hero">
    <img src="./img/hero.jpg"/>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12 opis-hero">
        <h1>Tko smo mi?</h1>
        <p>Grupica ljudi koja živi u urbanoj sredini sa psima, svjesni činjenice da se ne moraju svi psi dobro slagati i da našim njuškama, baš kao i nama, treba odgovarajuće društvo. Potaknuti time, odlučili smo napraviti stranicu za upoznavanje pasa, na kojoj možemo naći širok spektar pasa iz čitave Hrvatske koji traže svog novog prijatelja za igru. Ispunite profil za sebe i svoju njušku i naša će vam stranici pokazati koja bi njuška iz vašeg grada mogla odgovarati vašoj njuški.</p>
      </div>
    </div>
  </div>

  <div class="cointainer prva-boja">
    <div class="row lana">
      <div class="col md-6">
        <img src="./img/lana.jpg"/>
      </div>
      <div class="col md-6">
        <h2>Naša inspiracija za ovaj projekt</h2>
        <p>Naša njuška Lana udomljena je s dvije i pol godine i isprva su joj svi psi bili prijatelji. Ubrzo je shvatila da nisu svi psi uvijek raspoloženi i da je zgodno družiti se s onima koji su iste razine energije kao i ona. Kako je napola terijerka, ima energije na pretek (dobro, sad je već seniorka, sad tu energiju usmjerava na vrtlarenje i žicanje klope, ali i dalje je ima). Na njezinu sreću, bili smo odlučni u naumu da joj pronađemo prijatelja ili prijateljicu koja će joj biti "ride or die" i ubrzo ju je i pronašla, bila je to njezina Žuja. Jednako vesele, znale su se igrati satima, a u međuvremenu smo i ja i Žujina hranilica (ruku na srce, vole oni nas, ali primarno smo izvor hrane i ugode) postale jako dobre prijateljice.</p>
      </div>
    </div>

    <div class="container">
      <div class="row zuja">
        <div class="col-md-6">
          <img src="./img/zuja.jpg"/>
        </div>
        <div class="col-md-6">
          <h2>Naša najbolja prijateljica</h2>
          <p>Evo i njezinog veličanstva, Žuje. Da, dobro ste pročitali, zove se Žuja. Žuja je svojeglava, uporna i "ne da se krstit" i upravo je takav pas trebao našoj Lani za igru i druženje. Nije je dugo čekala, Žuja nam je na svijet stigla 8.2.2015. godine, a s Lanom se počela družiti odmah po dolasku gazdama, nakon što je Laninom gazdi pojela žnirance s tenisica. Bila je to ljubav na prvo žvakanje žniranaca! Lana je bila kao prava starija sestra, pokazivala Žuji kako se igrati kao pravi pas, kako vrtlariti po nasipu i kako žicati klopu dok ne postaneš ugodno popunjen, hvala lijepa na pitanju, ne, nijedna od njih nije debela! Sad nam je i Žuja postala seniorka, ali prijateljstvo je i dalje jako, kako ne bi i bilo nakon svih zajedničkih avantura!</p>
        </div>
      </div>
    </div>
  </div>

  <div class="container druga-boja clanci">
    <div class="row">
      <div class="col-md-4">
        <div class="blog">
          <img src="./img/psi-igra.jpg"/>
          <div class="opis-bloga">
            <h3><a href="#">Istraživanja su potvrdila - psi uživaju u društvu drugih pasa</a></h3>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="blog">
          <img src="./img/psi-igra.jpg"/>
          <div class="opis-bloga">
            <h3><a href="#">Istraživanja su potvrdila - psi uživaju u društvu drugih pasa</a></h3>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="blog">
          <img src="./img/psi-igra.jpg"/>
          <div class="opis-bloga">
            <h3><a href="#">Istraživanja su potvrdila - psi uživaju u društvu drugih pasa</a></h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
       
    );
};

export default Home;