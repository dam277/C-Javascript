describe('Début du parcours des eCari en production', () => {

    describe('Vérifier le canton FR', () => {

      var donneesCantonFR
      beforeEach(() => {
          cy.fixture('donneesCantonFR').then((donnees) => {
              donneesCantonFR = donnees;
          })
      })

      it('Vérifier si eDispo up', () => {
          var eDispo = donneesCantonFR.eDispo
          cy.visit(eDispo.url)

          cy.get('head meta[name="version"]').should('have.attr', 'content', donneesCantonFR.version)

          cy.get('select').select('Deutsch')
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

          cy.visit(eDispo.url)
          cy.get('select').select('Français')

          cy.log('****** Vérifier les libellés en Français ******')
          //cy.contains(eDispo.textMainPageFR.titre)
          //cy.contains(eDispo.textMainPageFR.sousTitre)
          cy.contains(eDispo.textMainPageFR.langue)
          cy.contains(eDispo.textMainPageFR.vehiculePrive)
          cy.contains(eDispo.textMainPageFR.vehiculePartenaire)
          cy.contains(eDispo.textMainPageFR.conduitePrivee)
          cy.contains(eDispo.textMainPageFR.conduiteMoniteur)

          cy.get('[href="#/circ/prive/login"]')
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
      })

      it('Vérifier eAuction up', () =>{
        var eAuction = donneesCantonFR.eAuction
        cy.visit(eAuction.url)

        cy.get('head meta[name="version"]').should('have.attr', 'content', donneesCantonFR.version)

        cy.log('****** Vérifier les libellés en FR ******')
        cy.contains(eAuction.texts.fr.titre)
        cy.contains(eAuction.texts.fr.lienNewUser)
        cy.contains(eAuction.texts.fr.lienLogin)
        cy.contains(eAuction.texts.fr.basPage1)
        cy.contains(eAuction.texts.fr.basPage2)

        cy.log('****** Vérifier les onglets et les libellés des onglets en FR ******')
        cy.get('ul li').should(($lis) => {
                expect($lis).to.have.length(eAuction.nombreOnglet)

                expect($lis.eq(0)).to.contain(eAuction.texts.fr.onglet1)
                expect($lis.eq(1)).to.contain(eAuction.texts.fr.onglet2)
                expect($lis.eq(2)).to.contain(eAuction.texts.fr.onglet3)

            })
            .invoke('show')

        cy.log('****** Vérifier les libellés longue ******')
        cy.contains(eAuction.texts.fr.lienLangue1)
        cy.contains(eAuction.texts.fr.lienLangue2)

        //cy.get('.headerLogo').
        cy.get('.header5 > img').click()
        cy.get('.close').click()

        cy.get('#tab3 > a')
        .invoke('show')
        .click()

        cy.get('#tab4 > a')
        .invoke('show')
        .click()

        cy.get('.header5 > [href="/ocn/ecari-auction/wf/app/createUser"]')
            .invoke('show')
            .click()

        cy.get('#cguCheckbox').click()

        cy.get('#buttonDiv > .red')
          .invoke('show')
          .click()

        cy.get('.yes').click()

        cy.get('[href="/ocn/ecari-auction/ui/changeLang?locale=de_ch"]').click()
        cy.wait(2000)

        cy.log('****** Vérifier les libellés en Allemand ******')
        cy.contains(eAuction.texts.de.titre)
        cy.contains(eAuction.texts.de.lienNewUser)
        cy.contains(eAuction.texts.de.lienLogin)
        cy.contains(eAuction.texts.de.basPage1)
        cy.contains(eAuction.texts.de.basPage2)

        cy.log('****** Vérifier les onglets et les libellés des onglets en Allemand ******')
        cy.get('ul li').should(($lis) => {
                expect($lis).to.have.length(eAuction.nombreOnglet)

                expect($lis.eq(0)).to.contain(eAuction.texts.de.onglet1)
                expect($lis.eq(1)).to.contain(eAuction.texts.de.onglet2)
                expect($lis.eq(2)).to.contain(eAuction.texts.de.onglet3)

            })
            .invoke('show')

        cy.log('****** Vérifier les libellés longue ******')
        cy.contains(eAuction.texts.de.lienLangue1)
        cy.contains(eAuction.texts.de.lienLangue2)

        //cy.get('.headerLogo').
        cy.get('.header5 > img').click()
        cy.get('.close').click()

        cy.get('#tab3 > a')
        .invoke('show')
        .click()

        cy.get('#tab4 > a')
        .invoke('show')
        .click()

        cy.get('.header5 > [href="/ocn/ecari-auction/wf/app/createUser"]')
            .invoke('show')
            .click()

        cy.get('#cguCheckbox').click()

        cy.get('#buttonDiv > .red')
          .invoke('show')
          .click()

        cy.get('.yes').click()
      })

      it('Vérifier eMedco up', () => {
        var eMedco = donneesCantonFR.eMedco
        cy.visit(eMedco.url)

        cy.log("**** Text dans la page à chaecker ****")
        cy.contains(eMedco.texts.titre_H_1)
        cy.contains(eMedco.texts.titre_H_2)
        cy.contains(eMedco.texts.titre_H_3)
        cy.contains(eMedco.texts.titre_H_4)
        cy.contains(eMedco.texts.titre_B_1)

        cy.get('img').invoke('attr', 'src').should('include', eMedco.logo_img)

        cy.get('.next').click()
        cy.get('.southzone > button').click()

        cy.get('#loginbox > :nth-child(2) > .ng-untouched').type(eMedco.token)
        cy.get('#gln').type(eMedco.user)
        cy.get('#password').type(eMedco.pass)
        cy.get('.next').click()
        cy.wait(2000)
        cy.log("**** Text dans la page à chaecker ****")
        cy.contains(eMedco.texts.popup_t_1)
        cy.contains(eMedco.texts.popup_t_2)
        cy.wait(1000)
        cy.get('.southzone > button').click()
      })

      it('Vérifier Permis Circulation up', () => {
        var permisCirculation = donneesCantonFR.permisCirculation
        cy.visit(permisCirculation.url)

        cy.log("**** Text dans la page à chaecker ****")
        cy.contains(permisCirculation.texts.langues.fr)
        cy.contains(permisCirculation.texts.langues.de)
        //cy.contains(permisCirculation.texts.login)
        cy.contains(permisCirculation.texts.user)
        cy.contains(permisCirculation.texts.pass)
        cy.contains(permisCirculation.texts.motPassVoir)
        //cy.contains(permisCirculation.texts.oubliePass)
      })

      it('Vérifier Recherche Détenteur up', () => {
        var recherchDetenteur = donneesCantonFR.recherchDetenteur
        cy.visit(recherchDetenteur.url)

        cy.get('head meta[name="version"]').should('have.attr', 'content', donneesCantonFR.version)

        cy.get('#mat-input-0').type(55)
        cy.get('.mat-raised-button').click()
      })
    })
});
