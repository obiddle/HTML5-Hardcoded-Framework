/* */

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