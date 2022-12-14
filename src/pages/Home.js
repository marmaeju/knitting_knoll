import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <main className="home-main">
      <section>
        <div>
          <h3>
            Knitting Knoll is a knitting resource for knitters of all skill
            levels!
          </h3>
        </div>
      </section>
      <section>
        <div className="btns-of-home">
          <div>
            <h5>
              Materials is here to show you pattern and yarn web resources so
              you can
            </h5>
            <button className="home-btn" onClick={() => navigate('/materials')}>
              Materials
            </button>
          </div>
          <div>
            <button className="home-btn" onClick={() => navigate('/casts')}>
              Casts
            </button>
          </div>
          <div>
            <button className="home-btn" onClick={() => navigate('/stitches')}>
              Stitches
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
