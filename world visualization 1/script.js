const f = (val, country,option) => {
  let row = document.createElement("div");
  row.className = "graph-row";


  let name = document.createElement("div");
  if(option===0){
    name.className = "country-label";
  }
  else{
    name.className = "language-label"
  }
  name.innerText = country;

  let bar = document.createElement("div");
  bar.className = "bar";
  if (option===0){
    bar.style.width = (val * 0.00000055) + 'px';
  }
  else{
    bar.style.width = (val * 10) + 'px';
  }

  let value = document.createElement("div");
  value.className = "value-label";
  value.innerText = val.toLocaleString();

  row.append(name);
  row.append(bar);
  row.append(value);

  return row;
};


let obj=countries.reduce((res,val)=>{
    val.languages.forEach((l)=>{
        if(!res[l.toLocaleLowerCase()]){
            res[l.toLocaleLowerCase()]=1
        }
        else{
            res[l.toLocaleLowerCase()]++
        }
    })
    return res
},{})



let languages=document.querySelector(".languages")
languages.addEventListener("click",(event)=>{
    let content=document.querySelector("#content")
    content.innerText="TOP 10 LANGUAGES"
    let graph = document.querySelector("#graph");
    if(!graph.querySelector(".langauge-label")){
        let del=graph.querySelectorAll(".graph-row")
        del.forEach((i)=>{
        graph.removeChild(i)
        })
    }
    if(graph.innerHTML==""){
        let top_langauges=Object.entries(obj)
        top_langauges=top_langauges.sort((a,b)=>b[1]-a[1]).slice(0,10)
        top_langauges.forEach((val)=>{graph.append(f(val[1], val[0],1))}); 
    }// 1 is for langauges
})


let population=document.querySelector(".population")
population.addEventListener("click",(event)=>{
    let content=document.querySelector("#content")
    content.innerText="TOP 10 COUNTRIES"
    let graph = document.querySelector("#graph");
    //console.log(graph)
    if(!graph.querySelector(".country-label")){
        let del=graph.querySelectorAll(".graph-row")
        del.forEach((i)=>{
        graph.removeChild(i)
        })
    }
    if(graph.innerHTML==""){
        let x = countries.sort((p1, p2) => p2.population - p1.population);
        let top_countries = x.slice(0, 10);
        top_countries.forEach((val) => {
        graph.append(f(val.population, val.name,0)); // 0 is for population
    });
    }
})


