import Image from '../../assets/image.svg'
import '../../App.css'

const ImageComponent = () => {
  return (
    <div className='imageContainer'>
      <img src={Image} alt="Image" className='responsive'/>
    </div>
  )
}

export default ImageComponent