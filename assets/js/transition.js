const appRoot = document.getElementById("page");
const root = document.documentElement;

const endTransition = () => {
	const loader = document.querySelector(".loader");
	loader.addEventListener("transitionend", () => {
		loader.style.transform = "translateX(110%)";
	});
	loader.style.transform = "";
};

const startTransition = () => {
	const loader = document.querySelector(".loader");
	loader.style.transform = "translateX(110%)";
};


const onRouteClick = (route) => {
    if (appRoot.dataset.route === route) return;
	appRoot.dataset.route = route;
    endTransition();
    
    let aside = document.querySelector(".layout__aside");
    aside.classList.remove("layout__aside--visible");
    if(route == 'a'){
        setTimeout(() => {
            window.location.href= "index.html"
            
        }, 1000);

    }
    if(route == 'b'){
        setTimeout(() => {
            window.location.href= "sobre-mi.html"
        }, 1000);
    }
    if(route == 'c'){
        setTimeout(() => {
            window.location.href= "curriculum.html"
        }, 1000);
        
    }
    if(route == 'd'){
        setTimeout(() => {
            window.location.href= "portafolio.html"
        }, 1000);
        
    }
    if(route == 'e'){
        setTimeout(() => {
            window.location.href= "blog.html"
        }, 1000);
        
    }
    if(route == 'f'){
        setTimeout(() => {
            window.location.href= "contacto.html"
        }, 1000);
        
    }
	
};

window.addEventListener("load", () => {
    startTransition();
});
