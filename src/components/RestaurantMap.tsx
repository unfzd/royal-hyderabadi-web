import React from 'react';

const RestaurantMap = () => {
  return (
    <div className="bg-muted/50 rounded-lg h-48 border border-primary/20 overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.8923918710484!2d151.76667799999998!3d-32.9274412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b73158008d89479%3A0x695b327ec1dbb8a8!2sIndian%20Biryani%20Restaurant%20Newcastle!5e0!3m2!1sen!2sin!4v1754566146705!5m2!1sen!2sin"
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Indian Biryani Restaurant Newcastle Location"
      />
    </div>
  );
};

export default RestaurantMap;