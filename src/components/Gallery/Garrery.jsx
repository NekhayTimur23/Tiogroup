import Carousel from "./Carousel/Carousel"
import "./Garrery.sass"

export default function Gallery() {
    return(
        <Carousel>
            <div className="item item-1">item-1</div>
            <div className="item item-2">item-2</div>
            <div className="item item-3">item-3</div>
        </Carousel>
    )
}