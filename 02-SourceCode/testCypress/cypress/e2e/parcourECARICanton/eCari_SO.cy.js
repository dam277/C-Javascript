describe('Début du parcours des eCari en production', () => {

    describe('Vérifier le canton SO', () => {

      var donneesCantonSO
      beforeEach(() => {
          cy.fixture('donneesCantonSO').then((donnees) => {
              donneesCantonSO = donnees;
          })
      })

      it('Vérifier eAuction up', () =>{
        var eAuction = donneesCantonSO.eAuction
        cy.visit(eAuction.url)

        cy.get('head meta[name="version"]').should('have.attr', 'content', donneesCantonSO.version)

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

      it('Vérifier si eDispo up', () =>{
          var eDispo = donneesCantonSO.eDispo
          cy.visit(eDispo.url)

          cy.get('head meta[name="version"]').should('have.attr', 'content', donneesCantonSO.version)

          cy.log('****** Vérifier les libellés en Allemand ******')
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

          cy.get('[href="#/circ/garagiste"]')
          .invoke('show')
          .click()

          cy.log('****** Vérifier les libellés en Allemand véhicule partenaire RDV ******')
          cy.contains(eDispo.vehiculePartenaireDE.titre)
          cy.contains(eDispo.vehiculePartenaireDE.login)
          cy.contains(eDispo.vehiculePartenaireDE.user)
          cy.contains(eDispo.vehiculePartenaireDE.pass)
          cy.contains(eDispo.vehiculePartenaireDE.sousTitre)
          cy.contains(eDispo.vehiculePartenaireDE.emailPartie01)
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
          cy.contains(eDispo.conduiteMoniteurDE.emailPartie01)
          cy.contains(eDispo.conduiteMoniteurDE.emailPartie02)

          cy.get('.dispoButton')
          .invoke('show')
          .click()
          cy.contains(eDispo.conduiteMoniteurDE.champsObligatoire)

      })

    })
});
