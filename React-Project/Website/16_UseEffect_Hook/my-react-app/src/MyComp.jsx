import React, { useState, useEffect } from "react";

function MyComp() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        // Set up event listener for window resize
        window.addEventListener("resize", handleResize);
        console.log("Event listener added");

        // Cleanup function to remove the event listener
        // This function runs when the component unmounts or before the effect runs again
        return () => {
            // Clean up event listener on component unmount
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removed");
        };
    }, []);

    useEffect(() => {
        document.title = `Size: ${width}x${height}`;
    }, [width, height]);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </>
    );
}

export default MyComp;