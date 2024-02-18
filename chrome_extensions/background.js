num = Math.floor(Math.random() * 5);

chrome.alarms.onAlarm.addListener(
    () => {
        chrome.notifications.create(
            {
                type: "basic",
                iconUrl: images[num],
                title: "LumosLite",
                message: msgs[num],
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
            delayInMinutes: 1,
            periodInMinutes: 1
        }
    );
}

const msgs = [
    "What a nice day for a walk!",
    "Eat plenty of fruits and vegetables!",
    "Reach out to a friend today",
    "Write down 3 things you're thankful for",
    "It's always a good day to do some exercise"
]

const images = [
    "walking.png",
    "fruit.png",
    "friends.png",
    "heart.png",
    "exercise.png"
]