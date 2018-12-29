const today = new Date();

const messages: any[] = [
  {
    msg: `From 2014 November to ${today.getFullYear()}, at <a href="www.frequentiel.com" target="_tab">Frequentiel</a>, I was the Solution Architect of the Mobile team (~ 4 people)`,
    date: new Date(),
  },
  {
    msg: `I developed many mobile applications using Cordova framework that helped us to be flexible and more reactive to respond to our customers offers.`,
    date: new Date(),
  },
  {
    msg: `That was my short business intro ! <i class="fa fa-smile-o color-warning"></i>`,
    date: new Date(),
  },
  {
    msg: `For the personnal intro, I'm living at <a href="https://www.toulouse.fr/" target="_blank">Toulouse, France</a> and I love have my daily workout as much as to go out with my friends !`,
    date: new Date(),
  },
  {
    msg: `So that's all me ! If U want to know about me, just let me know guys ! It will be a pleasure to enjoy a coffee, a lunch, a drink or skype meeting with U ! <br/>See U guy soon ! Thank U to have checked out my website <i class="fa fa-thumbs-up"></i>`,
    date: new Date(),
  }
];

for (let m = 0; m < messages.length;  m++) {
  messages[m].id = m+1;
}

export default messages;