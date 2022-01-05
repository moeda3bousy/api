const api = "https://www.breakingbadapi.com/api/characters"
async function getData(){
    try{
    const fetching = await fetch(api)
    const data = await fetching.json();
    printData(data)
}
catch(y)
{
    console.log( "Error:" , y );
}

}

function printData(data){
   const header = document.querySelector("#header") 
   header.innerHTML += ` <select class='form-control bg-warning  text-success text-center' onchange="getSecond(this.value)">
   
   <option id='pp'>Select One</option>
   
  ${ data.map ( charachter=> `<option>${charachter.name}</option>` ) }
   
   </select>`
}

async function getSecond(e){
    if ( e !== "Select One"){
const  fetchingg = await fetch(`${api}?name=${e}`)
const dataa = await fetchingg.json();
const content = document.querySelector("#content")
content.innerHTML= `<h2 id="fa" class='text-warning'>${dataa[0].name} (${dataa[0].nickname})<h2>
<h6 class='text-success'>${dataa[0].portrayed}<h6>
<img src="${dataa[0].img}" width="500" />`
}
}

getData()
