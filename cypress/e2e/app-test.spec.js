const PORT = Cypress.env("port");
const BASE_URL = `http://localhost:${PORT}`;
const AMOUNT_INPUT = '[name="amount"]';
const PHONE_INPUT = '[name="phone"]';

describe("Main page", () => {
  it("Check operators on main page", () => {
    cy.visit(BASE_URL);
    cy.visit(BASE_URL + "/operator/beeline");
    cy.visit(BASE_URL + "/operator/yota");
    cy.visit(BASE_URL + "/operator/megafon");
    cy.visit(BASE_URL + "/operator/mts");
    cy.visit(BASE_URL + "/operator/tele2");
  });

  it("Check functionality of pay and back buttons", () => {
    cy.visit(BASE_URL);
    cy.get("button.mat-focus-indicator").first().click();
    cy.get("div.form-wrapper").should("be.visible");
    cy.get("span.mat-button-wrapper")
      .contains("Пополнить счет")
      .should("be.visible");
    cy.get("span.title").click();
    cy.url().should("eq", BASE_URL + "/");
  });
});

describe("Operator page", () => {
  it("Check phone mask", () => {
    cy.visit(BASE_URL);
    cy.visit(BASE_URL + "/operator/beeline");
    cy.get(PHONE_INPUT)
      .focus()
      .type("asddf", { delay: 200 })
      .should("have.value", "+7 (___) ___-__-__")
      .clear();
  });
  it("Check required validation", () => {
    cy.get(AMOUNT_INPUT).focus();
    cy.get(PHONE_INPUT).should("have.class", "ng-invalid");
    cy.get(PHONE_INPUT)
      .parents(".mat-form-field")
      .find("mat-error span")
      .contains("Phone is required");
    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("Check operator code validation", () => {
    cy.get(PHONE_INPUT).type("123123123123123123");
    cy.get(AMOUNT_INPUT).focus();
    cy.get(PHONE_INPUT)
      .parents(".mat-form-field")
      .find("mat-error span")
      .contains("Invalid operator code");
    cy.get('button[type="submit"]').should("be.disabled");
    cy.get(PHONE_INPUT)
      .clear({ timeout: 1000 })
      .type("1{backspace}{selectall}{backspace}{backspace}9002902902902", {
        delay: 100,
      });
  });
  it("Check phone validation", () => {
    cy.get(PHONE_INPUT)
      .clear()
      .type("1{backspace}{selectall}{backspace}{backspace}9002902");
    cy.get("mat-error span").contains("Invalid phone");
    cy.get('button[type="submit"]').should("be.disabled");
    cy.get(PHONE_INPUT)
      .clear({ timeout: 1000 })
      .type("1{backspace}{selectall}{backspace}{backspace}9002902902902", {
        delay: 100,
      });
  });

  it("Check amount validation", () => {
    cy.get(AMOUNT_INPUT).clear();
    cy.get(PHONE_INPUT).clear().type("9002902902", { delay: 200 });
    cy.get(AMOUNT_INPUT)
      .parents(".mat-form-field")
      .find("mat-error span")
      .contains("Amount is required");
    cy.get('button[type="submit"]').should("be.disabled");
    cy.get(AMOUNT_INPUT).clear({ timeout: 1000 }).type("1001", { delay: 100 });
    cy.get(AMOUNT_INPUT)
      .parents(".mat-form-field")
      .find("mat-error span")
      .contains("Should be no less than 1000₽");
    cy.get('button[type="submit"]').should("be.disabled");
    cy.get(AMOUNT_INPUT).clear();
    cy.get(AMOUNT_INPUT)
      .parents(".mat-form-field")
      .find("mat-error span")
      .contains("Amount is required");
    cy.get('button[type="submit"]').should("be.disabled");
    cy.get(AMOUNT_INPUT).clear().type("200");
    cy.get(AMOUNT_INPUT)
      .parents(".mat-form-field")
      .find("mat-error span")
      .should("not.exist");
    cy.get(AMOUNT_INPUT).should("not.have.class", "ng-invalid");
    cy.get('button[type="submit"]').should("not.be.disabled");
  });

  it("Check form submitting", () => {
    cy.get('button[type="submit"]').click();
    cy.get("mat-toolbar").should("exist");
    cy.wait(7000);
    cy.url().should("eq", BASE_URL + "/");
  });
});
