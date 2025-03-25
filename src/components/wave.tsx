import '../styles/wave.css'

const wave = () => {
  return (
<div className="header">


      {/* Waves Container */}
      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            {/* wave Gradient color definition start*/}
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgb(84,58,183)" stop-opacity="0.3" />
          <stop offset="100%" stop-color="rgb(0,172,193)" stop-opacity="0.3" />
    </linearGradient>
    {/* wave Gradient color definition end*/}
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            {/* wave Gradient color definition url(#wave-gradient)*/}
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="url(#wave-gradient)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.1)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.2)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255,255,255,0.2)" />
          </g>
        </svg>
      </div>
      {/* Waves end */}

      {/* Header ends */}

    </div>
  )
}

export default wave
