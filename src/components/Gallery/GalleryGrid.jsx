import "./GalleryGrid.css"
import { galleryImages } from "../../data/gallery"
const GalleryGrid = () => {
  return (

    <section id="gallery" className="gallery-section">
      <div className="gallery-section-header">
        <h2 className="gallery-title">Our Restaurant</h2>
        <p className="gallery-subtitle">
          A glimpse into the heart and soul of our kitchen, our space, and our
          flavors.
        </p>
      </div>
      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img.src} alt={img.caption} loading="lazy" />
            <div className="gallery-card-caption">{img.caption}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GalleryGrid