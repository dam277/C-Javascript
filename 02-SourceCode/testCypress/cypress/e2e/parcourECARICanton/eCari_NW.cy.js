describe('Vérifier le canton NW', () =>{

  var donneesCantonNW
  beforeEach(() => {
      cy.fixture('donneesCantonNW').then((donnees) => {
          donneesCantonNW = donnees;
      })
  })

  it('Vérifer eAuction up', () =>{
    var eAuction = donneesCantonNW.eAuction
    cy.visit(eAuction.url)

    cy.get('head meta[name="version"]').should('have.attr', 'content', donneesCantonNW.version)

    cy.log('****** Vérifier les libellés en Allemand ******')
    cy.contains(eAuction.texts.de.titre)
    cy.contains(eAuction.texts.de.lienNewUser)
    cy.contains(eAuction.texts.de.lienLogin)
    cy.contains(eAuction.texts.de.textPlaque01)

    cy.log('****** Vérifier les onglets et les libellés des onglets en Allemand ******')
    cy.get('ul li').should(($lis) => {
            expect($lis).to.have.length(eAuction.nombreOnglet)

            expect($lis.eq(0)).to.contain(eAuction.texts.de.onglet1)
            expect($lis.eq(1)).to.contain(eAuction.texts.de.onglet2)
            expect($lis.eq(2)).to.contain(eAuction.texts.de.onglet3)
        })
        .invoke('show')

      cy.get('#tab4 > a')
      .invoke('show')
      .click()

      cy.contains(eAuction.texts.de.textPlaque02)
      cy.contains(eAuction.texts.de.textPlaque03)

      cy.get('.header5 > [href="/ecari-auction/wf/app/createUser"]').click()

      cy.get('#cguCheckbox').click()

      cy.get('#buttonDiv > .red')
        .invoke('show')
        .click()

      cy.get('.yes').click()

      cy.get('.header5 > [href="/ecari-auction/bootstrap/auth"]').click()

      cy.get('#quit').click()

    })

    it('Vérifier eMedco up', () =>{

      var eMedco = donneesCantonNW.eMedco
      cy.visit(eMedco.url)


      cy.log('****** Vérifier les libellés en Allemand ******')
      cy.contains(eMedco.texts.de.titre01)
      cy.contains(eMedco.texts.de.titre02)
      cy.contains(eMedco.texts.de.titre03)
      cy.contains(eMedco.texts.de.login)
      cy.contains(eMedco.texts.de.bouton)
      cy.contains(eMedco.texts.de.basPage01)
      cy.contains(eMedco.texts.de.basPage02)

      cy.get('#loginbox div').should(($divs) => {
        expect($divs).to.contain(eMedco.texts.de.login)
        expect($divs).to.have.length(5)
      })

      cy.get('.next').click()

      cy.log('****** Vérifier les libellés en Allemand de la popup si pas de données user pass et token ******')
      cy.contains(eMedco.texts.de.popup.titre)
      cy.contains(eMedco.texts.de.popup.text)
      cy.contains(eMedco.texts.de.bouton)

      cy.get('.southzone > button').click()
    })

/* plus de edispo client que dispo internet
    it('Vérifier si eDispo up', () => {
        var eDispo = donneesCantonNW.eDispo
        cy.visit(eDispo.url)

        cy.get('head meta[name="version"]').should('have.attr', 'content', donneesCantonNW.version)

        cy.log('****** Vérifier les libellés en Allemand ******')
        //cy.contains(eDispo.textMainPageDE.titre)
        //cy.contains(eDispo.textMainPageDE.sousTitre)
        cy.contains(eDispo.textMainPageDE.vehiculePrive)
        cy.contains(eDispo.textMainPageDE.vehiculePartenaire)
        cy.contains(eDispo.textMainPageDE.conduitePrivee)
        cy.contains(eDispo.textMainPageDE.conduiteMoniteur)

        cy.get('[href="#/circ/prive"]')
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

    })*/
})
