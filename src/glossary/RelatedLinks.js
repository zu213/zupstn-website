import './Glossary.css';

function RelatedLinks() {
  return (
    <div className='related-links'>
      <div className='page-header'>Related links</div>
      <div className='links-list-container'>
        <div className='links-container'>
          <div className='link'> <a href='https://top-tracks-omega.vercel.app/api/spotify' target='_blank' rel='noreferrer'>Top Tracks</a></div>
          <div className='link'> <a href="/exes/chess.exe" download>Chess Download</a></div>
          <div className='link'> <a href='https://unknownevent.com' target='_blank' rel='noreferrer'>UnknownEvent.com</a></div>
          <div className='link'> <a href='https://www.angelpunzel.com' target='_blank' rel='noreferrer'>Angelpunzel.com</a></div>
          <div className='link'> <a href='https://abbycolwell.com' className="small-link" download="A6byArt">A6byArt</a></div>
        </div>
        <div className='links-container'>
          <div className="link"> <a href="https://github.com/zu213" target="_blank" rel="noreferrer">Github</a></div>
          <div className='link'> <a href='https://www.linkedin.com/in/zachary-upstone-076218214/' target='_blank' rel='noreferrer'>LinkedIn</a></div>
          <div className="link"> <a href="https://www.pugpig.com/" target='_blank' rel='noreferrer'>Pugpig</a></div>
          <div className="link"> <a href="https://www.kontron-americas.com/" target='_blank' rel='noreferrer'>BSQUARE</a></div>
        </div>
        <div className='links-container'>
          <div className='link'> <a href='https://top-tracks-omega.vercel.app/api/spotify' target='_blank' rel='noreferrer'>Top Tracks</a></div>
          <div className='link'> <a href='https://camo.githubusercontent.com/2729c89c3422980c8037a7690d19eb5a90d4ee22b86b57b23d98d140ec5cc9b3/68747470733a2f2f6769746875622d726561646d652d73746174732d6663756a6d6f66766d2d6863617a2d656e6f74737075732d70726f6a656374732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f6c616e67735f636f756e743d3130267468656d653d7261646963616c266c61796f75743d646f6e75742d766572746963616c26757365726e616d653d7a75323133' target='_blank' rel='noreferrer'>Top Languages</a></div>
          <div className='link'> <a href='https://s3-eu-north-1.amazonaws.com/zudissertationbucket/Dissertation.pdf' className="small-link" download="Zachary Upstone Dissertation">Dissertation</a></div>
          <div className='link'> <a href='https://www.etsy.com/uk/shop/SprayDesignsGB' target='_blank' rel='noreferrer'>My Etsy</a></div>
        </div>
      </div>
    </div>
  );
}

export default RelatedLinks;