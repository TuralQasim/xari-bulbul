function Map() {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.6749480873!2d49.83574227633073!3d40.371731295287866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307db1aeac7fcb%3A0xbd3a8230b8a99d72!2sKhagani%20Gardens!5e0!3m2!1saz!2saz!4v1684427038336!5m2!1saz!2saz"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
