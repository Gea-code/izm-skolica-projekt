import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import MediaImg from '../media/MediaImg';
import './Home.css';


const Home= () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts?author=13&categories=1')
          .then(response => response.json())
          .then(data => setPosts(data))
          .catch(error => console.error('Error fetching posts:', error));
  }, []);

   return(
<>
<div class="hero">
    <img src="./img/lana_i_gea_oci.jpg" alt="pas_i_njegov_covjek" />
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
        <img src="./img/lana.jpg" alt="lana" />
      </div>
      <div class="col md-6">
        <h2>Naša inspiracija za ovaj projekt</h2>
        <p>Naša njuška Lana udomljena je s dvije i pol godine i isprva su joj svi psi bili prijatelji. Ubrzo je shvatila da nisu svi psi uvijek raspoloženi i da je zgodno družiti se s onima koji su iste razine energije kao i ona. Kako je napola terijerka, ima energije na pretek (dobro, sad je već seniorka, sad tu energiju usmjerava na vrtlarenje i žicanje klope, ali i dalje je ima). Na njezinu sreću, bili smo odlučni u naumu da joj pronađemo prijatelja ili prijateljicu koja će joj biti "ride or die" i ubrzo ju je i pronašla, bila je to njezina Žuja. Jednako vesele, znale su se igrati satima, a u međuvremenu smo i ja i Žujina hranilica (ruku na srce, vole oni nas, ali primarno smo izvor hrane i ugode) postale jako dobre prijateljice.</p>
      </div>
    </div>

    <div class="container">
      <div class="row zuja">
        <div class="col-md-6">
          <img src="./img/zuja.jpg" alt="zuja" />
        </div>
        <div class="col-md-6">
          <h2>Naša najbolja prijateljica</h2>
          <p>Evo i njezinog veličanstva, Žuje. Da, dobro ste pročitali, zove se Žuja. Žuja je svojeglava, uporna i "ne da se krstit" i upravo je takav pas trebao našoj Lani za igru i druženje. Nije je dugo čekala, Žuja nam je na svijet stigla 8.2.2015. godine, a s Lanom se počela družiti odmah po dolasku gazdama, nakon što je Laninom gazdi pojela žnirance s tenisica. Bila je to ljubav na prvo žvakanje žniranaca! Lana je bila kao prava starija sestra, pokazivala Žuji kako se igrati kao pravi pas, kako vrtlariti po nasipu i kako žicati klopu dok ne postaneš ugodno popunjen, hvala lijepa na pitanju, ne, nijedna od njih nije debela! Sad nam je i Žuja postala seniorka, ali prijateljstvo je i dalje jako, kako ne bi i bilo nakon svih zajedničkih avantura!</p>
        </div>
      </div>
    </div>
  </div>

  <div className="container druga-boja clanci">
        <h1>Blog</h1>
        <div className="row">
          {posts.map((post) => (
            <div className="col-md-4 druga-boja clanci mb-5" key={post.id}>
              <MediaImg id={post.featured_media} size="medium" />
              <Link to={`/blog/${post.slug}`}>
                <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;