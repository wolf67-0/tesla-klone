import React from 'react'
import styled from 'styled-components'
import Bounce from 'react-reveal/Bounce';
function Section({ title, description, backgroundImg, leftBtnText, rightBtnText}) {
    return (
        <Wrap bgImage={ backgroundImg }>
            <Bounce bottom> 
                <ItemText>
                    <h1>
                        { title }
                    </h1>
                    <p>{ description}</p>
                    
                </ItemText>
            </Bounce>
            <Buttons>
                <Bounce bottom>
                    <ButtonGroup>
                        <LeftButton>
                            { leftBtnText }
                        </LeftButton>
                        { rightBtnText &&
                            <RightButton>
                                { rightBtnText }
                            </RightButton>
                        }

                    </ButtonGroup>
                </Bounce>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>    
        </Wrap>
    )
}

export default Section
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(/model-s.jpg);
    display: center;
    flex-direction: coloumn;
    right: 30px;
    justify-content: center; // vertical
    align-items: baseline; // horizontal
    background-image: ${props => `url("/images/${props.bgImage}")` }
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    word-spacing: 20px;
    font-size: small;
    @media (max-width: 768px) {
        word-spacing: 5px
    }
    

`
const ButtonGroup = styled.div`
    display: flex;
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 200px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin-top: 365px;
    margin-left: 290px;
    @media (max-width: 768px) {
        margin-left: 0px;
    }
    
    
    
    



`
const RightButton = styled(LeftButton)`
    background: white;
    opacity: .65;
    color: black;

`

const DownArrow = styled.img`
    
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`

`
