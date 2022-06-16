
import salad from './img/salat.jpeg';

const Product1 = () => {
    return (<div className="product1">
        <div>
            <img src={salad} alt="Salat" />
            <p>$45 / $55</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore placeat minus dignissimos aliquam sequi praesentium iste voluptatum consequuntur deleniti eius!</p>
        </div>
        <div>
            <img src="../img/salat.jpeg" alt="Salat" />
            <p>$65 / $70</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore placeat minus dignissimos aliquam sequi praesentium iste voluptatum consequuntur deleniti eius!</p>
        </div>
        <div>
            <img src="../img/salat.jpeg" alt="Salat" />
            <p>$30.50</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore placeat minus dignissimos aliquam sequi praesentium iste voluptatum consequuntur deleniti eius!</p>
        </div>
        <div>
            <img src="../img/salat.jpeg" alt="Salat" />
            <p>$25.50</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore placeat minus dignissimos aliquam sequi praesentium iste voluptatum consequuntur deleniti eius!</p>
        </div>
    </div>);
}

export default Product1;