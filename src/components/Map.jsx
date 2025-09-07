import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

const Map = () => {
  // Coordenadas de ejemplo (puedes cambiar por las coordenadas reales de tu cafetería)
  const position = [40.4168, -3.7038] // Madrid, España como ejemplo

  // Icono personalizado para el marcador
  const customIcon = new Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  })

  return (
    <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <div className="text-center">
              <h3 className="font-bold text-coffee-800 mb-2">Café Especialidad</h3>
              <p className="text-sm text-gray-600 mb-2">
                Calle de la Paz, 123<br />
                28012 Madrid, España
              </p>
              <div className="flex justify-center space-x-2">
                <span className="bg-accent-100 text-accent-800 px-2 py-1 rounded-full text-xs font-medium">
                  ☕ Café Premium
                </span>
                <span className="bg-gold-100 text-gold-800 px-2 py-1 rounded-full text-xs font-medium">
                  ⭐ 4.9/5
                </span>
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map