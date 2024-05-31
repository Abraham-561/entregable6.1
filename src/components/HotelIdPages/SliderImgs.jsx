import React, { useState } from 'react'
import './SlicerImgs.css'

const SliderImgs = ({hotel}) => {
    const [imgSelected, setImgSelected] = useState(0)

    const objStyle = {
        transform: `translateX(calc((-${imgSelected}/${hotel?.images.length}) * 100%))`,
        width: `${hotel?.images.length * 100}%`
    }

    const handleNextImg = () => {
        const lengthImgs = hotel?.images.length -1
        setImgSelected(state => (state +1 <= lengthImgs) ? state +1 :state )
    }


    const hanlePrevImg = () => {
        if (imgSelected - 1 >= 0) {
            setImgSelected(imgSelected -1)
        } 
        
    }



  return (
    <div className='slider'>

        <button onClick={hanlePrevImg} className='slider__btn'>x</button>
        <div className='slider__interior'>
                <div style={objStyle} className='slider__movable'>
                    {
                        hotel?.images.map( imgInfo => (
                            <div key={imgInfo.url} className='slider__img__container'>
                                <img className='slider__img' src={imgInfo.url} alt="" />
                            </div>
                        ))
                    }
                </div>
        </div>
        <button onClick={handleNextImg} className='slider__btn slider__btn__next'>x</button>
    </div>
  )
}

export default SliderImgs