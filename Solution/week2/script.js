let n = 10;

function a(count) {
  console.log({ count });
  setTimeout(() => {
    n -= 1;
    console.log(n);
    if (count > 0) b(count - 1);
  }, 1000);
}

function b(count) {
  console.log({ count });
  setTimeout(() => {
    n -= 1;
    console.log(n);
    if (count > 0) a(count - 1);
  }, 1000);
}

a(n);
