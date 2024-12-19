import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Region } from 'react-native-maps';

interface LocationContextProps {
    location: Region | null;
    setLocation: React.Dispatch<React.SetStateAction<Region | null>>;
    
}

interface LocationContextData {
    children: ReactNode;
}

const LocationContext = createContext<LocationContextProps | undefined>(undefined);

export const LocationProvider: React.FC<LocationContextData> = ({ children }) => {
    const [location, setLocation] = useState<Region | null>(null);

    return (
        <LocationContext.Provider value={{ location, setLocation }}>
            {children}
        </LocationContext.Provider>
    );
};

export const useLocation = () => {
    const context = useContext(LocationContext);
    if (!context) {
        throw new Error('useLocation deve ser usado dentro do LocationProvider');
    }
    return context;
};