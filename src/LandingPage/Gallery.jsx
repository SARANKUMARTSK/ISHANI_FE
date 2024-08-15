import React from 'react'

function Gallery() {
  return <>
  <div className="gallery">
    <h2 className='sub_heading'>Gallery</h2>

    <div className='gallery_collection'>
        <img src="https://www.nfnoticias.com.br/images/placeholder/600x400.jpg" alt="" />
        <img src="https://www.nfnoticias.com.br/images/placeholder/600x400.jpg" alt="" />
        <img src="https://www.nfnoticias.com.br/images/placeholder/600x400.jpg" alt="" />
        <img src="https://www.nfnoticias.com.br/images/placeholder/600x400.jpg" alt="" />
        <img src="https://www.nfnoticias.com.br/images/placeholder/600x400.jpg" alt="" />
        <div className='more_button'>More...</div>
    </div>
  </div>
  </>
}

export default Gallery