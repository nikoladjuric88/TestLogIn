describe("gmail login", function() {
    browser.waitForAngularEnabled(false);
    browser.get("https://www.google.rs/");

    it("to test login into gmail account", function() {
        element(by.css('.gb_P')).click();
    });

    it("enter e-mail", function() {
        element(by.id('identifierId')).sendKeys('nikola.djuric.8@gmail.com');
    });

    it('click next btn', function() {
        element(by.css('.RveJvd')).click();
        browser.sleep(1500);
    });

    it("enter password", function() {
        element(by.css('.zHQkBf')).sendKeys('password');
    });

    it('click next btn again', function() {
        element(by.css('.RveJvd')).click();

    })
});

/*

  it('Should find corect video', function() {    
      element.all(by.css(".yt-shelf-grid-item")).get(0).click();
  });



describe ("input word in google translate", function() {

    it("should able on correct page", function() {
       browser.waitForAngularEnabled(false); 
       browser.get("https://translate.google.com/");
       expect(browser.getCurrentUrl()).toContain('translate');  
    });
    
    it ("should precise language and translate given word", function() {     
    element(by.id('gt-sl-gms')).click();    
    element(by.id(':m')).click();  
    element(by.id('gt-tl-gms')).click();
    element(by.id(':54')).click();
    element(by.id('source')).sendKeys('book');
    browser.sleep(3000);
    });

});





describe('adopt an animal', function() {

    it('should be able to adopt', function() {
       browser.get('http://www.thetestroom.com/jswebapp');
       expect(browser.getCurrentUrl()).toContain('jswebapp');
       expect(browser.getCurrentUrl()).toEqual('http://www.thetestroom.com/jswebapp');

       element(by.model('person.name')).sendKeys('napisati nesto');
       element(by.binding('person.name')).getText().then(function(text) {
        console.log(text);
       });
       element(by.buttonText('CONTINUE')).click();
       element(by.model('animal')).$('[value="1"]').click(); 
       element(by.partialButtonText('CONT')).click();
    });

});
  



    describe('angularjs homepage todo list', function() {
      it('should add a todo', function() {
        browser.get('https://angularjs.org');

        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('[value="add"]')).click();

        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write first protractor test');

        // You wrote your first test, cross it off the list
        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);
      });
    });

    describe('Jarvis caller', function () {
      var callButton;
     
      beforeEach(function () {
        browser.get('');
        // Gets the button to call Jarvis
        callButton = element(by.tagName('button'));
      });
    });

    var util = require('require');

describe(' To test the animal adoption flow', function() {

    beforeEach(function() {
        browser.get('http://www.thetestroom.com/jswebapp/index.html');
    });

    it('Should be able to adopt an animal', function() {
        element(by.model('person.name')).sendKeys('I will subscribe');
        var dinamicText = element(by.binding('person.name')).getText();
        expect(dinamicText).toBe('I will subscribe');
        element(by.buttonText('CONTINUE')).click();

        element(by.model('animal')).$('[value="2"]').click();    
        element(by.buttonText('CONTINUE')).click();

        var thankYouText = element(by.css('h1')).getText();  
        expect(thankYouText).toBe('Thank you');
    });
});
    */