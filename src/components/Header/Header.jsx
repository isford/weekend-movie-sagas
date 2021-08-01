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
            <Button color="primary"variant = "outlined" onClick={goHome}>Home</Button>
            <Button color="primary" variant="outlined" onClick={goToRescueStack}>Rescue Stack</Button>
            <Button color="primary" variant="outlined" onClick={goToOffers}>Offers</Button>
            <Button color="primary" variant="outlined" onClick={goToTestimonials}>Testimonials</Button>
            <Button color="primary" variant="outlined" onClick={goToPromise}>Promise</Button>
        </div>
    )
}
