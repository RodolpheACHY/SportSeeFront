import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Locations from "../../components/locations/Locations";
import Footer from "../../components/footer/Footer";
import PropTypes from "prop-types";
import backgroundImage from '/backgroundHero.png'

const Profil= ({data}) => {
  return (
    <div>
      <Header />
      <Hero
        backgroundImage={backgroundImage}
        text="Chez vous, partout et ailleurs"
      />
      <main>
        <Locations locations={data} />
      </main>
      <Footer />
    </div>
  );
};

Profil.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Profil;
