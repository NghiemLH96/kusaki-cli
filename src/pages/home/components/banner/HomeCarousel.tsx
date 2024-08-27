import { useEffect, useState } from 'react';
import './homeCarousel.scss'
import {ArrowBackIos,ArrowForwardIos,RadioButtonChecked,RadioButtonUnchecked} from '@mui/icons-material/';

export default function HomeCarousel() {
    const slideImgs = [
        "https://firebasestorage.googleapis.com/v0/b/kusaki-4c32a.appspot.com/o/banner%2Fbanner-accessories.jpg?alt=media&token=34a2ec5b-5697-420e-b8a7-ea3ba332d772",
        "https://firebasestorage.googleapis.com/v0/b/kusaki-4c32a.appspot.com/o/banner%2Fbanner-couples.jpg?alt=media&token=364f10fc-08a6-4338-b8cb-7e740d567a51",
        "https://firebasestorage.googleapis.com/v0/b/kusaki-4c32a.appspot.com/o/banner%2Fbanner-accessories.jpg?alt=media&token=34a2ec5b-5697-420e-b8a7-ea3ba332d772",
        "https://firebasestorage.googleapis.com/v0/b/kusaki-4c32a.appspot.com/o/banner%2Fbanner-couples.jpg?alt=media&token=364f10fc-08a6-4338-b8cb-7e740d567a51",
        "https://firebasestorage.googleapis.com/v0/b/kusaki-4c32a.appspot.com/o/banner%2Fbanner-accessories.jpg?alt=media&token=34a2ec5b-5697-420e-b8a7-ea3ba332d772",
        "https://firebasestorage.googleapis.com/v0/b/kusaki-4c32a.appspot.com/o/banner%2Fbanner-couples.jpg?alt=media&token=364f10fc-08a6-4338-b8cb-7e740d567a51",
    ]
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const slider = document.getElementById('slides__container');
        slider ? slider.style.transform = `translateX(-${currentSlide * 100}%)` : null;
    },[currentSlide])

    const prevSlide = () => {
        if (currentSlide === 0 ) {
            return
        }else{
            setCurrentSlide(currentSlide-1);
        }
    }

    const nextSlide = () => {
        if (currentSlide === slideImgs.length - 1) {
            return
        }else{
            setCurrentSlide(currentSlide+1);
        }
    }

  return (
    <div className='carousel__container'>
        <div className='point__container'>
            <ul className='point__list'>
                {slideImgs.map((item,index)=>(
                    <li key={item} className={currentSlide === index ? 'point active' : 'point'} onClick={()=>{setCurrentSlide(index)}}>{index == currentSlide ? <RadioButtonChecked/> : <RadioButtonUnchecked/>}</li>
                ))}
            </ul>
        </div>
        <div className='carousel__btn prev' onClick={()=>{prevSlide()}}>
            <ArrowBackIos/>
        </div>
        <div id='slides__container' className='slides__container'>
            {
                slideImgs.map((item) => {
                    return (
                        <img className='slide' src={item} alt="" />
                    )
                })
            }
        </div>
        <div className='carousel__btn next' onClick={()=>{nextSlide()}}>
            <ArrowForwardIos/>
        </div>
    </div>
  )
}
