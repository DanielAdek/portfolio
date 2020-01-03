export const ProData = [
  {
    imageSrc: require('../assets/images/DMS.png'),
    title: 'Daniel MartStore',
    text: 'An E-Commerce application that allows users to buy or sell products',
    href: 'https://danielmartstore.surge.sh',
    animate: 'bounce'
  },
  {
    imageSrc: require('../assets/images/FP.png'),
    title: 'Finance Palace',
    text: 'A Micro finance organization that allows users loan lucre as much as posible',
    href: 'https://google.com',
    animate: 'roll'
  },
  {
    imageSrc: require('../assets/images/npm.jpeg'),
    title: 'Form Validation',
    text: 'NPM package for users to validate input fields.',
    href: 'https://www.npmjs.com/package/form-my-simple-validation',
    animate: 'zoom'
  },
  {
    imageSrc: require('../assets/images/RMW.png'),
    title: 'Ride My Way',
    text: 'Easy Transportation Web application that allows drivers and perssengers connect',
    href: 'https://ridemyway-danieladek.herokuapp.com/App/src/markup/index.html',
    animate: 'rotate'
  }
]

export const ChartOptions = {
  animationEnabled: true,
  //exportEnabled: true,
  theme: "light2", //"light1", "dark1", "dark2"
  title: {
    text: "Tech skills chart"
  },
  data: [
    {
      type: "column",
      dataPoints: [
        { label: "HTML5 & CSS3", y: 88 },
        { label: "JavaScript", y: 90 },
        { label: "ReactJS", y: 86 },
        { label: "NodeJS", y: 87 },
        { label: "TypeScript", y: 75 }
      ]
    }
  ]
};

export const SkillData = [
  {
    src: require('../assets/images/html5.png'),
    tech: 'HTML5'
  },
  {
    src: require('../assets/images/css3.png'),
    tech: 'CSS3'
  },
  {
    src: require('../assets/images/bootstrap.png'),
    tech: 'Bootstrap'
  },
  {
    src: require('../assets/images/style-c.png'),
    tech: 'Stypled Components'
  },
  {
    src: require('../assets/images/sass.png'),
    tech: 'SASS'
  },
  {
    src: require('../assets/images/javascript.png'),
    tech: 'JavaScript'
  },
  {
    src: require('../assets/images/jquery.png'),
    tech: 'JQuery'
  },
  {
    src: require('../assets/images/react.png'),
    tech: 'ReactJS'
  },
  {
    src: require('../assets/images/Ts.png'),
    tech: 'TypeScript'
  },
  {
    src: require('../assets/images/redux.png'),
    tech: 'Redux'
  },
  {
    src: require('../assets/images/cordova.png'),
    tech: 'Cordova'
  },
  {
    src: require('../assets/images/node.png'),
    tech: 'NodeJS'
  },
  {
    src: require('../assets/images/mongodb.png'),
    tech: 'MongoDB'
  },
  {
    src: require('../assets/images/postgres.png'),
    tech: 'PostgreSQL'
  },
  {
    src: require('../assets/images/firebase.png'),
    tech: 'Firebase'
  },
  {
    src: require('../assets/images/aws.png'),
    tech: 'AWS'
  },
  {
    src: require('../assets/images/github.png'),
    tech: 'Git & Github'
  },
  {
    src: require('../assets/images/webpack.png'),
    tech: 'Webpack'
  },
  {
    src: require('../assets/images/swagger.png'),
    tech: 'Swagger'
  },
  {
    src: require('../assets/images/tdd.png'),
    tech: 'TDD'
  },
]


export const schema = {
  contact: {
    formType: 'contact',
    email: { field: 'email',  required: true, isEmail: true },
    sender: { field: 'name', required: true, isName: true },
    msg: { field: 'message', required: true}
  }
}