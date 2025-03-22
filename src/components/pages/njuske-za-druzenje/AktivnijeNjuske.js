import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import MediaImg from '../media/MediaImg';
import Slider from "react-slick";
import '../blog/Blog.css';
import '../home/Home.css';

const AktivnijeNjuske = () => {
    const [posts, setPosts] = useState([]);

    var heroCategories = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    };

      useEffect(() => {
            fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts?author=13&categories=226')
                .then(response => response.json())
                .then(data => setPosts(data))
                .catch(error => console.error('Error fetching posts:', error));
        }, []);
        console.log(posts)
        return (
            <div className="container blog">
                <div className="treca-boja">
                <h1>Aktivnije njuške</h1>
                <p>Tko su aktivnije njuške? Znate one pse koji izgledaju kao da se hrvaju dok se igraju, jurcaju livadom glavom bez obzira i morate se držati za stup, obližnju klupicu, drvo ili bilo što ukopano u pod da ne biste pali ako protrče kraj vas ili se, jao, nesreće, pak zabiju u vas? E, to su vam aktivnije njuške. Obično u ovu skupinu spadaju terijeri koji su veoma društveni i razigrani psi, i svi su im najbolji prijatelji. Imate osjećaj da vaš pas, i nakon višesatne šetnje, istrčavanja i bacanja loptica, nije nimalo umoran i mogao bi još toliko, ali vama je već dosta? Velika je šansa da vašem psu treba pseći prijatelj s kojim će se poigrati i to će ga umoriti, kako fizički, tako i mentalno. Zavirite u našu galeriju i pronađite aktivnu njušku koja će izmoriti vašeg najboljeg prijatelja.</p>
                </div>
                <div>
                <Slider {...heroCategories}>
                    {posts.map(post => (
                        <div className="row mb-5 top-post treca-boja">
                            <div className="col-md-5 klasa-poravnanja">
                            <MediaImg id={post.featured_media} size="medium" />
                            </div>
                            <div className="col-md-6 offset-md-1 klasa-poravnanja">
                                <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                            </div>
                         </div>
                    ))}
                </Slider>
                </div>
            </div>
        );
    };
    
    export default AktivnijeNjuske;