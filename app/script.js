works = [
  { id: 11, name: "Clean the house" },
  {
    id: 12,
    name: "Cook food",
  },
];
function updateUI() {
  clearapp();
  for (let i = 0; i < works.length; i++) {
    let work = makeWorkdiv(works[i]);
    //appendtoapp(work);
  }
}
function clearapp() {
  const app = document.querySelector("#app");
  app.innerHTML = "";
}
function makeWorkdiv(work) {
  //<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  // <label for="vehicle1"> I have a bike</label><br></br>
  const checkinput = document.createElement("input");
  checkinput.setAttribute("type", "checkbox");
  checkinput.setAttribute("class", "checkinput");
  checkinput.setAttribute("id", `check-${work.id}`);
  checkinput.setAttribute("name", `check-${work.id}`);
  checkinput.setAttribute("value", work.name);

//   const checklabel=document.createElement('label')
//   checklabel.setAttribute('for',`check-${work.id}`)
  var labelText = document.createElement("p");
  labelText.htmlFOR=`check-${work.id}`
  labelText.innerHTML = work.name;
  console.log(checkinput);

  const ulwork=document.createElement('ul')
    ulwork.setAttribute('class', 'ulwork')
    ulwork.setAttribute('id', 'ulwork')
  const liwork=document.createElement('li')
  liwork.setAttribute('class','liwork')
  liwork.setAttribute('id',`liwork-${work.id}`)

  liwork.appendChild(checkinput);
  liwork.appendChild(labelText);

  ulwork.appendChild(liwork)

    checkinput.addEventListener('change', function () {
        strikethrough(liwork.id)
    })
   


  const app=document.querySelector('#app')
  app.appendChild(ulwork)
}
function strikethrough(liId) {
    const ulwork = document.querySelector('#ulwork')
    const tostrikeIndex = ulwork.indexOf((t) => t.id == liId)
    ulwork[tostrikeIndex].textDecoration = 'line-through';

}

  

function hookform() {
    const form = document.querySelector("#add-task-form");
    
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let name = document.querySelector("#work-input");
      let namevalue=name.value;
    
      const work= {
        id: new Date().getTime(),
        name:namevalue,
      };
      addWork(work);
      
      refresh();
    });
}
function addWork(work){
    works.push(work);
    savetoLocal();
    updateUI();
}
function refresh(){
    let name = document.querySelector("#work-input")
    name.value=""
    
}
function savetoLocal() {
    const str = JSON.stringify(works);
    localStorage.setItem("my-works-list", str);
  }
  
  function getfromLocal() {
    const str = localStorage.getItem("my-works-list");
    if (!str) {
      return works;
    } else {
      works = JSON.parse(str);
    }
  }

/*let name = document.querySelector("#work-input");
let buttoninput=document.querySelector("#work-input-btn")
name.addEventListener('input', () => {
    if (name.value.length <= 0) {
        buttoninput.disabled = true;
    }
    else {
        buttoninput.disabled = false;
    }
});*/
    
getfromLocal();
updateUI();
hookform();
