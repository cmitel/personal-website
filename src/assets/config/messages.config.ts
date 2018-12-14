const messages: any[] = [
  {
    msg: `Hello guys! My name is Chris and I'm a french software engineer.`,
    date: new Date(),
  },
  {
    msg: `Hello guys! My name is Chris and I'm a french software engineer.`,
    date: new Date(),
  }
];

for (let m = 0; m < messages.length;  m++) {
  messages[m].id = m+1;
}

export default messages;