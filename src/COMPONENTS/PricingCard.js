import React from 'react'
import "./PricingCard.css"
import {Link} from "react-router-dom"

const PricingCard = () => {
  return (
    <div className='pricing'>
        {/* Pricing card */}
        <div className='card-container'>

            <div className='card-1' style={{background:"black", color:"white"}}>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className='btc'>$ 100</p>
                <p>- 2 Days -</p>
                <p>- 1 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='btn-1'>PURCHASE NOW</Link>
            </div>

            <div className="card-1" style={{background:"black", color:"white"}}>
                <h3>- Premium -</h3>
                <span className='bar'></span>
                <p className='btc'>$ 300</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='btn-1'>PURCHASE NOW</Link>
            </div>

                        
            <div className='card-1' style={{background:"black", color:"white"}}>
                <h3>- Business -</h3>
                <span className='bar'></span>
                <p className='btc'>$ 500</p>
                <p>- 5 Days -</p>
                <p>- 6 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='btn-1'>PURCHASE NOW</Link>
            </div>

        </div>
      
    </div>
  )
}

export default PricingCard
