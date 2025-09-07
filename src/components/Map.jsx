import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const Map = () => {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      // Coordenadas de ejemplo (puedes cambiar por las coordenadas reales de tu cafetería)
      const position = [40.4168, -3.7038] // Madrid, España como ejemplo

      // Crear el mapa
      const map = L.map(mapRef.current).setView(position, 15)
      mapInstanceRef.current = map

      // Agregar capa de tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)

      // Crear marcador personalizado
      const customIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      })

      // Agregar marcador
      const marker = L.marker(position, { icon: customIcon }).addTo(map)

      // Agregar popup
      marker.bindPopup(`
        <div style="text-align: center;">
          <h3 style="font-weight: bold; color: #1e293b; margin-bottom: 8px;">Café Especialidad</h3>
          <p style="font-size: 14px; color: #6b7280; margin-bottom: 8px;">
            Calle de la Paz, 123<br />
            28012 Madrid, España
          </p>
          <div style="display: flex; justify-content: center; gap: 8px;">
            <span style="background: #e0f2fe; color: #0369a1; padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: 500;">
              ☕ Café Premium
            </span>
            <span style="background: #fef3c7; color: #92400e; padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: 500;">
              ⭐ 4.9/5
            </span>
          </div>
        </div>
      `)

      // Cleanup function
      return () => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove()
          mapInstanceRef.current = null
        }
      }
    }
  }, [])

  return (
    <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
      <div ref={mapRef} style={{ height: '100%', width: '100%' }} />
    </div>
  )
}

export default Map