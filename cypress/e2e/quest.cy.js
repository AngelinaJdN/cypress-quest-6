// <reference types="cypress" />
import { MailSlurp } from "mailslurp-client";

describe('Inscription and reset password', () => {
  it.skip('Inscription', () => {
    cy.visit('https://preprod.backmarket.fr/fr-fr')
    cy.get('[data-qa="accept-cta"]').click() // Accept cookies
    cy.get('[data-test="icon-avatar"]').click()
    cy.get('#email').type('569652dd-6eed-4dc6-ae1a-68c05446d1f2@mailslurp.com')
    cy.get('#submit-login').click()
    cy.get('#password').type('Morlina123')
    cy.get('#first-name').type('Angelina')
    cy.get('#last-name').type('do Na')
    cy.get('#submit-signup').click() //Submit form to create account
  });
      
  it('Reset password', () => {
    cy.visit('https://preprod.backmarket.fr/fr-fr/password-reset')
    cy.get('[data-qa="accept-cta"]').click() //Accept cookies
    cy.get('#email').type('569652dd-6eed-4dc6-ae1a-68c05446d1f2@mailslurp.com')
    cy.get('[data-qa="password-reset-submit-button"]').click() //Send email to reset password
    cy.mailslurp()
      .then(mailslurp => mailslurp.waitForLatestEmail('569652dd-6eed-4dc6-ae1a-68c05446d1f2', 4000))
      .then(email => cy.document().invoke('write', email.body)) //Get the body of the last received email
    cy.get('.t_pt20px > a').click()
    cy.get('#newPassword').type('Morlina-159')
    cy.get('#newPasswordConfirmation').type('Morlina-159')
    cy.get('.MkLAMntR').click() //Validate creation of new password
    cy.get('#email').type('569652dd-6eed-4dc6-ae1a-68c05446d1f2@mailslurp.com')
    cy.get('#submit-login').click()
    cy.get('#password').type('Morlina-159')
    cy.get('#submit-login').click() //Connect with email and new password
    cy.url().should('eql', 'https://preprod.backmarket.fr/fr-fr')
    });
});