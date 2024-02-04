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


const onRouteClick = (route,article) => {
    if (appRoot.dataset.route === route) return;
	appRoot.dataset.route = route;
    endTransition();
    let back = "";
    if(article){
        back = "../"
    }
    let aside = document.querySelector(".layout__aside");
    aside.classList.remove("layout__aside--visible");
    if(route == 'a'){
        setTimeout(() => {
            window.location.href= back+ "index.html"
            
        }, 1000);

    }
    if(route == 'b'){
        setTimeout(() => {
            window.location.href= back+ "sobre-mi.html"
        }, 1000);
    }
    if(route == 'c'){
        setTimeout(() => {
            window.location.href= back+ "curriculum.html"
        }, 1000);
        
    }
    if(route == 'd'){
        setTimeout(() => {
            window.location.href= back+ "portafolio.html"
        }, 1000);
        
    }
    if(route == 'e'){
        setTimeout(() => {
            window.location.href=back+ "blog.html"
        }, 1000);
        
    }
    if(route == 'f'){
        setTimeout(() => {
            window.location.href=back+ "contacto.html"
        }, 1000);
        
    }
	
};

window.addEventListener("load", () => {
    startTransition();
});
