import {Link} from 'react-router-dom'

const Nav = () => {

  return (
    <header>
      <nav>
        <section className='pages'>
          <div>
          <Link to='/' className='title'>Knitting Knoll</Link>
          </div>
          <div className='page-links'>
          <Link to='/materials' className='link'>Materials</Link>
          <Link to='/casts' className='link'>Casts</Link>
          <Link to='/stitches' className='link'>Stitches</Link>
          </div>
        </section>
      </nav>
    </header>
    
  )
}

export default Nav