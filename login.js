
let btnRegis = document.getElementById("regis")


btnRegis.addEventListener("submit", function(e){
        // window.open("http://127.0.0.1:5500/home.html")
        e.preventDefault()
            
        window.location.pathname="./home.html"
})