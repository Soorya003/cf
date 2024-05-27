
document.querySelector("button").addEventListener("click",result)

var container=document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.className="row";


async function result(){
    try {
         
        var data = await fetch(`https://cat-fact.herokuapp.com/facts`);
        var res = await data.json();
        console.log(res);
        var col=document.createElement("div");
        col.className="col-lg-4"
        col.innerHTML=`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Facts</h5>
          <p class="card-text">fact1:${res[0].text}</p>
          <p class="card-text">fact2:${res[1].text}</p>
          <p class="card-text">fact3:${res[2].text}</p>
          <p class="card-text">fact4:${res[3].text}</p>
          <p class="card-text">fact5:${res[4].text}</p>
        </div>
      </div>`
      row.append(col);
      container.append(row);
      document.body.append(container);
    } catch (error) {
        console.log(error);
    }
}
