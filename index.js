var input = document.getElementById("todoInput");
var list = document.getElementById("list");


function add() {

     if(input.value == false) {
    alert("please add your todo!")

     } else {
     list.innerHTML += `<li class="lists" onclick="remove(this)">${input.value} <button class="cut">CUT</button></li>`
     input.value = "";

     }
   
    }

    function clearAll() {
      list.innerHTML = ""
    }

    function remove(cut) {
        cut.style.display = "none"

    }
    