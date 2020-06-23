document.addEventListener('DOMContentLoaded', ()=>{
	var b = document.getElementById("change");
	b.addEventListener('click', function() {
		let color = document.getElementById("color").value;
	    chrome.tabs.query({
        currentWindow: true, 
        active: true}, 
        // In this case, there's only one tab, the active one
        (tabs)=> {
            chrome.tabs.sendMessage(tabs[0].id, {input: color})
            });
	});
});