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
  lat: 18.962309,
  lng: 72.824232,
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
  const [selectedPark, setSelectedPark] = React.useState(null);
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
    {'lat': 18.968561, 'lng': 72.819914},
{'lat': 19.147506, 'lng': 72.825037},
{'lat': 19.111524, 'lng': 73.016909},
{'lat': 19.146981, 'lng': 73.040165},
{'lat': 18.967524, 'lng': 72.818802},
{'lat': 18.963252, 'lng': 72.828612},
{'lat': 18.961208, 'lng': 72.817204},
{'lat': 18.971976, 'lng': 72.823451},
{'lat': 18.983414, 'lng': 72.820552},
{'lat': 18.972424, 'lng': 72.814812},
{'lat': 18.96801, 'lng': 72.826462},
{'lat': 18.974301, 'lng': 72.812647},
{'lat': 18.976089, 'lng': 72.824589},
{'lat': 18.965071, 'lng': 72.830265},
{'lat': 18.987753, 'lng': 72.832508},
{'lat': 18.980186, 'lng': 72.826818},
{'lat': 18.981351, 'lng': 72.824232},
{'lat': 18.968389, 'lng': 72.822679},
{'lat': 19.131481, 'lng': 72.845149},
{'lat': 18.969972, 'lng': 72.830288},
{'lat': 18.973912, 'lng': 72.813728},
{'lat': 18.962309, 'lng': 72.830157},
{'lat': 18.961216, 'lng': 72.817205},
{'lat': 18.965249, 'lng': 72.81269},

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
                     return <Marker position={item}>
                       onClick={() => {
            setSelectedPark(item);
          }}
                     </Marker>;
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
        {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
           center
          }}
        >
          <div>
            <h2>HII</h2>
            
          </div>
        </InfoWindow>
      )}
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
      location: { lat: () => 18.962309, lng: () => 72.824232},
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