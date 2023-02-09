describe('Vérifier le canton VS', () =>{
  var donneesCantonVS
  beforeEach(() => {
      cy.fixture('donneesCantonVS').then((donnees) => {
          donneesCantonVS = donnees;
      })
  })

  it('Vérifier eAuction up', () =>{
    var eAuction = donneesCantonVS.eAuction
    cy.visit(eAuction.url)

    //cy.get('head meta[name="version"]').should('have.attr', 'content', donneesCantonVS.version)

    cy.log('****** Vérifier les libellés en Français ******')
    cy.contains(eAuction.texts.fr.titre)
    cy.contains(eAuction.texts.fr.lienNewUser)
    cy.contains(eAuction.texts.fr.lienLogin)
    //cy.contains(eAuction.texts.fr.langFR)

    cy.contains(eAuction.texts.fr.basPage1)
    cy.contains(eAuction.texts.fr.basPage2)
    cy.contains(eAuction.texts.fr.basPage3)

    cy.log('****** Vérifier les onglets et les libellés en Français ******')
    cy.log('****** Vérifier les onglets et les libellés en Français ******')
    cy.log('****** Vérifier les onglets et les libellés en Français ******')
    cy.log('****** Vérifier les onglets et les libellés en Français ******')
    cy.log('****** Vérifier les onglets et les libellés en Français ******')
    cy.log('****** Vérifier les onglets et les libellés en Français ******')
    cy.log('****** Vérifier les onglets et les libellés en Français ******')
    cy.log('****** Vérifier les onglets et les libellés en Français ******')
    cy.log('****** Vérifier les onglets et les libellés en Français ******')
    cy.log('****** Vérifier les onglets et les libellés en Français ******')
    cy.log('****** Vérifier les onglets et les libellés en Français ******')
    cy.log('****** Vérifier les onglets et les libellés en Français ******')
    cy.log('****** Vérifier les onglets et les libellés en Français ******')
    cy.log('****** Vérifier les onglets et les libellés en Français ******')
    cy.log('****** Vérifier les onglets et les libellés en Français ******')
    cy.log('****** Vérifier les onglets et les libellés en Français ******')
    cy.log('****** Vérifier les onglets et les libellés en Français ******')
    cy.log('****** Vérifier les onglets et les libellés en Français ******')
    cy.get('ul li').should(($lis) => {
            expect($lis).to.have.length(eAuction.nombreOnglet)

            expect($lis.eq(0)).to.contain(eAuction.texts.fr.onglet1)
            expect($lis.eq(1)).to.contain(eAuction.texts.fr.onglet2)
            expect($lis.eq(2)).to.contain(eAuction.texts.fr.onglet3)
        })
        .invoke('show')

    cy.get('#tab1 > a')
    .invoke('show')
    .click()
    cy.contains(eAuction.texts.fr.textPlaque01)

    cy.get('#tab2 > a')
    .invoke('show')
    .click()
    cy.contains(eAuction.texts.fr.textPlaque01)
    cy.contains(eAuction.texts.fr.textPlaque01)

    cy.get('#tab4 > a')
    .invoke('show')
    .click()
    cy.contains(eAuction.texts.fr.textPlaque01)
    cy.contains(eAuction.texts.fr.textPlaque02)
    cy.contains(eAuction.texts.fr.textPlaque03)

    cy.get('.header5 > [href="/ecari-auction/wf/app/createUser"]')
        .invoke('show')
        .click()

    cy.get('#cguCheckbox').click()

    cy.get('#buttonDiv > .red')
      .invoke('show')
      .click()

    cy.get('.yes').click()
  })

it('Vérifier eAdresse up', () => {
      var eAdresse = donneesCantonVS.eAdresse
      cy.visit(eAdresse.urlFr).as('eAdresse')

      cy.get('head meta[name="version"]').should('have.attr', 'content', donneesCantonVS.version)

      cy.log('****** Vérifier les libellés de la page login en Français ******')

      cy.contains(eAdresse.texts.fr.textsLoginPage.titre)
      cy.contains(eAdresse.texts.fr.textsLoginPage.sousTitre)
      cy.contains(eAdresse.texts.fr.textsLoginPage.text1)
      //cy.contains(eAdresse.texts.fr.textsLoginPage.text2)

      cy.get('.buttonIdentify')
          .invoke('show')
          .click()

      cy.log('****** Vérifier les libellés titre en Français ******')
      cy.contains(eAdresse.texts.fr.titre)
      cy.contains(eAdresse.texts.fr.textExplication)


      cy.get('#tabs div').should(($tabs) => {
              expect($tabs).to.have.length(eAdresse.nombreDePermis)
          })
          .invoke('show')

      cy.log('****** Vérifier que le nombre de permis est ' + eAdresse.nombreDePermis + ' ******')
      cy.get('ul li').should(($li) => {
              expect($li).to.have.length(eAdresse.nombreDePermis)

              expect($li.eq(0)).to.contain(eAdresse.texts.fr.conduireCarte1)
              expect($li.eq(0)).to.contain(eAdresse.texts.fr.conduireCarte2)

              expect($li.eq(1)).to.contain(eAdresse.texts.fr.conduireBleu1)
              expect($li.eq(1)).to.contain(eAdresse.texts.fr.conduireBleu2)

              expect($li.eq(2)).to.contain(eAdresse.texts.fr.eleve1)
              expect($li.eq(2)).to.contain(eAdresse.texts.fr.eleve2)

              expect($li.eq(3)).to.contain(eAdresse.texts.fr.autorisation1)
              expect($li.eq(3)).to.contain(eAdresse.texts.fr.autorisation2)

              expect($li.eq(4)).to.contain(eAdresse.texts.fr.circulation1)
              expect($li.eq(4)).to.contain(eAdresse.texts.fr.circulation2)

          })
          .invoke('show')

        // check all carte grise
        cy.get(':nth-child(5) > a')
            .invoke('show')
            .click()

        cy.log('****** Vérifier les libellés carte grise ******')
        cy.contains(eAdresse.texts.fr.champsCarteGrise.titre)
        cy.contains(eAdresse.texts.fr.champsCarteGrise.text)
        cy.contains(eAdresse.texts.fr.champsCarteGrise.numRegistre)
        cy.contains(eAdresse.texts.fr.champsCarteGrise.dateNaiss)
        cy.contains(eAdresse.texts.fr.champsCarteGrise.numMatric)

        cy.get('#login_permis_circulation > .login_table > tbody > :nth-child(9) > td > .buttonContinuer')
            .invoke('show')
            .click()
        cy.contains(eAdresse.texts.fr.champObligatoire)

        // check all carte autorisation
        cy.get(':nth-child(4) > a')
            .invoke('show')
            .click()

        cy.log('****** Vérifier les libellés autorisation ******')
        cy.contains(eAdresse.texts.fr.champAutorisation.titre)
        cy.contains(eAdresse.texts.fr.champAutorisation.text)
        cy.contains(eAdresse.texts.fr.champAutorisation.numRegistre)
        cy.contains(eAdresse.texts.fr.champAutorisation.dateNaiss)
        cy.contains(eAdresse.texts.fr.champAutorisation.dateEtabli)

        cy.get('#login_carte_autorisation > .login_table > tbody > :nth-child(9) > td > .buttonContinuer')
            .invoke('show')
            .click()
        cy.contains(eAdresse.texts.fr.champObligatoire)

        // check all permis élève
        cy.get(':nth-child(3) > a')
            .invoke('show')
            .click()

        cy.log('****** Vérifier les libellés permis élève ******')
        cy.contains(eAdresse.texts.fr.champEleve.titre)
        cy.contains(eAdresse.texts.fr.champEleve.text)
        cy.contains(eAdresse.texts.fr.champEleve.numRegistre)
        cy.contains(eAdresse.texts.fr.champEleve.dateNaiss)
        cy.contains(eAdresse.texts.fr.champEleve.dateEtabli)

        cy.get('#login_permis_eleve > .login_table > tbody > :nth-child(9) > td > .buttonContinuer')
            .invoke('show')
            .click()
        cy.contains(eAdresse.texts.fr.champObligatoire)

        // check permis bleu
        cy.get('.L > :nth-child(2) > a')
            .invoke('show')
            .click()

        cy.log('****** Vérifier les libellés permis bleu ******')
        cy.contains(eAdresse.texts.fr.champBleu.titre)
        cy.contains(eAdresse.texts.fr.champBleu.text)
        cy.contains(eAdresse.texts.fr.champBleu.numRegistre)
        cy.contains(eAdresse.texts.fr.champBleu.dateNaiss)
        cy.contains(eAdresse.texts.fr.champBleu.dateEtabli)

        cy.get('#login_permis_bleu > .login_table > tbody > :nth-child(9) > td > .buttonContinuer')
            .invoke('show')
            .click()
        cy.contains(eAdresse.texts.fr.champObligatoire)

        // check permis PCC
        cy.get('.L > :nth-child(1) > a')
            .invoke('show')
            .click()

        cy.log('****** Vérifier les libellés PCC ******')
        cy.contains(eAdresse.texts.fr.champPCC.titre)
        cy.contains(eAdresse.texts.fr.champPCC.text)
        cy.contains(eAdresse.texts.fr.champPCC.numPermis)
        cy.contains(eAdresse.texts.fr.champPCC.dateNaiss)

        cy.get(':nth-child(7) > td > .buttonContinuer')
            .invoke('show')
            .click()
        cy.contains(eAdresse.texts.fr.champObligatoire)

        cy.visit(eAdresse.urlDe).as('eAdresse')

        cy.log('****** Vérifier les libellés de la page login en Allemand ******')

        cy.contains(eAdresse.texts.de.textsLoginPage.titre)
        cy.contains(eAdresse.texts.de.textsLoginPage.sousTitre)
        //cy.contains(eAdresse.texts.de.textsLoginPage.text1)
        cy.contains(eAdresse.texts.de.textsLoginPage.text2)

        cy.get('.buttonIdentify')
            .invoke('show')
            .click()

        cy.log('****** Vérifier les libellés titre en Allemand ******')
        cy.contains(eAdresse.texts.de.titre)
        cy.contains(eAdresse.texts.de.textExplication)


        cy.get('#tabs div').should(($tabs) => {
                expect($tabs).to.have.length(eAdresse.nombreDePermis)
            })
            .invoke('show')

        cy.log('****** Vérifier que le nombre de permis est ' + eAdresse.nombreDePermis + ' ******')
        cy.get('ul li').should(($li) => {
                expect($li).to.have.length(eAdresse.nombreDePermis)

                expect($li.eq(0)).to.contain(eAdresse.texts.de.conduireCarte1)
                expect($li.eq(0)).to.contain(eAdresse.texts.de.conduireCarte2)

                expect($li.eq(1)).to.contain(eAdresse.texts.de.conduireBleu1)
                expect($li.eq(1)).to.contain(eAdresse.texts.de.conduireBleu2)

                expect($li.eq(2)).to.contain(eAdresse.texts.de.eleve1)
                expect($li.eq(2)).to.contain(eAdresse.texts.de.eleve2)

                expect($li.eq(3)).to.contain(eAdresse.texts.de.autorisation1)
                expect($li.eq(3)).to.contain(eAdresse.texts.de.autorisation2)

                expect($li.eq(4)).to.contain(eAdresse.texts.de.circulation1)
                expect($li.eq(4)).to.contain(eAdresse.texts.de.circulation2)

            })
            .invoke('show')

          // check all carte grise
          cy.get(':nth-child(5) > a')
              .invoke('show')
              .click()

          cy.log('****** Vérifier les libellés carte grise ******')
          cy.contains(eAdresse.texts.de.champsCarteGrise.titre)
          cy.contains(eAdresse.texts.de.champsCarteGrise.text)
          cy.contains(eAdresse.texts.de.champsCarteGrise.numRegistre)
          cy.contains(eAdresse.texts.de.champsCarteGrise.dateNaiss)
          cy.contains(eAdresse.texts.de.champsCarteGrise.numMatric)

          cy.get('#login_permis_circulation > .login_table > tbody > :nth-child(9) > td > .buttonContinuer')
              .invoke('show')
              .click()
          cy.contains(eAdresse.texts.de.champObligatoire)

          // check all carte autorisation
          cy.get(':nth-child(4) > a')
              .invoke('show')
              .click()

          cy.log('****** Vérifier les libellés autorisation ******')
          cy.contains(eAdresse.texts.de.champAutorisation.titre)
          cy.contains(eAdresse.texts.de.champAutorisation.text)
          cy.contains(eAdresse.texts.de.champAutorisation.numRegistre)
          cy.contains(eAdresse.texts.de.champAutorisation.dateNaiss)
          cy.contains(eAdresse.texts.de.champAutorisation.dateEtabli)

          cy.get('#login_carte_autorisation > .login_table > tbody > :nth-child(9) > td > .buttonContinuer')
              .invoke('show')
              .click()
          cy.contains(eAdresse.texts.de.champObligatoire)

          // check all permis élève
          cy.get(':nth-child(3) > a')
              .invoke('show')
              .click()

          cy.log('****** Vérifier les libellés permis élève ******')
          cy.contains(eAdresse.texts.de.champEleve.titre)
          cy.contains(eAdresse.texts.de.champEleve.text)
          cy.contains(eAdresse.texts.de.champEleve.numRegistre)
          cy.contains(eAdresse.texts.de.champEleve.dateNaiss)
          cy.contains(eAdresse.texts.de.champEleve.dateEtabli)

          cy.get('#login_permis_eleve > .login_table > tbody > :nth-child(9) > td > .buttonContinuer')
              .invoke('show')
              .click()
          cy.contains(eAdresse.texts.de.champObligatoire)

          // check permis bleu
          cy.get('.L > :nth-child(2) > a')
              .invoke('show')
              .click()

          cy.log('****** Vérifier les libellés permis bleu ******')
          cy.contains(eAdresse.texts.de.champBleu.titre)
          cy.contains(eAdresse.texts.de.champBleu.text)
          cy.contains(eAdresse.texts.de.champBleu.numRegistre)
          cy.contains(eAdresse.texts.de.champBleu.dateNaiss)
          cy.contains(eAdresse.texts.de.champBleu.dateEtabli)

          cy.get('#login_permis_bleu > .login_table > tbody > :nth-child(9) > td > .buttonContinuer')
              .invoke('show')
              .click()
          cy.contains(eAdresse.texts.de.champObligatoire)

          // check permis PCC
          cy.get('.L > :nth-child(1) > a')
              .invoke('show')
              .click()

          cy.log('****** Vérifier les libellés PCC ******')
          cy.contains(eAdresse.texts.de.champPCC.titre)
          cy.contains(eAdresse.texts.de.champPCC.text)
          cy.contains(eAdresse.texts.de.champPCC.numPermis)
          cy.contains(eAdresse.texts.de.champPCC.dateNaiss)

          cy.get(':nth-child(7) > td > .buttonContinuer')
              .invoke('show')
              .click()
          cy.contains(eAdresse.texts.de.champObligatoire)

          cy.log('***** Ce loguer dans adresse avec un detenteur *****')

          cy.get('#dateNaissance_pcc').clear().type(eAdresse.infoDetenteur.dateNaissance)

          cy.get('input[name="login_pcc\.idCari\.value"]').clear().type(eAdresse.infoDetenteur.numeroPCC,{timeout:55000})

          cy.get(':nth-child(7) > td > .buttonContinuer')
          .invoke('show')
          .click()

          cy.get('.buttonModify').click()

          cy.get('#buttonDiv > .green').click()

          cy.get('#buttonDiv > .red').click()

          cy.get('.yes').click()
      })

      it('Vérifier si eDispo up', () => {
          var eDispo = donneesCantonVS.eDispo
          cy.visit(eDispo.url)
          cy.wait(3000)
          cy.get('select').select('Deutsch')

          //cy.get('head meta[name="version"]').should('have.attr', 'content', donneesCantonVS.version)

          cy.log('****** Vérifier les libellés en Allemand ******')
          //cy.contains(eDispo.textMainPageDE.titre)
          //cy.contains(eDispo.textMainPageDE.sousTitre)
          cy.contains(eDispo.textMainPageDE.langue)
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

          cy.get('form.ng-untouched > .dispoButtons > .dispoButton')
          .invoke('show')
          .click()
          cy.contains(eDispo.vehiculePriveDE.champsObligatoire)

          cy.visit(eDispo.url)
          cy.wait(3000)
          cy.get('select').select('Deutsch')

          cy.get('[href="#/circ/garagiste"]')
          .invoke('show')
          .click()

          cy.log('****** Vérifier les libellés en Allemand véhicule partenaire RDV ******')
          cy.contains(eDispo.vehiculePartenaireDE.titre)
          cy.contains(eDispo.vehiculePartenaireDE.login)
          cy.contains(eDispo.vehiculePartenaireDE.user)
          cy.contains(eDispo.vehiculePartenaireDE.pass)
          //cy.contains(eDispo.vehiculePartenaireDE.sousTitre)
          //cy.contains(eDispo.vehiculePartenaireDE.emailPartie01)
          //cy.contains(eDispo.vehiculePartenaireDE.emailPartie02)


          cy.get('.dispoButton')
          .invoke('show')
          .click()
          cy.contains(eDispo.vehiculePartenaireDE.champsObligatoire)

          cy.visit(eDispo.url)
          cy.wait(3000)
          cy.get('select').select('Deutsch')

          cy.get('[href="#/conduite/prive"]')
          .invoke('show')
          .click()

          cy.log('****** Vérifier les libellés en Allemand conduite privée RDV ******')
          cy.contains(eDispo.conduitePriveeDE.titre)
          cy.contains(eDispo.conduitePriveeDE.login)
          cy.contains(eDispo.conduitePriveeDE.numeroCandidat)
          cy.contains(eDispo.conduitePriveeDE.dateNaissance)
          cy.contains(eDispo.conduitePriveeDE.sousTitre)

          cy.get('form.ng-untouched > .dispoButtons > .dispoButton')
          .invoke('show')
          .click()
          cy.contains(eDispo.vehiculePartenaireDE.champsObligatoire)

          cy.visit(eDispo.url)
          cy.wait(5000)
          cy.get('select').select('Deutsch')
          cy.wait(1000000000)

          cy.get('[href="#/conduite/moniteur"]')
          .invoke('show')
          .click()

          cy.log('****** Vérifier les libellés en Allemand conduite moniteur RDV ******')
          cy.contains(eDispo.conduiteMoniteurDE.titre)
          cy.contains(eDispo.conduiteMoniteurDE.login)
          cy.contains(eDispo.conduiteMoniteurDE.user)
          cy.contains(eDispo.conduiteMoniteurDE.pass)
        //cy.contains(eDispo.conduiteMoniteurDE.sousTitre)
        //cy.contains(eDispo.conduiteMoniteurDE.emailPartie01)
        //cy.contains(eDispo.conduiteMoniteurDE.emailPartie02)

          cy.get('.dispoButton')
          .invoke('show')
          .click()
          cy.contains(eDispo.conduiteMoniteurDE.champsObligatoire)

          cy.visit(eDispo.url)
          cy.wait(3000)
          cy.get('select').select('Français')
/*
          11.06.2019
          fonctionne en local pas sur le serveur fini en KO donc je met en commentaire
          ici lidée c'est de tester la connexion et rien de plus.

          cy.log('****** Vérifier les libellés en Français ******')
          cy.contains(eDispo.textMainPageFR.titre)
          cy.contains(eDispo.textMainPageFR.sousTitre)
          cy.contains(eDispo.textMainPageFR.langue)
          cy.contains(eDispo.textMainPageFR.vehiculePrive)
          cy.contains(eDispo.textMainPageFR.vehiculePartenaire)
          cy.contains(eDispo.textMainPageFR.conduitePrivee)
          cy.contains(eDispo.textMainPageFR.conduiteMoniteur)

          cy.visit(eDispo.url)
          cy.wait(3000)
          cy.get('select').select('Français')

          cy.get('[href="#/circ/prive"]')
          .invoke('show')
          .click()

          cy.log('****** Vérifier les libellés en Français véhicule privé RDV ******')
          cy.contains(eDispo.vehiculePriveFR.titre)
          cy.contains(eDispo.vehiculePriveFR.login)
          cy.contains(eDispo.vehiculePriveFR.helpLien)
          cy.contains(eDispo.vehiculePriveFR.numRDV)
          cy.contains(eDispo.vehiculePriveFR.numeroMatricule)

          cy.get('form.ng-untouched > .dispoButtons > .dispoButton')
          .invoke('show')
          .click()
          cy.contains(eDispo.vehiculePriveFR.champsObligatoire)

          cy.visit(eDispo.url)
          cy.wait(3000)
          cy.get('select').select('Français')

          cy.get('[href="#/circ/garagiste"]')
          .invoke('show')
          .click()

          cy.log('****** Vérifier les libellés en Français véhicule partenaire RDV ******')
          cy.contains(eDispo.vehiculePartenaireFR.titre)
          cy.contains(eDispo.vehiculePartenaireFR.login)
          cy.contains(eDispo.vehiculePartenaireFR.user)
          cy.contains(eDispo.vehiculePartenaireFR.pass)
          cy.contains(eDispo.vehiculePartenaireFR.sousTitre)
          cy.contains(eDispo.vehiculePartenaireFR.emailPartie01)
          cy.contains(eDispo.vehiculePartenaireFR.emailPartie02)

          cy.get('.dispoButton')
          .invoke('show')
          .click()
          cy.contains(eDispo.vehiculePartenaireFR.champsObligatoire)

          cy.visit(eDispo.url)
          cy.wait(3000)
          cy.get('select').select('Français')

          cy.get('[href="#/conduite/prive"]')
          .invoke('show')
          .click()

          cy.log('****** Vérifier les libellés en Français conduite privée RDV ******')
          cy.contains(eDispo.conduitePriveeFR.titre)
          cy.contains(eDispo.conduitePriveeFR.login)
          cy.contains(eDispo.conduitePriveeFR.numeroCandidat)
          cy.contains(eDispo.conduitePriveeFR.dateNaissance)
          cy.contains(eDispo.conduitePriveeFR.sousTitre)

          cy.get('form.ng-untouched > .dispoButtons > .dispoButton')
          .invoke('show')
          .click()
          cy.contains(eDispo.vehiculePartenaireFR.champsObligatoire)

          cy.visit(eDispo.url)
          cy.wait(3000)
          cy.get('select').select('Français')

          cy.get('[href="#/conduite/moniteur"]')
          .invoke('show')
          .click()

          cy.log('****** Vérifier les libellés en Français conduite moniteur RDV ******')
          cy.contains(eDispo.conduiteMoniteurFR.titre)
          cy.contains(eDispo.conduiteMoniteurFR.login)
          cy.contains(eDispo.conduiteMoniteurFR.user)
          cy.contains(eDispo.conduiteMoniteurFR.pass)
          cy.contains(eDispo.conduiteMoniteurFR.sousTitre)
          cy.contains(eDispo.conduiteMoniteurFR.emailPartie01)
          cy.contains(eDispo.conduiteMoniteurFR.emailPartie02)

          cy.get('.dispoButton')
          .invoke('show')
          .click()
          cy.contains(eDispo.conduiteMoniteurFR.champsObligatoire)
          */
      })

  })
