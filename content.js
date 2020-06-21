chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
	let paragraphs = document.getElementsByTagName("p");
	for(elt of paragraphs)
	{
		elt.style['background-color'] = message.input;
	}
});