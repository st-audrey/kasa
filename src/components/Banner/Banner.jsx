import '../../styles/components/Banner.css'

import { useLocation } from 'react-router-dom'

import banner_img from '../../assets/banner_img.webp'
import about_img from '../../assets/about_img.webp'

function Banner() {
  const location = useLocation()

  let imageToDisplay = location.pathname === '/' ? banner_img : about_img

  return (
    <div
      className={
        location.pathname === '/'
          ? 'banner-container banner-common banner-home'
          : 'banner-container banner-common banner-about'
      }>
      <img
        className={
          location.pathname === '/' ? 'banner-img banner-common' : 'banner-img banner-about'
        }
        src={imageToDisplay}
        alt="..."
      />

      <p className={location.pathname === '/' ? 'banner-txt' : 'd-none'}>
        Chez vous, partout et ailleurs
      </p>
    </div>
  )
}

export default Banner
