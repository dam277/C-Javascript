/**
 * Main test which implements examples to manage cypress
 */
describe(("Exemples avec cypress de comment gérer certains concepts"), () =>
{
    let cypressExamples = null;     // All datas of the json file

    /**
     * Get before all tests the datas
     */
    before(() =>
    {
        cy.fixture('cypressExamples').then((datas) => 
        {
            // Set cari datas
            cypressExamples = datas;
        });
    });

    /**
     * Send datas from a form
     */
    describe(("CYPRESSFORM.PHP => Envoi de données à l'aide d'un formulaire"), () =>
    {
        let cypressForm;        // Datas for the form

        /**
         * Get before all tests the datas
         */
        before(() =>
        {
            cypressForm = cypressExamples.cypressForm;
        })

        /**
         * Open the web page
         */
        beforeEach(() => 
        {
            cy.visit(cypressForm.url);
            cy.viewport(1920, 1080);
        });

        /**
         * Send datas from a form with datas
         */
        describe("Récupération d'un formulaire pour y entrer des informations", () => 
        {
            /**
             * Get a form with a classic method
             */
            it("Classique", () => 
            {
                /**
                 * Generate no errors
                 */
                cy.log("Ne génère pas d'erreurs, l'utilisation de l'aide sur cypress est fiable")
                cy.get(':nth-child(2) > #username').type(cypressForm.login.username);

                /**
                 * Generate error, there is two same form
                */
                cy.log("Génère une erreur dû au fait qu'il en existe deux les mêmes")
                cy.get('input[name="password"]').type(cypressForm.login.password)
            });

            /**
             * Get a form with the "withIn" function
             */
            it("A l'aide de la fonction 'withIn et intercepter les données en les vérifiant'", () => 
            {
                let requestDatas;               // Datas send to the form got on the request

                /**
                 * Get the form and write the datas to submit
                 */
                // Login to website
                cy.log("Récupère un formulaire demandé et écrit les données dans celui-ci")
                cy.get('#form1').within(($form) => 
                {
                    // Type into the fields
                    // Fill the username field
                    cy.get('input[name="username"]').type(cypressForm.login.username)

                    // Fill the password field
                    cy.get('input[name="password"]').type(cypressForm.login.password)

                    // Submit the form
                    cy.root().submit();
                });
            });
        });
    });
});