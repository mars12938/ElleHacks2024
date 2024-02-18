chrome.alarms.onAlarm.addListener(
    () => {
        chrome.notifications.create(
            {
                type: "basic",
                iconUrl: "sun.png",
                title: "Lumos",
                message: "Make sure to get some sunlight!",
                silent: false
            },
            () => { }
        )
    },
)
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request);
        if (request.time)
            createAlarm();

        sendResponse(() => {
            return false
        });
    }
);

function createAlarm() {
    chrome.alarms.create(
        {
            delayInMinutes: 2,
            periodInMinutes: 1
        }
    );
}