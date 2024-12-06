const questions = [
  {
    question: "To identify hazards in your surroundings while driving, you should",
    options: ["scan the driving environment regularly", "only keep your eyes directly on the road ahead", "avoid using your rear view mirrors", "tune your radio to receive local traffic information"],
    correctAnswer: 0,
    chapter: "Chapter 5: See - Think - Do",
    source: "Do not overdrive your ability to see. You should always be able to prepare for a potential hazard instead of being taken by surprise.",
    link: `http://www.icbc.com/driver-licensing/Documents/drivers5.pdf`
  },
  {
    question: "On a vehicle with AUTOMATIC transmission, when should the first and second DRIVE (D1, D2) gears be used",
    options: ["when pulling heavy loads or when going up or down very steep hills.", "when exiting a highway.", "when parking your vehicle.", "when it is raining."],
    correctAnswer: 0,
    chapter: "Chapter 2: You and Your Vehicle; Comparing Automatic and Standard Transmissions",
    source: "There are two types of transmissions: automatic and standard. Both control the connection between the engine and the wheels.",
    link: "http://www.icbc.com/driver-licensing/Documents/drivers2.pdf"
  },
  {
    question: "Which of the following is NOT part of the pre-trip check you should do EVERY time you drive?",
    options: ["Check radiator fluid and oil levels.", "Check side and rear view mirrors are properly adjusted.", "Check head rest and seat belts are properly adjusted.", "Check lights and turn signals."],
    correctAnswer: 0,
    chapter: "Chapter 2: You and Your Vehicle; Pre-trip Check.",
    source: "To ensure good maintenance, you need to do a more thorough pre-trip check every few weeks. ",
    link: "http://www.icbc.com/driver-licensing/Documents/drivers2.pdf"
  },
  {
    question: "Seat belts are most effective in preventing injury when",
    options: ["the lap belt and shoulder strap are worn correctly.", "the head rest is fully extended.", "the seat is moved fully forward.", "the seat is tilted back slightly."],
    correctAnswer: 0,
    chapter: "Chapter 2: You and Your Vehicle; Seatbelts",
    source: "Wearing a seatbelt significantly reduces your chance of serious injury or death in a crash.",
    link: "http://www.icbc.com/driver-licensing/Documents/drivers2.pdf"
  },
  {
    question: "As a driver you should",
    options: ["constantly check the sides of the road and all of your mirrors, as well as the road ahead", "carefully watch the car behind you", "carefully watch the car ahead of you", "rarely look in your mirrors"],
    correctAnswer: 0,
    chapter: "Chapter 5: See - Think - Do; Observation",
    source: "It is important that you pay attention to things outside your central vision. Peripheral vision allows you to see more than what is directly in front of you.",
    link: "http://www.icbc.com/driver-licensing/Documents/drivers5.pdf"
  },
  {
    question: "When making a right turn, you should shoulder check to ",
    options: ["make sure a cyclist or other road user is not beside you", "make sure you are in the proper lane", "warn the car behind of your intent to turn", "make sure the car behind you is not too close"],
    correctAnswer: 0,
    chapter: "Chapter 5: See - Think - Do; Observation",
    source: "Whenever you plan a change in direction or road position, do a shoulder check to make sure the blind spot on that side is clear.",
    link: "http://www.icbc.com/driver-licensing/Documents/drivers5.pdf"
  },
  {
    question: "The correct See-Think-Do strategy for the driver of Car A is?",
    options: ["Sees that Car B is close behind; thinks, \"I need more space.\";  slows and  gradually leaves a bigger cushion in front.", "Sees that Car B is close behind; thinks, \"I need to get away.\"; accelerates to leave more space behind.", "Sees there is small gap to the right of Truck C; thinks, \"I can squeeze through there.\"; accelerates and changes lanes.", "Sees that Car B is close behind; thinks, \"I need more space.\"; brakes suddenly to scare driver of Car B."],
    correctAnswer: 0,
    chapter: "Chapter 5:  See - Think - Do",
    source: " it's a good idea to slow down slightly to increase your space in front. This way, if you have to stop, you can stop more gradually ...",
    link: "http://www.icbc.com/driver-licensing/Documents/drivers5.pdf",
    image: "images/q6.png"
  },
  {
    question: "When do you NOT need to make a shoulder check?",
    options: ["When judging your following distance.", "When you pull out from the side of the road.", "When you pull over to the side of the road.", "When you change lanes."],
    correctAnswer: 0,
    chapter: "Chapter 5: See - Think - Do; Observation",
    source: "Whenever you plan a change in direction or road position, do a shoulder check to make sure the blind spot on that side is clear.",
    link: "http://www.icbc.com/driver-licensing/Documents/drivers5.pdf"
  },
  {
    question: "There is a vehicle directly in the blind spot of Car A, which one is it?",
    options: ["Car D", "Car C", "Car B", "Car E"],
    correctAnswer: 0,
    chapter: "Chapter 5: See - Think - Do; Observation",
    source: "Even when your mirrors are properly adjusted, there are large areas that you can't see in your mirrors. These are called blind spots.",
    link: "http://www.icbc.com/driver-licensing/Documents/drivers5.pdf",
    image: "images/q8.png"
  },
  {
    question: "The best way to check for vehicles in the blind spots is by ",
    options: ["looking over your shoulder", "keeping clear of other vehicles", "checking side and rearview mirrors", "scanning for blind spots ahead of you" ],
    correctAnswer: 0,
    chapter: "Chapter 5: See - Think - Do; Observation",
    source: "Whenever you plan a change in direction or road position, do a shoulder check to make sure the blind spot on that side is clear.",
    link: "http://www.icbc.com/driver-licensing/Documents/drivers5.pdf"
  }/*,
  {
    question: "Reaction time is affected most after",
    options: ["drinking alcohol", "exercising", "sleeping", "working hard"],
    correctAnswer: 0,
    chapter: "Chapter 7: Personal Strategies; Facts About Alcohol",
    source: "In some cases, even small amounts of alcohol can cause a driver to be impaired.",
    link: "http://www.icbc.com/driver-licensing/Documents/drivers7.pdf"
  },
  {
    question: "What is this cyclist going to do?",
    options: ["Stop or slow down.", "Turn right.", "Turn left.", "Let you pass."],
    correctAnswer: 0,
    chapter: "Chapter 5: See - Think - Do; Communication",
    source: "This section has an illustration that shows how cyclists signal left turns, right turns, and stopping or slowing down.",
    link: "http://www.icbc.com/driver-licensing/Documents/drivers5.pdf",
    image: "images/q11.png"
  },
  {
    question: "A driver should not change lanes",
    options: ["in intersections", "at less than 50km/h", "at more than 80km/h", "in hospital zones"],
    correctAnswer: 0,
    chapter: "Chapter 4: Rules of the Road",
    source: "Don't change lanes at an intersection. You could confuse other drivers and cause a crash.",
    link: "http://www.icbc.com/driver-licensing/Documents/drivers4.pdf" 
  },
  {
    question: "Unless otherwise posted, the speed limit WITHIN cities and towns is",
    options: ["50km/h", "30km/h", "60km/h", "80km/h"],
    correctAnswer: 0,
    chapter: "Chapter 5: See - Think - Do; Speed Control",
    source: "Unless a sign tells you otherwise, the speed limit is 50km/h within cities and towns.",
    link: "http://www.icbc.com/driver-licensing/Documents/drivers5.pdf"
  }*/
  // ... more questions
];