it('ルートパスに遷移できるか', () => {
  cy.visit('/');
});

describe('Header Test', () => {
  it('ヘッダーからページタイトルをクリックし、「ホーム」の画面に遷移できること', () => {
    cy.visit('/');
    cy.get('[data-test-id="home-header-link"]').click();
    cy.url().should('include', '/');
  });
});

describe('Search Test', () => {
  it('検索フォームに入力しEnterを押すことでsearchページに遷移すること', () => {
    cy.visit('/');
    cy.get('[data-test-id="search-link"]').eq(1).type('Hello{enter}');
    cy.url().should('include', '/search');
  });
});
