let selectButton = document.querySelectorAll("button")
  let amount = {
    score : 0
  }
  for(let i=0;i<selectButton.length; i++){

      selectButton[i].onclick = () => {
        
        let UserChoice = selectButton[i].value
        if(UserChoice == "last"){
          amount.score = 0;
          let runs = document.getElementById("score")
          let s = document.getElementById("vs")
          s.innerText = "You vs Me!"
          runs.innerText = 0;
          document.getElementById("result").innerText = "Start the match!"

       }
       else{
        let systemChoice = computerChoice();
        let s = document.getElementById("vs")
        s.innerText = `${UserChoice} vs ${systemChoice}`
         compare(UserChoice , systemChoice);
    }
  }
}
     const computerChoice = () =>{
        const items = ['Rock', 'Paper' , 'Scissor']
         let systemNumber = Math.floor(Math.random()*3)
           return items[systemNumber]
     }
      const compare = (UserChoice , systemChoice) => {
        let runs = document.getElementById("score")
        
        if(UserChoice != systemChoice){
          if(UserChoice == "Rock"){
             if(systemChoice == "Paper"){
                amount.score-=1
                runs.innerText = amount.score
                document.getElementById("result").innerText = "You Lost the match!"
                //  score.innerText = score.innerText
             }
            else{
                amount.score+=1
                runs.innerText = amount.score
                document.getElementById("result").innerText = "You Won the match!"
            }
            
        }
           
    }
    if(UserChoice != systemChoice){
          if(UserChoice == "Paper"){
            if(systemChoice == "Rock"){
               amount.score+=1
               runs.innerText = amount.score
               document.getElementById("result").innerText = "You Won the match!"
               //  score.innerText = score.innerText
            }
           else{
            amount.score-=1
            runs.innerText = amount.score
            document.getElementById("result").innerText = "You Lost the match!"
           }
         
          
         }
        
        }
        if(UserChoice != systemChoice){
         if(UserChoice == "Scissor"){
            if(systemChoice == "Paper"){
                amount.score+=1
                runs.innerText = amount.score
                document.getElementById("result").innerText = "You Won the match!"
               //  score.innerText = score.innerText
            }
           else{
               amount.score-=1
               runs.innerText = amount.score
               document.getElementById("result").innerText = "You Lost the match!"
           }
          
          
         }
         
        }
         if(UserChoice == systemChoice){
               
               document.getElementById("result").innerText = "Match was drawn!"
               amount.score+=0;
               runs.innerText = amount.score 
         }
         

         
      }