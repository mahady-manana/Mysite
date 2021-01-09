
window.onscroll = () => {
    if (document.documentElement.scrollTop >= 80) {
        // console.log("sss")
        // document.getElementById("menu-principal").classList.add = "fixed";
        document.getElementById("menu-principal").classList.add("menu-fixed");
    } else {
        // document.getElementById("menu-principal").classList.remove = "fixed";
        document.getElementById("menu-principal").classList.remove("menu-fixed");
    }
}