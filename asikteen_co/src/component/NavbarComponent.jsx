import {Navbar, Container, Nav} from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ASIKTEN.CO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-lg">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Category Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cart</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Your Order</a>
        </li>
      </ul>
      <div className="button">
        <a href="" className="btn btn-outline-dark">
          <i className="fa fa-login"></i>Login
        </a>
      </div>
    </div>
  </div>
</nav>

    </div>
  );
}

export default NavbarComponent
