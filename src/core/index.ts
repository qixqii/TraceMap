const publicPrefix = "[TM]";
const getTime = () => {
  return new Date().toLocaleTimeString();
}
const showLog = () => {
  const flag = localStorage.getItem("TraceMap");
  return flag === "true";
};




/**
 * @param args any[]
 * @returns void
 */
console.info = (...args: any[]) => {
  if (!showLog()) return;
  console.log(
    `${publicPrefix} %c[ ${getTime()} ] [I] %c`,
    "color: #3297fc; padding: 2px;",
    "color: #3297fc; font-size: 23px;",
    ...args
  );
}

console.method = (...args: any[]) => {
  if (!showLog()) return
  console.log(
    `${publicPrefix} %c[ ${getTime()} ] [M] %c󰡱`,
    "color: #8300ff; padding: 2px;",
    "color: #8300ff; font-size: 23px;",
    ...args
  );
}

console.obj = (...args: any[]) => {
  if (!showLog()) return
  console.log(
      `${publicPrefix} %c[ ${getTime()} ] [O] %c󰘦`,
      "color: #ff5f00; padding: 2px; ",
      "color: #ff5f00; font-size: 23px;",
      ...args.map((obj) => JSON.parse(JSON.stringify(obj)))
  );
}

console.error = (...args: any[]) => {
  if (!showLog()) return;
  console.log(
    `${publicPrefix} %c 这是一个大大的提示!`,
    "color: #6670EE; font-size: 88px;text-shadow: -1px -1px 0 #000,  1px -1px 0 #000, -1px  1px 0 #000,1px  1px 0 #000; "
  );
  console.log(
    `${publicPrefix} %c[ ${getTime()} ] [E] %c `,
    "color: red; padding: 2px;",
    "color: red; font-size: 15px;",
    ...args
  );
}
