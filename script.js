
let canvas = document.querySelector(".right-side");
let addImage = document.getElementById("add-img");
let addHeading = document.getElementById("add-heading");
let addText = document.getElementById("add-text");
let savebtn = document.getElementById("save");
let delAllBtn = document.getElementById("DeleteAll");

addText.addEventListener('click', ()=>{
    let div = document.createElement("div");
    div.classList.add("block");
let p = document.createElement("p");
  p.innerText = "Edit-text";
  p.contentEditable = true;

  let Deletebtn = document.createElement("button");
       Deletebtn.innerText = "Delete";
       Deletebtn.classList.add("Delete");

  Deletebtn.addEventListener("click", ()=>{
      div.remove();
  })
  
  div.appendChild(p)
  div.appendChild(Deletebtn);
  canvas.appendChild(div);
});

addHeading.addEventListener('click', ()=>{
    let div = document.createElement("div");
       div.classList.add("block");
let h1 = document.createElement("h1");
  h1.innerText = "Heading";
  h1.contentEditable = true;

  let Deletebtn = document.createElement("button");
       Deletebtn.innerText = "Delete";
       Deletebtn.classList.add("Delete");

  Deletebtn.addEventListener("click", ()=>{
      div.remove();
  })
  
  div.appendChild(h1);
  div.appendChild(Deletebtn);
  canvas.appendChild(div);
});

addImage.addEventListener('click', ()=>{
    let url = prompt("Enter your Image URL");
    if(!url)return;
    let div = document.createElement("div");
   div.classList.add("block");
    let img = document.createElement("img");
   img.src = url;

   img.onerror = ()=>{
      alert("Invalid image URL");
   };

   let Deletebtn = document.createElement("button");
       Deletebtn.innerText = "Delete";
       Deletebtn.classList.add("Delete");

  Deletebtn.addEventListener("click", ()=>{
      div.remove();
  })
  
  
  div.appendChild(img);
  div.appendChild(Deletebtn);
  canvas.appendChild(div);
  img.style.width = "500px";
});


savebtn.addEventListener('click', ()=>{
      localStorage.setItem("data",canvas.innerHTML);
      alert("Saved Successfully ✅")
})

delAllBtn.addEventListener("click", ()=>{
       let con = confirm("Are you sure!");
        if(con){
         canvas.innerHTML = "";
         localStorage.removeItem("data");
        }
   })


window.addEventListener("load", ()=>{
 let savedData = localStorage.getItem("data");
   if(savedData){
     canvas.innerHTML = savedData;
   }
});



new Sortable(canvas, {
     animation: 150
});




