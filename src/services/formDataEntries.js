// службова функція. Консоль-лог не видаляти!
export const formDataEntries = fd => {
  for (const pair of fd.entries()) {
    console.log(`${pair[0]}, ${pair[1]}`);
  }
};
