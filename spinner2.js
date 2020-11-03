let timer = 100;
const spinnerAni = (seconds) => {
  let time = seconds * 1000;

  const animation = ['\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
  
  for (timer = 100; timer < time; timer++) {
    
    for (let char of animation) {
      setTimeout(() => {
        process.stdout.write(char);
      }, timer);
      timer += 200;
    }
  }
  setTimeout(() => {
    console.log('\n');
  }, timer + 200);
  return;
};

spinnerAni(5);
