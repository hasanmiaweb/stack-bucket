import BrandLogo from "../../assets/brand-logo/brand-logo-1.png";
import MoreMenu from "../../assets/icons/more-menu.png";
const NotFount = () => {
    return (
        <div>
                  {/* Navigation Bar Start */}
      <nav className="nav __shadow--lg">
        <div className="container nav__container">
          <div className="nav__brand">
            <img className="nav__brand-logo" src={BrandLogo} alt="Brand Logo" />
            <h1 className="nav__brand-name">Stack Hasan</h1>
          </div>
          <div className="nav__menu nav__menu--right">
            <div className="nav__menu-items">
              <img className="nav__menu-icon" src={MoreMenu} alt="More Hasan" />
            </div>
          </div>
        </div>
      </nav>
      {/* Navigation Bar End */}
            <h1>404 Error Not Found</h1>
        </div>
    );
};

export default NotFount;