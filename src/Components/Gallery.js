import Product1 from './Product1';
import Product2 from './Product2';

const Gallery = () => {
    return (<section className="gallery">
        <div className="pillar"></div>
        <div className="images">
            <Product1 />
            <Product2 />
        </div>
        <div className="pillar"></div>
    </section>);
}

export default Gallery;