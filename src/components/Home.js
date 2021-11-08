import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model Y"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model 3"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />            
            <Section 
                title="Model X"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Lowest Cost Solar Panels In America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section 
                title="Solar For New Roofs"
                description="Solar Roofs Costs Less Than a New Roof Plus Solar Panel"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section 
                title="Accessories"
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
                rightBtnText="THANK YOU"
            />
            
        </Container>
    )
}

export default Home
const Container = styled.div`
    height: 100vh;
    z-index: 10;

`