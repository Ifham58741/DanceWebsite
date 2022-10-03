let x=window.matchMedia("(max-width:804px)");
function move(x){
if(x.matches){
    
        document.getElementById('sec1').style.display='none';
        document.getElementById('sec2').style.display='none';
        document.getElementById('sec3').style.display='none';
        document.getElementById('sec4').style.display='none';
        document.getElementById('sec5').style.display='none';
        document.getElementById('sec6').style.display='none';
        document.getElementById('cross1').style.display='none';
        document.getElementById("menu").style.display='block';
        
    



document.getElementById("cross1").addEventListener('click',()=>{
    
    document.getElementById('sec1').style.display='none';
    document.getElementById('sec2').style.display='none';
    document.getElementById('sec3').style.display='none';
    document.getElementById('sec4').style.display='none';
    document.getElementById('sec5').style.display='none';
    document.getElementById('sec6').style.display='none';
    document.getElementById('cross1').style.display='none';
    document.getElementById("menu").style.display='block';

}) 

    
}
else{
    document.getElementById('sec1').style.display='block';
    document.getElementById('sec2').style.display='block';
    document.getElementById('sec3').style.display='block';
    document.getElementById('sec4').style.display='block';
    document.getElementById('sec5').style.display='block';
    document.getElementById('sec6').style.display='block';
    document.getElementById('container').style.height='80vh';
    
}  
}
move(x);
x.addEventListener('change',function(event){
    move(event.target);
})

document.getElementById("menu").addEventListener('click',()=>{

    document.getElementById('sec1').style.display='block';
    document.getElementById('sec2').style.display='block';
    document.getElementById('sec3').style.display='block';
    document.getElementById('sec4').style.display='block';
    document.getElementById('sec5').style.display='block';
    document.getElementById('sec6').style.display='block';
    document.getElementById('cross1').style.display='block';
    document.getElementById("menu").style.display='none';
})
 

    
    