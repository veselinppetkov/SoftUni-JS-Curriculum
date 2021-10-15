function requestValidator(obj) {
  const actions = {
    methodValidator(obj) {
      const validMethods = [`GET`, `POST`, `DELETE`, `CONNECT`];
      if (!validMethods.includes(obj["method"]) || obj["method"] == undefined) {
        throw new Error(`Invalid request header: Invalid Method`);
      }
    },
    uriValidator(obj) {
      const pattern = /^[a-zA-Z.0-9]+$/gm;
      if (
        !pattern.test(obj["uri"]) ||
        obj["uri"] == undefined ||
        obj["uri"] == ""
      ) {
        throw new Error(`Invalid request header: Invalid URI`);
      }
    },
    versionValidator(obj) {
      const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
      if (
        !validVersions.includes(obj["version"]) ||
        obj["version"] == undefined
      ) {
        throw new Error(`Invalid request header: Invalid Version`);
      }
    },
    messageValidator(obj) {
      const pattern = /[<>&'"\\]/gm;
      if (pattern.test(obj["message"]) || obj["message"] == undefined) {
        throw new Error(`Invalid request header: Invalid Message`);
      }
    },
  };

  actions.methodValidator(obj);
  actions.uriValidator(obj);
  actions.versionValidator(obj);
  actions.messageValidator(obj);

  return obj;
}

requestValidator({
  method: "POST",
  uri: "home.bash",
  message: "rm -rf /*",
});
