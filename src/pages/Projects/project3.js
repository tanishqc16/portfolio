import React from 'react';
import profile from './profile photo.jpg';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const Container = styled(animated.div)`
display: inline-block;
padding: 3em;
width:200px;
background: #C7D2FE66;
border-radius: 10px;
z-index: 1;
position: relative;
backdrop-filter: blur(10px);
border: 2px solid transparent;
background-clip: border-box;
cursor: pointer;
`;

const StyledImg = styled.img`
    width: 100px;
    height: 100px;
    text-align:center;
    border: 2px solid #000;
    // border-radius: 50%;
`;

const StyledH1 = styled.h1`
    line-heright: 1.5;
    letter-spacing: 1.5;
    font-family: "Gilroy";
    font-size:25px;
    font-weight:900;
    text-align:center;
`;

const StyledH3 = styled.h3`
    line-heright: 1.5;
    letter-spacing: 1.15;
    font-family: "Gilroy";
    font-size: 20px;
    text-align:left;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 15, (x - window.innerWidth / 2) / 17, 1.2]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GlassCard = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
    return (
        <Container
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <StyledImg src={profile} />
            <StyledH1>FitNotify</StyledH1>
            <br/>
            {/* <StyledH3>Data Scientist, Designer <br/> and Full Stack Developer</StyledH3> */}
        </Container>
    );
}

export default GlassCard;