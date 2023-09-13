// alert('hello');
// i need to get the current position of the mouse every time it moves.(x,y)
// i need to set xand y values to the circular div
// ------
// every time mouse moves we should get notified = AudioListenerevery time listen gets notified , we need to get the values for x,y axis then update it to the circle
let circle = document.querySelector('#circle');
const btn = document.querySelector('#btn');
let tl = gsap.timeline();

window.addEventListener('mousemove', function(details){
    let xvalue = details.clientX;
    let yvalue = details.clientY;
    
    setTimeout(function(){
        circle.style.top= `${yvalue}px`;
        circle.style.left= `${xvalue}px`;
    },50)

});
btn.addEventListener('click',function(){
  tl.reverse();
});


tl
.from('#wrapper',{
    duration:3,
    scale:.7,
    ease:'Expo.easeInOut',
    opacity:0
})
.from('#whitestrip',{
    duration:2,
    width:0,
    ease:'Expo.easeInOut'
},'-=2.5')
.from('#blaclcard',{
    duration:1.5,
    x:50,
    opacity:0,
    ease:'Expo.easeInOut'
},'-=1.5')
.from('#lineelem',{
    duration:1.5,
    x:50,
    opacity:0,
    ease:'Expo.easeInOut'
},'-=1.5')
.from('.line',{
    duration:2,
    width:0,
    opacity:0,
    ease:'Expo.easeInOut'
},'-=1')
.from('#blackcard p',{
    duration:1.2,
    y:30,
    opacity:0,
    ease:'Expo.easeInOut'
},'-=2')
.from('#side',{
    duration:2,
    x:30,
    opacity:0,
    ease:'Expo.easeInOut'
},'-=2')
