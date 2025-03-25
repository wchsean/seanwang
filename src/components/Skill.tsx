import { FaPython, FaJs, FaNetworkWired, FaDocker, FaHtml5, FaCss3Alt, FaSass, FaReact, FaCloud,} from 'react-icons/fa';
import { SiNginx, SiUnraid } from 'react-icons/si';
import Card from '@mui/material/Card';


const Skill = () => {
  return (
<section className=" w-screen h-screen flex items-center justify-center" data-swiper-parallax="10%" data-swiper-parallax-duration="600">
      <div className='xl:p-10 bg-black/50 p-10 rounded-lg shadow-lg w-10/12 h-10/12 flex items-center justify-center'>
      <div>
      <h2 className="text-5xl max-sm:text-3xl font-semibold mb-4 ">PROFESSIONAL</h2>
        <p className="text-gray-400 text-4xl max-md:text-3xl max-sm:text-2xl xl:px-20">MY KNOWLEDGE IN SOFTWARE</p>

      
      <div className="grid grid-cols-2 gap-4 mt-4">
  {[{ icon: FaPython, label: 'Python', color: 'text-green-600' },
    { icon: FaJs, label: 'JavaScript', color: 'text-yellow-500' },
    { icon: FaNetworkWired, label: 'Network Security', color: 'text-blue-600' },
    { icon: FaDocker, label: 'Docker', color: 'text-blue-700' },
    { icon: SiNginx, label: 'Nginx', color: 'text-green-500' },
    { icon: SiUnraid, label: 'Unraid', color: 'text-red-500' },{ icon: FaHtml5, label: 'HTML', color: 'text-orange-600' },  // HTML
    { icon: FaCss3Alt, label: 'CSS', color: 'text-blue-500' },  // CSS
    { icon: FaSass, label: 'Sass', color: 'text-pink-500' },    // Sass
    { icon: FaReact, label: 'React', color: 'text-blue-400' },  // React
    { icon: FaCloud, label: 'NAS & Cloud', color: 'text-blue-400' } // NAS & Cloud
  ].map(({ icon: Icon, label, color }, index) => (
    <Card key={index} sx={{ backgroundColor: 'rgba(300, 300, 300, 0.284)' }} className="p-4 max-sm:p-2 flex items-center space-x-4">
      <Icon size={32} className={color} />
      <span className="text-lg text-gray-100">{label}</span>
    </Card>
  ))}
  </div>
</div>

      </div>
    </section>
  )
}

export default Skill
