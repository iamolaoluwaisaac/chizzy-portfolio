import React, {Component} from 'react'
import "./HeroImg2.css"

class HeroImg2 extends Component {

    render() {
          return (
    <div className='hero-img'>
        <div className='heading'>
            <h1 style={{color:"white"}}>{this.props.heading}</h1>
            <p style={{color:"white"}}>{this.props.text}</p>

        </div>
      
    </div>
  )
        
    }

}

export default HeroImg2
