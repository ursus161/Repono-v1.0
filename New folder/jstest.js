//sheet de java script pt teste inainte de a fi modificata aplicatia main

let myLeads = []
const ulEl = document.getElementById('ul-el')
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const deleteBtn = document.getElementById('delete-btn')
const tabButton = document.getElementById('tab-btn')

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

tabButton.addEventListener('click',function(){

  chrome.tabs.query({active:true , currentWindow : true}, function(tabs){
      myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))

  render(myLeads)
  })
})



function render(leads){
  let listItmes=""

  for ( let i = 0 ; i< leads.length; i++){
  listItmes +=  
  `<li>
        <a target='_blank' href=' ${leads[i]}'>
        ${leads[i]} 
       </a>
  </li>`
  }
  ulEl.innerHTML=listItmes;
  
  }

deleteBtn.addEventListener('dblclick', function(){

localStorage.clear()
myLeads = []

render(myLeads);

})

inputBtn.addEventListener('click', function(){ 
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads); 

})


