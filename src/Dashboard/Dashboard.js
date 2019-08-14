import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import './Dashboard.scss';
import image from './image/image.png';
import image1 from './image/back.jpg';
import clo1 from './image/clo1.jpg';
import clo2 from './image/clo2.jpg';
import clo3 from './image/clo3.jpg';
import clo4 from './image/clo4.jpg';
import clo5 from './image/clo5.jpg';
import clo6 from './image/clo6.jpg';

import Carousel from 'nuka-carousel'
import Dropdown from 'react-bootstrap/Dropdown'
class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
      showMenu: false,
    };
    this.showMenu = this.showMenu.bind(this);
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }
  showMenu(event) {
    event.preventDefault();
    this.setState({
      showMenu: true,
    });
  }
  render() {
    const { index, direction } = this.state;
    return (
      <div className="App">
      <header class="header-area">
      <div className='row'>
      <div className='col-md-1'>
      <div class="nav-logo" href="#"><img src={image} alt=""/></div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      </div>
        <div className='col-md-2'>
            <div class="nav-menu" href="#">Home <span class="sr-only">(current)</span></div>
        </div>
        <div className='col-md-2'>
          <div class="dropdown">
            <div class="nav-menu" href="#">Loại đồ thời trang <i class="fa fa-caret-down"></i></div>
          <div class="dropdown-content">
              <a href="#">New Yorks</a>
              <a href="#">Hàn Quốc</a>
              <a href="#">Thái Lan</a>
          </div>
          </div>
        </div>
          <div className='col-md-2'>
            <div class="nav-menu" href="#">Về getclothe.vn</div>
          </div>
          <div className='col-md-2'>
            <div class="nav-menu" href="#">Liên hệ</div>
          </div>
          <div className='col-md-3'>
          <div class="top-social-info">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-instagram"></i>
                <i class="fas fa-envelope"></i>
                <i class="fab fa-twitter"></i>
                </div>
        </div>
          </div>
        {/* <form class="form-inline my-2 my-lg-0" >
        <form action="#" method="get">
          <input class="form-control mr-sm-2" type="search" name="search" placeholder="Search and hit enter" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
        </form>
        </form> */}
       
      </header>
      <body> 
      
      {/* <div class="one-forth d-flex js-fullheight align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
	          	<div class="text">
		            <h1 class="mb-4">We Love <br></br>Modern Designs</h1>
		            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		            <p><a href="#" class="btn btn-primary px-4 py-3 mt-3">View our works</a></p>
	            </div>
      </div> */}
      <Carousel autoplay transitionMode="fade" speed={500} autoplayInterval={2000} >
        <div class="slide1" style={{backgroundImage: `url(${image1})`, height:'500px', position:'relative'}}>
        <form class="form-inline my-2 my-lg-0" >
        <form action="#" method="get">
          <input class="search" type="search" name="search" placeholder="Search and hit enter" aria-label="Search" />
          <button class="search" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
        </form>
        </form>
        </div>
        {/* <div class="slide2" style={{backgroundImage: `url(${image2})`, height:'840px', position:'relative', left:'351px'}}>
          <h1>Hàn Quốc<br></br>Tại sao không ?</h1>
          <p>Hàn Quốc được biết đến là xứ sở của món Kim Chi và cũng là <br></br>nơi cho ra đời những bộ phim tình cảm nổi tiếng nhất thế giới.</p>
          <p> Du lịch Hàn Quốc du khách sẽ được tham quan nhiều địa danh như:</p>
          <a href="#" class="btn btn-primary px-4 py-3 mt-3">Xem thêm</a>
        </div>
        <div class="slide1" style={{backgroundImage: `url(${image3})`, height:'840px', position:'relative', left:'351px'}}>
          <h1>Thái Lan <br></br>Giá cực rẻ</h1>
          <p>Với con người thân thiện và vui vẻ, đất nước nhiệt đới độc đáo nền văn hóa và lịch sử <br></br>lâu đời thiên đường du lịch Thái Lan luôn là điểm dừng chân lý tưởng cho du khách</p>
          <p> Thành phố Bangkok, nơi các tín đồ shopping có thể thỏa sức mua sắm tại...</p>
          <a href="#" class="btn btn-primary px-4 py-3 mt-3">Xem thêm</a>
        </div> */}
      </Carousel>
      <div>
        <ul>
          <li><img style={{'width':'60%'}} src={clo1} alt=''></img></li>
          <li><img style={{'width':'60%'}} src={clo2} alt=''></img></li>
          <li><img style={{'width':'60%'}} src={clo3} alt=''></img></li>
          <li><img style={{'width':'60%'}} src={clo4} alt=''></img></li>
          <li><img style={{'width':'60%'}} src={clo5} alt=''></img></li>
          <li><img style={{'width':'60%'}} src={clo6} alt=''></img></li>
          <li><img style={{'width':'60%'}} src={clo1} alt=''></img></li>
          <li><img style={{'width':'60%'}} src={clo2} alt=''></img></li>

        </ul>
      </div>
      </body>
      </div>
    );
  }
}

export default Dashboard;
