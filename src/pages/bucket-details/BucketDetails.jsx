// Import Assets
import BrandLogo from "../../assets/brand-logo/brand-logo-1.png";
import MoreMenu from "../../assets/icons/more-menu.png";
import plusIcon from "../../assets/icons/plus-icon.png";
import arrowIconLeft from "../../assets/icons/left-arrow-icon.png";
import arrowIconRight from "../../assets/icons/right-arrow-icon.png";
import DeleteIcon from "../../assets/icons/delete-icon.png";
import whitePrinter from "../../assets/icons/printer-white-icon2.png";
import DownArrowWhite from "../../assets/icons/down-arrow-white-icon.png";


const BucketDetails = () => {
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

      {/* Main Page Content Start */}
      <main className="container __margin--ylg">
      {/* Add Item Start  */}
      {/* Add Item End  */}
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
            <div className="add-item__filter-overlay hide">
              <ul className="add-item__filter-list">
                <li className="add-item__filter-item">
                  <div className="add-item__filter-content">
                    <img
                      className="add-item__filter-icon"
                      src={plusIcon}
                      alt="Item"
                    />
                    Egg
                  </div>
                </li>
                <li className="add-item__filter-item">
                  <div className="add-item__filter-content">
                    <img
                      className="add-item__filter-icon"
                      src={plusIcon}
                      alt="Item"
                    />
                    Egg
                  </div>
                </li>
                <li className="add-item__filter-item">
                  <div className="add-item__filter-content">
                    <img
                      className="add-item__filter-icon"
                      src={plusIcon}
                      alt="Item"
                    />
                    Egg
                  </div>
                </li>
                <li className="add-item__filter-item">
                  <div className="add-item__filter-content">
                    <img
                      className="add-item__filter-icon"
                      src={plusIcon}
                      alt="Item"
                    />
                    Egg
                  </div>
                </li>
                <li className="add-item__filter-item">
                  <div className="add-item__filter-content">
                    <img
                      className="add-item__filter-icon"
                      src={plusIcon}
                      alt="Item"
                    />
                    Egg
                  </div>
                </li>
                <li className="add-item__filter-item">
                  <div className="add-item__filter-content">
                    <img
                      className="add-item__filter-icon"
                      src={plusIcon}
                      alt="Item"
                    />
                    Egg
                  </div>
                </li>
                <li className="add-item__filter-item">
                  <div className="add-item__filter-content">
                    <img
                      className="add-item__filter-icon"
                      src={plusIcon}
                      alt="Item"
                    />
                    Egg
                  </div>
                </li>
                <li className="add-item__filter-item">
                  <div className="add-item__filter-content">
                    <img
                      className="add-item__filter-icon"
                      src={plusIcon}
                      alt="Item"
                    />
                    Egg
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="horizontal-line"></div>
          <div className="add-item__suggestions">
            <div className="add-item__suggestion-control add-item__suggestion-control--prev">
              <img
                className="add-item__suggestion-control-icon"
                src={arrowIconLeft}
                alt="Previous"
              />
            </div>
            <div className="add-item__suggestion-chips">
              <div className="add-item__suggestion-chip-item">Egg</div>
              <div className="add-item__suggestion-chip-item">Carrot</div>
              <div className="add-item__suggestion-chip-item">Banana</div>
              <div className="add-item__suggestion-chip-item">Apple</div>
              <div className="add-item__suggestion-chip-item">Coke</div>
              <div className="add-item__suggestion-chip-item">Water</div>
              <div className="add-item__suggestion-chip-item">Medicine</div>
              <div className="add-item__suggestion-chip-item">Milk</div>
              <div className="add-item__suggestion-chip-item">Apple</div>
              <div className="add-item__suggestion-chip-item">Coke</div>
              <div className="add-item__suggestion-chip-item">Water</div>
              <div className="add-item__suggestion-chip-item">Medicine</div>
              <div className="add-item__suggestion-chip-item">Apple</div>
              <div className="add-item__suggestion-chip-item">Coke</div>
              <div className="add-item__suggestion-chip-item">Water</div>
              <div className="add-item__suggestion-chip-item">Medicine</div>
              <div className="add-item__suggestion-chip-item">Milk</div>
            </div>
            <div className="add-item__suggestion-control add-item__suggestion-control--next">
              <img
                className="add-item__suggestion-control-icon"
                src={arrowIconRight}
                alt="Next"
              />
            </div>
          </div>
        </div>
          {/* Add Item End  */}
          {/* Item Table Start */}
          <section class="section table __shadow--sm">
				<table class="table__table">
					<thead class="table__thead">
						<tr>
							<th>Item Name</th>
							<th>Quantity</th>
							<th>Cost</th>
							<th class="align-right">Actions</th>
						</tr>
					</thead>
					<tbody class="table__tbody">
						<tr>
							<th>
								<div class="table__item-name">
									<input type="checkbox" />
									<label>Carrots</label>
								</div>
							</th>
							<th>
								<div class="table__item-input">
									<span
										class="auto-grow-input"
										role="textbox"
										aria-placeholder="500G"
										contenteditable
										>2KG
									</span>
								</div>
							</th>
							<th>
								<div class="table__item-input">
									<span
										class="auto-grow-input"
										role="textbox"
										contenteditable
									>
										250
									</span>
									<span>BDT</span>
								</div>
							</th>
							<th class="align-right">
								<button class="icon-button icon-button--custom">
									<img
										class="icon-button__icon"
										src={DeleteIcon}
										alt="Delete"
									/>
								</button>
							</th>
						</tr>
					</tbody>
				</table>
			</section>
          {/* Item Table End */}
          <section class="section table table--success __shadow--sm">
				<table class="table__table">
					<thead class="table__thead">
						<tr>
							<th>Item Name</th>
							<th>Quantity</th>
							<th>Cost</th>
							<th class="align-right">
								<button class="icon-button">
									<img
										class="icon-button__icon"
										src={whitePrinter}
										alt="Print"
									/>
								</button>
								<button class="icon-button">
									<img
										class="icon-button__icon"
										src={DownArrowWhite}
										alt="Print"
									/>
								</button>
							</th>
						</tr>
					</thead>
					<tbody class="table__tbody">
						<tr>
							<th>
								<div class="table__item-name">
									<input type="checkbox" />
									<label>Carrots</label>
								</div>
							</th>
							<th>
								<div class="table__item-input">
									<span
										class="auto-grow-input"
										role="textbox"
										aria-placeholder="500G"
										contenteditable
										>2KG
									</span>
								</div>
							</th>
							<th>
								<div class="table__item-input">
									<span
										class="auto-grow-input"
										role="textbox"
										contenteditable
									>
										250
									</span>
									<span>BDT</span>
								</div>
							</th>
							<th class="align-right">
								<button class="icon-button">
									<img
										class="icon-button__icon"
										src={DeleteIcon}
										alt="Delete"
									/>
								</button>
							</th>
						</tr>
						<tr>
							<th>
								<div class="table__item-name">
									<input type="checkbox" />
									<label>Carrots</label>
								</div>
							</th>
							<th>
								<div class="table__item-input">
									<span
										class="auto-grow-input"
										role="textbox"
										aria-placeholder="500G"
										contenteditable
										>2KG
									</span>
								</div>
							</th>
							<th>
								<div class="table__item-input">
									<span
										class="auto-grow-input"
										role="textbox"
										contenteditable
									>
										250
									</span>
									<span>BDT</span>
								</div>
							</th>
							<th class="align-right">
								<button class="icon-button">
									<img
										class="icon-button__icon"
										src={DeleteIcon}
										alt="Delete"
									/>
								</button>
							</th>
						</tr>
						<tr>
							<th>
								<div class="table__item-name">
									<input type="checkbox" />
									<label>Carrots</label>
								</div>
							</th>
							<th>
								<div class="table__item-input">
									<span
										class="auto-grow-input"
										role="textbox"
										aria-placeholder="500G"
										contenteditable
										>2KG
									</span>
								</div>
							</th>
							<th>
								<div class="table__item-input">
									<span
										class="auto-grow-input"
										role="textbox"
										contenteditable
									>
										250
									</span>
									<span>BDT</span>
								</div>
							</th>
							<th class="align-right">
								<button class="icon-button">
									<img
										class="icon-button__icon"
										src={DeleteIcon}
										alt="Delete"
									/>
								</button>
							</th>
						</tr>
					</tbody>
				</table>
			</section>
      </main>
      {/* Main Page Content End */}
    </div>
  );
};

export default BucketDetails;
