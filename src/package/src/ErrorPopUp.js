import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import error from "./animations/error.json";
import Content from "./Content";
import style from './style.module.css';

function ErrorPopUp({ title, description, duration, isClosable, position }) {
    const [toggle, setToggle] = useState(true);
    const toogleRef = useRef();
    const handleToggle = () => {
        setToggle(false);
    }

    useEffect(() => {
        let timer;
        if (duration !== 0) {
            timer = setTimeout(() => {
                toogleRef.current.style.display = 'none';
            }, duration)
        } else if (isClosable === false && duration === 0) {
            timer = setTimeout(() => {
                toogleRef.current.style.display = 'none';
            }, 4000)
        }

        return () => clearTimeout(timer);

    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    if (position === 'bottom') {
        return (
            <>
                {createPortal(
                    <div ref={toogleRef} className={toggle === true ? [style.Bottom, style.showBottom].join(' ') : [style.Bottom, style.hideBottom].join(' ')}>
                        <Content animation={error} title={title} description={description} duration={duration} isClosable={isClosable} position={position} handleToggle={handleToggle} bcolor={'#ff4747'} />
                    </div>
                    , document.body)}
            </>
        )
    } else if (position === 'bottom-right') {
        return (
            <>
                {createPortal(
                    <div ref={toogleRef} className={toggle === true ? [style.BottomRight, style.showBottomRight].join(' ') : [style.BottomRight, style.hideBottomRight].join(' ')}>
                        <Content animation={error} title={title} description={description} duration={duration} isClosable={isClosable} position={position} handleToggle={handleToggle} bcolor={'#ff4747'} />
                    </div>
                    , document.body)}
            </>
        )
    } else if (position === 'bottom-left') {
        return (
            <>
                {createPortal(
                    <div ref={toogleRef} className={toggle === true ? [style.BottomLeft, style.showBottomLeft].join(' ') : [style.BottomLeft, style.hideBottom].join(' ')}>
                        <Content animation={error} title={title} description={description} duration={duration} isClosable={isClosable} position={position} handleToggle={handleToggle} bcolor={'#ff4747'} />
                    </div>
                    , document.body)}
            </>
        )
    } else if (position === 'top') {
        return (
            <>
                {createPortal(
                    <div ref={toogleRef} className={toggle === true ? [style.Top, style.showTop].join(' ') : [style.Top, style.hideTop].join(' ')}>
                        <Content animation={error} title={title} description={description} duration={duration} isClosable={isClosable} position={position} handleToggle={handleToggle} bcolor={'#ff4747'} />
                    </div>
                    , document.body)}
            </>
        )
    } else if (position === 'top-right') {
        return (
            <>
                {createPortal(
                    <div ref={toogleRef} className={toggle === true ? [style.TopRight, style.showTopRight].join(' ') : [style.TopRight, style.hideTopRight].join(' ')}>
                        <Content animation={error} title={title} description={description} duration={duration} isClosable={isClosable} position={position} handleToggle={handleToggle} bcolor={'#ff4747'} />
                    </div>
                    , document.body)}
            </>
        )
    } else if (position === 'top-left') {
        return (
            <>
                {createPortal(
                    <div ref={toogleRef} className={toggle === true ? [style.TopLeft, style.showTopLeft].join(' ') : [style.TopLeft, style.hideTopLeft].join(' ')}>
                        <Content animation={error} title={title} description={description} duration={duration} isClosable={isClosable} position={position} handleToggle={handleToggle} bcolor={'#ff4747'} />
                    </div>
                    , document.body)}
            </>
        )
    }


}
export default ErrorPopUp;