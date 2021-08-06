import React from 'react'
import "./landingpage.css"
import indeximg from "../assets/index-header.jpg"
import googleplay from "../assets/googleplay.svg"
import appstore from "../assets/app story.svg"


const landingpage = () => {
    return (
        <div>

            <div className="lpagesec" >

                <div className="lptext" >
                    <h1>The fast, <br /> affordable way <br /> to ride.</h1>
                    <p>Download the bolt app</p>

                    <div className="appstorelogos" >
                        <img className="apple" src={appstore} alt="" width="155px" height="40px"  />
                        <img className="android" src={googleplay} alt=""  width="155px" height="60px" />
                    </div>

                    <div> <h6>REQUEST A RIDE ONLINE</h6> </div>
                    
                </div>

                <div className="lpimg" > </div>

                <div>
                    


                    
                </div>
            </div>


            
        </div>
    )
}

export default landingpage
