
import Cat from './Cat'

const Home = () => {
  return (
    <header className="flex mb-6 w-10/12 h-screen mx-auto">
      <div className='text-left'>
        <h1 className="font-bold text-5xl md:text-7xl ">I<span className='text-green-600'>'</span>M SEAN <br />WANG<span className='text-green-600'>.</span></h1>
        <p className="md:text-2xl text-lg pt-6 ">Cybersecurity <span className='text-green-600 font-bold'>&</span> Full-Stack Developer</p>

        
      </div>
      <div className='lg:min-w-md'>
        <Cat />
      </div>


    </header>
  )
}

export default Home
