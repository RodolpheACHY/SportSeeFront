import IconWrapper from "./IconWrapper";
import Footer from "./Footer";
import LogoMeditate  from '../../assets/Logo_meditate.svg?react';
import LogoSwimming from '../../assets/Logo_swimming.svg?react';
import LogoBike from '../../assets/Logo_bike.svg?react';
import LogoGym  from '../../assets/Logo_gym.svg?react';
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={styles['sidebar__icon-wrapper-Container']}>
            {/* Icône par défaut */}
            <IconWrapper IconComponent={LogoMeditate} onClick={() => alert('Meditate clicked')}/>
            <IconWrapper IconComponent={LogoSwimming} onClick={() => alert('Swimming clicked')} />
            <IconWrapper IconComponent={LogoBike} onClick={() => alert('Bike clicked')} />
            <IconWrapper IconComponent={LogoGym} onClick={() => alert('Gym clicked')} />
        </div>
        <Footer />
    </div>
  );
};

export default Sidebar;