import Wave from "../components/wave";

const Contact = () => {
  return (
    
<div className='w-screen h-screen flex flex-col items-center justify-center'>
    <div className="bg-black/40 max-w-md mx-auto mt-8 p-6 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
      <p>Email: <a href="mailto:wchsean@gmail.com" className="text-blue-600">wchsean@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/jheng-siang-wang-227292294" className="text-blue-600">www.linkedin.com/in/jheng-siang-wang-227292294</a></p>

      
    </div>
    <footer className="mt-6 text-center bottom-0 w-screen absolute">

          <Wave />
        </footer>
    </div>
  )
}

export default Contact
