
const Projects = () => {
  return (
    <section className=" w-screen h-screen flex items-center justify-center" data-swiper-parallax="10%" data-swiper-parallax-duration="600">
      <div className="xl:p-10 bg-black/50 p-10 rounded-lg shadow-lg w-10/12 h-10/12 flex items-center justify-center">
    <div>
    <h2 className="text-5xl max-sm:text-3xl font-semibold mb-4">Projects</h2>
    <ul className="list-disc text-gray-400 text-4xl max-md:text-3xl max-sm:text-2xl xl:px-20">
      <li>Nextcloud deployment on Unraid using Docker & Nginx Proxy Manager</li>
      <li>Personal NAS build with secure remote access</li>
      <li>Static & dynamic website hosting with Unraid</li>
    </ul>
    </div>
    </div>
  </section>

  )
}

export default Projects
