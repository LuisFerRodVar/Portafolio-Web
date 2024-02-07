




const onRouteClickArticle = (route) => {
    endTransition();
    let aside = document.querySelector(".layout__aside");
    aside.classList.remove("layout__aside--visible");
    if(route == 'a'){
        setTimeout(() => {
            window.location.href=  "articles/tutorial-git.html";
            
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
