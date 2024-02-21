export default function getImgUrl(path) {
  return new URL(`../assets/${path.replace(/^\//, "")}`, import.meta.url).href;
}
