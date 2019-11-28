
// getRandomTracks function can be used for all the tracklists. Just pass in the array you want to get three tracks from.
const getRandomTracks = tracksArray => {
    let pickedTracks = []; // reset the pickedTracks array so we get three fresh ones.

    // Shuffle the array randomly
    const shuffled = tracksArray.sort(() => 0.5 - Math.random());

    // Get sub-array of first 3 elements after we shuffled the list. Does not include the end argument.
    pickedTracks = shuffled.slice(0, 3);
    return pickedTracks;
};


const showFeelGoodTracks = () => {
    document.getElementById("feelgoodContainer").innerHTML = "";
    document.getElementById("feelgoodContainer").classList.toggle("hide");

    console.log(feelGood);
    let randomTracks = getRandomTracks(feelGood.audio_features);

    randomTracks.forEach(track => {
        let trackSource = `https://open.spotify.com/embed/track/${track.id}`;
        document.getElementById(
            "feelgoodContainer"
        ).innerHTML += `<iframe src=${trackSource} width=“300" height=80”
    frameborder=“0" allowtransparency=“true” allow=“encrypted-media”></iframe>`;
    });
};

const showBlueTracks = () => {
    document.getElementById("blueContainer").innerHTML = "";
    document.getElementById("blueContainer").classList.toggle("hide");

    console.log(feelBlue);
    let randomTracks = getRandomTracks(feelBlue.audio_features);

    randomTracks.forEach(track => {
        let trackSource = `https://open.spotify.com/embed/track/${track.id}`;
        document.getElementById(
            "blueContainer"
        ).innerHTML += `<iframe src=${trackSource} width=“300" height=80”
    frameborder=“0" allowtransparency=“true” allow=“encrypted-media”></iframe>`;
    });
};

const showDanceTracks = () => {
    document.getElementById("danceContainer").innerHTML = "";
    document.getElementById("danceContainer").classList.toggle("hide");

    console.log(feelLikeDancing);
    let randomTracks = getRandomTracks(feelLikeDancing.audio_features);

    randomTracks.forEach(track => {
        let trackSource = `https://open.spotify.com/embed/track/${track.id}`;
        document.getElementById(
            "danceContainer"
        ).innerHTML += `<iframe src=${trackSource} width=“300" height=80”
    frameborder=“0" allowtransparency=“true” allow=“encrypted-media”></iframe>`;
    });
};

const showEnergyTracks = () => {
    document.getElementById("energyContainer").innerHTML = ""; // reset the DOM
    document.getElementById("energyContainer").classList.toggle("hide"); //detta gömmer och visar energyContainer eftersom vi sätter av och på klassen "hide"

    console.log(feelTheEnergy); // bara för att se vilken data vi har energy.audio_features är själva arrayen.
    let randomTracks = getRandomTracks(feelTheEnergy.audio_features); // call getRandomTracks to select three out of an array. Save those three to a new array called randomTracks

    randomTracks.forEach(track => {
        let trackSource = `https://open.spotify.com/embed/track/${track.id}`; // tydligare att skapa trackSource såhär, lägger till id på slutet
        document.getElementById(
            "energyContainer"
        ).innerHTML += `<iframe src=${trackSource} width=“300" height=80”
    frameborder=“0" allowtransparency=“true” allow=“encrypted-media”></iframe>`;
    });
};

document.getElementById("feelgoodButton").onclick = showFeelGoodTracks;
document.getElementById("blueButton").onclick = showBlueTracks;
document.getElementById("danceButton").onclick = showDanceTracks;
document.getElementById("energyButton").onclick = showEnergyTracks; // Klicka på knappen och start funktionen.

function on() {
    document.getElementById("overlay2").style.display = "block";
}

function off() {
    document.getElementById("overlay2").style.display = "none";
}
