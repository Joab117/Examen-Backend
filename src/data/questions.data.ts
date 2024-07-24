import { IQuestion } from "../models/Question"

  const question1= {
    questionValue: "q1",
    question: "¿Quién es el personaje principal en la serie de juegos de Halo?",
    options: [
      { optionValue: "a", optionName: "Master Chief" },
      { optionValue: "b", optionName: "Cortana" },
      { optionValue: "c", optionName: "Arbiter" },
      { optionValue: "d", optionName: "Sargento Johnson" },
    ],
    correctOption: "a",
  }
  const question2= {
    questionValue: "q2",
    question:
      "¿Cuál es el nombre del anillo gigante artificial en la serie Halo?",
    options: [
      { optionValue: "a", optionName: "Alpha Halo" },
      { optionValue: "b", optionName: "Delta Halo" },
      { optionValue: "c", optionName: "Gamma Halo" },
      { optionValue: "d", optionName: "Gamma Halo" },
    ],
    correctOption: "a",
  }
  const question3= {
    questionValue: "q3",
    question:
      "¿Cuál es el protagonista de Halo 3: ODST?",
    options: [
      { optionValue: "a", optionName: "el novato" },
      { optionValue: "b", optionName: "Master Chief" },
      { optionValue: "c", optionName: "Sargento Jhonson" },
      { optionValue: "d", optionName: "El Inquisidor" },
    ],
    correctOption: "a",
  }
  const question4= {
    questionValue: "q4",
    question:
      "¿Cuál es el juego en el que nos adentramos en el arca por primera vez?",
    options: [
      { optionValue: "a", optionName: "Halo 1" },
      { optionValue: "b", optionName: "Halo 3" },
      { optionValue: "c", optionName: "Halo Reach" },
      { optionValue: "d", optionName: "Halo 4" },
    ],
    correctOption: "a",
  }
  const question5= {
    questionValue: "q5",
    question: "¿Cuál es el nombre del antagonista principal en la serie Halo?",
    options: [
      { optionValue: "a", optionName: "Covenant" },
      { optionValue: "b", optionName: "Prophet of Truth" },
      { optionValue: "c", optionName: "The Flood" },
      { optionValue: "d", optionName: "The Didact" },
    ],
  }

  const questionList = [
    question1,
    question2,
    question3,
    question4,
    question5
  ]


export default questionList;
