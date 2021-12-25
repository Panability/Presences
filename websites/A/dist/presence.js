const presence = new Presence({
    clientId: "924198999806857236"
}), browsingStamp = Math.floor(Date.now() / 1000);
let user, title, replace, search;
presence.on("UpdateData", async () => {
    const presenceData = {
        largeImageKey: "audiblelogo"
    };
    presenceData.startTimestamp = browsingStamp;
    if (document.location.pathname === "/audible.com")
        presenceData.details = "Viewing Audible homepage";
    else if (document.querySelector(".firstHeading") !== null) {
        presenceData.details = "Viewing page:";
        presenceData.state = document.querySelector(".firstHeading").textContent;
    }
    if (!presenceData.details) {
        presence.setTrayTitle();
        presence.setActivity();
    }
    else
        presence.setActivity(presenceData);
});
