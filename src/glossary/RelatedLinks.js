import './Glossary.css';

function RelatedLinks() {
  return (
    <div>
      <div className='page-header'>Related links</div>
      <div className='links-list-container'>
        <div className='links-container'>
          <div className='link'> <a href='https://top-tracks-omega.vercel.app/api/spotify' target='_blank' rel='noreferrer'>Top Tracks</a></div>
          <div className='link'> <a href="/exes/chess.exe" download>Chess Download</a></div>
          <div className='link'> <a href='https://unknownevent.com' target='_blank' rel='noreferrer'>UnknownEvent.com</a></div>
          <div className='link'> <a href='https://www.angelpunzel.com' target='_blank' rel='noreferrer'>Angelpunzel.com</a></div>
          <div className='link'> <a href='https://s3-eu-north-1.amazonaws.com/zudissertationbucket/Dissertation.pdf' className="small-link" download="Zachary Upstone Dissertation">Dissertation</a></div>
          <div className='link'> <a href='https://www.etsy.com/uk/shop/SprayDesignsGB' target='_blank' rel='noreferrer'>My Etsy</a></div>
        </div>
        <div className='links-container'>
          <div className="link"> <a href="https://github.com/zu213" target="_blank" rel="noreferrer">Github</a></div>
          <div className='link'> <a href='https://www.linkedin.com/in/zachary-upstone-076218214/' target='_blank' rel='noreferrer'>LinkedIn</a></div>
          <div className="link"> <a href="https://www.pugpig.com/" target='_blank' rel='noreferrer'>Pugpig</a></div>
          <div className="link"> <a href="https://www.kontron-americas.com/" target='_blank' rel='noreferrer'>BSQUARE</a></div>
          <div className='link'> <a href='https://github-readme-stats.vercel.app/api/top-langs/?username=zu213&langs_count=10&theme=radical&layout=donut-vertical' target='_blank' rel='noreferrer'>Top Languages</a></div>
        </div>
      </div>
    </div>
  );
}

export default RelatedLinks;