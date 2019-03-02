import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import './Dashboard.css';
import image from './image/image.png';
import image1 from './image/newyork.jpg';
import image2 from './image/korea.jpeg';
import image3 from './image/thailand.jpeg';

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
       
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"><img src={image} alt=""/></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li>
          <div class="dropdown">
            <a class="nav-link" href="#">Địa điểm du lịch <i class="fa fa-caret-down"></i></a>
          <div class="dropdown-content">
            <a href="#">New Yorks</a>
            <a href="#">Hàn Quốc</a>
            <a href="#">Thái Lan</a>
          </div>
          </div>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Về KV.vn</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link disabled" href="#">Liên hệ</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0" >
        <form action="#" method="get">
          <input class="form-control mr-sm-2" type="search" name="search" placeholder="Search and hit enter" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
        </form>
        </form>
        <div class="top-social-info">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-instagram"></i>
                <i class="fas fa-envelope"></i>
                <i class="fab fa-twitter"></i>
        </div>
      </div>
</nav>
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
        <div class="slide1" style={{backgroundImage: `url(${image1})`, height:'840px', position:'relative', left:'351px'}}>
          <h1>Có nên<br></br>đi New York?</h1>
          <p>Với những tòa nhà chọc trời, những thư viện lớn hiện đại và những sân khấu hoành tráng <br></br> ở Broadway, New York là thành phố có nhiều cái nhất của Mỹ và cả thế giới.</p>
          <p>Trong vô số điểm đến du lịch, top 10 mang tính biểu tượng của New York đối với du khách nước ngoài<br></br> tập trung tại khu Manhattan.</p>
          <a href="#" class="btn btn-primary px-4 py-3 mt-3">Xem thêm</a>
        </div>
        <div class="slide2" style={{backgroundImage: `url(${image2})`, height:'840px', position:'relative', left:'351px'}}>
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
        </div>
      </Carousel>
      </body>
      </div>
    );
  }
}

export default Dashboard;
