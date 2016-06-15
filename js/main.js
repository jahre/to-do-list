var x = document.getElementById("playground");
var cd = document.getElementById("code");
var dom = x.getElementsByTagName('div');
var body = document.body;


playground.onclick = function(event) {
  var target = event.target; // где был клик?

  if (target.className === 'btn') {

  		while (target != playground) {
		    if (target.className === 'shell') {
		      addNew(target);
		      //domStructure();
		      valueToContent();
		      target.lastChild.getElementsByTagName('textarea')[0].focus();
		      if(target.firstChild.className === 'closed' || target.firstChild.className === 'opened'){
		      	//do nothing
		      }else{
		      	//add close/open
		      	insertPlus(target);
		      };
		      
		      return;
		    }else{
		    	target = target.parentNode;
			};
	  	};//end while

  }else if (target.className === 'done') {
  		if (target.parentNode.classList.contains('completed'))
		  target.parentNode.classList.remove('completed');
		else{
  			target.parentNode.classList.add('completed');
  		}

  		//this gives value of textarea:
  		//var trest = target.parentNode.getElementsByTagName('textarea')[0].value;
  		//target.parentNode.getElementsByTagName('textarea')[0].innerHTML = target.parentNode.getElementsByTagName('textarea')[0].value;

  }else if (target.className === 'remove') {

  		while (target != playground) {
		    if (target.className === 'shell') {
		    	
		    	var targetToRemove = target;
		    	var closedPlus = target.parentNode.firstChild;

		      if(closedPlus.className === 'closed' && target.parentNode.childNodes.length === 3){
		      	//alert(closedPlus.className);
		      	
		      	removeItem(closedPlus);
		      	//alert(1);
		      }else{
		      	//alert(closedPlus.className);
		      };
		      removeItem(targetToRemove);
		      
		      //domStructure();
		      
		      return;
		    }else{
		    	target = target.parentNode;
			};
	  	};//end while

  }else if (target.className === 'closed') {
  		target.className = 'opened';
  		while (target != playground) {
		    if (target.className === 'shell') {

		      target.style.height = "60px";
		      //target.style.backgroundColor = 'yellow';
		      return;
		    }else{
		    	target = target.parentNode;
			};
	  	};//end while

  }else if (target.className === 'opened') {
  		target.className = 'closed';
  		while (target != playground) {
		    if (target.className === 'shell') {

		      target.style.height = "auto";
		      //target.style.backgroundColor = 'yellow';
		      return;
		    }else{
		    	target = target.parentNode;
			};
	  	};//end while

  }else {
  	 //target.style.backgroundColor = 'yellow';
  	return; 
  };

  

};

function addNew(node) {
  //creating elements
  var shell = document.createElement('div');
  var mince = document.createElement('div');
  
  var textArea = document.createElement('textarea');
  var addBtn = document.createElement('button');
  var doneBtn = document.createElement('button');
  var removeBtn = document.createElement('button');

  //adding classes
  shell.className = "shell";
  mince.className = "mince";
  
  textArea.className = "content";
  addBtn.className = "btn";
  doneBtn.className = "done";
  removeBtn.className = "remove";

  //adding content
  addBtn.innerHTML = "+ Add";
  doneBtn.innerHTML = "Done";
  removeBtn.innerHTML = "Remove";
  //textArea.innerHTML = "Item to do";

  //constructing
  mince.appendChild(textArea);
  mince.appendChild(addBtn);
  mince.appendChild(doneBtn);
  mince.appendChild(removeBtn);
  //shell.appendChild(closeDiv);
  shell.appendChild(mince);
  //node.insertBefore(shell, node.children[1]);
  node.appendChild(shell);

  console.log(x);
  console.log(body);

  


};

function addBaseItem() {
	addNew(playground);
	domStructure();
};

function removeItem(node) {
	node.remove();
	//node.style.backgroundColor = 'red';
};

function domStructure() {
  code.innerHTML = '';
  valueToContent();
  code.appendChild(document.createTextNode(playground.innerHTML));
  //duplicate.innerHTML = playground.innerHTML;
};


function valueToContent() {
  var textareas = playground.getElementsByTagName('textarea');
  //textareas[0].style.backgroundColor = 'red';
  //alert(textareas.length);

  for (i = 0; i < textareas.length; i++) {
  	  //alert(i);
	  textareas[i].innerHTML = textareas[i].value;
	}
};

function importData() {
	playground.innerHTML = importArea.value;
}

function hide(node) {
	playground.innerHTML = importArea.value;
}

function insertPlus(node) {
	var closeDiv = document.createElement('div');
	closeDiv.className = "closed";
	node.insertBefore(closeDiv, node.children[0]);
	//node.appendChild(closeDiv);
}