import { useEffect, useState } from 'react'

// Open-Meteo (무료, 인증 불필요)
// 서울 좌표 기준 이번 주말 날씨
const SEOUL_URL = 'https://api.open-meteo.com/v1/forecast?latitude=37.5665&longitude=126.9780&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Asia%2FSeoul&forecast_days=7'

const WMO_EMOJI = {
  0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
  45: '🌫️', 48: '🌫️',
  51: '🌦️', 53: '🌦️', 55: '🌧️',
  61: '🌧️', 63: '🌧️', 65: '🌧️',
  71: '🌨️', 73: '🌨️', 75: '❄️',
  80: '🌧️', 81: '🌧️', 82: '⛈️',
  95: '⛈️', 96: '⛈️', 99: '⛈️',
}

export default function WeatherWidget() {
  const [days, setDays] = useState(null)

  useEffect(() => {
    fetch(SEOUL_URL)
      .then(r => r.json())
      .then(data => {
        const today = new Date()
        const dow = today.getDay()
        const daysUntilFri = (5 - dow + 7) % 7
        const friIdx = daysUntilFri === 0 && dow !== 5 ? 0 : daysUntilFri

        const result = []
        const labels = ['금', '토', '일']
        for (let i = 0; i < 3; i++) {
          const idx = friIdx + i
          if (idx < data.daily.time.length) {
            result.push({
              label: labels[i],
              date: data.daily.time[idx]?.slice(5),
              emoji: WMO_EMOJI[data.daily.weather_code[idx]] || '🌡️',
              high: Math.round(data.daily.temperature_2m_max[idx]),
              low: Math.round(data.daily.temperature_2m_min[idx]),
            })
          }
        }
        setDays(result)
      })
      .catch(() => setDays([]))
  }, [])

  if (!days || days.length === 0) return null

  return (
    <div className="weather-widget">
      <div className="weather-title">🌤 주말 날씨 (서울)</div>
      <div className="weather-row">
        {days.map((d, i) => (
          <div key={i} className="weather-day">
            <div className="weather-label">{d.label}</div>
            <div className="weather-emoji">{d.emoji}</div>
            <div className="weather-temp">
              <span className="high">{d.high}°</span>
              <span className="low">/ {d.low}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
