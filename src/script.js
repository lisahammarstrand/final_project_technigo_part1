
// getRandomTracks function used for all tracklists. Pass in the array to get three tracks from.
const getRandomTracks = tracksArray => {
    let pickedTracks = []; // reset the pickedTracks array to get three fresh ones.

    // Shuffle the array randomly
    const shuffled = tracksArray.sort(() => 0.5 - Math.random());

    // Sub-array of first 3 elements after list is shuffled. Does not include end argument.
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
    document.getElementById("energyContainer").classList.toggle("hide"); //Hide and show energyContainer since toggle (off/on) class "hide"

    console.log(feelTheEnergy); // To check what data we have. energy.audio_features is the array.
    let randomTracks = getRandomTracks(feelTheEnergy.audio_features); // Call getRandomTracks to select three out of an array. Save those three to a new array called randomTracks.

    randomTracks.forEach(track => {
        let trackSource = `https://open.spotify.com/embed/track/${track.id}`; // More clear to create trackSource like this, adds id at end.
        document.getElementById(
            "energyContainer"
        ).innerHTML += `<iframe src=${trackSource} width=“300" height=80”
    frameborder=“0" allowtransparency=“true” allow=“encrypted-media”></iframe>`;
    });
};

document.getElementById("feelgoodButton").onclick = showFeelGoodTracks;
document.getElementById("blueButton").onclick = showBlueTracks;
document.getElementById("danceButton").onclick = showDanceTracks;
document.getElementById("energyButton").onclick = showEnergyTracks; // Click to start function.

const on = () => {
    document.getElementById("about-overlay").style.display = "block";
}

const off = () => {
    document.getElementById("about-overlay").style.display = "none";
}
