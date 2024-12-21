//  document.getElementById('btn').addEventListener('click',function (){
//     const hello = document.getElementById('change');
//     hello.innerText ='ami change';
// });


document.getElementById('Btn').addEventListener('click',function(){
    const input = document.getElementById('input');
    const  value = input.value;
   const  para = document.getElementById('paraTage');
  
     para.innerText= value;

input.value='';

});



