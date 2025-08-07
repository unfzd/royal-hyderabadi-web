import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const RestaurantMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [accessToken, setAccessToken] = useState('');
  const [tokenSubmitted, setTokenSubmitted] = useState(false);

  // Restaurant coordinates from Google Maps
  const restaurantLat = -32.9274412;
  const restaurantLng = 151.766678;

  useEffect(() => {
    if (!mapContainer.current || !tokenSubmitted || !accessToken) return;

    // Initialize map
    mapboxgl.accessToken = accessToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [restaurantLng, restaurantLat],
      zoom: 15,
    });

    // Add marker for restaurant
    new mapboxgl.Marker({
      color: '#D4AF37' // Saffron color
    })
      .setLngLat([restaurantLng, restaurantLat])
      .setPopup(
        new mapboxgl.Popup().setHTML(`
          <div style="padding: 8px; text-align: center;">
            <h3 style="margin: 0 0 4px 0; font-weight: bold;">Indian Biryani Restaurant</h3>
            <p style="margin: 0; font-size: 14px;">456 Hunter Street, Newcastle NSW 2300</p>
          </div>
        `)
      )
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [tokenSubmitted, accessToken]);

  const handleTokenSubmit = () => {
    if (accessToken.trim()) {
      setTokenSubmitted(true);
    }
  };

  if (!tokenSubmitted) {
    return (
      <div className="bg-muted/50 rounded-lg h-48 flex flex-col items-center justify-center border border-primary/20 p-6">
        <p className="text-foreground/80 font-poppins mb-4 text-center">
          Enter your Mapbox public token to view the restaurant location
        </p>
        <div className="flex gap-2 w-full max-w-md">
          <Input
            type="text"
            placeholder="Mapbox public token"
            value={accessToken}
            onChange={(e) => setAccessToken(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleTokenSubmit} variant="premium">
            Load Map
          </Button>
        </div>
        <p className="text-xs text-foreground/60 mt-2 text-center">
          Get your token at{' '}
          <a 
            href="https://mapbox.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-saffron hover:underline"
          >
            mapbox.com
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-muted/50 rounded-lg h-48 border border-primary/20 overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default RestaurantMap;