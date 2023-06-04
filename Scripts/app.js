function downloadFile(fileName){
    switch (fileName) {
        case "logboek":
            window.location.href = "Docs/logboek.pdf";
            break;
        case "project":
            window.location.href = "Docs/depo-full.zip";
            break;
    }
}