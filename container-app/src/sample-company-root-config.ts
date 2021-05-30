import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@sample-company/navbar",
  app: () => System.import("@sample-company/navbar"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@sample-company/sample-module",
  app: () => System.import("@sample-company/sample-module"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
