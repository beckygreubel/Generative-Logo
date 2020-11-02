let logoContainer = document.getElementById("logoContainer");
let mySVG = document.getElementById("svg");
let perRangeParent = document.getElementById("perRangeParent");
let ranges = ["Palmyra", "MtSneffels", "LaJunta", "Wilson", "Uncompahgre", "BridalVeil"]
let numberofRanges = document.getElementById("range-value")
let maxNum = 4;
let baseHue = 0;
let baseSaturation = 0;
let baseLightness = 0;
let ticketSelected = false;
let svgCounter = 0;

function myTicketType(){
    let chosenTicket = document.getElementById("ticketType").value
    if (chosenTicket == "type1"){
        baseHue = 10;
        baseSaturation = 66;
        baseLightness = 55;
    }
    else if (chosenTicket == "type2"){
        baseHue = 25;
        baseSaturation = 98;
        baseLightness = 49;
    }
    else if (chosenTicket == "type3"){

        baseHue = 36;
        baseSaturation = 78;
        baseLightness = 56;
    }
    else if (chosenTicket == "type4"){
        baseHue = 338;
        baseSaturation = 63;
        baseLightness = 47;
    }

    else if (chosenTicket == "press"){
        baseHue = 75;
        baseSaturation = 45;
        baseLightness = 45;
    }

    else if (chosenTicket == "invitee"){
        baseHue = 203;
        baseSaturation = 54;
        baseLightness = 40;
    }

    else if (chosenTicket == "volunteer"){
        baseHue = 10;
        baseSaturation = 91;
        baseLightness = 52;
    }
    if (ticketSelected == false){
        myMountainRange("mountainRanges0");
        ticketSelected = true;
        document.getElementById("numRanges").disabled = false;
        document.getElementById("mountainRanges0").disabled = false;
    }
}

let numRanges = document.getElementById("numRanges")

numRanges.oninput = function(){
    let parentQs = document.getElementById("perRange");
    numberofRanges.innerHTML = this.value;
    if (this.value > 1){
        for (let i = 0; i < this.value-1; i ++){
            let clone = parentQs.cloneNode(true);
            clone.id = "perRange" + i.toString();
            clone.childNodes[5].id = "mountainRanges" + (i+1).toString();
            let existingClone = document.getElementById(clone.id)
            if (!existingClone){
                perRangeParent.appendChild(clone);
            }
            parentQs = clone;
            if (svgCounter == (i+1)){
                myMountainRange("mountainRanges" + (i+1).toString());
            }
        }
    }
    for (let j = this.value-1; j < maxNum-1; j ++){ 
        let cloneId = "perRange" + j.toString();
        let existingClone = document.getElementById(cloneId);
        if (existingClone){
            for (let range of ranges){
                let rangeId = range + "mountainRanges" + (j+1);
                let existingRange = document.getElementById(rangeId);
                if (existingRange) {
                    existingRange.parentNode.removeChild(existingRange);
                    svgCounter -= 1;
                }
            }
            existingClone.parentNode.removeChild(existingClone);
        }
     }
}

function myMountainRange(id) {
    let chosenRange = document.getElementById(id).value;
    let rangeNum = parseInt(id[id.length-1]);

    if (chosenRange == "Palmyra"){
        logoContainer.innerHTML += (`<svg version="1.1" id="Palmyra` + id + `" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 ` + (300 - (50*rangeNum)) + `" style="enable-background:new 0 0 400 300;" xml:space="preserve"><path class="st0" style="fill:hsl(` + baseHue + `, ` + baseSaturation + `%, ` + (baseLightness - (10*rangeNum)) + `%);" d="M400,171.7c-2,0-43.1-34.7-46.1-36c-3-1.3-6-13.1-7-17c-1-3.9-4-1.3-6-3.9c-2-2.6-8-3.9-10-2.6 s-61-47.1-63-48.4c-2-1.3-7-11.8-9-14.4s-1-11.8-2-13.1c-1-1.3-12-9.2-14-9.2s-12-15.7-15-15.7s-7,3.9-8,5.2c-1,1.3-4,0-5,0 s-4,2.6-6,3.9s-10-5.2-12-5.2s-7-5.2-9-5.2s-21,14.4-24,14.4c-3,0-6,2.6-7,3.9s-8,0-12,0c-4,0-10,11.8-14,11.8c-4,0-2-11.8-4-11.8 s-3,9.2-4,10.5s-2-9.2-4-9.2s-6,13.1-9,14.4c-3,1.3-8-23.6-14-24.9c-6-1.3-14,5.2-14,6.5c0,1.3-3,0-7,0c-4,0-6,13.1-6,14.4 c0,1.3-13,1.3-16,0c-3-1.3-17,6.5-18,6.5s-3-6.5-5-7.9s-5,0-6,1.3c-1,1.3-5-10.5-9-10.5S0,37.5,0,37.5L0.1,300H400V171.7z"/></svg>`);
        let newPalmyraId = "Palmyra" + id.toString();
        let newPalmyra = document.getElementById(newPalmyraId);
        newPalmyra.style.top = (50*rangeNum).toString() + "px"
        newPalmyra.style.zIndex = rangeNum;
        svgCounter += 1;
    }

    // else if (chosenRange == "MtSneffels"){
    //     logoContainer.innerHTML += (`<svg version="1.1" id="MtSneffels` + id + `" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 ` + (300 - (50*rangeNum)) + `" style="enable-background:new 0 0 400 300;" xml:space="preserve"><path class="st0" d="M399.9,14.9c0,5-8,4.8-10,4.8s-3,7.1-6,7.1s-3-1.4-5-1.4s-8,1.4-9,2.8c-1,1.4-9,0-11,0s-1,1.4-3,2.8 s-1-1.4-3-1.4s-10,4.3-11,5.7s-9-5.7-13-5.7s-5,5.7-6,7.1c-1,1.4-6,0-7,1.4c-1,1.4-3-2.8-5-2.8s-5,5.7-6,7.1c-1,1.4-10,0-13,0 s-8,4.3-10,5.7c-2,1.4-7-4.3-9-4.3s-11-1.4-13-1.4s-4,1.4-5,1.4s-5-4.3-6-4.3s-1,2.8-2,2.8s-7-12.8-9-12.8s-3,2.8-4,2.8 s-1-2.8-2-2.8s-1,2.8-2,2.8s-2-1.4-4-1.4s-5-8.5-6-8.5s-1,0-2,1.4c-1,1.4-13-14.2-16-14.2s-13,14.2-14,14.2s-4,4.3-5,5.7 c-1,1.4-4,0-5,1.4s-2-4.3-3-4.3s-4,2.8-5,4.3s-5,1.4-5,2.8c0,1.4-1-2.8-3-2.8s-11,11.3-12,11.3s-5-5.7-6-5.7s0,0-2,1.4 c-2,1.4-6-4.3-9-4.3s-3-1.4-5-1.4c-2,0-2,0-3,1.4c-1,1.4-9,1.4-10,1.4s-6-8.5-8-8.5s-5,1.4-7,1.4s-1,0-2,1.4c-1,1.4,0,0-2,0 s-2,1.4-3,2.8c-1,1.4-2,0-4,0s-4,4.3-8,4.3s-14-4.3-15-5.7s-1-1.4-2,0c-1,1.4-3,0-5,0s-1,4.3-4,5.7c-3,1.4-10-14.2-11-14.2 s0,1.4-2,1.4s-1-1.4-3-1.4s-6,14.2-8,15.6c-2,1.4-2-2.8-3-2.8s0,1.4-1,1.4s-4-5.7-6-4.3c-2,1.4-2,2.8-3,4.3c-1,1.4-4-7.1-5-7.1 s-2-1.4-3,0c-1,1.4-3-4.3-6-5.7c-3-1.4-1.5,0-4,0v275.8h400C399.9,299.8,399.9,10.2,399.9,14.9z"/></svg>`);
    //     let newMtSneffelsId = "MtSneffels" + id.toString();
    //     let newMtSneffels = document.getElementById(newMtSneffelsId);
    //     newMtSneffels.style.top = (50*rangeNum).toString() + "px" 
    //     newMtSneffels.style.zIndex = rangeNum;
    // }

    else if (chosenRange == "LaJunta"){
        logoContainer.innerHTML += (`<svg version="1.1" id="LaJunta` + id + `" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 ` + (300 - (50*rangeNum)) + `" style="enable-background:new 0 0 400 300;" xml:space="preserve"><path class="st0" style="fill:hsl(` + baseHue + `, ` + baseSaturation + `%, ` + (baseLightness - (10*rangeNum)) + `%);" d="M400,38.1c0,0-20.6,14.3-20.6,15.6s-1,0-2,0s-4,2.5-6,2.5s-2-3.7-3-3.7s-2,0-4,1.2s-10-1.2-14-1.2 s-11-7.5-20-7.5s-41,26.2-42,26.2s-5-2.5-8-2.5s-10,6.2-11,6.2s-7-3.7-8-3.7s-5-7.5-7-7.5c-2,0-24,18.7-25,18.7s-19-5-20-6.2 c-1-1.2-13,1.2-14,1.2s-7-1.2-7-1.2s-82-66.1-84-66.1s-72,33.7-75,32.4s-20,7.5-21,10c-1,2.5-8.4,1.9-8.4,1.9V300h400V38.1z"/></svg>`)
        let newLaJuntaId = "LaJunta" + id.toString();
        let newLaJunta = document.getElementById(newLaJuntaId);
        newLaJunta.style.top = (50*rangeNum).toString() + "px"
        newLaJunta.style.zIndex = rangeNum;
        svgCounter += 1;
    }

    else if (chosenRange == "Wilson"){
        logoContainer.innerHTML += (`<svg version="1.1" id="Wilson` + id + `" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 ` + (300 - (50*rangeNum)) + `" style="enable-background:new 0 0 400 300;" xml:space="preserve"><path class="st0" style="fill:hsl(` + baseHue + `, ` + baseSaturation + `%, ` + (baseLightness - (10*rangeNum)) + `%);" d="M0.1,300L0,70.7c0,0,58-24.7,65-23.6c7,1.1,23,15.7,25,15.7s16,1.1,17-1.1c1-2.2,23-13.5,25-13.5s11-1.1,12-2.2 c1-1.1,10-2.2,11-1.1c1,1.1,7,6.7,7,3.4c0-3.4,2-6.7,4-6.7c2,0,2,1.1,4,0c2-1.1,2-3.4,4-4.5s2,1.1,3,0c1-1.1,28-27,35-27 c7,0,40,32.6,41,31.5s19,10.1,20,9s13-7.9,15-6.7c2,1.1,15,13.5,17,12.4s17,1.1,18,0s5-5.6,7-5.6c2,0,2,1.1,4,0s6-6.7,8-6.7 c2,0,7,1.1,8,1.1s9-5.6,12-5.6c3,0,24,4.5,27,3.4s11.1-3.4,11.1-3.4V300"/></svg>`)
        let newWilsonId = "Wilson" + id.toString();
        let newWilson = document.getElementById(newWilsonId);
        newWilson.style.top = (50*rangeNum).toString() + "px"
        newWilson.style.zIndex = rangeNum;
        svgCounter += 1;
    }

    else if (chosenRange == "Uncompahgre"){
        logoContainer.innerHTML += (`<svg version="1.1" id="Uncompahgre` + id + `" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 ` + (300 - (50*rangeNum)) + `" style="enable-background:new 0 0 400 300;" xml:space="preserve"><path class="st0" style="fill:hsl(` + baseHue + `, ` + baseSaturation + `%, ` + (baseLightness - (10*rangeNum)) + `%);" d="M400,129.6c0,0-35.1-27.4-36.1-27.4s-2-4.7-2-7s-11-8.2-13-8.2s0,4.7-1,5.8c-1,1.2-27-16.3-29-17.5 s-14,1.2-15,1.2s-1-5.8-2-5.8s-7,1.2-8,2.3c-1,1.2-4-2.3-5-2.3s-11,1.2-12,2.3c-1,1.2-4-7-4-8.2c0-1.2-7-1.2-8-1.2s-1-1.2-2-2.3 c-1-1.2-11-3.5-12-3.5s-7,7-7,8.2s-6,0-8,0s-5-10.5-7-14c-2-3.5-3-2.3-4-2.3s-1-4.7-3-5.8c-2-1.2-23-3.5-24-3.5s-3-4.7-4-5.8 c-1-1.2-8-2.3-11-4.7s-16-4.7-17-4.7s-14-7-19-10.5s-34-4.7-35-4.7s-6,7-6,8.2s-11,7-12,8.2s-1,2.3-1,3.5c0,1.2-4,3.5-5,3.5 s-3,9.3-3,10.5c0,1.2-12,9.3-13,10.5c-1,1.2-12,2.3-15,3.5c-3,1.2-3,7-3,8.2s-7,5.8-7,5.8s-6,0-7,0s-4,5.8-4,8.2 c0,2.3-35.9,22.8-35.9,22.8V300h400V129.6z"/></svg>`);
        let newUncompahgreId = "Uncompahgre" + id.toString();
        let newUncompahgre = document.getElementById(newUncompahgreId);
        newUncompahgre.style.top = (50*rangeNum).toString() + "px"
        newUncompahgre.style.zIndex = rangeNum;
        svgCounter += 1;
    }

    else if (chosenRange == "BridalVeil"){
        logoContainer.innerHTML += (`<svg version="1.1" id="BridalVeil` + id + `" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 ` + (300 - (50*rangeNum)) + `" style="enable-background:new 0 0 400 300;" xml:space="preserve"><path class="st0" style="fill:hsl(` + baseHue + `, ` + baseSaturation + `%, ` + (baseLightness - (10*rangeNum)) + `%);" d="M400,10c0,0-30.1,19.6-32.1,20.9s-3,2.7-4,6.7s-13,16.2-14,17.5s-1-1.3-2-1.3s-1,1.3-1,2.7c0,1.3-3,0-4,0 s-9,2.7-11,2.7s-8,8.1-8,9.4c0,1.3-5,2.7-6,2.7s-4,4-4,5.4s-23,18.9-25,18.9s-19-10.8-21-12.1s-24-10.8-25-10.8s-3,0-4,0 s-8-5.4-9-5.4s-1,2.7-2,2.7s-1,0-2,0s-3,2.7-3,4c0,1.3-4,1.3-5,2.7s-4,1.3-6,1.3s-2,2.7-3,2.7s-20-14.8-21-14.8s-6-6.7-7-8.1 c-1-1.3-3-1.3-4-1.3s-4-4-5-4s-6-2.7-7-2.7s-4,1.3-5,1.3s-6-4-8-4s-21-17.5-23-17.5s-5,4-6,5.4c-1,1.3-1-1.3-3-1.3s-12,6.7-14,8.1 c-2,1.3-18,9.4-24,10.8c-6,1.3-17-12.1-20-12.1c-3,0-4,2.7-5,5.4s-8,5.4-10,8.1c-2,2.7-2,0-6,1.3s-17,14.8-21,17.5 C15.9,75.4,0,66.7,0,66.7V300h400V10z"/></svg>`);
        let newBridalVeilId = "BridalVeil" + id.toString();
        let newBridalVeil = document.getElementById(newBridalVeilId);
        newBridalVeil.style.top = (50*rangeNum).toString() + "px"
        newBridalVeil.style.zIndex = rangeNum;
        svgCounter += 1;
    }

    for (let range of ranges){
        if (chosenRange != range){
            let existingRange = document.getElementById(range + id);
            if (existingRange) {
                existingRange.parentNode.removeChild(existingRange);
            }
        }
    }
}