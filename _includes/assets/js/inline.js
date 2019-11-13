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