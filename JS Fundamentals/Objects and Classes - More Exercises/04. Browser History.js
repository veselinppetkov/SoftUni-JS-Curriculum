function browser(browser, commands) {
  for (let action of commands) {
    let [act, web] = action.split(" ");
    if (act == "Open") {
      browser["Open Tabs"].push(web);
      browser["Browser Logs"].push(action);
    } else if (act == "Close") {
      if (browser["Open Tabs"].includes(web)) {
        let link = browser["Open Tabs"].splice(
          browser["Open Tabs"].indexOf(web),
          1
        );
        browser["Recently Closed"].push(link.join(""));
        browser["Browser Logs"].push(action);
      }
    } else if (act == "Clear") {
      browser["Open Tabs"] = [];
      browser["Recently Closed"] = [];
      browser["Browser Logs"] = [];
    }
  }
  console.log(`${browser["Browser Name"]}`);
  console.log(`Open Tabs: ${browser["Open Tabs"].join(", ")}`);
  console.log(`Recently Closed: ${browser["Recently Closed"].join(", ")}`);
  console.log(`Browser Logs: ${browser["Browser Logs"].join(", ")}`);
}
// browser(
//   {
//     "Browser Name": "Google Chrome",
//     "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//     "Recently Closed": ["Yahoo", "Gmail"],
//     "Browser Logs": [
//       "Open YouTube",
//       "Open Yahoo",
//       "Open Google Translate",
//       "Close Yahoo",
//       "Open Gmail",
//       "Close Gmail",
//       "Open Facebook",
//     ],
//   },
//   ["Close Facebook", "Open StackOverFlow", "Open Google"]
// );
browser(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": [
      "Open Gmail",
      "Close Gmail",
      "Open Dropbox",
      "Open YouTube",
      "Close Dropbox",
    ],
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
