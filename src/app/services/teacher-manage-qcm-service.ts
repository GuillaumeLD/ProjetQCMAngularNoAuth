export class TeacherManageQcmService {

    qcms = [
        {
            id: 1,
            title: "Histoire",
            time: 30
        },
        {
            id: 2,
            title: "Géographie",
            time: 20
        },
        {
            id: 3,
            title: "Français",
            time: 60
        }
    ];


    creerQcm() {
        console.log("On va créer un QCM");
    }

    sendQcm() {
        console.log("On va envoyer un QCM");
    }

    editQcm() {
        console.log("On va modifier un QCM");
    }

    deleteQcm() {
        console.log("On va supprimer un QCM");
    }

}