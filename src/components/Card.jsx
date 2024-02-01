import './Card.css';
import Header from './Header';
import Counter from './Counter.jsx';

function Card(){
  
  return(
    <div className="container">
      <div className='wrapper'>
        <Header></Header>
        <Counter></Counter>
       
      </div>
    </div>
    
  );
}
export default Card;
