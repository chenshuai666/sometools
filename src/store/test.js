let time = 0;
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    time += 500;
    console.log(i, time);
  }, time);
}
