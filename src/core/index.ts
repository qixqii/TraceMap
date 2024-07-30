const publicPrefix = "[TM]";
const getTime = () => {
  return new Date().toLocaleTimeString();
}
const showLog = () => {
  const flag = localStorage.getItem("TraceMap");
  return flag === "true";
};




/**
 * 
 * @param args any[]
 * @returns void
 * @example 
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

