import { Link } from 'react-router-dom';
import './Glossary.css'

function Glossary() {
    return (
    <div>
      <div className='linkTitle'>Page links</div>
      <div className='linksContainer'>
        <div className='link'> <Link to="/">/home</Link></div>
        <div className='link'> <Link to="/me">/me</Link></div>
        <div className='link'> <Link to="/cv">/cv</Link></div>
        <div className='link'> <Link to="/projects">/projects</Link></div>
        <div className='link'> <Link to="/gallery">/gallery</Link></div>
        <div className='link'> <Link to="/charts">/charts</Link></div>
        <div className='link'> <Link to="/fruit-lips">/fruit-lips</Link></div>
        <div className='link'> <Link to="/368squares">/368squares</Link></div>
  
      </div>
    </div>
    )
}

export default Glossary;