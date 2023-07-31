import React, { useState } from 'react'
import './gallery.css'
import CloseIcon from '@material-ui/icons/Close'
import img1 from './images/1.JPEG';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';
import img7 from './images/7.jpg';
import img8 from './images/8.jpg';
import img9 from './images/9.jpg';
import img10 from './images/10.jpg';
import img11 from './images/11.jpg';
import img12 from './images/12.jpg';
import img13 from './images/13.jpg';
import img14 from './images/14.jpg';
import img15 from './images/15.jpg';
import img16 from './images/16.jpg';
import img17 from './images/17.jpg';
import img18 from './images/18.jpg';
import img19 from './images/19.jpg';
import img20 from './images/20.jpg';
import img21 from './images/21.jpg';
import img22 from './images/22.jpg';
import img23 from './images/23.jpg';
import img24 from './images/24.jpg';
import img25 from './images/25.jpg';
import img26 from './images/26.jpg';
import img27 from './images/27.jpg';
import img28 from './images/28.jpg';
import img29 from './images/29.jpg';
import img30 from './images/30.jpg';
import img31 from './images/31.jpg';
import img32 from './images/32.jpg';
import img33 from './images/33.jpg';
import img34 from './images/34.jpg';
import img35 from './images/35.jpg';
import img36 from './images/36.jpg';
import img37 from './images/37.JPEG';
import img38 from './images/38.JPEG';
import img39 from './images/39.JPEG';
import img40 from './images/40.JPEG';
import img41 from './images/41.JPEG';


export default function Gallary() {
    let data = [
        {
            id:1,
            imgSrc: img1,
        },
        {
            id:2,
            imgSrc: img2,
        },
        {
            id:3,
            imgSrc: img3,
        },
        {
            id:4,
            imgSrc: img4,
        },
        {
            id:5,
            imgSrc: img5,
        },
        {
            id:6,
            imgSrc: img6,
        },
        {
            id:7,
            imgSrc: img7,
        },
        {
            id: 8,
            imgSrc: img8,
        },
        {
            id: 9,
            imgSrc: img9,
        },
        {
            id: 10,
            imgSrc: img10,
        },
        {
            id: 11,
            imgSrc: img11,
        },
        {
            id: 12,
            imgSrc: img12,
        },
        {
            id: 13,
            imgSrc: img13,
        },
        {
            id: 14,
            imgSrc: img14,
        },
        {
            id: 15,
            imgSrc: img15,
        },
        {
            id: 16,
            imgSrc: img16,
        },
        {
            id: 17,
            imgSrc: img17,
        },
        {
            id: 18,
            imgSrc: img18,
        },
        {
            id: 19,
            imgSrc: img19,
        },
        {
            id: 20,
            imgSrc: img20,
        },
        {
            id: 21,
            imgSrc: img21,
        },
        {
            id: 22,
            imgSrc: img22,
        },
        {
            id: 23,
            imgSrc: img23,
        },
        {
            id: 24,
            imgSrc: img24,
        },
        {
            id: 25,
            imgSrc: img25,
        },
        {
            id: 26,
            imgSrc: img26,
        },
        {
            id: 27,
            imgSrc: img27,
        },
        {
            id: 28,
            imgSrc: img28,
        },
        {
            id: 29,
            imgSrc: img29,
        },
        {
            id: 30,
            imgSrc: img30,
        },
        {
            id: 31,
            imgSrc: img31,
        },
        {
            id: 32,
            imgSrc: img32,
        },
        {
            id: 33,
            imgSrc: img33,
        },
        {
            id: 34,
            imgSrc: img34,
        },
        {
            id: 35,
            imgSrc: img35,
        },
        {
            id: 36,
            imgSrc: img36,
        },
        {
            id: 37,
            imgSrc: img37,
        },
        {
            id: 38,
            imgSrc: img38,
        },
        {
            id: 39,
            imgSrc: img39,
        },
        {
            id: 40,
            imgSrc: img40,
        },
        {
            id: 41,
            imgSrc: img41,
        }
    ]
    const [model,setModel] = useState(false);
    const [tempimgSrc,setTempImgSrc] = useState('')
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true)
    }
  return (
    <>
    <div className={model? "model open": "model"}>
        <img alt='image' src= {tempimgSrc} />
        <CloseIcon onClick={()=> setModel(false)}/>
    </div>
        <div className='gallery'>
            {data.map((item,index)=>{
                return(
                    <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                    <img alt="image" src ={item.imgSrc} style={{width: '100%'}}/>
                    </div>
                )
            })}
            
        </div>
    </>
  )
}
