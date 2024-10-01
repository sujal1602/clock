function clock(){
    let hrs=document.getElementById('hrs');
    let min=document.getElementById('min');
    let sec=document.getElementById('sec');
    let period=document.getElementById('period');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s= new Date().getSeconds();
    
    let ampm= h>=12 ? "PM" : "AM";

    hrs.innerHTML =h;
    min.innerHTML =m;
    sec.innerHTML =s;
    period.innerHTML =ampm;
};
setInterval(clock,1000)