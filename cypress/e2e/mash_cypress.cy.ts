describe("create a new service", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("information", () => {
    cy.get("[data-test='hero-heading']").contains(
      "Find in-depth information about Next.js features and API."
    );
  });

  it("test 2nd", () => {
    cy.get("[data-test='hero-heading']").contains(
      "Find in-depth information about Next.js features and API."
    );
  });

  // it.only("the features on the homepage are correct", () => {
  //   cy.get("dt")
  //     .eq(0)
  //     .contains(/4 courses/i)
  //   cy.get("dt").eq(1).contains("25+ Lessons")
  //   cy.get("dt")
  //     .eq(2)
  //     .contains(/free and open/i)
  // })
});
