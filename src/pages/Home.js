import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <main className="home-main">
      <section className="home-section">
        <div className="home-div">
          <section>
            <div>
              <h2>
                Knitting Knoll, an inclusive resource for knitters of all skill
                levels!
              </h2>
            </div>
          </section>
          <section>
            <div className="btns-of-home">
              <div className="resource">
                <h3>
                  Materials is here to show you pattern and yarn resources, so
                  you can purchase the materials needed to achieve your wildest
                  knitting dreams.
                </h3>
                <button
                  className="home-btn"
                  onClick={() => navigate('/materials')}
                >
                  Go to Materials
                </button>
              </div>
              <div className="resource">
                <h3>
                  Casts shows both Cast-On and Cast-Off methods including
                  tutorials so you can start and end you projects with ease.
                </h3>
                <button className="home-btn" onClick={() => navigate('/casts')}>
                  Go to Casts
                </button>
              </div>
              <div className="resource">
                <h3>
                  Stitches gives you visual examples as well as tutorials, to
                  help you give the texture and variety your project needs.
                </h3>
                <button
                  className="home-btn"
                  onClick={() => navigate('/stitches')}
                >
                  Go to Stitches
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Home
