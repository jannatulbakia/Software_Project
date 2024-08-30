import React from 'react';
import "./HomeMain.css";
const HomeMain = () => {
    return (
        <div>
            <div className="Intro-home-section-image">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src="https://cf.bstatic.com/xdata/images/city/600x200/666843.jpg?k=4744586c4a79c997023e878de81730e457af8a28a1178d29f92f7677e658f95a&o="
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src="https://shahkamalhotelsylhet.com/wp-content/uploads/2022/05/Ratargul-2.jpg"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="https://assets.roar.media/Bangla/2016/11/Sajek-valley1-1024x680.jpg?w=1200"
                            
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src="https://assets.roar.media/assets/4sDsV9dKRlMCX599_rsz_%E0%A6%95%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%9C%E0%A7%80%E0%A6%B0_%E0%A6%AE%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%BF%E0%A6%B0-_%E0%A6%85%E0%A6%A8%E0%A6%A8%E0%A7%8D%E0%A6%AF_%E0%A6%8F%E0%A6%95_%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A7%81_%E0%A6%B6%E0%A7%88%E0%A6%B2%E0%A7%80.jpg"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
        
                </div>
            </div>
            <div className="Intro-home-section-text">
                <h1><b>Why Select Bangladesh as a Travel Destination?</b></h1>
                <p>
                    Bangladesh remains unnoticed despite its natural beauty. It's a country with a rich and diverse culture.
                    As a travel destination, Bangladesh has a lot to offer. There are beaches for beach lovers, mountains for mountain lovers, and historical sites
                    for those who are interested in learning about the rich history of this country. Not only does Bangladesh offer an unforgettable experience in terms of nature,
                    but the interaction with locals will also be something worth remembering for travelers.
                </p>
                <p>
                    There are many fascinating places in Bangladesh that are still unexplored. So we are offering a tour to the unexplored
                    Bangladesh, hidden from the outside world. Join us on this journey to <b>Explore the Unexplored Bangladesh.</b>
                </p>
            </div>
        </div>
    );
};

export default HomeMain;
