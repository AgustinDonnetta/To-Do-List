let todos=["Buy New Turtle"];

let input=prompt ("what would u like t do?"); 



    while(input!=="quit"){
    if(input==="list"){ 
        todos.forEach(function(todo){
        console.log(todo);
        });
    } else if(input==="new"){
        var newTodo=prompt ("Enter new todo");
        todos.push(newTodo);
    } else if(input==="delete"){
      var index=prompt ("Enter de index of todo to delete");
        todos.splice(index,1);
        console.log("deleted to do")
    }
    input=prompt("what would u like t do?");
}
console.log("Ok, you quit")

