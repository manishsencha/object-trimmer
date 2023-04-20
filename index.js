function trimObject(obj) {
  if (typeof obj == "object") {
    Object.entries(obj).map(([key, value]) => {
      if (typeof value == "object") {
        return trimObject(value);
      } else if (typeof value == "string") {
        obj[key] = value.trim();
      }
    });
  }
  return obj;
}

module.exports = trimObject;
