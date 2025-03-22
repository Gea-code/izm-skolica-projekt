import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import MediaImg from '../media/MediaImg';
import Slider from "react-slick";
import '../blog/Blog.css';
import '../home/Home.css';

const SramezljiveNjuske = () => {
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
            fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts?author=13&categories=224')
                .then(response => response.json())
                .then(data => setPosts(data))
                .catch(error => console.error('Error fetching posts:', error));
        }, []);
        console.log(posts)
        return (
            <div className="container blog">
                <div className="druga-boja">
                <h1>Sramežljive njuške</h1>
                <p>Tko su sramežljivije njuške? Znate one pse koji se radije odmaknu od vašeg psa u šetnji nego da mu zainteresirano priđu? Ili stoje postrance i gledaju kako se drugi psi igraju? Možda bi se malo i uključili, ali treba im vremena da se opuste? E, to su vam, dragi naši, sramežljive njuške. Ako vaš pas nema strah od drugih pasa, ali je pomalo suzdržan pri prvom susretu, imate sramežljivu njuškicu. Bez brige, nije vaša njuška jedina takva, na našoj stranici pronaći ćete hrpu pasa koji su baš takvi i s kojima bi se vaš pas mogao odlično složiti.</p>
                </div>
                <div>
                <Slider {...heroCategories}>
                    {posts.map(post => (
                        <div className="row mb-5 top-post druga-boja">
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
    
    export default SramezljiveNjuske;