// components/PromoBanner.jsx
const PromoBanner = ({ promo }) => {
  return (
    <div className="promo-banner section">
      <div className="container d-flex g-4 f-wrap a-items-center j-content-between">
        <div className="promo-banner__content">
          <h3 className="title--xs">{promo.title}</h3>
          <p className="text--sm">{promo.description}</p>
          <span className="badge badge--primary">{promo.code}</span>
        </div>
        <img
          src={promo.image}
          alt={promo.title}
          className="promo-banner__image"
          style={{ maxWidth: '300px', borderRadius: '1rem' }}
        />
      </div>
    </div>
  );
};

export default PromoBanner;
