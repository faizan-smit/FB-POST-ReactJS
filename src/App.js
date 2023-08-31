// import logo from './logo.svg';
import './App.css';
import { HandThumbsUp, ChatLeftText, Share } from "react-bootstrap-icons";

function App(props) {
  return (
    <div className="maindiv">

      <div className='headdiv'>
        
          <div><img src={props.image} alt={props.alt} />
          
          </div>

          <div className='d-t'>
          <h4 className='person-name'>{props.name}</h4>
          <p>{props.time}</p>
          </div>


      </div>



      <div className="postdiv">

          <p>{props.post}</p>
          <img src={props.postImg} alt="Post" />


      </div>




        <hr />

      <div className="postFooter">


        <div className="button">
          <HandThumbsUp />
          Like
        </div>
        <div className="button">
          <ChatLeftText /> Comment
        </div>
        <div className="button">
          <Share /> Share
        </div>


      </div>

      <hr />





      
    </div>
  );
}

export default App;
