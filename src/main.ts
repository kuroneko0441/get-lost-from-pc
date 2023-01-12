const keys = require('global-keys');
const keyStream = new keys.KeyStream();
const childProcess = require('child_process');

function lockAndExit() {
  childProcess.execSync('cmd.exe /C rundll32.exe user32.dll, LockWorkStation');
  process.exit(0);
}

keyStream.on('data', () => lockAndExit());
