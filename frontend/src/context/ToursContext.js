import React, { createContext, useState } from "react";
import toursData from "../assets/data/tours";
export const toursContext = createContext([]);

function TourContextProvider(props) {
    const [tours] = useState(toursData);
    return (
        <toursContext.Provider value={{ tours }}>
            {props.children}
        </toursContext.Provider>
    );
}

export default TourContextProvider;