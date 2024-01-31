import React, { useState, useCallback ,useRef} from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
   
    const [, forceRender] = useState(0);
    const refinfo= useRef(0)
    const handleReRender = () => {
        // Update state to force re-render
        forceRender(1+1);
    };
     refinfo.current=refinfo.current+1
    return (
        <div>
            <p>This component has rendered {refinfo.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};