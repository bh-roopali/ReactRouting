import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import add from './Action'
import { connect } from 'react-redux'
import data from './data/data.json'

function Home(){
    
    function onWatchnow(url) {
        window.open(url)
      }
      

    return(
        <div className="mainDivCSS">
        {data.map( data => 
          <div className="cardCss">
            <img src={data.img} className="imgCSS"></img>
            {/* <img src='img1.png' className="imgCSS" /> */}
            
            <div >
      
            </div>
          <label style={{marginTop: '5px'}}>{data.name}</label>
          <button className="btnCSS" onClick={() => onWatchnow(data.url)}>Watch Now</button>
          </div>)}
          </div>
    )
}
// class Home extends React.Component{

//     constructor(props){
//         super(props);
//         this.state={
//             name: '',
//             city: ''
//         }
//         this.onAdd = this.onAdd.bind(this)
//     }

//     onAdd(event) {
//     event.preventDefault();
//     var name = document.getElementById('idName').value
//     var city = document.getElementById('idCity').value
//     this.props.add({name,city})
//     }
      
//     render(){
//         console.log(this.props)
//         const formStyle = {
//             display: 'flex',
//     flexDirection: 'column',
//     width: '50%'
//         }
//         return(

//             <div>
//                 <form style={formStyle} onSubmit={this.onAdd}>
//                     <label>Name</label>
//                     <input id="idName"></input>
//                     <label>City</label>
//                     <input id="idCity"></input>
//                     <input type="submit" value="Add"></input>
                    
//                 </form>
//             </div>
//         )
//     }
// }

const mapStateToProps = state => {
    return {add: state}
} 

//export default Home
export default connect(
    mapStateToProps,
    {add}
)(Home)