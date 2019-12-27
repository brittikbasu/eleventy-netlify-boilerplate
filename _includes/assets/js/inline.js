if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}
/*
var flipCard = function(card) {
  if (card === "about") {
    document.querySelector("#about").className = "hidden";
    document.querySelector("#partners").className = "block";
  } else if (card === "partners") {
    document.querySelector("#about").className = "block";
    document.querySelector("#partners").className = "hidden";
  }
};


var mySidebar = document.getElementsByClassName('sidebar')[0];
mySidebar.style.maxHeight = "100px";
console.log("my sidebar is " + mySidebar);
var contentHeight = document.getElementsByClassName('content')[0].offsetHeight;
*/
/*
function hideTabBar() {
  if (location.pathname != "/") {
    const hideTabs = document.querySelector("#tabBar");
    hideTabs.style.display == "none";
    console.log("this is" + hideTabs);
    console.log("I'm out");
  } else {
    console.log("at home");
  }
}
*/

/*
  function hideTabBar() {
  if (location.pathname != "/") {
    const hideTabs = document.querySelector("#tabBar");
    hideTabs.style.display = "none";
    console.log("this is" + hideTabs);
    console.log("I'm out");
  } else {
    console.log("at home");
  }
}

window.addEventListener("hashchange", function () {
  hideTabBar();
}()); 
*/

/* js from body
    const sidebarHome = document.querySelector("#sidebar-home");
const sidebarArticles = document.querySelector("#sidebar-articles");
const hideTabs = document.querySelector("#tabBar");

sidebarArticles.style.display = "none";


window.addEventListener("hashchange", function hideTabBar() {
  const sidebarArticles = document.querySelector("#sidebar-articles");

  if (location.pathname != "/") {
    hideTabs.style.display = "none";
    console.log("this is" + hideTabs);
    console.log("I'm out");
  } else {
    console.log("at home");
  }


}());



if (location.hash == "#articles") {
  sidebarArticles.style.display = "block";

  const activePill = document.querySelector("#all");
  activePill.style.background = "white";
  activePill.style.border = "1px hsla(351, 57%, 65%, .07) solid";
} else if (location.pathname == "/germany/") {
  const activePill = document.querySelector("#germany");
  activePill.style.background = "white";
  activePill.style.border = "1px hsla(351, 57%, 65%, .07) solid";

} else if (location.pathname == "/europe/") {
  const activePill = document.querySelector("#europe");
  activePill.style.background = "white";
  activePill.style.border = "1px hsla(351, 57%, 65%, .07) solid";

} else if (location.pathname == "/international/") {
  const activePill = document.querySelector("#international");
  activePill.style.background = "white";
  activePill.style.border = "1px hsla(351, 57%, 65%, .07) solid";

} else if (location.pathname == "/opinion/") {
  const activePill = document.querySelector("#opinion");
  activePill.style.background = "white";
  activePill.style.border = "1px hsla(351, 57%, 65%, .07) solid";

}

var hashChangedTo = function (hash) {
  location.hash = "#" + hash;
  if (location.hash == "#articles") {
    const activePill = document.querySelector("#all");
    activePill.style.background = "white";
    activePill.style.border = "1px hsla(351, 57%, 65%, .07) solid";
    sidebarArticles.style.display = "block";
    sidebarHome.style.display = "none";

  } else if (location.hash == "#events") {
    sidebarArticles.style.display = "block";
    sidebarHome.style.display = "none";
  } else if (location.hash == "#contact") {
    sidebarArticles.style.display = "block";
    sidebarHome.style.display = "none";
  } else {
    sidebarArticles.style.display = "none";
    sidebarHome.style.display = "block";


  }

}


document.addEventListener('DOMContentLoaded', function (event) {

  if (location.pathname.indexOf("/posts/") == 0) {
    sidebarArticles.style.display = "block";
    sidebarHome.style.display = "none";
    microlink('.postBody a', {
      size: 'large'
    })
  }

  if (location.pathname.indexOf("/events/") == 0) {
    sidebarArticles.style.display = "block";
    sidebarHome.style.display = "none";
    // hideTabs.style.display = "block";

  }

})

*/

/*
document.addEventListener('DOMContentLoaded', (event) => {
  if (location.pathname === "/blog/") {
    const activePill = document.querySelector("#blog");
    activePill.style.background = "#d97585";
  }
  )();
  */

document.addEventListener("DOMContentLoaded", function(event) {
  if (location.pathname.indexOf("/posts/") == 0) {
    // sidebarArticles.style.display = "block";
    //   sidebarHome.style.display = "none";
    microlink(".postBody a", {
      size: "large"
    });
  }

  if (location.pathname.indexOf("/events/") == 0) {
    // sidebarArticles.style.display = "block";
    //  sidebarHome.style.display = "none";
    // hideTabs.style.display = "block";
  }
});
