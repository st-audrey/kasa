
import '../../styles/components/Banner.css'
import banner_img from '../../assets/banner_img.webp'


function Banner() {

    return (
        <div className='banner-container banner-common'>
  
            <img className='banner-img banner-common' width="1240" height="223" src={banner_img} alt="..."/>
            <p className='banner-txt'>Chez vous, partout et ailleurs</p>
          
        </div>
   
    )

}

export default Banner