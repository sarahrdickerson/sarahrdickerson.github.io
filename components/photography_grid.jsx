import React from "react";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";

import photos from "@/data/photos.json";

const PhotographyGrid = () => {
  return (
    <div className="w-full ">
      <PhotoAlbum layout="masonry" photos={photos} />
    </div>
  );
};

export default PhotographyGrid;
