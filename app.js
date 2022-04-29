


function calculateInf()
{

    let amount = document.querySelector('#amount');

    amount = parseInt(amount.value);
   
   let percent = document.querySelector(".percent");

   percent = parseFloat(percent.value);


   let years = document.querySelector(".years");

   years = parseInt(years.value);

   let result = document.querySelector(".result");
   
   
   let calculate = document.getElementById("calculate")



   if(amount === 0 || isNaN(amount) || amount < 0 )
   {
       alert("Please enter valid initial amount");
   }
   else if(percent === 0 || isNaN(percent) || percent<0 )
   {
       alert("Please enter valid percent");
   }
   else if(years === 0 || isNaN(years))
   {
       alert("Please enter valid year")
   }



let res = amount;
let per = percent/100;


if(amount > 0 && years > 0 && percent > 0)
{



    for(let i= 0; i< years ; i++)
    {

        res += amount*per;
        res = Math.round(res*100)/100;

    }


    document.querySelector(".result").value = res ;

  


  }
}




  let reset = document.querySelector(".reset");

  let input = document.querySelectorAll("input");

  function resetValues()
  {

    input.forEach(input => input.value = "");
    
       
    
    
  }


