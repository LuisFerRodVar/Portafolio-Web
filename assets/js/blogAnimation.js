function showMask(element, destiny) {
    // Obtener la máscara y layout__content
    const mask = document.getElementById('mask');
    const contentBlog = document.querySelector('.content__blog');
    const articles = document.querySelectorAll('.articles__article');
    const title = document.querySelector('.blog__header');
    const menu = document.querySelector('.menu__list');
    const options = document.querySelectorAll('.menu__option i')

    
    const rect = element.getBoundingClientRect();
    const contentRect = contentBlog.getBoundingClientRect();
    const x = rect.left - contentRect.left + rect.width / 2;
    const y = rect.top - contentRect.top + rect.height / 2;

    title.style.opacity = '0';
    mask.style.left = x + 'px';
    mask.style.top = y + 'px';

    // Ocultar el resto de elementos dentro de .content__page
    articles.forEach(article => {
        article.style.opacity = '0';
    });
    // Ajustar la máscara al tamaño inicial (cero)
    mask.style.width = '0';
    mask.style.height = '0';

    // Mostrar y animar la máscara al tamaño de .content__blog
    mask.style.width = "250%";
    mask.style.height = "250%";
    if(destiny == 1){


        
        setTimeout(() =>{
            
            window.location.href = './articles/prueba.html'
        },500)
    }
}