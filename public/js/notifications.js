requesat_permision = async() => await Notification.requestPermission().then(perm => (perm === 'granted') ? true : false);

console.log(requesat_permision())

function handleNotifications() {
    if (!requesat_permision()) return { permision: 'denied' };

    let notification, interval;
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            const leaveDate = new Date();
            interval = setInterval(() => {
                notification = new Notification("Leaving so soon... Are you coming back ?? ", {
                    body: `You've been gone for ${Math.round((new Date() - leaveDate ) / 1000)} seconds`,
                    tag: "Come back",
                });
            }, 100)
        } else {
            if (interval) clearInterval(interval);
            if (notification) notification.close();
        }
    });
}

handleNotifications();

// ========================================
/*
requesat_permision = async() => await Notification.requestPermission().then(perm => (perm === 'granted') ? true : false);
(function() {if (!requesat_permision()) return { noti_permision: 'denied' };let notification,interval;
document.addEventListener('visibilitychange', () => {if (document.visibilityState === 'hidden') {const leaveDate = new Date();
options = {body: `You've been gone for ${Math.round((new Date() - leaveDate ) / 1000)} seconds`, tag: "Come back"};
interval = setInterval(() =>{notification = new Notification("Leaving so soon... Are you coming back ?? ", options)}, 100)} else {if (interval) clearInt(interval);if (notification) notification.close()}})})();*/