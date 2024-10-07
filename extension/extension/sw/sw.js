chrome.runtime.onMessageExternal.addListener(async (request, {tab:{id,windowId}}, sendResponse) => {
    console.log('>message',id,windowId);
    sendResponse(await chrome.windows.get(windowId));
    return true;
});