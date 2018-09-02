export class TeacherCreateQcmService {

  questions = [
    {
      id: 1,
      title : "Quelle est la capitale de la France ?"
    },
    {
      id: 2,
      title: "Quelle est la capitale de la Finlande ?"
    },
    {
      id: 3,
      title: "Quelle est la capitale de la Suède ?"
    }
  ];

  addQuestion() {
    console.log("On va ajouter une question");
  }

  addAnswer() {
    console.log("On va ajouter une réponse");
  }

  validQcm() {
      console.log("On va valider le QCM");
  }

}