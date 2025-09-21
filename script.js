function updateTime(){
    const now = new Date();
    const hours= now.getHours();
    const minutes= now.getMinutes();
    const currentTime=document.getElementById('greeting-time');
    const greetingText=document.getElementById('greeting-text');
    let greeting;
    if(hours<12){
        greeting="Good Morning";
    }else if(hours<18){
        greeting="Good Afternoon";
    }
    else{
        greeting="Good Evening";
    }

    greetingText.textContent=greeting;
    currentTime.textContent=now.toLocaleTimeString("en-us",{
        hour : "numeric",
        minute: "2-digit",
        hour12: true
    });
}
const navItems=document.querySelectorAll('.nav-item');
navItems.forEach(item=>{
    item.addEventListener('click',function(){
        navItems.forEach(i=>i.classList.remove('active'));
        this.classList.add('active');
    });
});


updateTime();
setInterval(updateTime, 6000);