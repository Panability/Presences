const presence = new Presence({
    clientId: "924198999806857236"
  }),
  browsingStamp = Math.floor(Date.now() / 1000);
let title: HTMLElement, search: HTMLElement;

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "audiblelogo"
  };
  presenceData.startTimestamp = browsingStamp;

  if (
    document.location.pathname === "/" ||
    document.location.pathname === "/home/"
  ) {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Viewing home page";
  } else if (document.location.pathname.includes("/Library")) {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Viewing the Audiobook Library";
  } else if (document.location.pathname.includes("/Wish-list")) {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Viewing the wish list";
  } else if (document.location.pathname.includes("/Browse")) {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Browsing books";
  } else if (document.location.pathname.includes("/member-benefits")) {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Viewing the Member Benefits";
  } else if (document.location.pathname.includes("/gifts")) {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Viewing gifts";
  } else if (document.location.pathname.includes("/help")) {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Viewing help";
  } else if (document.location.pathname.includes("/sub/")) {
    title = document.querySelector(
      "body > main > div > div > div.box-info.trending > div > h1"
    );
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Viewing:";
    presenceData.state = title.innerText;
  } else if (document.location.pathname.includes("/lib/All-titles/")) {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Viewing All Titles";
  } else if (document.location.pathname.includes("/lib/Finished/")) {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Viewing Finished Titles";
  } else if (document.location.pathname.includes("/lib/Unfinished/")) {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Viewing Unfinished Titles";
    // } else if (document.location.pathname.includes("/cat/Movies/")) {
    //   presenceData.startTimestamp = browsingStamp;
    //   presenceData.details = "Viewing Movies Torrents";
    // } else if (document.location.pathname.includes("/cat/Music/")) {
    //   presenceData.startTimestamp = browsingStamp;
    //   presenceData.details = "Viewing Music Torrents";
    // } else if (document.location.pathname.includes("/cat/Other/")) {
    //   presenceData.startTimestamp = browsingStamp;
    //   presenceData.details = "Viewing Other Torrents";
    // } else if (document.location.pathname.includes("/cat/TV/")) {
    //   presenceData.startTimestamp = browsingStamp;
    //   presenceData.details = "Viewing TV Torrents";
    // } else if (document.location.pathname.includes("/cat/XXX/")) {
    //   presenceData.startTimestamp = browsingStamp;
    //   presenceData.details = "Viewing XXX Torrents";
    // } else if (document.location.pathname.includes("/upload")) {
    //   presenceData.startTimestamp = browsingStamp;
    //   presenceData.details = "Uploading something...";
    // } else if (document.location.pathname.includes("/rules")) {
    // presenceData.startTimestamp = browsingStamp;
    // presenceData.details = "Reading the rules";
    // presenceData.smallImageKey = "reading";
  } else if (document.location.pathname.includes("/contact")) {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Writing to the Customer Service";
    presenceData.smallImageKey = "Writing";
  } else if (document.location.pathname.includes("/cart")) {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Checking out";
    presenceData.smallImageKey = "Purchasing";
  } else if (document.location.pathname.includes("/extra-credits/")) {
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Viewing Extra Credits:";
    title = document.querySelector(
      "body > main > div > div > div > div.box-info-heading.clearfix > h1"
    );
    presenceData.state = title.innerText;
  } else if (document.location.pathname.includes("/search")) {
    search = document.querySelector(
      "body > main > div > div > div > div.box-info-heading.clearfix > h1 > span"
    );
    presenceData.startTimestamp = browsingStamp;
    presenceData.details = "Searching for:";
    presenceData.state = search.innerText;
    presenceData.smallImageKey = "search";
  }

  if (!presenceData.details) {
    presence.setTrayTitle();
    presence.setActivity();
  } else presence.setActivity(presenceData);
});
