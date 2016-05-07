const size     = 10 * 1024 * 1024; // 10MB
let doneInit   = false;
let fileSystem = null;

function setup() {
  return new Promise((resolve, reject) => {
    if (doneInit) {
      resolve({ fs: fileSystem });
    } else {
      window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
      window.webkitStorageInfo.requestQuota(window.PERSISTENT, size, (grantedSize) => {
        window.requestFileSystem(window.PERSISTENT, grantedSize, (fs) => {
          console.log('SETUP FS:', fs);
          doneInit   = true;
          fileSystem = fs;
          resolve({ fs });
        }, reject);
      }, reject);
    }
  });
}

function openFile(fs, fileName) {
  return new Promise((resolve, reject) => {
    fs.root.getFile(fileName, { create: true }, (file) => {
      console.log('OPEN FILE:', file);
      resolve({ fs, file });
    }, reject);
  });
}

function openFileWriter(fs, file) {
  return new Promise((resolve, reject) => {
    file.createWriter((writer) => {
      console.log('FILE WRITER:', writer);
      resolve({ fs, file, writer });
    }, reject);
  });
}

export function appendLine(textLine) {
  return new Promise((resolve, reject) => {
    setup()
      .then(({ fs })               => openFile(fs, 'inbox.txt'))
      .then(({ fs, file })         => openFileWriter(fs, file))
      .then(({ fs, file, writer }) => {
        writer.seek(writer.length);
        const blob = new Blob([textLine], { type: 'text/plain' });
        writer.write(blob);
      })
      .then(resolve, reject)
      .catch(reject);
  });
}
