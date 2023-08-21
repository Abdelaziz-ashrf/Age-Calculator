let userInput = document.getElementById("date");
let calcBtn = document.querySelector("button");
let result =  document.getElementById("result")

userInput.max = new Date().toISOString().split("T")[0];
console.log(new Date().toISOString().split("T")[0])
userInput.value = ``
function calculateAge(){
    let birthDate = new Date(userInput.value);
    let day = birthDate.getDate()
    let month = birthDate.getMonth() + 1;
    let year = birthDate.getFullYear()

    let present = new Date();
    let pday = present.getDate()
    let pmonth = present.getMonth() + 1;
    let pyear = present.getFullYear()
    

    let ageDateYear, ageDateMonth, ageDateDay;
    ageDateYear = pyear - year;
    if(pmonth >= month){
        ageDateMonth = pmonth - month;
    }else {
        ageDateDay--;
        ageDateMonth = 12 + pmonth - month;
    }

    if(pday >= day){
        ageDateDay = pday -day;
    }else {
        ageDateMonth--;
        ageDateDay = getDaysInMonth(year, month) + pday - day;
    }

    if(ageDateMonth < 0){
        ageDateMonth = 11;
        ageDateYear--;
    }

    result.innerHTML = `Your Are ${ageDateYear} Years And ${ageDateMonth} Month And ${ageDateDay}`
    userInput.value = ``

}

function getDaysInMonth(year, month){
    return (new Date(year, month, 0).getDate());
}


calcBtn.addEventListener("click", calculateAge)
