// creting the observer for DOM change
var observerOptions = {
	subtree: true,
	attributes: true
};
var observer = new MutationObserver(clickSkipAd);

// enabling and disabling the observer based on the skipAd flag stored
chrome.storage.sync.get("skipAd").then((result) => {
	isSkipEnabled = result.skipAd;
	if (isSkipEnabled != null)
	{
		if (isSkipEnabled)
		{
			observer.observe(document, observerOptions);
		}
		else
		{
			observer.disconnect();
		}
	}
});

// enabling and disabling the observer based on the skipAd flag changed
chrome.storage.onChanged.addListener((changes, area) => {
	if (area === "sync")
	{
		if (changes.skipAd.newValue)
		{
			observer.observe(document, observerOptions);
		}
		else
		{
			observer.disconnect();
		}
	}
});

// this is the function that is called when DOM is changed or modified
function clickSkipAd(mutation, observer)
{
	var skipAddElement = document.evaluate("//*[contains(text(), 'Skip Ad')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	if (skipAddElement != null)
	{
		skipAddElement.click();
	}
}