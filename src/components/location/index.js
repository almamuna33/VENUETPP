import React from 'react';

const Location = () => {
    return(
        <div className="location_wrapper">
            <iframe

                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d404.
                    10105572439676!2d-149.87893032541965!3d61.19787340567267!
                    2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x56c897c
                    932abffa5%3A0x6754bd747908ef96!2sEMI!5e0!3m2!1sen!2sus!4v161
                    1104810815!5m2!1sen!2sus"



                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen
                title="myframe"
                ></iframe>

                <div className="location_tag">
                    <div>Location</div>
                </div>
        </div>
    );
};

export default Location;
