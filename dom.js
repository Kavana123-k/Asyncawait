
window.onload = async () => {

  // document.getElementById("apibtn").onclick = async () => {
  try {

    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    const todolist = document.getElementById("todolist");
    todos.forEach((todo) => {

      const todolst = document.createElement('p');
      todolst.innerText = todo.title;
      todolist.appendChild(todolst);

      //to display the completed list
      if (todo.completed == true) {
        const completdlist = document.getElementById("completedlist");
        const todolst = document.createElement('p');

        todolst.innerText = todo.title;
        completdlist.appendChild(todolst);
      }

      //to display incomplete task
      if (todo.completed == false) {
        const inCompletdlist = document.getElementById("inCompletedlist");
        const todolst = document.createElement('p');

        todolst.innerText = todo.title;
        inCompletdlist.appendChild(todolst);
      }
    });

  }
  catch (e) {
    console.error(e);
    // }
  }
}
