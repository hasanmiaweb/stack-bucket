// Import Assets
import BrandLogo from "../../assets/brand-logo/brand-logo-1.png";
import MoreMenu from "../../assets/icons/more-menu.png";
import plusIcon from "../../assets/icons/plus-icon.png";
import EditIcon from "../../assets/icons/edit-icon.png";
import DeleteIcon from "../../assets/icons/delete-icon.png";
import PrinterIcon from "../../assets/icons/printer-icon.png";

const BucketPage = () => {
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

      {/* Main Page Content  Start */}
      <main className="container __margin--ylg">
        {/* Add New Bucket Start */}
        <div className="section add-item __shadow--sm">
          <div className="add-item__relative">
            <div className="add-item__input">
              <img
                className="add-item__icon"
                src={plusIcon}
                alt="Create New Bucket"
              />
              <input
                className="add-item__input-field"
                type="text"
                placeholder="Create New Bucket"
              />
            </div>
          </div>
        </div>
        {/* Add New Bucket End */}
        {/* Bucket List Table Start */}
        <div className="section table __shadow--sm">
          <table className="table__table">
            <thead className="table__thead">
              <tr>
                <th>Bucket</th>
                <th>Created</th>
                <th>Costs</th>
                <th className="align-right">Action</th>
              </tr>
            </thead>
            <tbody className="table__tbody">
              <tr>
                <th>Holiday Shopping</th>
                <th className="text-secondary">05 May 2022</th>
                <th>4850 BDT</th>
                <th className="align-right">
                  <button className="icon-button">
                    <img
                      className="icon-button__icon"
                      src={EditIcon}
                      alt="Edit"
                    />
                  </button>
                  <button className="icon-button">
                    <img
                      className="icon-button__icon"
                      src={DeleteIcon}
                      alt="Delete"
                    />
                  </button>
                  <button className="icon-button">
                    <img
                      className="icon-button__icon"
                      src={PrinterIcon}
                      alt="Printer"
                    />
                  </button>
                </th>
              </tr>
              <tr>
                <th>Holiday Shopping</th>
                <th className="text-secondary">05 May 2022</th>
                <th>4850 BDT</th>
                <th className="align-right">
                  <button className="icon-button">
                    <img
                      className="icon-button__icon"
                      src={EditIcon}
                      alt="Edit"
                    />
                  </button>
                  <button className="icon-button">
                    <img
                      className="icon-button__icon"
                      src={DeleteIcon}
                      alt="Delete"
                    />
                  </button>
                  <button className="icon-button">
                    <img
                      className="icon-button__icon"
                      src={PrinterIcon}
                      alt="Printer"
                    />
                  </button>
                </th>
              </tr>
              <tr>
                <th>Holiday Shopping</th>
                <th className="text-secondary">05 May 2022</th>
                <th>4850 BDT</th>
                <th className="align-right">
                  <button className="icon-button">
                    <img
                      className="icon-button__icon"
                      src={EditIcon}
                      alt="Edit"
                    />
                  </button>
                  <button className="icon-button">
                    <img
                      className="icon-button__icon"
                      src={DeleteIcon}
                      alt="Delete"
                    />
                  </button>
                  <button className="icon-button">
                    <img
                      className="icon-button__icon"
                      src={PrinterIcon}
                      alt="Printer"
                    />
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Bucket List Table End */}
      </main>
    </div>
  );
};

export default BucketPage;
