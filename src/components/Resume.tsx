import { FaPython, FaJs, FaNetworkWired, FaDocker } from 'react-icons/fa';
import { SiNginx, SiUnraid } from 'react-icons/si';
import Card from '@mui/material/Card';



const Resume = () => {
  return (
    <section className=" w-screen h-screen flex items-center justify-center">
      <div className='xl:p-10 bg-white p-10 rounded-lg shadow-lg w-10/12 h-10/12 flex items-center justify-center'>
      <div>
      <h2 className="text-2xl font-semibold mb-4">Resume</h2>
      <a
        href="/resume.pdf"
        className="bg-red-300 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Download My Resume
      </a>
      <div className="grid grid-cols-2 gap-4 mt-4">
  {[{ icon: FaPython, label: 'Python', color: 'text-green-600' },
    { icon: FaJs, label: 'JavaScript', color: 'text-yellow-500' },
    { icon: FaNetworkWired, label: 'Network Security', color: 'text-blue-600' },
    { icon: FaDocker, label: 'Docker', color: 'text-blue-700' },
    { icon: SiNginx, label: 'Nginx', color: 'text-green-500' },
    { icon: SiUnraid, label: 'Unraid', color: 'text-red-500' }
  ].map(({ icon: Icon, label, color }, index) => (
    <Card key={index} className="p-4 flex items-center space-x-4">
      <Icon size={32} className={color} />
      <span className="text-lg text-gray-900">{label}</span>
    </Card>
  ))}
  </div>
</div>

      </div>
    </section>
  )
}

export default Resume
