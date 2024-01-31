import React from 'react';
import '../assets/css/AdminDash.css';

const AdminDash = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <a href="#">Zenvista Yoga</a>
          <div className="search_box">
            <input type="text" placeholder="Search Zenvista" />
            {/* <i className="fas fa-search"></i> */}
          </div>
        </div>

        <div className="header-icons">
          <i className="fas fa-bell"></i>
          <div className="account">
            <img src="./src/assets/images/admin1.jpg" alt="admin" />
            <h4>diva</h4>
          </div>
        </div>
      </header>
      
      <div className="container">
        <nav>
          <div className="side">
            <span>Main Menu</span>
            <a href="#" className="active">Dashboard</a>
            <a href="#">Profile</a>
            <a href="#">History</a>
            <a href="#">Application</a>
            <a href="#">My Account</a>
            <a href="#">Documents</a>

            <div className="links">
              <span>Quick Link</span>
              <a href="#">Paypal</a>
              <a href="#">EasyPay</a>
              <a href="#">SadaPay</a>
            </div>
          </div>
        </nav>

        <div className="main-body">
          <h2>Dashboard</h2>
          <div className="promo_card">
            <h1>ZenVista yoga Admissions</h1>
            <span>welcome back Admin.</span>
            <button>explore status</button>
          </div>

          <div className="history_lists">
            {/* ... History lists content ... */}
          </div>
        </div>

        <div className="sideb">
          <h4>Account Balance</h4>
          
          <div className="balance">

            <div className="info">
              <h5>Dollar</h5>
              <span>25,000.00</span>
            </div>
          </div>
          
          <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Dates</th>
          <th>Name</th>
          <th>yoga Type</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2, Aug, 2022</td>
          <td>Sam Tonny</td>
          <td>Premium</td>
          <td>$2000.00</td>
          <th>
            <button >accept</button>
          </th>
          <th>
            <button >reject</button>
          </th>
        </tr>
        <tr>
          <td>2</td>
          <td>29, July, 2022</td>
          <td>Code Info</td>
          <td>Silver</td>
          <td>$5,000.00</td>
          <th>
            <button >accept</button>
          </th>
          <th>
            <button >reject</button>
          </th>
        </tr>
        <tr>
          <td>3</td>
          <td>15, July, 2022</td>
          <td>Jhon David</td>
          <td>Startup</td>
          <td>$3000.00</td>
          <th>
            <button >accept</button>
          </th>
          <th>
            <button >reject</button>
          </th>
        </tr>
        <tr>
          <td>4</td>
          <td>5, July, 2022</td>
          <td>Salina Gomiz</td>
          <td>Premium</td>
          <td>$7000.00</td>
          <th>
            <button >accept</button>
          </th>
          <th>
            <button >reject</button>
          </th>
        </tr>
        <tr>
          <td>5</td>
          <td>29, June, 2022</td>
          <td>Gomiz</td>
          <td>Gold</td>
          <td>$4000.00</td>
          <th>
            <button >accept</button>
          </th>
          <th>
            <button >reject</button>
          </th>
        </tr>
        <tr>
          <td>6</td>
          <td>28, June, 2022</td>
          <td>Elyana Jhon</td>
          <td>Premium</td>
          <td>$2000.00</td>
          <th>
            <button >accept</button>
          </th>
          <th>
            <button >reject</button>
          </th>
        </tr>
      </tbody>
    </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
