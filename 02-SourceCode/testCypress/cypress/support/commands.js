// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * Add a custom command to login
 */
Cypress.Commands.add("login", (name, password) => 
{
    cy.url().should("include", "/login");

    // Login to cari
    cy.get('form').within(() => 
    {
        // Type into the fields
        // Fill the username field
        cy.get('input[name="username"]').type(name)

        // Fill the password field
        cy.get('input[name="password"]').type(password)

        // Submit the form
        cy.root().submit();
    });
});

/**
 * Add a custom command to logout
 */
Cypress.Commands.add("logout", () => 
{
    // Click the logout button
    cy.get('.logout > .mat-mdc-button-touch-target').click();   
});

/**
 * Add a custom command to Search a plate
 */
Cypress.Commands.add("searchPlate", (number) => 
{
    // Search a numberplate on cari
    cy.get('#recherchePlaque').should("be.visible").type(number);
    cy.get('.recherche-submit > .mdc-icon-button > .mat-mdc-button-touch-target').click();
    cy.wait(5000);
    cy.log("**** Redirection successfull ****");

    // Check if the url is automatically set to the plate or the list
    cy.url().then((url) => 
    {
        // Check if the url is the right one
        if(url === "https://carisrvvs.networkers.ch:8444/frontend/search/plates/results")
        {
            // Open the plate page
            cy.log("**** Page of plates ****");
            cy.get(':nth-child(1) > .cdk-column-plaque > .hover-highlight > .plaque').click();
            cy.wait(5000)
        }
    });
});

/**
 * Add custom command to verifiy the login page
 */
Cypress.Commands.add("loginPage", (text) => 
{
    // Logout to get the login page
    cy.logout();

    // Check the label on the page
    cy.contains(text.loginPage.authentification);
    cy.contains(text.loginPage.username);
    cy.contains(text.loginPage.password);
    cy.contains(text.loginPage.login);
});

/**
 * Add custom command to verifiy the quick access
 */
Cypress.Commands.add("quickAccess", (text, cari) => 
{
    // Check the labels of the lis
    cy.contains(text.quickAccess.title);

    // Check the label on the nav
    cy.get('app-header-menus-shortcut-links.ng-star-inserted ul li').should(($lis => 
    {
        // Check if all the list is set
        expect($lis).to.have.length(cari.quickAccess.tabNumber);

        expect($lis.eq(0)).to.contain(text.quickAccess.nav1);
        expect($lis.eq(1)).to.contain(text.quickAccess.nav2);
        expect($lis.eq(2)).to.contain(text.quickAccess.nav3);
        expect($lis.eq(3)).to.contain(text.quickAccess.nav4);
        expect($lis.eq(4)).to.contain(text.quickAccess.nav5);
        expect($lis.eq(5)).to.contain(text.quickAccess.nav6);
    }));

    // Close menu
    cy.get('app-header-menus-shortcut-links.ng-star-inserted > ul > :nth-child(2) > a').click();
});
