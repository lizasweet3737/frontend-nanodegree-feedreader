
$(function() {
    /* This suite is all about the RSS feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This tests to make sure that the allFeeds variable has been 
         * defined and that it is not empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url defined',function(){
            for(let feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name defined',function(){
            for(let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

    describe ('The Menu', function(){
        /* This ensures the menu element is
         * hidden by default.
         */
        it('is hidden',function(){
            const body = document.querySelector('body');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* This ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('menu toggles',function(){
            const body = document.querySelector('body');
            const menu=document.querySelector('.menu-icon-link');
            
            menu.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            menu.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
});

    describe ('Initial Entries', function(){
        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        beforeEach(function(done) {
            loadFeed(0,done);
            });
        
        it('contain at least one .entry element', function(done) {
            const feed = $('.feed .entry');
            expect(feed.length).toBeGreaterThan(0);
            done();
        });
    });
        

describe('New Feed Selection',function(){
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

        var oldFeed;
        var newFeed;

         beforeEach(function(done) {
            $('.feed').empty();
            loadFeed(0, function(){
                oldFeed = $('.feed').html();
                loadFeed(1, done);
            });

         });

        it('content changes', function() {
            newFeed = $('.feed').html();
            expect(oldFeed).not.toBe(newFeed);
        });

     });
}());
