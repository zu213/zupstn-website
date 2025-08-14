import './submodules.css';

// Sub modules
export function FruitLips() {
  return (
    <div className='fruit-lips-container'>
      <iframe 
        title='fruit-lips'
        className='fruitLips'
        src="./fruit-lips/fruit-lips.html"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export function FruitLips2() {
  return (
    <div className='fruit-lips-container'>
      <iframe 
        title='fruit-lips'
        className='fruitLips'
        src="./fruit-lips/fruit-lips2.html"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export function Squares() {
  return (
    <div className='squares-container'>
      <iframe 
        title='368Squares'
        className='368Squares'
        src="./squares/squares.html"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export function LLMCompare() {
  return (
    <div className='llm-compare-container'>
      <iframe 
        title='LLMCompare'
        data-class='llmCompare'
        className='llmCompare'
        src="./llm-compare/src/index.html"
        width="100%"
        height="100%"
      />
    </div>
  );
}