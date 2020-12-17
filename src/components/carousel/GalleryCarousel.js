import React from 'react';
import { Carousel } from 'react-bootstrap';
import day from '../../img/paintings/day.jpg';

const GalleryCarousel = () => { 
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    src={day}
                    alt="First slide"
                    style={{width: "400px", height: "400px"}}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="../../img/paintings/choTrongDuoiNgonTayPhat_book.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default GalleryCarousel;