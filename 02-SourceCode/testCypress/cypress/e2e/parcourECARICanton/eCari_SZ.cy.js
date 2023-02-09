describe('Vérifier le canton SZ', () =>{
  var donneesCantonSZ
  beforeEach(() => {
      cy.fixture('donneesCantonSZ').then((donnees) => {
          donneesCantonSZ = donnees;
      })
  })


  it('Vérifier eAuction up', () =>{
    var eAuction = donneesCantonSZ.eAuction
    cy.visit(eAuction.url)

    cy.get('head meta[name="version"]').should('have.attr', 'content', donneesCantonSZ.version)

    cy.get('.header5 > img').click()
    cy.get('.close').click()

    cy.get('#tab1 > a')
    .invoke('show')
    .click()

    cy.log('****** Vérifier les libellés en Allemand ******')
    cy.contains(eAuction.texts.de.titre)
    cy.contains(eAuction.texts.de.lienNewUser)
    cy.contains(eAuction.texts.de.lienLogin)

    cy.log('****** Vérifier les onglets et les libellés des onglets en Allemand ******')
    cy.get('ul li').should(($lis) => {
            expect($lis).to.have.length(eAuction.nombreOnglet)

            expect($lis.eq(0)).to.contain(eAuction.texts.de.onglet1)
            expect($lis.eq(1)).to.contain(eAuction.texts.de.onglet2)

        })
        .invoke('show')

        cy.get('#tab3 > a').invoke('show').click()

        cy.get('.header5 > [href="/ecari-auction/wf/app/createUser"]').click()

        cy.get('#cguCheckbox').click()

        cy.get('#buttonDiv > .green').click()

        cy.get('#buttonDiv > .red').click()

        cy.get('.yes').click()
})


it('Vérifier eAdresse up', () => {
      var eAdresse = donneesCantonSZ.eAdresse
      cy.visit(eAdresse.url).as('eAdresse')

      cy.get('head meta[name="version"]').should('have.attr', 'content', donneesCantonSZ.version)

      cy.log('****** Vérifier les libellés de la page login ******')

      cy.contains(eAdresse.texts.textsLoginPage.titre)
      cy.contains(eAdresse.texts.textsLoginPage.text)

      cy.get('#boutonDiv div').should(($divs) =>{
          expect($divs).to.have.length(0)
      })


      cy.get('.buttonIdentify')
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

        cy.get('a').click()

        cy.get('.M-cell > #change1').click()

        cy.get('#buttonDiv > .green').click()

        cy.get('#buttonDiv > .red').click()

        cy.get('.yes').click()

      })

      it('Vérifier eMedco up', () => {
        var eMedco = donneesCantonSZ.eMedco
        cy.visit(eMedco.url).as('eMedco')
        cy.get('.next').click()

        cy.get('head meta[name="version"]').should('have.attr', 'content', donneesCantonSZ.version)

        cy.get('.southzone > button').click()
        /*
        cy.log('****** Vérifier les libellés de la page login ******')
        cy.contains("AUTHENTIFIZIERUNG GESCHEITERT")
        cy.contains("Die Informationen des Arztes sind ungültig.")
        */

        cy.get('#loginbox > :nth-child(2) > .ng-untouched').type("SZ56666")
        cy.get('#gln').type("TOTO")
        cy.get('#password').type("titi")

        cy.get('.next').click()

        cy.get('.southzone > button').click()

      })

})
