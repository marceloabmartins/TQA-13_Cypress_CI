beforeEach(() => {
    cy.visit('https://automacao.qacoders-academy.com.br/login');
});

describe('Login', () =>{

    it('Login com sucesso', () => {
        //cy.visit('https://automacao.qacoders-academy.com.br/login');
        cy.get('#email').type('sysadmin@qacoders.com');
        cy.get('#password').type('1234@Test');
        cy.get('#login').click();

        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/login');
        });
        
        cy.get('body > nav > button').should('be.visible');
    });

    it('Login com e-mail válido e senha inválida', () => {
        //cy.visit('https://automacao.qacoders-academy.com.br/login');
        cy.get('#email').type('sysadmin@qacoders.com');
        cy.get('#password').type('1234@');
        cy.get('#login').click();
        
        cy.get('[class="MuiAlert-message css-1xsto0d"]').should('be.visible');
        cy.get('[class="MuiAlert-message css-1xsto0d"]').should('have.text', 'E-mail e/ou senha inválidos');
    });

    it('Login com e-mail inválido e senha válida', () => {
        //cy.visit('https://automacao.qacoders-academy.com.br/login');
        cy.get('#email').type('sysadmin@qacoders.org');
        cy.get('#password').type('1234@Test');
        cy.get('#login').click();
        
        cy.get('[class="MuiAlert-message css-1xsto0d"]').should('be.visible');
        cy.get('[class="MuiAlert-message css-1xsto0d"]').should('have.text', 'E-mail e/ou senha inválidos'); 
    });
});