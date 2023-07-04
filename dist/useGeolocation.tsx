import { useState, useEffect } from "react";

type GeolocationCoordinates = {
  latitude: number;
  longitude: number;
  altitude?: number | null;
  accuracy?: number | null;
  altitudeAccuracy?: number | null;
  heading?: number | null;
  speed?: number | null;
};

type PositionError = {
  code: number;
  message: string;
};

type UseGeolocationHookResult = {
  coordinates: GeolocationCoordinates | null;
  error: PositionError | null;
};

export const useGeolocation = (): UseGeolocationHookResult => {
  const [coordinates, setCoordinates] = useState<GeolocationCoordinates | null>(
    null
  );
  const [error, setError] = useState<PositionError | null>(null);

  useEffect(() => {
    const handleSuccess = (position: GeolocationPosition) => {
      const {
        latitude,
        longitude,
        altitude,
        accuracy,
        altitudeAccuracy,
        heading,
        speed,
      } = position.coords;
      setCoordinates({
        latitude,
        longitude,
        altitude,
        accuracy,
        altitudeAccuracy,
        heading,
        speed,
      });
      setError(null);
    };

    const handleError = (error: PositionError) => {
      setCoordinates(null);
      setError(error);
    };

    const options: PositionOptions = {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 10000,
    };

    const watchId = navigator.geolocation.watchPosition(
      handleSuccess,
      handleError,
      options
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return {
    coordinates,
    error,
  };
};
