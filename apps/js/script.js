const testimonial = document.getElementById("testimonial");
const nextTesti = document.getElementById("next");
const previousTesti = document.getElementById("previous");
const testimonial1 = document.getElementById("testimonial1");
const testimonial2 = document.getElementById("testimonial2");

nextTesti.addEventListener('click', function(){
    console.log('click slider');


    if(testimonial2.classList.contains('hide-testimonial')){
        testimonial2.classList.remove("hide-testimonial");
        testimonial1.classList.add("hide-testimonial");
        
    }

    else{
        testimonial2.classList.add("hide-testimonial");
        testimonial1.classList.remove("hide-testimonial");
        
    }



});

previousTesti.addEventListener('click', function(){
    console.log('click slider');

    if(testimonial1.classList.contains('hide-testimonial')){
        testimonial2.classList.add("hide-testimonial");
        testimonial1.classList.remove("hide-testimonial");
        
    }

    else {
        testimonial1.classList.add("hide-testimonial");
        testimonial2.classList.remove("hide-testimonial");
    }



});

