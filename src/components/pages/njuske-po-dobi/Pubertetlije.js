import React, { useEffect, useState } from 'react';
import MediaImg from '../media/MediaImg';
import Slider from "react-slick";
import '../blog/Blog.css';
import '../home/Home.css';

const Pubertetlije = () => {
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
            fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts?dob=229')
                .then(response => response.json())
                .then(data => setPosts(data))
                .catch(error => console.error('Error fetching posts:', error));
        }, []);
        console.log(posts)
        return (
            <div className="container blog">
                <div className="prva-boja">
                <h1>Pubertetlije</h1>
                <h4>Tko su pubertetlije? To su psi u najluđim godinama. Sigurni smo da ste vidjeli pokoji meme na internetu koji uspoređuje pse u pubertetu s bijesnim dinosaurima, e pa, to nije daleko od istine.</h4>
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
    
    export default Pubertetlije;