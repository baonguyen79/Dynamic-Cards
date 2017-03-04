// document.querySelector('#addList').addEventListener('click', function(e) {
//     var removeTarget = e.target.parentNode;
//     removeTarget.parentNode.removeChild(removeTarget);
//  				}, false);


function add(){
	var textInput = document.getElementById("textArea").value;
	var ul = document.getElementById("addList");
	var elemNo = ul.childElementCount;

	var currList = ul.innerHTML;
	var lineAdd = `<li><textarea style="width:50px;height:50px;border: 2px solid blue">${textInput}</textarea><button type="button" id="li${elemNo}">Delete</button></li>`;
	// var lineAdd = `<li><textarea ${textInput}</textarea><button type="button" id="li${elemNo}">Delete</button></li>`;
	ul.innerHTML = currList + lineAdd;
	var lii = `li${elemNo}`;
	var a = document.getElementById(`li${elemNo}`);
	a.addEventListener("click", function(e) {
		this.parentNode.remove(e);})

}

document.getElementById("createBtn").addEventListener("click", add);
