import React from "react";
import './content.css';
import Lottie from "lottie-react";
function Content({animation,title, description, duration, isClosable, position,handleToggle,bcolor}){
    
    return (
        <>
            <div className='content' style={{backgroundColor:bcolor}}>
                <div className='lottie'>
                <Lottie  loop={true} autoplay="true" animationData={animation} style={{ height:50, width:50}} />
                </div>
                <div className='titleDesc'>
                    <span>{title}</span>
                    <span>{description}</span>
                </div>
                
                <div className='buttSpan'>
                    { isClosable && <button className='button' onClick={()=>{handleToggle()}}>
                        x
                    </button>}
                </div>
            </div>

        </>
    )
}
export default Content;