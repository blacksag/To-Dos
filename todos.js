var todoList = {
	
	todos : [],

	// displayTodos : function() {										//for displaying in console
	// 	if (this.todos.length === 0) {
	// 		console.log('Your todo list is empty!')
	// 	}
	// 	else {
	// 		console.log('My todos :');
	// 		for (var i = 0; i < this.todos.length; i++) {
	// 			if (this.todos[i].completed === true) {
	// 				console.log('(x) ',this.todos[i].todoText);
	// 			}
	// 			else {
	// 				console.log('( ) ',this.todos[i].todoText);
	// 			}
	// 		}
	// 	}
	// },
	
	addTodos : function(todoText) {
		this.todos.push({
			todoText : todoText,
			completed : false
		});
	},
	
	changeTodos : function(position,todoText) {
		var todo = this.todos[position];
		todo.todoText = todoText;
	},
	
	deleteTodos : function (position) {
		this.todos.splice(position,1);
	},

	toggleCompleted : function (position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
	},

	toggleAll : function () {
		var totalTodos = this.todos.length;
		var completedTodos = 0;

		//get number of completed todos
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}

		//if everything is true make everything false
		if (completedTodos === totalTodos) {
			for(var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
		}
		//otherwise make all true
		else {
			for(var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
		
	}
};

var handler = {
	size : 0,

	displayTodos : function() {
		view.displayTodos();
	},
	
	addTodos : function() {
		var todoAddTextInput = document.getElementById('todoAddTextInput');
		if (todoAddTextInput.value === '') {
			this.emptyHandler();
		}
		else {
			todoList.addTodos(todoAddTextInput.value);
			todoAddTextInput.value = '';
			this.size++;
			this.displayTodos();
		}
	},

	changeTodos : function() {
		var todoChangePositionInput = document.getElementById('todoChangePositionInput');
		var todoChangeNameInput = document.getElementById('todoChangeNameInput');
		var inputValue = todoChangePositionInput.valueAsNumber;
		if (todoChangePositionInput.value === '' || todoChangeNameInput.value === '') {
			this.emptyHandler();
		}
		else if (inputValue >= this.size || inputValue < 0) {
			this.indexHandler(this.size);
		}
		else {
			todoList.changeTodos(inputValue,todoChangeNameInput.value);
			todoChangePositionInput.value = '';
			todoChangeNameInput.value = '';
			this.displayTodos();
		}
	},

	deleteTodos : function() {
		var todoDeletePositionInput = document.getElementById('todoDeletePositionInput');
		var inputValue = todoDeletePositionInput.valueAsNumber;
		if (todoDeletePositionInput.value === '') {
			this.emptyHandler();
		}
		else if (inputValue >= this.size || inputValue < 0) {
			this.indexHandler(this.size);
		}
		else {
			todoList.deleteTodos(inputValue);
			todoDeletePositionInput.value = '';
			this.size--;
			this.displayTodos();
		}
	},

	toggleCompleted : function() {
		var todoTogglePositionInput = document.getElementById('todoTogglePositionInput');
		var inputValue = todoTogglePositionInput.valueAsNumber;
		if (todoTogglePositionInput.value === '' ) {
			this.emptyHandler();
		}
		else  if (inputValue >= this.size || inputValue < 0) {
			this.indexHandler(this.size);
		}
		else 
		{
			todoList.toggleCompleted(todoTogglePositionInput.valueAsNumber);
			todoTogglePositionInput.value = '';
			this.displayTodos();
		}
	},
	
	toggleAll : function() {
		todoList.toggleAll();
		this.displayTodos();
	},

	emptyHandler : function() {
		window.alert("Enter some value!");
	},

	indexHandler : function (s) {
		window.alert("Index out of size!\n" + s + " is the maximum size!!");
	}
};

// var myButton = document.getElementById('myButton');

// myButton.addEventListener('click',function() {
// 	var todoTextInput = document.getElementById('todoTextInput');
// 	console.log(todoTextInput.value);
// });


var view = {
	displayTodos : function() {
		var todosUl = document.querySelector('ul');
		var size = todoList.todos.length;
		todosUl.innerHTML = '';
		for (var i = 0; i<size; i++) {
			var todo = todoList.todos[i];
			var todoLi = document.createElement('li');
			var todoText = '';
			if (todo.completed === true) {
				todoText = '(x) ' + todo.todoText;
			}
			else {
				todoText = '( ) ' + todo.todoText;
			}
			todoLi.textContent = todoText;
			todosUl.appendChild(todoLi);
		}
	}
};