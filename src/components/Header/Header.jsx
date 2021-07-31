import React from 'react'
import { useHistory } from 'react-router';
import {Button} from '@material-ui/core';

export default function Header() {
const history = useHistory();

const goToRescueStack=()=>{
    history.push('/RescueStack')
}
const goHome=()=>{
    console.log('Home button clicked')
    history.push('/')
}

const goToOffers = () => {
    history.push('/offers')
}
const goToTestimonials = () =>{
    history.push('/testimonials')
}
const goToPromise = () => {
    history.push('/promise')
}
    return (
        <div>
            <Button onClick={goHome}>Home</Button>
            <Button onClick={goToRescueStack}>Rescue Stack</Button>
            <Button onClick={goToOffers}>Offers</Button>
            <Button onClick={goToTestimonials}>Testimonials</Button>
            <Button onClick={goToPromise}>Promise</Button>
        </div>
    )
}
