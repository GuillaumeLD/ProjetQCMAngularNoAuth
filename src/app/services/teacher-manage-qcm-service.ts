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

    getQcmById(id: number) {
        const qcm = this.qcms.find(
            (qcmObject) => {
                return qcmObject.id === id;
            }
        );
        return qcm;
    }

    creerQcm() {
        console.log("On va créer un QCM");
    }

    sendQcm() {
        console.log("On va envoyer un QCM");
    }

    editQcm(qcmId: number) {
        console.log("On va modifier le QCM qui a pour id : " + qcmId);
    }

    deleteQcm() {
        console.log("On va supprimer un QCM");
    }

}