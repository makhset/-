
const tasks = [
    { name: "Таңғы жаттығу", completed: false },
    { name: "Кітап оқу", completed: true },
    { name: "Жұмыстарды жоспарлау", completed: false },
    { name: "Электрондық поштаны тексеру", completed: true },
    { name: "Жүгіру", completed: false }
  ];
  
  function showIncompleteTasks(taskList) {
    const incompleteTasks = taskList.filter(task => !task.completed);
    if (incompleteTasks.length > 0) {
      alert("Орындалмаған тапсырмалар:");
      incompleteTasks.forEach(task => alert(task.name));
    } else {
      alert("Барлық тапсырмалар орындалды!");
    }
  }

  function markTaskAsCompleted(taskList, taskIndex) {
    if (taskIndex >= 0 && taskIndex < taskList.length) {
      taskList[taskIndex].completed = true;
      alert(`\"${taskList[taskIndex].name}\" тапсырмасы орындалды деп белгіленді.`);
    } else {
      alert("Қате: Тапсырма нөмірі дұрыс емес.");
    }
  }
 
  function showCompletedTasks(taskList) {
    const completedTasks = taskList.filter(task => task.completed);
    if (completedTasks.length > 0) {
      console.log("Аяқталған тапсырмалар:");
      completedTasks.forEach(task => console.log(task.name));
    } else {
      console.log("Әлі ешқандай тапсырма аяқталған жоқ.");
    }
  }
  
  showIncompleteTasks(tasks); 
  markTaskAsCompleted(tasks, 0); 
  showCompletedTasks(tasks); 