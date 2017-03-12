// document.querySelector('#addList').addEventListener('click', function(e) {
//     var removeTarget = e.target.parentNode;
//     removeTarget.parentNode.removeChild(removeTarget);
//  				}, false);


function add(){
	var textInput = document.getElementById("textArea").value;
	var ul = document.getElementById("addList");
	var elemNo = ul.childElementCount;

	var currList = ul.innerHTML;
	
	var lineAdd = `<li><textarea style="width:50px;height:50px;border: 2px solid blue">${textInput}</textarea><button type="button" class="delete">Delete</button></li>`;
	
	ul.innerHTML = currList + lineAdd;

}


function delCard(e) {
	if (e.target.className == 'delete')
	{
		e.target.parentNode.remove();
	}
}

document.getElementById("createBtn").addEventListener("click", add);
document.body.addEventListener("click", delCard);


