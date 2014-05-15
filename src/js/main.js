/*
 * TeachBoost Business Appz
 * for Business
 */

// Base functions
//
var loadApps = {

    launcher: function() {

        // icon clicks open new tabs
        //
        $( document ).on( 'click', '.app', function(e) {
            var url = $( this ).data( 'url' );
            chrome.tabs.create({ url: url });
            return false;
        });

        // more button shows the extra apps
        //
        $( document ).on( 'click', '.more-apps', function(e) {
            $( '#home' ).toggle( 'slide', { direction: 'left' }, 350 );
            $( '#others' ).toggle( 'slide', { direction: 'right' }, 350 );
            return false;
        });

    }

}

// Run when DOM is loaded
//
document.addEventListener('DOMContentLoaded', function () {
    loadApps.launcher();
});