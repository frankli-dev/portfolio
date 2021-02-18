import styles from './map.module.scss'
import GoogleMapReact from 'google-map-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import createMapOptions from './mapStyles'

const Map: React.FC = () => {
  return (
    <div className={styles.mapContainer}>
      <GoogleMapReact
        options={createMapOptions}
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API }}
        defaultCenter={{
          lat: 14.558523749919372,
          lng: 121.02194911756745,
        }}
        defaultZoom={13}
        backgroundColor="none"
      >
        <h2
          className={styles.manila}
          // @ts-ignore
          lat={14.568523749919372}
          lng={120.9999911756745}
        >
          Metro Manila, Philippines
        </h2>
        <div
          className={styles.marker}
          // @ts-ignore
          lat={14.558523749919372}
          lng={121.05424911756745}
        >
          <img
            className={styles.markerLogo}
            alt="ice logo"
            src="/ice-logo.png"
          />
          <FontAwesomeIcon icon={faMapMarker} />
        </div>
      </GoogleMapReact>
    </div>
  )
}

export default Map
