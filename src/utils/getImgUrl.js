export default function getImgUrl(path) {
  console.log(path);
  console.log(path.replace(/^\//, ""));

  return new URL(`../assets/${path.replace(/^\//, "")}`, import.meta.url).href;
}
