

// Pin Check method 
document.getElementById('click').addEventListener("click",function(){

      const randomCount = document.getElementById('randomNumber').value ;
       const finalRandomNumber = Math.floor(1000 + Math.random() * 9000);
       document.getElementById('randomNumber').value = finalRandomNumber;
 })


 document.getElementById('submit').addEventListener('click',function(){
      const input1 = document.getElementById('text1').value;
      const inputNumber = parseInt(input1);
      input1.value = inputNumber;

      document.getElementById('text1').value ='';


      const randomCount = document.getElementById('randomNumber').
      value ;
      const randomCount1 = parseInt(randomCount);
      randomCount.value = randomCount1;

      document.getElementById('randomNumber').
      value ='';
      
      
      if(inputNumber === randomCount1){
            const match = document.getElementById('match');
            match.style.display = 'block';

      }
      else{
            const notMatch = document.getElementById('not-match');
            notMatch.style.display = 'block';
      }
 })
 





