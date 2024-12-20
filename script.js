let inp = document.querySelector('input');

// inp.addEventListener('keyup', function() {
//     console.log('Hi, you good');
// });

inp.addEventListener('keydown', function(event) {
    if( event.code === "KeyA"){
        console.log('Player moved Left');
        
    }else if(event.code === "KeyS"){
        console.log('Player moved Backward');
    }else if(event.code === "KeyD"){
        console.log('Player moved Right');
    }else if(event.code === "KeyW"){
            console.log('Player moved Forward');
        }
});

let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault()
    console.dir(form);
    

});