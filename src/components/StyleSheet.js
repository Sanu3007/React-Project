import React from 'react'
import './Mystyle.css'
function StyleSheet(props)
{
    let x= props.status?'primary':''
    return(
        <div>
            <h1 className={x}>Sanu Kumar  </h1>
            <h1  className='primary'>(Founder and CEO of ExploreYourself.com)</h1>
        </div>
    )
}

export default StyleSheet;