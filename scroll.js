var a = document.querySelectorAll('.nav-menu a');
console.log(a);

 for(var i=0;i<a.length-1;i++){
   a[i].addEventListener('click',function(event){
        event.preventDefault();  
        var section = this.textContent.trim().toLowerCase();
        var target = document.getElementById(section);
        console.log(target);   
        var interval = setInterval(function(){
            var cordinate = target.getBoundingClientRect();
            console.log(cordinate.top);
            if(cordinate.top <= 10){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },10);
   });
 }


 a[a.length-1].addEventListener('click',function(event){
    event.preventDefault();
    var section = this.textContent.trim().toLowerCase();
        var target = document.getElementById(section);
        console.log(target);   
        var interval = setInterval(function(){
            var cordinate = target.getBoundingClientRect();
            console.log(cordinate.top);
            if(cordinate.top <=200){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },10);
});
