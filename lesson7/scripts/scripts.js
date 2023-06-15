const toLoad = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if(!src) {
        return;
    } 

    img.src = src;
    console.log("finished with preloadImg function");
}


imgOptions = {
    threshold: 0,
    rootMargin: "200px 0px 100px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
            console.log("finished with imgObserver function");
        }
    })
}, imgOptions);


toLoad.forEach(image => {
    imgObserver.observe(image);
    console.log("finished with toLoad function");
});