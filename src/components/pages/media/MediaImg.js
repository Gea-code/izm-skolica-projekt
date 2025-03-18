import React, { useEffect, useState } from "react";

const MediaImg = ({ id, size }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(
      `https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/media/${id}`
    )
      .then((response) => response.json())
      .then((data) => setImage(data))
      .catch((error) => console.error("Error fetching image:", error));
  }, [id]);

  if (!image || !image.media_details || !image.media_details.sizes) {
    return <img src="https://placehold.co/600x400?text=Loading..." alt="Loading" />;
  }

  const imageUrl = image.media_details.sizes[size]
    ? image.media_details.sizes[size].source_url
    : image.media_details.sizes.full.source_url;

  return <img src={imageUrl} alt="Media" />;
};

export default MediaImg;