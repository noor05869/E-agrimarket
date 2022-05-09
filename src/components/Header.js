import React from 'react'

function Header() {
    const [shownav, setShownav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
        setShownav(true);
      } else {
        setShowButton(false);
        setShownav(false);
      }
    });
  }, []);
  
  return (
    <div> <header
    id="header"
    class={` header-scrolled ${shownav && "headerafter"}`}
  >
    <div className="row">
      <div className="col-11 mx-auto">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand navlogo">
            <img className="footerimg" src={logo3} />
            <button
              class="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
              <span></span>
              <span></span>
            </button>
          </a>

          <div
            class="collapse navbar-collapse navlidiv "
            id="navbarSupportedContent"
          >
            {/* <div className="navwidth"> */}
            <ul class="navbar-nav mr-auto w-75  justify-content-between align-items-center ">
              <li class="nav-item active navli">
                <a class="nav-link navlink" href="#">
                  HOME
                </a>
              </li>
              <li class="nav-item dropdown navli">
                <a class="nav-link navlink" href="#ourServices">
                  OUR SERVICES
                </a>
              </li>
              <li class="nav-item navli">
                <a class="nav-link navlink" href="#Products">
                  ABOUT US
                </a>
              </li>

              <li class="nav-item dropdown navli">
                <a
                  class="nav-link navlink dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  REGISTER
                </a>
                <ul class="dropdown-menu" aria-labelledby="">
                  <li className="">
                    <a class="dropdown-item regli" href="/Farmerdata">
                      FARMER
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item regli" href="/Trader">
                      TRADER
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li class="nav-item dropdown navli ">
                <a
                  onClick={() => {
                    navigate("./contactUs");
                  }}
                  class="nav-link navlink "
                  href="#Contact"
                >
                  CONTACT US
                </a>
              </li> */}
              <li class="nav-item dropdown navli ">
                <a href="#Getin" className="getin">
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
          {/* </div> */}
        </nav>
      </div>
    </div>
  </header>
  </div>
  )
}

export default Header