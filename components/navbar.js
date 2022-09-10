function navbar() {
  return `<div id="navbar_div">
        <div id="nav">
          <div id="left">
            <div class="logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Imgur_Logo_Light.svg/1280px-Imgur_Logo_Light.svg.png"
                alt="" />
            </div>
            <div class="new_post_div">
              <a class="new_post">
                <img
                  src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.13ab64f9f36ad8f25ae3544b350e2ae1.svg"
                  class="" />
                <span> New post </span>
              </a>
            </div>
          </div>
          <div id="center">
            <div class="searchbar">
              <input id="search-box" type="text"
                placeholder="Images, #tags, @users oh my!" />
              <button class="search">
                <img class="search"
                  src="https://s.imgur.com/desktop-assets/desktop-assets/icon-search.8d0f9b564a4659d48d8eca38b968a7f2.svg" />
              </button>
            </div>
            <div id="searchitem"></div>
          </div>
          <div id="right">
            <div class="rightsideitems">
              <button class="addfree">Go Add-Free</button>
              <button class="signin">Sign in</button>
              <button class="signup">Sign up</button>
            </div>
          </div>
        </div>
        <div class="message">You don't browse Imgur? Seems kinda sus. </div>
        <div id="trending_tags">
          <span>Explore Tags</span>
          <span>MORE TAGS +</span>
        </div>
        <div id="header-card">
          <div class="h_card">
            <img src="./Images/image1.png" alt="" srcset="">
          </div>
          <div class="h_card">
            <img src="./Images/2.png" alt="" srcset="">
          </div>
          <div class="h_card">
            <img src="./Images/3.png" alt="" srcset="">
          </div>
          <div class="h_card">
            <img src="./Images/4.png" alt="" srcset="">
          </div>
          <div class="h_card">
            <img src="./Images/5.png" alt="" srcset="">
          </div>
          <div class="h_card">
            <img src="./Images/6.png" alt="" srcset="">
          </div>
          <div class="h_card">
            <img src="./Images/7.png" alt="" srcset="">
          </div>
          <div class="h_card">
            <img src="./Images/8.png" alt="" srcset="">
          </div>
          <div class="h_card">
            <img src="./Images/9.png" alt="" srcset="">
          </div>
        </div>
      </div>
    `

}


export default navbar;