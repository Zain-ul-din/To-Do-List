     var LIST = document.querySelectorAll('.TODOS p');
     var user_Input = document.querySelector('#InpuT');
     var Container = document.querySelector('.TODOS');
     var Btn = document.querySelector('#BTN');
    // Get User Input 
    Btn.onclick = ()=> {
      if(user_Input.value!=''){
         var Temp_Para = document.createElement('p');
         var Val = document.createTextNode(user_Input.value);
         Temp_Para.appendChild(Val);
         Temp_Para.classList.add('fs-4');
         Temp_Para.classList.add('Marked');
         Container.appendChild(Temp_Para);
        user_Input.value='';
        Temp_Para.addEventListener('click',()=>{
            Temp_Para.classList.add('Marked-none');
        });
      } else alert('Please Enter Some Value in Input Field');
    }
    