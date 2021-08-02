import React from 'react'
import { useHistory } from 'react-router';
import {Button} from '@material-ui/core';

export default function Header() {
const history = useHistory();
//Pushes user to stack
const goToRescueStack=()=>{
    history.push('/RescueStack')
}
//Pushes user home
const goHome=()=>{
    console.log('Home button clicked')
    history.push('/')
}
//Pushes user to offers
const goToOffers = () => {
    history.push('/offers')
}
//Pushes user to reviews
const goToTestimonials = () =>{
    history.push('/testimonials')
}
//Pushes user to promises
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
