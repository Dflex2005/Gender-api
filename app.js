const result = document.querySelector(".result");
const pName = document.getElementById("name");
const btn = document.querySelector(".btn");
const title = document.querySelector(".title")

btn.addEventListener("click", fData)

async function fData(){
    const personName =  pName.value.trim();
    const spl = personName.split(" ")
    if(spl.length > 1 || personName === ""){
    }else{
        mainFunc();
    }

    if(spl.length > 1){
        showMain("There are more than one names")
    }

    if(personName === ""){
        showMain("Input a name")
    }
}

 async function mainFunc(){
    const personName =  pName.value;
  const main =  await fetch(`https://api.genderize.io?name=${personName}`)
    .then(res => res.json())
    .then(gen =>{ 
        return gen;
    })
    .catch(err =>{
        if(err){
            result.innerHTML = "There is an error..."
        }  
    })  

    title.textContent = main.name
    let output = ""
    output += `
    <span class="gender">${main.gender}</span>
    <p>Chances of gender: ${parseInt(main.probability*100)}%</p>
    `
    result.innerHTML = output;
}


const main = document.querySelector(".main")

function showMain(value){
main.classList.add("show")
main.textContent = value;

setTimeout(()=>{
main.classList.remove("show")
},2500)
}