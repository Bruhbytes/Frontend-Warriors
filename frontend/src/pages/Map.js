import React from "react";
import "../index.css"
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";
// import { formatRelative } from "date-fns";

// import "@reach/combobox/styles.css";
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
    googleMapsApiKey: "AIzaSyCMzVdCucPh4gPSQFIi5urmlMTMWRetUg0",
    libraries,
  });
  // const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  // const onMapClick = React.useCallback((e) => {
  //   setMarkers((current) => [
  //     ...current,
  //     {
  //       lat: e.latLng.lat(),
  //       lng: e.latLng.lng(),
  //       time: new Date(),
  //     },
  //   ]);
  // }, []);
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
    {'lat': 18.968561, 'lng': 72.819914,"id":1},
{'lat': 19.147506, 'lng': 72.825037,"id":2},
{'lat': 19.111524, 'lng': 73.016909,"id":3},
{'lat': 19.146981, 'lng': 73.040165,"id":4},
{'lat': 18.967524, 'lng': 72.818802,"id":5},
{'lat': 18.963252, 'lng': 72.828612,"id":6},
{'lat': 18.961208, 'lng': 72.817204,"id":7},
{'lat': 18.971976, 'lng': 72.823451,"id":8},
{'lat': 18.983414, 'lng': 72.820552,"id":9},
{'lat': 18.972424, 'lng': 72.814812,"id":10},
{'lat': 19.231086, 'lng': 72.865538}, {'lat': 19.234937, 'lng': 72.84111}, {'lat': 19.119893, 'lng': 72.864026}, {'lat': 19.118965, 'lng': 72.851668}, {'lat': 19.126659, 'lng': 72.830133}, {'lat': 19.112475, 'lng': 72.86489}, {'lat': 19.112259, 'lng': 72.86797}, {'lat': 19.133507, 'lng': 72.83607}, {'lat': 19.127405, 'lng': 72.83393}, {'lat': 19.136771, 'lng': 72.866619}, {'lat': 19.117608, 'lng': 72.86474}, {'lat': 19.129659, 'lng': 72.818285}, {'lat': 19.136145, 'lng': 72.835301}, {'lat': 19.141587, 'lng': 72.830201}, {'lat': 19.147506, 'lng': 72.825037}, {'lat': 19.111524, 'lng': 73.016909}, {'lat': 19.146981, 'lng': 73.040165}, {'lat': 18.967524, 'lng': 72.818802}, {'lat': 18.963252, 'lng': 72.828612}, {'lat': 18.961208, 'lng': 72.817204}, {'lat': 18.971976, 'lng': 72.823451}, {'lat': 18.983414, 'lng': 72.820552}, {'lat': 18.976161, 'lng': 72.819033}, {'lat': 18.96801, 'lng': 72.826462}, {'lat': 18.974301, 'lng': 72.812647}, {'lat': 18.976089, 'lng': 72.824589}, {'lat': 18.965071, 'lng': 72.830265}, {'lat': 18.987753, 'lng': 72.832508}, {'lat': 18.980186, 'lng': 72.826818}, {'lat': 18.981351, 'lng': 72.824232}, {'lat': 18.968389, 'lng': 72.822679}, {'lat': 19.132795, 'lng': 72.847634}, {'lat': 18.969972, 'lng': 72.830288}, {'lat': 18.973912, 'lng': 72.813728}, {'lat': 18.962309, 'lng': 72.830157}, {'lat': 18.961216, 'lng': 72.817205}, {'lat': 18.965249, 'lng': 72.81269}, {'lat': 18.977168, 'lng': 72.829839}, {'lat': 19.107811, 'lng': 72.840813}, {'lat': 19.097881, 'lng': 72.850791}, {'lat': 19.097208, 'lng': 72.839746}, {'lat': 19.104479, 'lng': 72.846643}, {'lat': 19.106591, 'lng': 72.82692}, {'lat': 10.960052, 'lng': 78.076627}, {'lat': 19.020855, 'lng': 72.854076}, {'lat': 19.025104, 'lng': 72.853162}, {'lat': 19.292131, 'lng': 72.876895}, {'lat': 18.954646, 'lng': 72.818432}, {'lat': 19.285615, 'lng': 72.869099}, {'lat': 19.179431, 'lng': 72.839802}, {'lat': 19.063546, 'lng': 72.835483}, {'lat': 18.954646, 'lng': 72.818432}, {'lat': 19.292131, 'lng': 72.876895}, {'lat': 19.285615, 'lng': 72.869099}, {'lat': 19.179431, 'lng': 72.839802}, {'lat': 19.063546, 'lng': 72.835483}, {'lat': 19.166164, 'lng': 72.851898}, {'lat': 19.1577, 'lng': 72.836007}, {'lat': 19.164546, 'lng': 72.853616}, {'lat': 19.157279, 'lng': 72.842945}, {'lat': 19.17374, 'lng': 72.846965}, {'lat': 19.020773, 'lng': 72.852824}, {'lat': 19.026014, 'lng': 72.836462}, {'lat': 19.016673, 'lng': 72.846013}, {'lat': 19.018042, 'lng': 72.844884}, {'lat': 19.043903, 'lng': 72.867091}, {'lat': 19.035899, 'lng': 72.860599}, {'lat': 19.065614, 'lng': 72.87913}, {'lat': 19.458948, 'lng': 72.812479}, {'lat': 19.217081, 'lng': 72.841607}, {'lat': 19.209644, 'lng': 72.837191}, {'lat': 19.196115, 'lng': 72.847219}, {'lat': 19.199737, 'lng': 72.864359}, {'lat': 19.212746, 'lng': 72.874374}, {'lat': 19.208108, 'lng': 72.826415}, {'lat': 19.213028, 'lng': 72.84243}]

// {'lat': 18.96801, 'lng': 72.826462},
// {'lat': 18.974301, 'lng': 72.812647},
// {'lat': 18.976089, 'lng': 72.824589},
// {'lat': 18.965071, 'lng': 72.830265},
// {'lat': 18.987753, 'lng': 72.832508},
// {'lat': 18.980186, 'lng': 72.826818},
// {'lat': 18.981351, 'lng': 72.824232},
// {'lat': 18.968389, 'lng': 72.822679},
// {'lat': 19.131481, 'lng': 72.845149},
// {'lat': 18.969972, 'lng': 72.830288},
// {'lat': 18.973912, 'lng': 72.813728},
// {'lat': 18.962309, 'lng': 72.830157},
// {'lat': 18.961216, 'lng': 72.817205},
// {'lat': 18.965249, 'lng': 72.81269},

  // ]; //get points of location of companies in this array
  // let arr =[{'lat': 19.231086, 'lng': 72.865538}, {'lat': 19.234937, 'lng': 72.84111}, {'lat': 19.119893, 'lng': 72.864026}, {'lat': 19.118965, 'lng': 72.851668}, {'lat': 19.126659, 'lng': 72.830133}, {'lat': 19.112475, 'lng': 72.86489}, {'lat': 19.112259, 'lng': 72.86797}, {'lat': 19.133507, 'lng': 72.83607}, {'lat': 19.127405, 'lng': 72.83393}, {'lat': 19.136771, 'lng': 72.866619}, {'lat': 19.117608, 'lng': 72.86474}, {'lat': 19.129659, 'lng': 72.818285}, {'lat': 19.136145, 'lng': 72.835301}, {'lat': 19.141587, 'lng': 72.830201}, {'lat': 19.147506, 'lng': 72.825037}, {'lat': 19.111524, 'lng': 73.016909}, {'lat': 19.146981, 'lng': 73.040165}, {'lat': 18.967524, 'lng': 72.818802}, {'lat': 18.963252, 'lng': 72.828612}, {'lat': 18.961208, 'lng': 72.817204}, {'lat': 18.971976, 'lng': 72.823451}, {'lat': 18.983414, 'lng': 72.820552}, {'lat': 18.976161, 'lng': 72.819033}, {'lat': 18.96801, 'lng': 72.826462}, {'lat': 18.974301, 'lng': 72.812647}, {'lat': 18.976089, 'lng': 72.824589}, {'lat': 18.965071, 'lng': 72.830265}, {'lat': 18.987753, 'lng': 72.832508}, {'lat': 18.980186, 'lng': 72.826818}, {'lat': 18.981351, 'lng': 72.824232}, {'lat': 18.968389, 'lng': 72.822679}, {'lat': 19.132795, 'lng': 72.847634}, {'lat': 18.969972, 'lng': 72.830288}, {'lat': 18.973912, 'lng': 72.813728}, {'lat': 18.962309, 'lng': 72.830157}, {'lat': 18.961216, 'lng': 72.817205}, {'lat': 18.965249, 'lng': 72.81269}, {'lat': 18.977168, 'lng': 72.829839}, {'lat': 19.107811, 'lng': 72.840813}, {'lat': 19.097881, 'lng': 72.850791}, {'lat': 19.097208, 'lng': 72.839746}, {'lat': 19.104479, 'lng': 72.846643}, {'lat': 19.106591, 'lng': 72.82692}, {'lat': 10.960052, 'lng': 78.076627}, {'lat': 19.020855, 'lng': 72.854076}, {'lat': 19.025104, 'lng': 72.853162}, {'lat': 19.292131, 'lng': 72.876895}, {'lat': 18.954646, 'lng': 72.818432}, {'lat': 19.285615, 'lng': 72.869099}, {'lat': 19.179431, 'lng': 72.839802}, {'lat': 19.063546, 'lng': 72.835483}, {'lat': 18.954646, 'lng': 72.818432}, {'lat': 19.292131, 'lng': 72.876895}, {'lat': 19.285615, 'lng': 72.869099}, {'lat': 19.179431, 'lng': 72.839802}, {'lat': 19.063546, 'lng': 72.835483}, {'lat': 19.166164, 'lng': 72.851898}, {'lat': 19.1577, 'lng': 72.836007}, {'lat': 19.164546, 'lng': 72.853616}, {'lat': 19.157279, 'lng': 72.842945}, {'lat': 19.17374, 'lng': 72.846965}, {'lat': 19.020773, 'lng': 72.852824}, {'lat': 19.026014, 'lng': 72.836462}, {'lat': 19.016673, 'lng': 72.846013}, {'lat': 19.018042, 'lng': 72.844884}, {'lat': 19.043903, 'lng': 72.867091}, {'lat': 19.035899, 'lng': 72.860599}, {'lat': 19.065614, 'lng': 72.87913}, {'lat': 19.458948, 'lng': 72.812479}, {'lat': 19.217081, 'lng': 72.841607}, {'lat': 19.209644, 'lng': 72.837191}, {'lat': 19.196115, 'lng': 72.847219}, {'lat': 19.199737, 'lng': 72.864359}, {'lat': 19.212746, 'lng': 72.874374}, {'lat': 19.208108, 'lng': 72.826415}, {'lat': 19.213028, 'lng': 72.84243}];

  const homemarker = {
    url: 'homemarker.png',
    size: new window.google.maps.Size(33, 45),
    origin: new window.google.maps.Point(0, 0),
    anchor: new window.google.maps.Point(0, 32),
  };

  return (
    <div>
      <h1
      style={{color:"#011f4b"}}>
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

                     return <div key ={item.id}><MarkerF position={item}>
                      
                     </MarkerF></div>;
                  })}
                  <MarkerF position={center} icon={homemarker}></MarkerF>
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
        ))} */}

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
              {/* <p>Spotted {formatRelative(selected.time, new Date())}</p> */}
            </div>
          </InfoWindow>
        ) : null} 
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
      className="locate hello"
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
      <img src="https://th.bing.com/th/id/OIP.KsZ4f8AlmDuxvjjA2jfyYAHaHa?w=188&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
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

  return (<></>
    // <div className="search">
    //   <Combobox onSelect={handleSelect}>
    //     <ComboboxInput
    //       value={value}
    //       onChange={handleInput}
    //       disabled={!ready}
    //       placeholder="Search your location"
    //     />
    //     <ComboboxPopover>
    //       <ComboboxList>
    //         {status === "OK" &&
    //           data.map(({ id, description }) => (
    //             <ComboboxOption key={id} value={description} />
    //           ))}
    //       </ComboboxList>
    //     </ComboboxPopover>
    //   </Combobox>
    // </div>
  );
}