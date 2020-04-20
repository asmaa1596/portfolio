import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'


class Header extends Component {
    state = {}

    render() {
        return (<div>
            <img src={data.logo} alt='whatever' width='128' height='128' float='right'></img>
        <h1 className='heading-background'>CREATIVE</h1>
        
            <header>
                {/* <h1>
                    <Fade bottom cascade>{data.logo}</Fade></h1> */}
            {/* <img src={data.logo} width='128' height='128' float='right'></img> */}
            </header>
            <Fade bottom>
            
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}<br></br>{data.headerTagline[3]}
               <br></br>
                    {/* <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button> */}
                    <button><a href={data.resume} rel="noopener noreferrer" >Resume</a></button>
                
                </p>
            </Fade>



        </div>);
    }
}

export default Header;