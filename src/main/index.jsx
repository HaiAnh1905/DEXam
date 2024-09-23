import React, { useState, useRef } from "react";
import "./style.scss";
import Movies from "./Movies";
import PopupMovie from "./Popup";

const HomePage = () => {
  const [movies, setMovies] = useState([
    {
      ID: 1,
      name: "Avengers: Endgame",
      time: 181,
      year: 2019,
      image: "https://teachingk18.github.io/WF_Test_ver2/poster_film_img/1.jpg",
      introduce:
        "Sau sự kiện Thanos quét sạch nửa vũ trụ, các siêu anh hùng còn sống phải tìm cách đảo ngược thảm họa và khôi phục lại thế giới.",
    },
    {
      ID: 2,
      name: "Spider-Man: No Way Home",
      time: 150,
      year: 2021,
      image: "https://teachingk18.github.io/WF_Test_ver2/poster_film_img/2.jpg",
      introduce:
        "Sau khi bị lộ danh tính, Peter Parker phải đối mặt với những hậu quả không lường trước khi thực hiện một cuộc phiêu lưu chuyến du hành giữa các vũ trụ song song.",
    },
    {
      ID: 3,
      name: "The Dark Knight",
      time: 152,
      year: 2008,
      image: "https://teachingk18.github.io/WF_Test_ver2/poster_film_img/3.jpg",
      introduce:
        "Batman phải đối mặt với một tên tội phạm tâm thần nguy hiểm, Joker, khi anh ta đe dọa làm sụp đổ Gotham City bằng cách tạo ra sự hỗn loạn.",
    },
    {
      ID: 4,
      name: "Inception",
      time: 148,
      year: 2010,
      image: "https://teachingk18.github.io/WF_Test_ver2/poster_film_img/4.jpg",
      introduce:
        "Một trộm tài lẻ có khả năng xâm nhập vào giấc mơ của người khác để ăn cắp bí mật doanh nghiệp được giao nhiệm vụ cắt giảm một ý tưởng vào tâm trí của một người.",
    },
    {
      ID: 5,
      name: "Interstellar",
      time: 169,
      year: 2014,
      image: "https://teachingk18.github.io/WF_Test_ver2/poster_film_img/5.jpg",
      introduce:
        "Trong tương lai, khi Trái Đất trở nên không thể sống được, một nhóm nhà du hành không gian đồng ý thực hiện một nhiệm vụ cuối cùng để tìm kiếm một hành tinh mới cho loài người.",
    },
    {
      ID: 6,
      name: "Pulp Fiction",
      time: 154,
      year: 1994,
      image: "https://teachingk18.github.io/WF_Test_ver2/poster_film_img/6.jpg",
      introduce:
        "Câu chuyện không theo trình tự thời gian của một nhóm tội phạm, nhân viên nhà hàng và võ sĩ đấu vật khi họ tiếp xúc với thế giới ngầm của Los Angeles.",
    },
    {
      ID: 7,
      name: "The Shawshank Redemption",
      time: 142,
      year: 1994,
      image: "https://teachingk18.github.io/WF_Test_ver2/poster_film_img/7.jpg",
      introduce:
        "Một người đàn ông bị kết án oan trong một vụ giết người và gửi đến nhà tù Shawshank, nơi anh ta tìm thấy sự hy vọng và sự tự do qua các tình bạn không thể tưởng tượng được.",
    },
    {
      ID: 8,
      name: "The Godfather",
      time: 175,
      year: 1972,
      image: "https://teachingk18.github.io/WF_Test_ver2/poster_film_img/8.jpg",
      introduce:
        "Một gia đình mafia Ý đấu tranh để bảo vệ và mở rộng đế chế tội phạm của họ trong thế giới ngầm của New York.",
    },
    {
      ID: 9,
      name: "The Lord of the Rings: The Fellowship of the Ring",
      time: 178,
      year: 2001,
      image: "https://teachingk18.github.io/WF_Test_ver2/poster_film_img/9.jpg",
      introduce:
        "Một nhóm người hùng bất đắc dĩ hợp tác để hủy diệt một chiếc vòng cổ ma thuật và chống lại tên chúa tể tà ác Sauron.",
    },
    {
      ID: 10,
      name: "Fight Club",
      time: 139,
      year: 1999,
      image:
        "https://teachingk18.github.io/WF_Test_ver2/poster_film_img/10.jpg",
      introduce:
        "Một người mắc chứng rối loạn nhân cách tìm thấy lối thoát qua việc tham gia vào một câu lạc bộ đánh nhau bí mật và đặt ra một kế hoạch phá hủy xã hội.",
    },
  ]);
  const [value, setValue] = useState("");
  const containerRef = useRef();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSearchPopup = () => {
    const search = document.querySelector(".search");
    const popupInp = document.querySelector(".popup-input");
    search.onclick = () => {
      popupInp.classList.toggle("hidden");
    };
  };
  const handleNext = () => {
    containerRef.current.scrollLeft += 300;
  };
  const handleBack = () => {
    containerRef.current.scrollLeft -= 300;
  };
  return (
    <div className="homePage absolute py-6 px-7 relative">
          <PopupMovie />
      <div className="header flex items-center justify-between mb-5">
        <div className="menu w-fit flex flex-col items-center justify-center gap-1">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          id="logo"
          className="logo w-fit flex items-center justify-center text-3xl font-bold"
        >
          Movie
          <div className="ml-1 orangeCircle flex items-center justify-center">
            UI
          </div>
        </div>
        <div onClick={handleSearchPopup} className="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-8 icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>
      <hr />
      <div id="inputpopup" className="popup-input flex items-center hidden">
        <input
          value={value}
          onChange={handleChange}
          type="text"
          className="pl-1 ml-2 my-auto h-fit no-outline"
          placeholder="Movies names"
        />
      </div>
      <div className="body relative z-40">
        <div className="title self-start text-2xl mt-2 mb-2">
          Most Popular Movies
        </div>
        <div
          ref={containerRef}
          className="listMovies relative grid grid-flow-col gap-8 overflow-hidden overflow-x-scroll z-10 scrollbar-none"
        >
          {movies.map((e) => {
            if (value != "") {
              return (
                e.name
                  .trim()
                  .toLowerCase()
                  .includes(value.trim().toLowerCase()) && (
                  <Movies key={e.ID} items={e} />
                )
              );
            } else {
              return <Movies key={e.ID} items={e} />;
            }
          })}
        </div>
        <div className="arrow-btn hidden absolute lg:flex w-full h-full items-center justify-between">
          <div onClick={handleBack} className="arrow leftarw z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              className="size-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </div>
          <div onClick={handleNext} className="arrow rightarw z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              className="size-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
