const messages: any[] = [
  {
    msg: `Hello guys! My name is Chris and I'm a french software engineer.`,
    date: new Date(),
  },
  {
    msg: `Hello guys! My name is Chris and I'm a french software engineer.`,
    date: new Date(),
  },
  {
    msg: `Hello guys! My name is Chris and I'm a french software engineer.`,
    date: new Date(),
  },
  {
    msg: `Hello guys! My name is Chris and I'm a french software engineer.`,
    date: new Date(),
  },
  {
    msg: `Hello guys! My name is Chris and I'm a french software engineer.`,
    date: new Date(),
  },
  {
    msg: `Hello guys! My name is Chris and I'm a french software engineer.`,
    date: new Date()
  }
];

for (const m in messages) {
  messages[m].id = m+1;
  messages[m].msg += ` -- ${m+1}`;
}

export default messages;