describe("Test CARI-INNO",()=>
{
  let cari;        // Datas for the connection to cari

  /**
   * Get before all tests the datas
   */
  before(() =>
  {
    cy.fixture('cari').then((datas) => {
      // Set cari datas
      cari = datas;
    });
  })

  /**
   * Open cari before each test and set the view port
   */
  beforeEach(() => {
    cy.visit(cari.url);
    cy.viewport(1920, 1080);
  });


  // /**
  //  * Check if the application version and the page title is the right one
  //  */
  // it("Checker la version de l'application ainsi que le titre de la page", () => 
  // {
  //   // Check if the page tite include the title
  //   cy.title().should("include", cari.pagesTitle.include)

  //   // Check the version on the window property
  //   cy.window().its('FRONTEND_APP_VERSION').should("eq", cari.version)
  // });

  // /**
  //  * Check if the mail adress contains a good content
  //  */
  // it("Checker si un utilisateur à un email correct",() =>
  // {
  //   // Login to cari
  //   cy.login(cari.connection.name, cari.connection.password);
  //   cy.log("**** Login successfull ****");

  //   // Search a plate
  //   cy.searchPlate(2000);
    
  //   // Open the associated person page
  //   cy.get('app-contexte-personne-display > :nth-child(1) > .box').click()
  //   .end()
  //   .get('#mat-expansion-panel-header-0').click();

  //   // Check the mail adress with a regex
  //   cy.get(':nth-child(2) > :nth-child(2) > span > .ng-star-inserted').invoke('text').should("exist").and('match', /[A-z|.]+@[A-z]+\.[A-z]+/);
  // });

  // /**
  //  * Check if the plate have his number
  //  */
  // it("Checker si sur une plaque aléatoire, il existe le son numéro", () => 
  // {
  //   // Login to cari
  //   cy.login(cari.connection.name, cari.connection.password);
  //   cy.log("**** Login successfull ****");

  //   // Search a plate
  //   cy.searchPlate(Random(5000));

  //   // Check if the image exists
  //   cy.get(':nth-child(2) > .portion-etage').should("exist");
  // });

  // /**
  //  * Verifiy the cari languages
  //  */
  // describe("Verification des langues de cari", ()=> 
  // {
  //   /**
  //    * Languages of the application
  //    */
  //   //const languages = cari.languages;

  //   let counter = 0;    // Counter of tests to get the right language
  //   let text;           // Text datas of the selected language

  //   /**
  //    * Login to cari and open the user options + Set the language
  //    */
  //   beforeEach(() => 
  //   {
  //     // Login to cari
  //     cy.login(cari.connection.name, cari.connection.password);
  //     cy.get('.profil-button > .mat-mdc-button-touch-target').click();

  //     // Set the languages texts array
  //     switch (cari.languages[counter]) 
  //     {
  //       // Get the texts in french
  //       case "fr":
  //         text = cari.text.fr;
  //         break;
  //       // Get the texts in german
  //       case "de":
  //         text = cari.text.de;
  //         break;
  //       default:
  //         break;
  //     }
  //   });

  //   /**
  //    * Check if the login page have all the right labels in french
  //    */
  //   it("Verification en français", () => 
  //   {
  //     // Change the language to french if the button is accessible
  //     let clicked = false;            // Define if a button was clicked
  //     cy.get(':nth-child(5) > div').find("button").each(($btn) => 
  //     {
  //       // Check if the button is able
  //       if (!$btn.prop("disabled")) 
  //       {
  //         // Check if the text of each button in the array is "Französisch" or "Français"
  //         if ($btn.text().includes("Französisch")) 
  //         {
  //           // Click the button
  //           $btn.click();
  //           // Set the variable on true
  //           clicked = true;
  //         }
  //       } // After the verification if the french button is accessible
  //     }).then(() => 
  //     {
  //       // Check if the french button has been clicked to change lang
  //       if (!clicked) 
  //       {
  //         // Click another button to hide the menu
  //         cy.get('app-header-menus-configuration-popup.ng-star-inserted > :nth-child(3)').find("button").eq(0).click();
  //       }
  //     });
      
  //     /**
  //      * Check quick access
  //      */
  //     cy.get('[title="Accès rapide"] > .mat-mdc-button-touch-target').click();
  //     cy.quickAccess(text, cari);
  //     cy.loginPage(text);
  //   })

  //    /**
  //    * Check if the login page have all the right labels in german
  //    */
  //   it("Verification en allemand", () => 
  //   {
  //     // Change the language to german if the button is accessible
  //     let clicked = false;            // Define if a button was clicked
  //     cy.get(':nth-child(5) > div').find("button").each(($btn) => 
  //     {
  //       // Check if the button is able
  //       if (!$btn.prop("disabled")) 
  //       {
  //         // Check if the text of each button in the array is "Französisch" or "Français"
  //         if ($btn.text().includes("Allemand")) 
  //         {
  //           // Click the button
  //           $btn.click();
  //           // Set the variable on true
  //           clicked = true;
  //         }
  //       } // After the verification if the german button is accessible
  //     }).then(() => 
  //     {
  //       // Check if the german button has been clicked to change lang
  //       if (!clicked) 
  //       {
  //         // Click another button to hide the menu
  //         cy.get('app-header-menus-configuration-popup.ng-star-inserted > :nth-child(3)').find("button").eq(0).click();
  //       }
  //     });
      
  //     /**
  //      * Check quick access
  //      */
  //     cy.get('[title="Schnell Zugriff"] > .mat-mdc-button-touch-target').click();
  //     cy.quickAccess(text, cari);
  //     cy.loginPage(text);
  //   })

  //     /**
  //    * Increment the counter to change language
  //    */
  //   afterEach(() => 
  //   {
  //     counter++;
  //   });
  // });

  /**
   * Try to get in the old cari in iframes to do some tests
   */
  describe("Essayer de rentrer des informations à l'intérieur d'une balise Iframe de l'ancien cari", () => 
  {
    /**
     * Go to the quick access => disposition => SCN Sion nouveau centre Expertise => Wochenplannung in Iframe
     */
    it("Aller dans l'onglet 'disposition' de l'accès rapide cliquer sur 'SCN Sion nouveau centre Expertise' et 'Wochenplannung'", () => 
    {
      // Login to cari
      cy.login(cari.connection.name, cari.connection.password);

      // Check if the button is in german or french
      cy.get('.header-menus').find("button").each(($btn) => 
      {
        // Check if the button is able
        if (!$btn.prop("disabled")) 
        {
          // Check if the text of each button in the array has for title "Accès rapide" or "Schnell Zugriff"
          if ($btn.prop("title").includes("Accès rapide") || $btn.prop("title").includes("Schnell Zugriff")) 
          {
            // Click the button
            $btn.click();
          }
        }
      });
      // Click on the disposition button
      cy.get('app-header-menus-shortcut-links.ng-star-inserted > ul > :nth-child(2) > a').click();

      // Get the Iframe content
      cy.get('.middle').find('iframe');
    });
  });

  /**
   * Generate a random number
   * @param {Maximum number which can be generated} max 
   * @returns int
   */
  function Random(max)
  {
    // Generate a random number and return it
    return Math.floor(Math.random() * max);
  }
});