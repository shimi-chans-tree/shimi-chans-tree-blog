it('ルートパスに訪問できるか', () => {
  cy.visit('/');
});

describe('Header Test', () => {
  it('ヘッダーからページタイトルをクリックし、「ホーム」の画面に遷移できること', () => {
    cy.visit('/');
    cy.get('[data-test-id="home-header-link"]').click();
    cy.url().should('include', '/');
  });
});
