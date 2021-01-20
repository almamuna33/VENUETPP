import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 

                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8987292358743!2d-73.93605708433661!3d40.74225384370057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ed36e8c0eb1%3A0xf912aae6332e504a!2sIndoor%20Extreme%20Sports%20Paintball%20%26%20Laser%20Tag!5e0!3m2!1sen!2sus!4v1611111440412!5m2!1sen!2sus" 
                

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
