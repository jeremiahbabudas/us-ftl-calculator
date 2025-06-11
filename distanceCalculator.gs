const md5 = (key = "") => {
  const code = key.toLowerCase().replace(/\s/g, "");
  return Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, key)
    .map((char) => (char + 256).toString(16).slice(-2))
    .join("");
};

const getCache = (key) => {
  return CacheService.getDocumentCache().get(md5(key));
};

const setCache = (key, value) => {
  const expirationInSeconds = 6 * 60 * 60;
  CacheService.getDocumentCache().put(md5(key), value, expirationInSeconds);
};

const GOOGLEMAPS_DISTANCE = (origin, destination, mode = "driving") => {
  if (!origin || !destination) {
    throw new Error("No address specified!");
  }
  if (origin.map) {
    return origin.map(DISTANCE);
  }

  const key = ["distance", origin, destination, mode].join(",");
  const value = getCache(key);
  if (value !== null) return value;

  const { routes: [data] = [] } = Maps.newDirectionFinder()
    .setOrigin(origin)
    .setDestination(destination)
    .setMode(mode)
    .getDirections();
  if (!data) {
    throw new Error("No route found!");
  }
  const { legs: [{ distance: { text: distance } } = {}] = [] } = data;
  setCache(key, distance);

  return distance;
};
