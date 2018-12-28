const today = new Date();

const messages: any[] = [
  {
    msg: `From 2014 November to ${today.getFullYear()}, at <a href="www.frequentiel.com" target="_tab">Frequentiel</a>, I was the Solution Architect of Mobile team. So my role was to :<br/><br/>
     - Create the mobile application product customizable for customers<br/>
     - Manage mobile team (3 to 6 people)<br/>
     - Act as Team Mobile Scrum Master<br/>
     - Controle new features development impacts<br/>
     - Exchange with Product Owner and the final customer<br/>
     - Formed support team about the mobile application<br/>
     - Design mobile application (architecture)<br/>
     - Be the functional bridge between the PO and the mobile team<br/>
     - Check code quality (not enough I've would like)<br/>
     - And so many things again, because your job title is not what is when your company is growing from scratch<br/>`,
    date: new Date(),
  },
  {
    msg: `I love working on projects that involve many specialities and people from differents skills. Because U don't stop learning and everyday there are new challenges to face on.`,
    date: new Date(),
  },
  {
    msg: `During these years we used Cordova framework that helped us to be flexible and more reactive to respond to our customers offers. Cordova is very cool, but when U want deal with big volume data on the mobile device
    the best way still is the native side. Somewhere Cordova gave me the ability to stay tune on native part by developing so many shareware plugin through Android, iOs and Windows Phone (when it was on the rank)`,
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