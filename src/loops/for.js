for (let i = 1, n = 1; i <= 25; i++) {
  if (i == 1) {
    console.log(i, "  ", n);
    continue;
  } else if (i < 10) {
    console.log(i, "  ", (n += i));
  } else console.log(i, " ", (n += i));
}
