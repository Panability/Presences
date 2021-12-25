const presence = new Presence({
    clientId: "924198999806857236"
  }),
  browsingStamp = Math.floor(Date.now() / 1000);

presence.on("UpdateData", () => {
  const presenceData: PresenceData = {
    largeImageKey: "audiblelogo",
    startTimestamp: browsingStamp
  };
  if (document.location.pathname === "/audible.com")
    presenceData.details = "Viewing Audible homepage";
  else if (document.querySelector(".firstHeading") !== null) {
    presenceData.details = "Viewing page:";
    presenceData.state = document.querySelector(".firstHeading").textContent;
  }
  presence.setActivity(presenceData);
});
