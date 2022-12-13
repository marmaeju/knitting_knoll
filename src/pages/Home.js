import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <main className="home-main">
      <section>
        <div>
          <p>
            Knitting Knoll is a knitting resource for knitters of all skill
            levels!
          </p>
        </div>
      </section>
      <section>
        <div className="btns-of-home">
          <button className="home-btn" onClick={() => navigate('/materials')}>
            Materials
          </button>
          <button className="home-btn" onClick={() => navigate('/casts')}>
            Casts
          </button>
          <button className="home-btn" onClick={() => navigate('/stitches')}>
            Stitches
          </button>
        </div>
      </section>
    </main>
  )
}

export default Home
