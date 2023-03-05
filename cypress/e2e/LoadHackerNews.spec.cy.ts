describe("Hacker NewsRoom - DashboardPage", () => {
  it("should render 3 news", () => {
    const mockedResponse = [1, 2, 3];

    cy.intercept(
      "GET",
      "https://hacker-news.firebaseio.com/v0/topstories.json",
      mockedResponse
    ).as("getTopStories");

    cy.visit("/");

    cy.contains("Woz Interview: the early days of Apple").should("exist");
    cy.contains("A Student's Guide to Startups").should("exist");
    cy.contains("Y Combinato").should("exist");
  });
});
