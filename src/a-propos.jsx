import Layout from "./component/layout/layout";
// function Apropos() {
//     return <h1>a-propos</h1>;
// }



const Apropos = () => {
  return (
    <Layout>
        <div className=""></div>
    <h1 className="text-3xl font-bold underline">
      A propos
    </h1>
    <p className="text-xl text-blue-600">De formation marketing avec un Master 2 en marketing, j'ai finalement choisi la création d'entreprise
                    en
                    2014. En effet, j'ai créé une salle de sports sous licence de marque avec L'Orange Bleue dans la
                    ville
                    de Douai (59). Cette belle aventure a duré 6 ans et m'a permis de développer mes compétences dans
                    tous
                    les domaines.
                    En effet, quand on est chef d'entreprise on a eu plusieurs casquettes. Il faut savoir gérer la
                    partie
                    financière, gérer son équipe, sa communication, ses clients,...
                    </p>
                <p className="text-xl text-blue-600">En 2020, j'ai pu rebondir à la BGE Hauts de France en devenant conseiller en création d'entreprise.
                    Pendant plus de 2 ans,
                    J'ai pu accompagner les créateurs d'entreprise en leur apportant mon expérience et mon expertise.
                </p>
                <p className="text-xl text-blue-600">En 2022, je suis arrivé au bout du chemin et j'avais besoin de trouver un nouveau souffle à ma
                    carrière
                    professionnelle.
                    J'ai donc décidé de faire un bilan de compétences qui m'ont amené vers le métier de développeur web.
                </p>

    </Layout>
    );
};


export default Apropos;