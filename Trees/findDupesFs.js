const fs = require('fs')

const findDupes = (directory) => {
  const stack = [directory];
  const files = {};
  while (stack.length) {
    const path = stack.pop();
    const stat = fs.statSync(path);
    if (stat.isDirectory()) {
      fs.readdirSync(path).forEach(p => stack.push(path + "/" + p));
    } else {
      const data = fs.readFileSync(path)
      const time = stat.mtime
      if (files[data]) files[data].push({path, time});
      else files[data] = [{path, time}];
    }
  }
  return Object.values(files).map(pair => pair.sort((a, b) => b.time - a.time).map(dupe => dupe.path));
}

console.log(findDupes('root'))