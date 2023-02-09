describe('Début du parcours des eCari en production', () => {

    describe('Vérifier le canton BL', () => {
          var donneesCantonBL
          beforeEach(() => {
              cy.fixture('donneesCantonBL').then((donnees) => {
                  donneesCantonBL = donnees;
              })
          })

        it('Vérifier que eAuction dans le canton BL repond', () => {
            var eAuction = donneesCantonBL.eAuction
            cy.visit(eAuction.url)

            cy.contains(eAuction.texts.titre)
            cy.contains(eAuction.texts.lienNewUser)
            cy.contains(eAuction.texts.lienLogin)

            cy.get('head meta[name="version"]').should('have.attr', 'content', donneesCantonBL.version)

            cy.log('****** Vérifier les onglets et les libellés des onglets en BL ******')
            cy.get('ul li').should(($lis) => {
                    expect($lis).to.have.length(eAuction.nombreOnglet)

                    expect($lis.eq(0)).to.contain(eAuction.texts.onglet1)
                    expect($lis.eq(1)).to.contain(eAuction.texts.onglet2)
                    expect($lis.eq(2)).to.contain(eAuction.texts.onglet3)

                })
                .invoke('show')

            cy.wait(10000)
            cy.get('.header5 > [href="/ecari-auction/wf/app/createUser"]')
                .invoke('show')
                .click()

            cy.get('.close').click()

            cy.get('.red')
                .invoke('show')
                .click()

            cy.get('.yes').click()

            cy.log('**** Check enregistrement user eauction START *****');
            cy.get('.header5 > [href="/ecari-auction/wf/app/createUser"]').click()
            cy.get('#cguCheckbox').click()
            cy.get('.green').click()
            cy.get('.red').click()
            cy.get('.yes').click()
            cy.log('**** Check enregistrement user eauction END *****');

        })
/*
        it('Vérifier que eAdresse dans le canton AR repond', () => {
            var eAdresse = donneesCantonAR.eAdresse
            cy.visit(eAdresse.url)

            cy.get('head meta[name="version"]').should('have.attr', 'content', donneesCantonAR.version)

            cy.get('.loginLink')
                .invoke('show')
                .click()

            cy.log('****** Vérifier les libellés titre ******')
            cy.contains(eAdresse.texts.titre)
            cy.contains(eAdresse.texts.textExplication)


            cy.get('#tabs div').should(($tabs) => {
                    expect($tabs).to.have.length(eAdresse.nombreDePermis)
                })
                .invoke('show')

            cy.log('****** Vérifier que le nombre de permis est ' + eAdresse.nombreDePermis + ' ******')
            cy.get('ul li').should(($li) => {
                    expect($li).to.have.length(eAdresse.nombreDePermis)

                    expect($li.eq(0)).to.contain(eAdresse.texts.conduireCarte1)
                    expect($li.eq(0)).to.contain(eAdresse.texts.conduireCarte2)

                    expect($li.eq(1)).to.contain(eAdresse.texts.conduireBleu1)
                    expect($li.eq(1)).to.contain(eAdresse.texts.conduireBleu2)

                    expect($li.eq(2)).to.contain(eAdresse.texts.eleve1)
                    expect($li.eq(2)).to.contain(eAdresse.texts.eleve2)

                    expect($li.eq(3)).to.contain(eAdresse.texts.autorisation1)
                    expect($li.eq(3)).to.contain(eAdresse.texts.autorisation2)

                    expect($li.eq(4)).to.contain(eAdresse.texts.circulation1)
                    expect($li.eq(4)).to.contain(eAdresse.texts.circulation2)

                })
                .invoke('show')

            // check all carte grise
            cy.get(':nth-child(5) > a')
                .invoke('show')
                .click()

            cy.log('****** Vérifier les libellés carte grise ******')
            cy.contains(eAdresse.texts.champsCarteGrise.titre)
            cy.contains(eAdresse.texts.champsCarteGrise.text)
            cy.contains(eAdresse.texts.champsCarteGrise.numRegistre)
            cy.contains(eAdresse.texts.champsCarteGrise.dateNaiss)
            cy.contains(eAdresse.texts.champsCarteGrise.numMatric)

            cy.get('#login_permis_circulation > .login_table > tbody > :nth-child(9) > td > .buttonContinuer')
                .invoke('show')
                .click()
            cy.contains(eAdresse.texts.champObligatoire)

            // check all carte autorisation
            cy.get(':nth-child(4) > a')
                .invoke('show')
                .click()

            cy.log('****** Vérifier les libellés autorisation ******')
            cy.contains(eAdresse.texts.champAutorisation.titre)
            cy.contains(eAdresse.texts.champAutorisation.text)
            cy.contains(eAdresse.texts.champAutorisation.numRegistre)
            cy.contains(eAdresse.texts.champAutorisation.dateNaiss)
            cy.contains(eAdresse.texts.champAutorisation.dateEtabli)

            cy.get('#login_carte_autorisation > .login_table > tbody > :nth-child(9) > td > .buttonContinuer')
                .invoke('show')
                .click()
            cy.contains(eAdresse.texts.champObligatoire)

            // check all permis élève
            cy.get(':nth-child(3) > a')
                .invoke('show')
                .click()

            cy.log('****** Vérifier les libellés permis élève ******')
            cy.contains(eAdresse.texts.champEleve.titre)
            cy.contains(eAdresse.texts.champEleve.text)
            cy.contains(eAdresse.texts.champEleve.numRegistre)
            cy.contains(eAdresse.texts.champEleve.dateNaiss)
            cy.contains(eAdresse.texts.champEleve.dateEtabli)

            cy.get('#login_permis_eleve > .login_table > tbody > :nth-child(9) > td > .buttonContinuer')
                .invoke('show')
                .click()
            cy.contains(eAdresse.texts.champObligatoire)

            // check permis bleu
            cy.get('.L > :nth-child(2) > a')
                .invoke('show')
                .click()

            cy.log('****** Vérifier les libellés permis bleu ******')
            cy.contains(eAdresse.texts.champBleu.titre)
            cy.contains(eAdresse.texts.champBleu.text)
            cy.contains(eAdresse.texts.champBleu.numRegistre)
            cy.contains(eAdresse.texts.champBleu.dateNaiss)
            cy.contains(eAdresse.texts.champBleu.dateEtabli)

            cy.get('#login_permis_bleu > .login_table > tbody > :nth-child(9) > td > .buttonContinuer')
                .invoke('show')
                .click()
            cy.contains(eAdresse.texts.champObligatoire)

            // check permis PCC
            cy.get('.L > :nth-child(1) > a')
                .invoke('show')
                .click()

            cy.log('****** Vérifier les libellés PCC ******')
            cy.contains(eAdresse.texts.champPCC.titre)
            cy.contains(eAdresse.texts.champPCC.text)
            cy.contains(eAdresse.texts.champPCC.numPermis)
            cy.contains(eAdresse.texts.champPCC.dateNaiss)

            cy.get(':nth-child(7) > td > .buttonContinuer')
                .invoke('show')
                .click()
            cy.contains(eAdresse.texts.champObligatoire)

            cy.log('***** Ce loguer dans adresse avec un detenteur *****')

            cy.get('#dateNaissance_pcc').clear().type(eAdresse.infoDetenteur.dateNaissance)
            //cy.get('#login_pcc\.idCari\.value')

            cy.get('input[name="login_pcc\.idCari\.value"]').clear().type(eAdresse.infoDetenteur.numeroPCC,{timeout:55000})

            cy.get(':nth-child(7) > td > .buttonContinuer')
            .invoke('show')
            .click()
            /*
            depuis début 2019 plus possible d'aller dans modification détenteur le link
            j'ai écrit à Jürg AR aucune répense depuis des mois je met en commentaire
            cette parite du code

            cy.get('a').click()

            cy.wait(5500)

            cy.get('.M-cell > #change1').click()

            cy.get('#buttonDiv > .green').click()

            cy.get('#buttonDiv > .red').click()

            cy.get('.yes').click()

        })


        it('Vérifier si eDispo up', () =>{
            var eDispo = donneesCantonAR.eDispo
            cy.visit(eDispo.url)

            cy.get('head meta[name="version"]').should('have.attr', 'content', donneesCantonAR.version)

            cy.log('****** Vérifier les libellés en Allemand ******')
            //cy.contains(eDispo.textMainPageDE.titre)
            //cy.contains(eDispo.textMainPageDE.sousTitre)
            //cy.contains(eDispo.textMainPageDE.langue)
            cy.contains(eDispo.textMainPageDE.vehiculePrive)
            cy.contains(eDispo.textMainPageDE.vehiculePartenaire)
            cy.contains(eDispo.textMainPageDE.conduitePrivee)
            cy.contains(eDispo.textMainPageDE.conduiteMoniteur)

            cy.get('[href="#/circ/prive/login"]')
            .invoke('show')
            .click()

            cy.log('****** Vérifier les libellés en Allemand véhicule privé RDV ******')
            cy.contains(eDispo.vehiculePriveDE.titre)
            cy.contains(eDispo.vehiculePriveDE.login)
            cy.contains(eDispo.vehiculePriveDE.helpLien)
            cy.contains(eDispo.vehiculePriveDE.numRDV)
            cy.contains(eDispo.vehiculePriveDE.numeroMatricule)

            cy.get('a').click()
            cy.contains(eDispo.vehiculePriveDE.loginH);
            cy.get('.modal-body > .dispoButtons > .dispoButton').click()

            cy.get('form.ng-untouched > .dispoButtons > .dispoButton')
            .invoke('show')
            .click()
            cy.contains(eDispo.vehiculePriveDE.champsObligatoire)

            cy.visit(eDispo.url)

            cy.get('[href="#/circ/garagiste"]')
            .invoke('show')
            .click()

            cy.log('****** Vérifier les libellés en Allemand véhicule partenaire RDV ******')
            cy.contains(eDispo.vehiculePartenaireDE.titre)
            cy.contains(eDispo.vehiculePartenaireDE.login)
            cy.contains(eDispo.vehiculePartenaireDE.user)
            cy.contains(eDispo.vehiculePartenaireDE.pass)
            cy.contains(eDispo.vehiculePartenaireDE.sousTitre)
            //cy.contains(eDispo.vehiculePartenaireDE.emailPartie01)
            cy.contains(eDispo.vehiculePartenaireDE.emailPartie02)

            cy.get('.dispoButton')
            .invoke('show')
            .click()
            cy.contains(eDispo.vehiculePartenaireDE.champsObligatoire)

            cy.visit(eDispo.url)
            cy.get('[href="#/conduite/prive"]')
            .invoke('show')
            .click()

            cy.log('****** Vérifier les libellés en Allemand conduite privée RDV ******')
            cy.contains(eDispo.conduitePriveeDE.titre)
            cy.contains(eDispo.conduitePriveeDE.login)
            cy.contains(eDispo.conduitePriveeDE.numeroCandidat)
            cy.contains(eDispo.conduitePriveeDE.dateNaissance)
            cy.contains(eDispo.conduitePriveeDE.sousTitre)

            cy.get('a').click()
            cy.contains(eDispo.conduitePriveeDE.loginH)
            cy.get('.modal-body > .dispoButtons > .dispoButton').click()

            cy.get('form.ng-untouched > .dispoButtons > .dispoButton')
            .invoke('show')
            .click()
            cy.contains(eDispo.vehiculePartenaireDE.champsObligatoire)

            cy.visit(eDispo.url)

            cy.get('[href="#/conduite/moniteur"]')
            .invoke('show')
            .click()

            cy.log('****** Vérifier les libellés en Allemand conduite moniteur RDV ******')
            cy.contains(eDispo.conduiteMoniteurDE.titre)
            cy.contains(eDispo.conduiteMoniteurDE.login)
            cy.contains(eDispo.conduiteMoniteurDE.user)
            cy.contains(eDispo.conduiteMoniteurDE.pass)
            cy.contains(eDispo.conduiteMoniteurDE.sousTitre)
            //cy.contains(eDispo.conduiteMoniteurDE.emailPartie01)
            cy.contains(eDispo.conduiteMoniteurDE.emailPartie02)

            cy.get('.dispoButton')
            .invoke('show')
            .click()
            cy.contains(eDispo.conduiteMoniteurDE.champsObligatoire)

        })
        */
    })
});
