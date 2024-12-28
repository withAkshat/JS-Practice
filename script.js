// let inp = document.querySelector('input');

// // inp.addEventListener('keyup', function() {
// //     console.log('Hi, you good');
// // });

// inp.addEventListener('keydown', function(event) {
//     if( event.code === "KeyA"){
//         console.log('Player moved Left');

//     }else if(event.code === "KeyS"){
//         console.log('Player moved Backward');
//     }else if(event.code === "KeyD"){
//         console.log('Player moved Right');
//     }else if(event.code === "KeyW"){
//         console.log('Player moved Forward');
//     }
// });

// let form = document.querySelector('form');

// form.addEventListener('submit', function(event) {
//     event.preventDefault()
//     let inp = document.querySelector('input');

//     console.log(inp.value);



// });



// let inp = document.querySelector('input');

// inp.addEventListener('input', function(){
//     console.log(this.value);

// })


// Stack Breakpoint..

// function one (){
//     return 1;
// }

// function two(){
//     return one()+ one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);

// }

// three();


// js is a synchronus type language..
// so to do things like timeout and setinterval cannot be done at through js as it do not wait for any process to execute so js provides 
// that set of information to browser(which are built from langs like c++ or java are asynchrounus in nature) wait for that code's timeperiod 
// and puts that code into callstack of js for js to execute it .


let h1 = document.querySelector('h1');

function colorChange(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextColorChange) nextColorChange(); 
    },delay)
    
}
colorChange("red",1000,()=>{
    colorChange("yellow",1000, ()=>{
        colorChange("green",1000)
        
    })
    
    })

    //Above nesting of callback is called callback hell and is a great issue in industries..!!

//The JavaScript code "if(nextColorChange) nextColorChange()" checks if the variable nextColorChange is defined and holds a value (it must be truthy, i.e., not null, undefined, 0, 
// false, NaN, or an empty string). If it does, it will invoke nextColorChange() as a function





