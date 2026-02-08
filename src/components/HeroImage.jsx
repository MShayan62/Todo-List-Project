import myImage from '../assets/selfie.svg'

const HeroImage = () => {
  return (
    <div className='md:flex md:items-center w-3/5 mt-10'>
        <img src={myImage} alt="Image" className="md:w-3/6"/>
        <p className='pb-12 md:pb-0'><i>Empty as my motivation on Monday 😅. <br/>Let’s start adding stuff!</i></p>
    </div>
  )
}

export default HeroImage