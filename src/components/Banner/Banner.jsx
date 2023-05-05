
import '../../styles/components/Banner.css'

import { useLocation } from 'react-router-dom'

import banner_img from '../../assets/banner_img.webp'
import about_img from '../../assets/about_img.webp'


function Banner() {

    const location = useLocation()

    let imageToDisplay = location.pathname === "/" ? banner_img : about_img

    return (
        <div className='banner-container banner-common'>
  
            <img className='banner-img banner-common'src={imageToDisplay} alt="..."/>
           
            <p className= {location.pathname === "/" ? 'banner-txt' : 'banner-txt-hidden'}>Chez vous, partout et ailleurs</p>
          
        </div>
   
    )

}

export default Banner