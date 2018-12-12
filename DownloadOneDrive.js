async function DownloadPhoto(_callback)
{
    btnDownload = document.body.querySelectorAll('div.ms-OverflowSet-item > button[name="Download"]');
    if( btnDownload.length <= 0 )
    {
        return false;
    }
    btnDownload = btnDownload[1]; // select second element

    console.log("Performing download...");
    btnDownload.click()

    btnCount = document.body.querySelectorAll('button[data-automationid="oneUpPageCount"]');
    if( btnCount.length <= 0 )
    {
        return false;
    }
    btnCount = btnCount[0].innerText;

    console.log("Count: "+btnCount);

    bMorePhotos = parseInt( btnCount.split(" ")[2] ) > parseInt( btnCount.split(" ")[0] )
    sMorePhotos = bMorePhotos ? "yes" : "no";    
    console.log("More photos: "+sMorePhotos);

    if( bMorePhotos )
    {
        btnNext = document.body.querySelectorAll('button[data-automationid="nextButton"]');
        console.log("Clicking next button...");
        btnNext[0].click()

        // do some asynchronous work
        // and when the asynchronous stuff is complete
        _callback();
        
        return true;
    }
    else
    {
        console.log("No more photos to load. Done.");
        return false;
    }
}

function DoDownloadPhoto() {
    DownloadPhoto(function() {
        console.log('Huzzah, I\'m done!');
    });
};
