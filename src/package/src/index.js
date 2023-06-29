import React from "react";
import WarningPopUp from './WarningPopUp';
import SuccessPopUp from './SuccessPopUp';
import InfoPopUp from './InfoPopUp';
import ErrorPopUp from './ErrorPopUp';

function Popup({ title = 'Title', description, duration = 0, status = 'success', isClosable = false, position = 'top' }) {


    if (status === 'warning') {
        return (<WarningPopUp title={title} description={description} duration={duration} isClosable={isClosable} position={position} />)
    } else if (status === 'error') {
        return (<ErrorPopUp title={title} description={description} duration={duration} isClosable={isClosable} position={position} />)
    } else if (status === 'info') {
        return (<InfoPopUp title={title} description={description} duration={duration} isClosable={isClosable} position={position} />)
    } else if (status === 'success') {
        return (<SuccessPopUp title={title} description={description} duration={duration} isClosable={isClosable} position={position} />)
    }

}

export default Popup;


