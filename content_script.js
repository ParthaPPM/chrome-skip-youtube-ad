// creting the observer for DOM change
var observer = new MutationObserver(clickSkipAd).observe(document, {
	subtree: true,
	attributes: true
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