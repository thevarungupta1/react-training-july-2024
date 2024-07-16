// import React, { Component } from 'react';

// class Demo extends Component{
//     constructor(){
//         super()
//         this.state = {
//             name: 'Guest'
//         }
//     }

//     onClickHandler = () => {
//         //console.log('button clicked')
//         // console.log(this.state.name)
//         // this.state.name = 'John'
//         // console.log(this.state.name)
//         this.setState({
//             name: 'John'
//         })
//     }

//     render(){
//         console.log('render')
//         return(
//             <div>
//                 <h1>Welcome { this.state.name }</h1>
//                 <button onClick={ this.onClickHandler }>Login</button>
//             </div>
//         )
//     }
// }
// export default Demo;
import {useState} from 'react'

const Demo = () => {

    const [ name, setName ] = useState('Guest')

    const onClickHandler = () => {
        setName('Paul')
    }

    return(
        <div>
            <h1>Welcome { name }</h1>
            <button onClick={ onClickHandler }>Login</button>
        </div>
    )
}
export default Demo;