import ReactDOMServer from 'react-dom/server'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import styles from './map.module.scss'
import 'leaflet/dist/leaflet.css'

const Map: React.FC = () => {
  const iconMarker = L.divIcon({
    html: ReactDOMServer.renderToString(
      <div className={styles.marker}>
        <img className={styles.markerLogo} alt="ice logo" src="/ice-logo.png" />
        <FontAwesomeIcon icon={faMapMarker} />
      </div>
    ),
    className: 'removeSquareShadowDefault',
  })

  const iconLocation = L.divIcon({
    html: ReactDOMServer.renderToString(
      <h2 className={styles.manila}>Metro Manila, Philippines</h2>
    ),
    className: 'removeSquareShadowDefault',
  })

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={[14.558523749919372, 121.02194911756745]}
        zoom={13}
        scrollWheelZoom
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/${process.env.NEXT_PUBLIC_MAPBOX_USERNAME}/${process.env.NEXT_PUBLIC_MAPBOX_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        <Marker
          position={[14.558523749919372, 121.05424911756745]}
          icon={iconMarker}
        />
        <Marker
          position={[14.568523749919372, 120.9999911756745]}
          icon={iconLocation}
        />
      </MapContainer>
    </div>
  )
}

export default Map
