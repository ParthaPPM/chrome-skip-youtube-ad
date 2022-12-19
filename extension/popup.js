var skipAdElement = document.getElementById("skip-ad");

// storing the value when the checkbox is checked or un-checked
skipAdElement.addEventListener("change", () => {
	chrome.storage.sync.set({skipAd: skipAdElement.checked});
});

// checking or un-checking the checkbox according the stored data
chrome.storage.sync.get("skipAd").then((result) => {
	isSkipEnabled = result.skipAd;
	if (isSkipEnabled != null)
	{
		skipAdElement.checked = isSkipEnabled;
	}
});