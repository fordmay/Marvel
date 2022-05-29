class Slider {
    constructor(className) {
        this.className = className;
        this.index = 1;
    }
    
    getIndex() {
        return this.index;
    }
    
    showSlides(n) {
        const slides = document.getElementsByClassName(this.className);

        if (n > slides.length) {
            this.index = 1;
        }

        for (let slide of slides) {
            slide.style.display = "none";
        }

        slides[this.index - 1].style.display = "block";
    }
    
    nextSlide() {
        this.index += 1;
    }
}


slider = new Slider('slide');
slider.showSlides(slider.getIndex());

const timer = setInterval(() => {  
    slider.showSlides(slider.getIndex());
    slider.nextSlide();
}, 3000)
