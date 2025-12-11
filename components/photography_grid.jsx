import React from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

import photos from "@/data/photos.json";
// import photos from "./photos";

const PhotographyGrid = () => {
  return (
    <div className="w-full ">
      <MasonryPhotoAlbum photos={photos} />
    </div>
  );
};

export default PhotographyGrid;
