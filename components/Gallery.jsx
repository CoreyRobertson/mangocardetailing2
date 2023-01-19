import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const Gallery = (props) => {
    const { slides, options } = props
    const [emblaRef] = useEmblaCarousel({
        containScroll: "trimSnaps"
    })

    return (
        <div className="embla" id='gallery'>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">

                    <div className="embla__slide">

                        <img
                            className="embla__slide__img"
                            src='/static/gallery1.jpg'
                            alt="Your alt text"
                        />

                    </div>
                    <div className="embla__slide">

                        <img
                            className="embla__slide__img"
                            src='/static/gallery2.jpg'
                            alt="Your alt text"
                        />

                    </div>
                    <div className="embla__slide">

                        <img
                            className="embla__slide__img"
                            src='/static/gallery3.jpg'
                            alt="Your alt text"
                        />

                    </div>
                    <div className="embla__slide">

                        <img
                            className="embla__slide__img"
                            src='/static/gallery4.jpg'
                            alt="Your alt text"
                        />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Gallery