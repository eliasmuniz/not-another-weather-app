export default function WeatherMainInfo({ weather }) {
  return (
    <div>
      <div>{weather?.location.name}</div>
      <div>{weather?.location.country}</div>
      <div>
        <div>
          <img
            src={`${weather?.current.condition.icon}`}
            width="128px"
            alt={`${weather?.current.condition.text}`}
          />
        </div>
        <div>
          <div>{weather?.current.condition.text}</div>
          <div>{weather?.current.temp_c}º</div>
        </div>
      </div>
      <iframe
      title="map"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://maps.google.com/maps?q=${weather?.location.lat},${weather?.location.lon}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
      />
    
    </div>
  );
}
