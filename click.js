/* This is my comment here
However, this is supposed to be working for branch iss53`
 */

var nav = {

turnPage: function()
    {
        $('.pageOne').addClass('pageOneActive');
        $('.pageTwo').addClass('pageTwoActive');

        
    },

    goBack: function()
    {
        $('.pageOne').removeClass('pageOneActive');
        $('.pageTwo').removeClass('pageTwoActive');

        
    },
}
