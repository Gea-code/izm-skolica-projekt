import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import MediaImg from '../media/MediaImg';
import Slider from "react-slick";
import '../blog/Blog.css';
import '../home/Home.css';

const TipicneNjuske = () => {
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
            fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts?author=13&categories=222')
                .then(response => response.json())
                .then(data => setPosts(data))
                .catch(error => console.error('Error fetching posts:', error));
        }, []);
        console.log(posts)
        return (
            <div className="container blog">
                <div className="prva-boja">
                <h1>Tipične njuške</h1>
                <p>Tko su tipične njuške? Naravno, svi znamo da nema "tipičnog psa", međutim, u ovu smo kategoriju odlučili svrstati sve pse koji su poprilično opušteni u društvu drugih pasa, imaju neku srednju razinu energije za druženje s drugim psima, mogu bez problema šetati s drugim psima, njuškati uokolo, ali se i poigrati kad ih uhvati želja za time. Kliknite na fotografiju na ekranu da biste doznali više o njuški i odlučili je li upravo ta njuška novi najbolji prijatelj vašeg psa.</p>
                </div>
                <div>

                <Slider {...heroCategories}>
                    {posts.map(post => (
                        <div className="row mb-5 top-post prva-boja">
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
    
    export default TipicneNjuske;