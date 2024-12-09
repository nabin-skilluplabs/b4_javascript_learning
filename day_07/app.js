const pencil = {
  length: '1.5 incles',
  shape: 'hexagnol',
  diameter: '1/4 inch',
  write: function () {
    console.log('This pencil is writing something');
  },
  erase: function () {},
  sharpen: function () {},
};

pencil.length = '2 inches';
pencil.draw = function () {
  console.log('I am drawing something...');
};

const newPencil = { ...pencil };

// Creating Objects
// 1. Using object literal
// 2. Using the new keyword (Constructor function)
// 3. Using Object.create()
// 4. Using Class

const student = {
  firstName: 'Alex',
  lastName: 'Lee',
  email: 'alex_lee@gmail.com',
  enroll: function () {
    console.log('Got enrolled in the program');
  },
  changeEmail: function () {
    this.email = 'alex_lee_changed@gmail.com';
  },
};

const student2 = {
  firstName: 'Donald',
  lastName: 'Trump',
  email: 'donald.trump@gmail.com',
  enroll: function () {
    console.log('Got enrolled in the program');
  },
  changeEmail: function () {
    this.email = 'donald_trump_changed@gmail.com';
  },
};

const student3 = Object.create({});
student3.firstName = 'Chris';
student3.lastName = 'Lee';

const student4 = {};
student4.firstName = 'Jacky';
student4.lastName = 'Lee';

// Constructor function
function Student(firstName, lastName, email) {
  this.firstName = 'Mr/Mrs ' + firstName;
  this.lastName = lastName;
  this.email = email;

  this.enroll = function () {
    console.log('Got enrolled in the program');
  };

  this.changeEmail = function () {
    this.email = `${this.firstName.toLowerCase()}_${this.lastName.toLowerCase()}_changed@gmail.com`;
  };
}

const student_a = new Student('Alex', 'Lee', 'alex_lee@gmail.com');
const student_b = new Student('Bob', 'Marly', 'alex_lee@gmail.com');
const student_c = new Student('Charlie', 'Mongor', 'charlie_mongor@gmail.com');
const student_d = new Student();
student_d.firstName = 'Donald';
student_d.lastName = 'Trump';
student_d.email = 'd.t@gmail.com';

class StudentObject {
  constructor(firstName, lastName, email) {
    this.firstName = 'Mr/Mrs ' + firstName;
    this.lastName = lastName;
    this.email = email;
  }

  enroll() {
    console.log('Got enrolled in the program');
  }

  changeEmail() {
    this.email = `${this.firstName.toLowerCase()}_${this.lastName.toLowerCase()}_changed@gmail.com`;
  }
}

const student_i = new StudentObject('Iver', 'John', 'iver_john@gmail.com');
const student_ii = new StudentObject('Iver', 'John', 'iver_john@gmail.com');

class Supervisor {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class Thesis {
  constructor(
    title,
    status,
    school,
    topicAreas,
    topicType,
    preRequisites,
    description,
    supervisor,
    assessor
  ) {
    this.title = title;
    this.status = status;
    this.school = school;
    this.topicAreas = topicAreas;
    this.topicType = topicType;
    this.preRequisites = preRequisites;
    this.description = description;
    this.attachments = 'N/A';
    this.cacancies = 1;
    this.supervisor = supervisor;
    this.coSupervisor = null;
    this.assessor = assessor;
    this.teamApplication = 'Not Allowed';
    this.lastModified = new Date();
  }
}

const allThesis = [
  new Thesis(
    'Smart Home',
    'Available',
    'Computer Science and Engineering',
    ['Artificial Intelligence (AI)', 'RoboticsNatural Language', 'Processing'],
    'R & D',
    'DN averge',
    `An intelligent environment is a location (e.g. home, office, hospital, etc) that is equipped with sensors, actuators and computers that are networked with each other and the internet. The components are controlled by  intelligent agent  software that knows the preferences of the occupants and tailors the environment to suit them. The occupants can talk to the environment using speech and natural language and the sensors can monitor the environment. Applications of this technology include creating an assistive environment for elderly or disabled people to help them control devices around the house, remind them to take medication, monitor them for falls or other accidents and so on.
      This project offers students the opportunity to work on many different aspects of the intelligent environment, including computer vision; user interfaces, including speech and gesture recognition; intelligent agents and networking.  
      `,
    new Supervisor('Claude Sammut', 'claude@cse.unsw.edu.au'),
    new Supervisor('Maurice Pagnucco', 'morri@unsw.edu.au')
  ),
  new Thesis(
    'Large Language Models for General Game-Playing AI',
    'Available',
    'Computer Science and Engineering',
    ['Artificial Intelligence (AI)'],
    'R & D',
    'COMP3411 Artificial Intelligence',
    `
      General problem-solving systems can understand descriptions of new tasks and solve them without human intervention. ChatGPT is one example, but more challenging AI systems with general intelligence include general game players. These can learn to play previously unknown games given nothing but their rules. General problem solvers have been identified as a Grand Challenge of AI, drawing from a variety of sub-disciplines, including Knowledge Representation, Reasoning, Search, and Learning.

      Existing general game-playing systems understand new games when they are given in a formal game description language. A much more user-friendly input would use natural language to describe a game, in much the same way that automated programming assistants like Github Copilot or ChatGPT can turn a problem specification in English into a correct computer program. This project is concerned with the development of a framework for learning to map game descriptions in natural language into syntactically valid and semantically correct game descriptions in a formal game description language.

      If successful, this research could be published in a high-profile conference or journal.
    `,
    new Supervisor('Michael Thielscher', 'z3343107@unsw.edu.au'),
    new Supervisor('Alan Blair', 'a.blair@unsw.edu.au')
  ),
  new Thesis(
    'Smart Home',
    'Available',
    'Computer Science and Engineering',
    ['Artificial Intelligence (AI)', 'RoboticsNatural Language', 'Processing'],
    'R & D',
    'DN averge',
    `An intelligent environment is a location (e.g. home, office, hospital, etc) that is equipped with sensors, actuators and computers that are networked with each other and the internet. The components are controlled by  intelligent agent  software that knows the preferences of the occupants and tailors the environment to suit them. The occupants can talk to the environment using speech and natural language and the sensors can monitor the environment. Applications of this technology include creating an assistive environment for elderly or disabled people to help them control devices around the house, remind them to take medication, monitor them for falls or other accidents and so on.
      This project offers students the opportunity to work on many different aspects of the intelligent environment, including computer vision; user interfaces, including speech and gesture recognition; intelligent agents and networking.  
      `,
    new Supervisor('Claude Sammut', 'claude@cse.unsw.edu.au'),
    new Supervisor('Maurice Pagnucco', 'morri@unsw.edu.au')
  ),
  new Thesis(
    'Large Language Models for General Game-Playing AI',
    'Available',
    'Computer Science and Engineering',
    ['Artificial Intelligence (AI)'],
    'R & D',
    'COMP3411 Artificial Intelligence',
    `
      General problem-solving systems can understand descriptions of new tasks and solve them without human intervention. ChatGPT is one example, but more challenging AI systems with general intelligence include general game players. These can learn to play previously unknown games given nothing but their rules. General problem solvers have been identified as a Grand Challenge of AI, drawing from a variety of sub-disciplines, including Knowledge Representation, Reasoning, Search, and Learning.

      Existing general game-playing systems understand new games when they are given in a formal game description language. A much more user-friendly input would use natural language to describe a game, in much the same way that automated programming assistants like Github Copilot or ChatGPT can turn a problem specification in English into a correct computer program. This project is concerned with the development of a framework for learning to map game descriptions in natural language into syntactically valid and semantically correct game descriptions in a formal game description language.

      If successful, this research could be published in a high-profile conference or journal.
    `,
    new Supervisor('Michael Thielscher', 'z3343107@unsw.edu.au'),
    new Supervisor('Alan Blair', 'a.blair@unsw.edu.au')
  ),
];

const thesisWrapper = document.getElementById('thesis-wrapper');
thesisWrapper.innerHTML = allThesis
  .map((thesis) => {
    return `<div class='thesis-row'>
    <h2>${thesis.title}</h2>
    <div>Status: ${thesis.status}</div>
    <div>School: ${thesis.school}</div>
    <div>Topic Area(s): ${thesis.topicAreas.join(', ')}</div>
    <div>Description: ${thesis.description}</div>
  </div>`;
  })
  .join('');
