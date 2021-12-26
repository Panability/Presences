const presence = new Presence({
    clientId: "924198999806857236"
  }),
  browsingStamp = Math.floor(Date.now() / 1000);
let title: HTMLElement, search: HTMLElement;

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "audiblelogo",
    startTimestamp: browsingStamp
  };

  if (
    document.location.pathname === "/" ||
    document.location.pathname === "/home/"
  )
    presenceData.details = "Viewing home page";
  else if (document.location.pathname.includes("/Library"))
    presenceData.details = "Viewing the Audiobook Library";
  else if (document.location.pathname.includes("/Wish-list"))
    presenceData.details = "Viewing the wish list";
  else if (document.location.pathname.includes("/Browse"))
    presenceData.details = "Browsing books";
  else if (document.location.pathname.includes("/member-benefits"))
    presenceData.details = "Viewing the Member Benefits";
  else if (document.location.pathname.includes("/gifts"))
    presenceData.details = "Viewing gifts";
  else if (document.location.pathname.includes("/help"))
    presenceData.details = "Viewing help";
  else if (document.location.pathname.includes("/sub/")) {
    title = document.querySelector(
      "body > main > div > div > div.box-info.trending > div > h1"
    );

    presenceData.details = "Viewing:";
    presenceData.state = title.innerText;
  } else if (document.location.pathname.includes("/lib/All-titles/"))
    presenceData.details = "Viewing All Titles";
  else if (document.location.pathname.includes("/lib/Finished/"))
    presenceData.details = "Viewing Finished Titles";
  else if (document.location.pathname.includes("/lib/Unfinished/"))
    presenceData.details = "Viewing Unfinished Titles";
  else if (document.location.pathname.includes("/contact")) {
    presenceData.details = "Writing to the Customer Service";
    presenceData.smallImageKey = "Writing";
  } else if (document.location.pathname.includes("/cart")) {
    presenceData.details = "Checking out";
    presenceData.smallImageKey = "Purchasing";
  } else if (document.location.pathname.includes("/extra-credits/")) {
    presenceData.details = "Viewing Extra Credits:";
    title = document.querySelector(
      "body > main > div > div > div > div.box-info-heading.clearfix > h1"
    );
    presenceData.state = title.innerText;
  } else if (document.location.pathname.includes("/search")) {
    search = document.querySelector(
      "body > main > div > div > div > div.box-info-heading.clearfix > h1 > span"
    );

    presenceData.details = "Searching for:";
    presenceData.state = search.innerText;
    presenceData.smallImageKey = "search";
  }

  presence.setActivity(presenceData);
});
