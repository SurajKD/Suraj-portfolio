import React, { useEffect, useState, useRef } from "react";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [headerOffsetTop, setHeaderOffsetTop] = useState(15);
  const [activeMenuItem, setActiveMenuItem] = useState("home");
  const containerRef = useRef(null);
  const cardItemsRef = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      if (width <= 540) {
        setHeaderOffsetTop(136);
      } else {
        setHeaderOffsetTop(15);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const handleMenuClick = (e, id) => {
    e.preventDefault();
    const cardId = `card-${id.replace("#", "")}`;
    const cardElement = document.getElementById(cardId);
    const menuItem = e.currentTarget.closest("li");

    if (width >= 1121) {
      if (!menuItem.classList.contains("current-menu-item")) {
        setActiveMenuItem(id.replace("#", ""));

        if (containerRef.current) {
          console.log(id,"kd")
          cardItemsRef.current.forEach((item) => item.classList.add("hidden"));
          cardElement.classList.remove("hidden");
          cardElement.classList.add("active");
        }
      }
    } else {
      window.scrollTo({
        top: cardElement.offsetTop - headerOffsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (width < 1121) {
      document.querySelectorAll(".card-inner").forEach((item) => {
        item.classList.remove(
          "hidden",
          "fadeOutLeft",
          "rotateOutUpLeft",
          "rollOut",
          "jackOutTheBox",
          "fadeOut",
          "fadeOutUp",
          "animated"
        );
      });
    }
  }, [width]);

  return (
    <div className="App">
<body>
  <div class="page_wrap">

    <div class="background"></div>
    <div class="container opened disable-sidebar" ref={containerRef} data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">
      <header class="header">
        <div class="profile">
          <div class="title">Suraj Kumar Das</div>
        </div>
        <a href="#" class="menu-btn"><span></span></a>
        <div class="top-menu top-menu-onepage">
          <div class="menu-main-menu-container">
            <ul id="menu-main-menu" class="menu">
              <li data-id="menu-item-107"
                class={`menu-item menu-item-type-post_type menu-item-object-page ${activeMenuItem==='home'?'current-menu-item':''}`}>
                <a href="#home" class="one-page-menu-item" onClick={(e) => handleMenuClick(e, "#home")}><i class="las la-user-tie"></i>Bio</a>
              </li>
              <li data-id="menu-item-108"
                class={`menu-item menu-item-type-post_type menu-item-object-page ${activeMenuItem==='resume'?'current-menu-item':''}`}>
                <a href="#resume" class="one-page-menu-item" onClick={(e) => handleMenuClick(e, "#resume")}><i class="las la-file-alt"></i>Resume</a>
              </li>
              <li data-id="menu-item-109"
                class={`menu-item menu-item-type-post_type menu-item-object-page  ${activeMenuItem==='works'?'current-menu-item':''}`}>
                <a href="#works" class="one-page-menu-item"><i
                  class="las la-laptop-code" onClick={(e) => handleMenuClick(e, "#works")}></i>Works</a>
              </li>

              <li data-id="menu-item-111"
                class={`menu-item menu-item-type-post_type menu-item-object-page  ${activeMenuItem==='contacts'?'current-menu-item':''}`}>
                <a href="#contacts" class="one-page-menu-item"><i
                  class="las la-envelope" onClick={(e) => handleMenuClick(e, "#contacts")}></i>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div class="card-started" id="home-card">
        <div class="profile no-photo">
          <div class="profile-content">
            <div class="lazyload slide profile-image" data-bg="img/mebg.png"></div>
            <div class="title">Suraj Kumar Das<br /><span
              style={{fontSize: 20, letterSpacing: 3}}></span></div>

            <div class="social">

              <a target="_blank" href="https://www.linkedin.com/in/suraj-das-ab722115b/"><i
                class="lab la-linkedin"></i></a>
              <a target="_blank" href="https://leetcode.com/u/SurajKD/"> <i class="las la-code"></i> </a>
              <a target="_blank" href="https://github.com/SurajKD"> <i class="lab la-github"></i> </a>
              <a target="_blank" href="mailto:kdsuraj786@gmail.com"> <i class="las la-at"></i></a>
            </div>

          </div>

          <a class="lnks" target="_blank"
            href="https://drive.google.com/file/d/1nUoEi2O1Qbw20YVc_95cwP_pds4p0O9_/view?usp=drive_link">

            <p>Download Resume</p>

          </a>

        </div>
      </div>
      <div class="s_overlay"></div>
      <div class="content-sidebar">
        <div class="sidebar-wrap"></div>
        <span class="close"></span>
      </div>
      <div class="card-inner animated active" id="card-home" ref={(el) => cardItemsRef.current[0] = el}>
        <div class="card-wrap ">
          <h2>About Me</h2>
          <div class="l1"></div>
          <p>A highly skilled Software Developer with 4+ years of experience specializing in JavaScript,
            TypeScript, React, and Next.js. Proficient in building dynamic, user-friendly web applications
            using frameworks like Material UI and Chakra UI. Adept at version control with Git and
            implementing CI/CD pipelines for seamless deployment. Demonstrates a strong ability to deliver
            efficient and scalable solutions, with a proven track record of developing complex dashboards,
            integrating third-party tools, and solving challenging technical problems. Passionate about
            writing clean, maintainable code and continuously improving development processes.</p>
          <div class="row">
            <div class="col-5">
              <h3>Experience</h3>
              <p>4+</p>
            </div>
            <div class="col-2">
              <div class="l2 ml-auto mr-auto"></div>
            </div>
            <div class="col-5">
              <h3>Residence</h3>
              <p>India, New Delhi</p>
            </div>
            <div class="l3"></div>
            <div class="col-12">
              <h3>Hobbies</h3>
              <p>Sketching, Coding, Learning new technologies, Playing Football</p>
            </div>
            <div class="l3"></div>
            <div class="timeline">

              <h3 class="timeline__item timeline__item--year">1998</h3>

              <div class="timeline__item">
                <p class="timeline__title">Born</p>
              </div>

              <h3 class="timeline__item timeline__item--year">2017</h3>

              <div class="timeline__item">
                <p class="timeline__title">Graduated High School</p>
              </div>

              <h3 class="timeline__item timeline__item--year">2017</h3>

              <div class="timeline__item">
                <p class="timeline__title">Started at NGF College of Engneering and Technology CSE
                  B-tech program</p>
              </div>

              <h3 class="timeline__item timeline__item--year">2020</h3>

              <div class="timeline__item">
                <p class="timeline__title">Completed 3 months internship at Devlofox Technologies</p>
              </div>

            </div>
            <br /><br />
          </div>

        </div>
      </div>
      <div class="card-inner" id="card-resume" ref={(el) => cardItemsRef.current[1] = el}>
        <div class="card-wrap">
          <h2>Education</h2>
          <div class="l1"></div>
          <div class="row">
            <div class="col-5">
              <h3>Class 10th</h3>
              <p>Passed from Raisina Bengali School ( 2015 )</p>
            </div>
            <div class="col-2">
              <div class="l2 ml-auto mr-auto"></div>
            </div>
            <div class="col-5">
              <h3>Class 12th</h3>
              <p>Passed from Raisina Bengali School ( 2017 )</p>
            </div>
            <div class="l3"></div>
            <div class="col-12">
              <h3>Bachelors</h3>
              <p> Passed Computer Science Engineering from NGF College Of Engneering and Technology ( 2021
                ) </p>
            </div>
            <div class="l3"></div>

            <h2>Skills</h2>
            <div class="l1"></div>

            <div class="skills">
              <div class="bar advanced" data-skill="JavaScript"></div>
              <div class="bar advanced" data-skill="TypeScript"></div>
              <div class="bar advanced" data-skill="ReactJS"></div>
              <div class="bar advanced" data-skill="NEXT.JS"></div>
              <div class="bar advanced" data-skill="CSS3 / SCSS / SASS"></div>
              <div class="bar advanced" data-skill="HTML5"></div>
              <div class="bar intermediate" data-skill="MySQL"></div>
              <div class="bar intermediate" data-skill="C / C++"></div>
              <div class="bar advanced" data-skill="Bootstrap / Material UI / Chakra UI / Tailwind"></div>
              <div class="bar advanced" data-skill="JQuery"></div>
              <div class="bar intermediate" data-skill="CI/CD"></div>
              <div class="bar advanced" data-skill="GIT"></div>
              <div class="bar intermediate" data-skill="MySQL"></div>
            </div>
            <div class="l3"></div>
            <div class="col-5">
              <h3>Communication skill</h3>
              <p>I have good communication skill which helps me as a team player.</p>
            </div>
            <div class="col-2">
              <div class="l2 ml-auto mr-auto"></div>
            </div>
            <div class="col-5">
              <h3>Problem solving skill</h3>
              <p>I can solve any problems by breaking it in parts and solve it one by one.</p>
            </div>
            <div class="l3"></div>

          </div>

          <br /><br /><br /><br />
        </div>
      </div>
      <div class="card-inner" id="card-works" ref={(el) => cardItemsRef.current[2] = el}>
        <div class="card-wrap">
          <h2>Works</h2>
          <div class="l1"></div>
          <div class="row">
            <div class="col-lg-6">
              <a href="https://suraj-calorie-counter.netlify.app/index.html" target="_blank"><img
                src="img/p1.png" /></a>
            </div>
            <div class="col-lg-6">
              <h3>Calorie Counter</h3>
              <p> It measures daily calorie Intake of a
                person and the amount of macronutrients need by the body.
              </p>
            </div>
            <div class="l3"></div>
            <div class="col-lg-6">
              <a href="https://react-e-com-9821.netlify.app/" target="_blank"><img
                src="img/react-e-com.jpg" /></a>
            </div>
            <div class="col-lg-6">
              <h3>E-Commerce</h3>
              <p> E-com website using open api to fetch products.
              </p>
            </div>
            <div class="l3"></div>
            <div class="col-lg-6">
              <a href="https://devlofox.com/home" target="_blank"><img src="img/devlofox.jpg" /></a>
            </div>
            <div class="col-lg-6">
              <h3>Company Website</h3>
              <p>Created company website during Internship.
              </p>
            </div>
            <div class="l3"></div>
            <div class="col-lg-6">
              <a href="https://redcliffelabs.com/" target="_blank"><img src="img/redcliffe.jpg" /></a>
            </div>
            <div class="col-lg-6">
              <h3>Redcliffe Labs</h3>
              <p>Created complex websites and dashboards using ReactJs NextJs.
              </p>
            </div>
            <div class="l3"></div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div class="card-inner" id="card-contacts" ref={(el) => cardItemsRef.current[3] = el}>
        <div class="card-wrap">
          <h2>Contact me</h2>
          <div class="l1"></div>
          <div class="row">

            <div class="col-lg-12">
              <br /><br />
              <form action="https://formcarry.com/s/RXbeO77FW4" method="POST" accept-charset="UTF-8">
                <div class="row">
                  <div class="col-lg-12"> <input type="email" name="email" placeholder="Email" /></div>
                  <div class="col-lg-12"><input type="text" name="name" placeholder="Name" /></div>
                  <div class="col-lg-12"><textarea type="text" name="message" id="" cols="30"
                    rows="10" placeholder="Message"></textarea></div>
                  <div class="col-lg-12"><input type="submit" name="submit" value="submit" /></div>
                </div>

                <input type="hidden" name="_gotcha" />

              </form>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="copyright">Made by Suraj Kumar Das.</div>


</body>

</div>

  );
};

export default App;

