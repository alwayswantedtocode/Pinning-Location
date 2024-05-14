import React, { useEffect, useState } from "react";

import {
  Map,
  Pin,
  InfoWindow,
  APIProvider,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";
import axios from "../../Axios/axios";
import useAddGetCustomer from "../../hooks/useAddGetCustomer";
import useHandleMapInfo from "../../hooks/useHandleMapInfo";
import { useGlobalContext } from "../../Global Context/useContext";

const Googlemap = () => {
  const center = {
    lat: 6.5269,
    lng: 3.5774,
  };
  const predefinedLocation = {
    lat: 6.58724,
    lng: 3.37149,
  };
  // const { closeinfowindowRef } = useGlobalContext();
  const { errMsg, getData, fetchData, retrieveData } =
    useAddGetCustomer();
  const { customerInfo, setCustomerInfo, handleActiveWindowsInfo } =
    useHandleMapInfo();

  const [locationInfo, setLocationInfo] = useState(false);
  // const [customerInfo, setCustomerInfo] = useState(false);
  const [apiLoaded, setApiLoaded] = useState(false);

  const openInfoWindow = () => {
    setLocationInfo(true);
  };

  //get all customer location and distance
  useEffect(() => {
    fetchData();
  }, []);

  //retrieve user customers location and distance
  useEffect(() => {
    retrieveData();
  }, []);

  // close pin window info
  // useEffect(() => {
  //   document.addEventListener("mousedown", handleCloseWindowInfo);
  //   return () => {
  //     document.removeEventListener("mousedown", handleCloseWindowInfo);
  //   };
  // }, []);

  return (
    <APIProvider
      apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
      onLoad={() => setApiLoaded(true)}
      // onCloseClick={() => setCustomerInfo(null)}
    >
      <article className="lg:flex-auto lg:w-[65%] w-[100%]">
        {!errMsg ? (
          <div style={{ height: "100vh", width: "100%" }}>
            {apiLoaded && (
              <Map
                defaultCenter={center}
                defaultZoom={9}
                mapId={process.env.REACT_APP_GOOGLE_MAP_ID}
              >
                <AdvancedMarker
                  position={predefinedLocation}
                  onClick={openInfoWindow}
                >
                  <Pin
                    background={"red"}
                    borderColor={"green"}
                    glyphColor={"green"}
                  />
                </AdvancedMarker>
                {locationInfo && (
                  <InfoWindow
                    position={predefinedLocation}
                    onCloseClick={() => setLocationInfo(false)}
                  >
                    <p className="font-semibold">Lara Pastry</p>
                    <p className="font-semibold">Sodipo Close, Ojota, Lagos</p>
                  </InfoWindow>
                )}

                {getData?.map((collection) => {
                  console.log("collection", collection)
                  return (
                    <div key={collection.id}>
                      <AdvancedMarker
                        key={collection.id}
                        position={collection}
                        onClick={() => handleActiveWindowsInfo(collection.id)}
                      >
                        {" "}
                        <Pin
                          background={"blue"}
                          borderColor={"red"}
                          glyphColor={"red"}
                        />
                      </AdvancedMarker>
                      {customerInfo === collection.id ? (
                        <InfoWindow
                          position={collection}
                          onCloseClick={() => setCustomerInfo(null)}
                          // ref={closeinfowindowRef}
                        >
                          <p className="font-semibold">{collection.Name}</p>
                          <p className="font-semibold">{collection.Address}</p>
                          <p className="font-semibold">{collection.Number}</p>
                          <p className="font-semibold">
                            {collection.Name} is {collection.distance}km away
                            from Lara Pastry
                          </p>
                        </InfoWindow>
                      ) : null}
                    </div>
                  );
                })}
              </Map>
            )}
          </div>
        ) : (
          <div className="w-[100%] h-[100vh] flex justify-center items-center bg-blue-200 text-white ">
            <p>Something went wrong...</p>
          </div>
        )}
      </article>{" "}
    </APIProvider>
  );
};

export default Googlemap;
