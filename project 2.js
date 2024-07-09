
var text = document.getElementById('text');
var addBtn = document.getElementById('btn');
var todolist = document.getElementById('todo-list');
var removeBtn = document.getElementById('removeBtn');
var updateBtn = document.getElementById('update');
var count = document.getElementById('count');

var inputVariable = ''
text.addEventListener('input',function(e){
 inputVariable =  e.target.value
 console.log()
 
})




function ElementNew (){
    var  NewElement = document.createElement('li') 
    var momo = document.createElement('button')
    momo.innerHTML = 'X'
    momo.className ='momo'

    // var momo = document.createElement('img')
    //    momo.src = './image/20220830_125310.png'
    //    console.log(momo)
    // momo.className ='momo'

    var Newtextnode =  document.createTextNode(inputVariable)
    NewElement.appendChild(Newtextnode)
     NewElement.appendChild(momo)
     NewElement.class ='todo-listClass'
    NewElement.id = ('list Item' + (todolist.childElementCount+1) )
    count.innerHTML = `Todolist Count: ${todolist.childElementCount+1}`
    momo.addEventListener('click',function(){
        todolist.removeChild(this.parentNode)
        if(todolist.childElementCount>0){
            count.innerHTML = `Todolist Count: ${todolist.childElementCount}`
        }else if(todolist.childElementCount<=0){
            count.innerHTML = `Todolist Count: ${todolist.childElementCount}`
        }
            

     
    })
   
    return NewElement

}

function CreatNewelement(){
    
    if(inputVariable !== null & inputVariable !== undefined & inputVariable !== '' ){
   var  NewElement = ElementNew()
   todolist.appendChild(NewElement)
     text.value = ''
     inputVariable =''

}else{
        alert('Please input Todo-list')
    }
    
 
 }

addBtn.addEventListener('click',CreatNewelement)

text.addEventListener('keyup',function(e){
    if(e.keyCode ===13){
       
        CreatNewelement()
        console.log(e.keyCode)
    }
})


removeBtn.addEventListener('click',function(){
    if( todolist.childElementCount > 0){
        var firstChild = todolist.firstElementChild
    todolist.removeChild(firstChild)
    count.innerHTML = `Todolist Count: ${todolist.childElementCount}`
    }else{
        alert('No item in the Todo-list')
    }
    
})



updateBtn.addEventListener('click',function(){
    if(inputVariable !== null && inputVariable!==undefined && inputVariable!=='') {
        if(todolist.childElementCount > 0){
            var FirstElement = todolist.firstElementChild
            var NewElement = ElementNew ()
           todolist.replaceChild(NewElement ,FirstElement)
           count.innerHTML = `Todolist Count: ${todolist.childElementCount}`
           text.value = ''
           inputVariable =''
        }
       
    }else{
        alert('No date to update')
    }
 
})
 

 
