import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { formatRelative } from "date-fns";

import "@reach/combobox/styles.css";
import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 11.411707717671627,
  lng: 76.70386855203184,
};
const google=window.google;
export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
  // center = { lat: latitude, lng: longitude };

  let arr = [
    {
      lat: parseFloat(10.996885945028543),
      lng: parseFloat(76.84890747788064),
    },
    {
      lat: parseFloat(11.156203184010092),
      lng: parseFloat(76.94183707237244),
    },
    {
      lat: parseFloat(10.982281096523172),
      lng: parseFloat(76.96912770761209),
    },
    {
      lat: parseFloat(11.03464880196182),
      lng: parseFloat(76.92851722240448),
    },
    {
      lat: parseFloat(11.000891420109369),
      lng: parseFloat(77.26263999938965),
    },
    {
      lat: parseFloat(11.104983952002042),
      lng: parseFloat(77.17503905296326),
    },
    {
      lat: parseFloat(10.865970848144526),
      lng: parseFloat(76.94056034088135),
    },
    {
      lat: parseFloat(11.057862321256001),
      lng: parseFloat(76.96551561355591),
    },
    {
      lat: parseFloat(11.00849519876812),
      lng: parseFloat(76.9562029838562),
    },
    {
      lat: parseFloat(11.021198415195455),
      lng: parseFloat(76.9642415111026),
    },
    {
      lat: parseFloat(11.012581358848452),
      lng: parseFloat(76.95064544677734),
    },
    {
      lat: parseFloat(12.968956724393923),
      lng: parseFloat(77.5019621542984),
    },
    {
      lat: parseFloat(11.666357855938887),
      lng: parseFloat(78.15791123331715),
    },
    {
      lat: parseFloat(11.411707717671627),
      lng: parseFloat(76.70386855203184),
    },
    {
      lat: parseFloat(11.341583379711278),
      lng: parseFloat(77.72509862710028),
    },
  ]; //get points of location of companies in this array
  const homemarker = {
    url: 'homemarker.png',
    size: new google.maps.Size(33, 45),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
  };

  return (
    <div>
      <h1>
       Gyms{" "}
        <span role="img" aria-label="tent">
        🏋️
        </span>
      </h1>

      <Locate panTo={panTo} />
      <Search panTo={panTo} />

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        // onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {arr.map((item) => {
                    return <Marker position={item}></Marker>;
                  })}
                  <Marker position={center} icon={homemarker}></Marker>
        {/* {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
            icon={{
              url: `/bear.svg`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>
                <span role="img" aria-label="bear">
                  🐻
                </span>{" "}
                Alert
              </h2>
              <p>Spotted {formatRelative(selected.time, new Date())}</p>
            </div>
          </InfoWindow>
        ) : null} */}
      </GoogleMap>
    </div>
  );
}

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src="/compass.svg" alt="compass" />
    </button>
  );
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 11.411707717671627, lng: () => 76.70386855203184 },
      radius: 100 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}