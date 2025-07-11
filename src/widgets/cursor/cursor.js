import { useState, useEffect, useRef } from "react";

import { gsap } from "gsap";
import MouseFollower from "mouse-follower";

import "./cursor.scss";

MouseFollower.registerGSAP(gsap);

const Cursor = () => {
    const cursorRef = useRef(null);
    const cursorGradientRef = useRef(null);
    useEffect(() => {
        let posX = 0, posY = 0;
        let mouseX = 0, mouseY = 0;
        gsap.to(document, 0.016, {
            repeat: -1,
            onRepeat: function() {
                posX += (mouseX - posX) / 25;
                posY += (mouseY - posY) / 25;
                gsap.set(cursorRef.current, {
                    css: {
                        left: mouseX,
                        top: mouseY
                    }
                });
                gsap.set(cursorGradientRef.current, {
                    css: {
                        left: mouseX,
                        top: mouseY
                    }
                });
            }
        });

        document.addEventListener("mousemove", function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
    });


    const cursor = new MouseFollower({
        el: cursorRef
    });

    return (
        <>
            <div className="cursor" ref={cursorRef}></div>
            <div className="cursor-follower" ref={cursorGradientRef}>
                <div className="position-relative">
                    <div className="ellipse_2 transition_css"></div>
                    <div className="ellipse_1 transition_css"></div>
                    <div className="ellipse_3 transition_css"></div>
                </div>
            </div>
        </>
    );
}

export default Cursor;