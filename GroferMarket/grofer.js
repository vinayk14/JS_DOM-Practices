     const getSumBtn = document.createElement("button");
     getSumBtn.append("Get Total Price");
     document.body.appendChild(getSumBtn);
     // Create new Para Element for data Screening
     const ans = document.createElement("p")
     ans.id="ans"
     document.body.append(ans)
   const getSum = () => {
     // your code here
     let price = document.querySelectorAll(".price")
     let total =0
     for(let i=0; i<price.length; i++){
       total = total + + price[i].textContent
     }
      ans.textContent=`Total Amount is : ${total}`
      // console.log(total)
   };
  getSumBtn.addEventListener("click", getSum);