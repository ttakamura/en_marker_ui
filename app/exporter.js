
let doneInit = false;

function setup() {
  return new Promise((resolve, reject) => {
    const size = 10 * 1024 * 1024; // 10MB
    window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
    // setup
    window.webkitStorageInfo.requestQuota(window.PERSISTENT, size, (grantedSize) => {
      window.requestFileSystem(window.PERSISTENT, grantedSize, (fs) => {
        console.log('SETUP FS:', fs);
        fs.root.getFile('inbox.txt', { create: true }, (dir) => {
          console.log('OPEN FILE:', dir);
          doneInit = true;
          resolve({ fs, dir });
        }, reject);
      }, reject);
    }, reject);
  });
}

export function appendLine(textLine) {
  return new Promise((resolve, reject) => {
    if (doneInit) {
      console.log(textLine);
      resolve();
    } else {
      setup().then(resolve, reject);
    }
  });
}
