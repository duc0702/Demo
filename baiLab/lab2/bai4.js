const theList = ["Lauren", "Kevin", true, 35, null, undefined, ["one", "two"]];
theList.splice(0, 1);
theList.splice(-1, 1);
theList.splice(0, 0, "FIRST");
theList.splice(4, 0, "hello world");
theList.splice(3, 0, "middle");
theList.splice(-1, 0, "LAST");
console.log(theList);
