
describe('Google Account Test', () => {
    it('Check sign page url and verify page title', () => {
        browser.url('https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Fwww.google.com%2F&hl=en&gmb=exp&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp');
        expect(browser).toHaveTitle('Create your Google Account');
    });
    it('Sign Up', () => {
        //first page
        $('#firstName').addValue('Mathevg');
        $('#lastName').addValue('Alex');
        $('#username').addValue('mathalvg202190');
        $('[name="Passwd"]').addValue('Math0@7890');
        $('[name="ConfirmPasswd"]').addValue('Math0@7890');
        $('div#accountDetailsNext button').click();
        const phone = $('#phoneNumberId');
        expect(phone).toBeClickable();

        //second page, enter phone number
        phone.addValue(''); // please specify phone number to be sent verification code
        $('div.qhFLie button').click();

        //third page, enter verification
        let code = $('#code');
        code.waitForDisplayed({ timeout: 40000 })
        $('div.DL0QTb button').click();

        //fourth page, enter date of birth and gender
        let month = $("#month");
        let gender = $("#gender");
        month.addValue(month.selectByIndex(1));
        gender.addValue(gender.selectByIndex(1));
        $('#day').addValue('05')
        $('#year').addValue('1989');
        $('div.qhFLie button').click();

        //terms and conditions
        $('div.qhFLie button').click();

        //on completion
        expect($('.k1zIA a')).toBeDisplayed();
    });

});