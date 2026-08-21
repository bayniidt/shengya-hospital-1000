export function StoreLocatorSection() {
  return (
    <section className="store-locator">
      <div className="store-locator__map">
        <iframe
          title="LS Medical Group locations"
          src="https://www.google.com/maps?q=Ipoh%2C%20Perak%2C%20Malaysia&z=8&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="store-locator__panel">
        <h2 className="store-locator__title">Stores near you</h2>
        <div className="store-locator__search">
          <input type="text" placeholder="Enter your address or city" />
          <button type="button">Search</button>
        </div>
      </div>
    </section>
  );
}
