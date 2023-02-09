describe('Vérifier le canton TI', () =>{
  var donneesCantonTI
  beforeEach(() => {
      cy.fixture('donneesCantonTI').then((donnees) => {
          donneesCantonTI = donnees;
      })
  })

  it('Vérifier eAuction up', () =>{
    var eAuction = donneesCantonTI.eAuction
    cy.visit(eAuction.url)

    cy.get('head meta[name="version"]').should('have.attr', 'content', donneesCantonTI.version)

    cy.log('****** Vérifier les libellés en Italien ******')
    cy.contains(eAuction.texts.ti.titre)
    cy.contains(eAuction.texts.ti.lienNewUser)
    cy.contains(eAuction.texts.ti.lienLogin)

    cy.log('****** Vérifier les onglets et les libellés en Italien ******')
    cy.get('ul li').should(($lis) => {
            expect($lis).to.have.length(eAuction.nombreOnglet)

            expect($lis.eq(0)).to.contain(eAuction.texts.ti.onglet1)
            expect($lis.eq(1)).to.contain(eAuction.texts.ti.onglet2)
            expect($lis.eq(2)).to.contain(eAuction.texts.ti.onglet3)
            expect($lis.eq(3)).to.contain(eAuction.texts.ti.onglet4)
        })
        .invoke('show')

    cy.get('#tab1 > a')
    .invoke('show')
    .click()
    cy.contains(eAuction.texts.ti.textPlaque01)
    cy.contains(eAuction.texts.ti.textPlaque02)

    cy.get('#tab2 > a')
    .invoke('show')
    .click()
    cy.contains(eAuction.texts.ti.textPlaque01)
    cy.contains(eAuction.texts.ti.textPlaque01)

    cy.get('#tab3 > a')
    .invoke('show')
    .click()
    cy.contains(eAuction.texts.ti.textPlaque01)
    cy.contains(eAuction.texts.ti.textPlaque02)
    cy.contains(eAuction.texts.ti.textPlaque03)

    cy.get('#tab4 > a')
    .invoke('show')
    .click()
    cy.contains(eAuction.texts.ti.textPlaque01)
    cy.contains(eAuction.texts.ti.textPlaque02)
    cy.contains(eAuction.texts.ti.textPlaque03)

    cy.get('.header5 > [href="/ecari-auktion/wf/app/createUser"]')
        .invoke('show')
        .click()

    cy.get('#cguCheckbox').click()

    cy.get('#buttonDiv > .red')
      .invoke('show')
      .click()

    cy.get('.yes').click()

  })

  it('Vérifier eAdresse up', () => {
      var eAdresse = donneesCantonTI.eAdresse
      cy.visit(eAdresse.url).as('eAdresse')

      cy.get('head meta[name="version"]').should('have.attr', 'content', donneesCantonTI.version)

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

        cy.get('input[name="login_pcc\.idCari\.value"]').clear().type(eAdresse.infoDetenteur.numeroPCC,{timeout:55000})

        cy.get(':nth-child(7) > td > .buttonContinuer')
        .invoke('show')
        .click()

        cy.wait(3000)

        cy.get('a').click()

        cy.wait(4000)

        cy.get('.M-cell > #change1').click()

        cy.get('#buttonDiv > .green').click()

        cy.get('#buttonDiv > .red').click()

        cy.get('.yes').click()

      })

it('Vérifier si eDispo up', () =>{
    var eDispo = donneesCantonTI.eDispo
    cy.visit(eDispo.url)

    cy.get('head meta[name="version"]').should('have.attr', 'content', donneesCantonTI.version)

    cy.log('****** Vérifier les libellés en Italien ******')
    //cy.contains(eDispo.textMainPageTI.titre)
    //cy.contains(eDispo.textMainPageTI.sousTitre)
    cy.contains(eDispo.textMainPageTI.vehiculePrive)
    //cy.contains(eDispo.textMainPageTI.vehiculePartenaire)
    cy.contains(eDispo.textMainPageTI.conduitePrivee)
    cy.contains(eDispo.textMainPageTI.conduiteMoniteur)

    cy.get('[href="#/circ/prive/login"]')
    .invoke('show')
    .click()

    cy.log('****** Vérifier les libellés en Italien véhicule privé RDV ******')
    cy.contains(eDispo.vehiculePriveTI.titre)
    cy.contains(eDispo.vehiculePriveTI.login)
    cy.contains(eDispo.vehiculePriveTI.helpLien)
    cy.contains(eDispo.vehiculePriveTI.numRDV)
    cy.contains(eDispo.vehiculePriveTI.numeroMatricule)

    cy.get('a').click()

    //cy.contains(eDispo.vehiculePriveTI.loginH)

    cy.get('.modal-body > .dispoButtons > .dispoButton').click()

    cy.get('form.ng-untouched > .dispoButtons > .dispoButton')
    .invoke('show')
    .click()
    cy.contains(eDispo.vehiculePriveTI.champsObligatoire)

    cy.visit(eDispo.url)

    cy.get('[href="#/circ/garagiste"]')
    .invoke('show')
    .click()

    cy.log('****** Vérifier les libellés en Italien véhicule partenaire RDV ******')
    //cy.contains(eDispo.vehiculePartenaireTI.titre)
    cy.contains(eDispo.vehiculePartenaireTI.login)
    cy.contains(eDispo.vehiculePartenaireTI.user)
    cy.contains(eDispo.vehiculePartenaireTI.pass)
    cy.contains(eDispo.vehiculePartenaireTI.sousTitre)
    //cy.contains(eDispo.vehiculePartenaireTI.emailPartie01)
    cy.contains(eDispo.vehiculePartenaireTI.emailPartie02)

    cy.get('.dispoButton')
    .invoke('show')
    .click()
    cy.contains(eDispo.vehiculePartenaireTI.champsObligatoire)

    cy.visit(eDispo.url)

    cy.get('[href="#/conduite/prive"]')
    .invoke('show')
    .click()

    cy.log('****** Vérifier les libellés en Italien conduite privée RDV ******')
    cy.contains(eDispo.conduitePriveeTI.titre)
    cy.contains(eDispo.conduitePriveeTI.login)
    cy.contains(eDispo.conduitePriveeTI.numeroCandidat)
    cy.contains(eDispo.conduitePriveeTI.dateNaissance)
    cy.contains(eDispo.conduitePriveeTI.sousTitre)

    cy.get('a').click()

    //cy.contains(eDispo.conduitePriveeTI.loginH)

    cy.get('.modal-body > .dispoButtons > .dispoButton').click()

    cy.get('form.ng-untouched > .dispoButtons > .dispoButton')
    .invoke('show')
    .click()
    cy.contains(eDispo.vehiculePartenaireTI.champsObligatoire)

    cy.visit(eDispo.url)

    cy.get('[href="#/conduite/moniteur"]')
    .invoke('show')
    .click()

    cy.log('****** Vérifier les libellés en Italien conduite moniteur RDV ******')
    cy.contains(eDispo.conduiteMoniteurTI.titre)
    cy.contains(eDispo.conduiteMoniteurTI.login)
    cy.contains(eDispo.conduiteMoniteurTI.user)
    cy.contains(eDispo.conduiteMoniteurTI.pass)
    //cy.contains(eDispo.conduiteMoniteurTI.sousTitre)
    //cy.contains(eDispo.conduiteMoniteurTI.emailPartie01)
    cy.contains(eDispo.conduiteMoniteurTI.emailPartie02)

    cy.get('.dispoButton')
    .invoke('show')
    .click()
    cy.contains(eDispo.conduiteMoniteurTI.champsObligatoire)

  })
})
