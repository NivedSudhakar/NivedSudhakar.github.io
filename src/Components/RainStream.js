import React, { useEffect, useRef, useState } from 'react';

function RainStream({ timeout = 100 }) {
    const canvas = useRef();
    const [widthS, setWidth] = useState(window.innerWidth);
    const [heightS, setHeight] = useState(window.innerHeight);
    useEffect(()=>{
        function handleResize(){
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener("resize", handleResize);
          };
    })
    useEffect(() => {
        const context = canvas.current.getContext('2d');
        const width = window.innerWidth
        const height = window.innerHeight;
        canvas.current.width = width;
        canvas.current.height = height;
        context.fillStyle = '#000';
        context.globalAlpha = 0.5;
        context.fillRect(0, 0, width, height);
        const columns = Math.floor(width / 20) + 1;
        const yPositions = Array.from({ length: columns }).fill(0);
        context.fillStyle = '#000';
        context.fillRect(0, 0, width, height);
        const matrixEffect = () => {
            context.fillStyle = '#0001';
            context.fillRect(0, 0, window.innerWidth, window.innerHeight);

            context.fillStyle = '#0f0';
            context.font = '15pt monospace';

            yPositions.forEach((y, index) => {
                const text = String.fromCharCode(Math.random() * 128);
                const x = index * 20;
                context.fillText(text, x, y);

                if (y > 100 + Math.random() * 10000) {
                    yPositions[index] = 0;
                } else {
                    yPositions[index] = y + 20;
                }
            });
        };

        const interval = setInterval(matrixEffect, timeout);
        return () => {
            clearInterval(interval);
        };
    }, [canvas, timeout]);

    return (
        <div
            style={{
                background: '#000000',
                overflow: 'hidden',
                position: 'absolute',
                height: '100vh',
                width: '100%',
                zIndex: '-5'
                
            }}
        >
            <canvas
                ref={canvas}
            />
        </div>
    );
}

export default RainStream;