import React from 'react'
import frame1 from './../../Styles/Images/Frame.svg'
import frame2 from './../../Styles/Images/Frame-1.svg'
import frame3 from './../../Styles/Images/Frame-2.svg'
import frame4 from './../../Styles/Images/Frame-3.svg'
import frame5 from './../../Styles/Images/Frame-4.svg'
import frame6 from './../../Styles/Images/Frame-5.svg'
export default function Companies() {
    return (
        <div className="companies">
                <img src={frame1} alt="company"/>
                <img src={frame2} alt="company"/>
                <img src={frame3} alt="company"/>
                <img src={frame4} alt="company"/>
                <img src={frame5} alt="company"/>
                <img src={frame6} alt="company"/>
            </div>
    )
}
