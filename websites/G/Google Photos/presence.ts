const presence = new Presence({
    clientId: "925204937225416704"
  }),
  browsingTimestamp = Math.floor(Date.now() / 1000);

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
      largeImageKey: "logo",
      startTimestamp: browsingTimestamp
    },
    path = document.location.pathname;
  if (path === "" || path === "/") presenceData.details = "Browsing photos";
  else if (path.startsWith("/memory")) {
    presenceData.details = "Playing back a memory:";
    [presenceData.state] = document.title.split(/-/, 1);
  } else if (path.indexOf("/photo") > -1)
    presenceData.details = "Viewing a photo";
  else if (path.startsWith("/search")) {
    presenceData.details = "Searching for:";
    [presenceData.state] = document.title.split(/-/, 1);
  } else if (path === "/albums") presenceData.details = "Browsing albums";
  else if (path.startsWith("/album")) {
    presenceData.details = "Viewing an album";
    {
      if (await presence.getSetting<boolean>("albumname"))
        [presenceData.state] = document.title.split(/-/, 1);
    }
  } else if (path.startsWith("/archive"))
    presenceData.details = "Viewing the archive";
  presence.setActivity(presenceData);
});
