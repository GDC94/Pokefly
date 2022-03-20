

describe("HomeScreen:Pokemons", () => {
    it("Debería mostrar todos los pokemones que traemos de la api", () => {
        cy.visit("/");
    }),
    it('Debería lucir correctamente en el viewport de un iphone 5', () => {

        cy.visit('/')
        cy.viewport(320, 480)
        cy.viewport('iphone-5')
      
      });
})