import React from 'react'
import { Button, Container } from '@material-ui/core';
import { useHistory } from 'react-router';


export default function Offers() {
    const history = useHistory();

    //Sends user to testimonials page
    const handlePushTestimonials = () => {
        history.push('/testimonials');
    }
    //Sends user to Promise page
    const handlePushPromise = () => {
        history.push('/Promise');
    }

    //Alert for purchase
    const handleAlert = () => {
        alert("Congratulations on your amazing purchase!")
    }

    return (
        <div>
            <Container>
                <h1>
                    The Halloween Rescue Stack (Offers)
                </h1>
                <h2>
                    HOLIDAY SPECIAL: Save up to 40% on your bundle
                    ON THIS PAGE ONLY
                </h2>
                <h3>Offer #1:  Three Month Supply of
                    Our Halloween Rescue Stack
                </h3>
                <img className="RescueStackImg" src="https://i.imgur.com/5g5jSDz.png" />
                <h4>
                    6 Masszymes
                    6 P3-OM
                    6 HCL for FREE
                    SAVE 40% - Pay Just $287
                </h4>
                <Button variant="contained"
                    color="primary"
                    onClick={handleAlert}>Select Offer 1</Button>
                <h3>Offer #2: One Month Supply of
                    Our Halloween Rescue Stack
                </h3>
                <img className="RescueStackImg" src="https://i.imgur.com/5g5jSDz.png" />
                <h4>
                    3 Masszymes
                    3 P3-OM
                    3 HCL for FREE
                    Save 30% - Pay Just $167

                </h4>
                <Button variant="contained"
                    color="primary"
                    onClick={handleAlert}>Select Offer 2</Button>
                <h3>Offer #3: Test-It-Out Version
                    Single Units Bundle
                </h3>
                <img className="RescueStackImg" src="https://i.imgur.com/5g5jSDz.png" />
                <h4>1 Masszymes
                    1 P3-OM
                    1 HCL for FREE
                    Save 20% - Pay Just $63
                </h4>
                <Button variant="contained"
                    color="primary"
                    onClick={handleAlert}>Select Offer 3</Button>
                <div>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handlePushTestimonials}>See What Others Have To Say
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handlePushPromise}>See Our Guarantee
                    </Button>
                </div>

            </Container>
        </div>
    )
}
