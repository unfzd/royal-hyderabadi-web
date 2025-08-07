import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

declare global {
  interface Window {
    google: typeof google;
  }
}

const RestaurantMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [apiKey, setApiKey] = useState('');
  const [keySubmitted, setKeySubmitted] = useState(false);

  // Restaurant coordinates from Google Maps
  const restaurantLat = -32.9274412;
  const restaurantLng = 151.766678;

  useEffect(() => {
    if (!mapContainer.current || !keySubmitted || !apiKey) return;

    const loader = new Loader({
      apiKey: apiKey,
      version: 'weekly',
    });

    loader.load().then(() => {
      const map = new google.maps.Map(mapContainer.current!, {
        center: { lat: restaurantLat, lng: restaurantLng },
        zoom: 15,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'on' }]
          }
        ]
      });

      // Add marker for restaurant
      const marker = new google.maps.Marker({
        position: { lat: restaurantLat, lng: restaurantLng },
        map: map,
        title: 'Indian Biryani Restaurant Newcastle',
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="#D4AF37" stroke="#fff" stroke-width="2"/>
              <circle cx="20" cy="20" r="8" fill="#fff"/>
            </svg>
          `),
          scaledSize: new google.maps.Size(40, 40),
          anchor: new google.maps.Point(20, 20)
        }
      });

      // Add info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; text-align: center; font-family: 'Poppins', sans-serif;">
            <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #D4AF37;">Indian Biryani Restaurant</h3>
            <p style="margin: 0; font-size: 14px; color: #666;">456 Hunter Street<br>Newcastle NSW 2300</p>
            <p style="margin: 8px 0 0 0; font-size: 12px; color: #888;">Authentic Hyderabadi Cuisine</p>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      // Show info window by default
      infoWindow.open(map, marker);
    }).catch((error) => {
      console.error('Error loading Google Maps:', error);
    });
  }, [keySubmitted, apiKey]);

  const handleKeySubmit = () => {
    if (apiKey.trim()) {
      setKeySubmitted(true);
    }
  };

  if (!keySubmitted) {
    return (
      <div className="bg-muted/50 rounded-lg h-48 flex flex-col items-center justify-center border border-primary/20 p-6">
        <p className="text-foreground/80 font-poppins mb-4 text-center">
          Enter your Google Maps API key to view the restaurant location
        </p>
        <div className="flex gap-2 w-full max-w-md">
          <Input
            type="text"
            placeholder="Google Maps API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleKeySubmit} variant="premium">
            Load Map
          </Button>
        </div>
        <p className="text-xs text-foreground/60 mt-2 text-center">
          Get your API key at{' '}
          <a 
            href="https://developers.google.com/maps/documentation/javascript/get-api-key" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-saffron hover:underline"
          >
            Google Cloud Console
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-muted/50 rounded-lg h-48 border border-primary/20 overflow-hidden">
      <div ref={mapContainer} className="w-full h-full rounded-lg" />
    </div>
  );
};

export default RestaurantMap;