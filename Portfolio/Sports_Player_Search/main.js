const body = document.querySelector('body');
const form = document.querySelector('.searchForm');
const input = document.querySelector('.searchInput');
const btn = document.querySelector('.submitBtn');
const container = document.querySelector('.container');

btn.addEventListener('mousedown', () => {
    btn.style.opacity = "0.5";
})

document.addEventListener('mouseup', () => {
    btn.style.opacity = "1";
})

input.focus();

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    if (input.value === '') {
        alert('Please enter the name of a sports player')
        input.focus();
    } else {
        const searchTerm = input.value;
        try {
            const res = await axios.get(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchTerm}`);
            let total = 0;
            const showData = () => {

                res.data.player.forEach(() => {
                    const info = document.createElement('div');
                    const name = document.createElement('h2');
                    const list = document.createElement('ul');
                    const gender = document.createElement('li');
                    const height = document.createElement('li');
                    const nationality = document.createElement('li');
                    const position = document.createElement('li');
                    const birthLocation = document.createElement('li');
                    const college = document.createElement('li');
                    const dateBorn = document.createElement('li');
                    const sport = document.createElement('li');
                    const team = document.createElement('li');
                    const weight = document.createElement('li');
                    const description = document.createElement('p');
                    const deleteBtn = document.createElement('button');

                    container.append(info);
                    info.append(name);
                    info.append(list);
                    list.append(gender);
                    list.append(height);
                    list.append(nationality);
                    list.append(position);
                    list.append(birthLocation);
                    list.append(college);
                    list.append(dateBorn);
                    list.append(sport);
                    list.append(team);
                    list.append(weight);
                    info.append(description);
                    info.append(deleteBtn);

                    name.innerHTML = `<b>NAME:</b> ${res.data.player[total].strPlayer}`;
                    if (res.data.player[total].strGender) {
                        gender.innerHTML = `<b>GENDER:</b> ${res.data.player[total].strGender}`;
                    } else {
                        gender.innerHTML = `<b>GENDER:</b> N/A`;
                    }
                    if (res.data.player[total].strHeight) {
                        height.innerHTML = `<b>HEIGHT:</b> ${res.data.player[total].strHeight}`;
                    } else {
                        height.innerHTML = `<b>HEIGHT:</b> N/A`;
                    }
                    if (res.data.player[total].strNationality) {
                        nationality.innerHTML = `<b>NATIONALITY:</b> ${res.data.player[total].strNationality}`;
                    } else {
                        nationality.innerHTML = `<b>NATIONALITY:</b> N/A`;
                    }
                    if (res.data.player[total].strPosition) {
                        position.innerHTML = `<b>POSITION:</b> ${res.data.player[total].strPosition}`;
                    } else {
                        position.innerHTML = `<b>POSITION:</b> N/A`;
                    }
                    if (res.data.player[total].strBirthLocation) {
                        birthLocation.innerHTML = `<b>BIRTH LOCATION:</b> ${res.data.player[total].strBirthLocation}`;
                    } else {
                        birthLocation.innerHTML = `<b>BIRTH LOCATION:</b> N/A`;
                    }
                    if (res.data.player[total].strCollege) {
                        college.innerHTML = `<b>COLLEGE:</b> ${res.data.player[total].strCollege}`;
                    } else {
                        college.innerHTML = `<b>COLLEGE:</b> N/A`;
                    }
                    if (res.data.player[total].dateBorn) {
                        dateBorn.innerHTML = `<b>DATE BORN:</b> ${res.data.player[total].dateBorn}`;
                    } else {
                        dateBorn.innerHTML = `<b>DATE BORN:</b> N/A`;
                    }
                    if (res.data.player[total].strSport) {
                        sport.innerHTML = `<b>SPORT:</b> ${res.data.player[total].strSport}`;
                    } else {
                        sport.innerHTML = `<b>SPORT:</b> N/A}`;
                    }
                    if (res.data.player[total].strTeam) {
                        team.innerHTML = `<b>TEAM:</b> ${res.data.player[total].strTeam}`;
                    } else {
                        team.innerHTML = `<b>TEAM:</b> N/A`;
                    }
                    if (res.data.player[total].strWeight) {
                        weight.innerHTML = `<b>WEIGHT:</b> ${res.data.player[total].strWeight}`;
                    } else {
                        weight.innerHTML = `<b>WEIGHT:</b> N/A`;
                    }
                    description.innerText = res.data.player[total].strDescriptionEN;
                    deleteBtn.innerText = 'Delete';

                    info.classList.add('content');
                    name.classList.add("nameClass");
                    list.classList.add("listClass");
                    gender.classList.add("infoClass");
                    height.classList.add("infoClass");
                    nationality.classList.add("infoClass");
                    position.classList.add("infoClass");
                    birthLocation.classList.add("infoClass");
                    college.classList.add("infoClass");
                    dateBorn.classList.add("infoClass");
                    sport.classList.add("infoClass");
                    team.classList.add("infoClass");
                    weight.classList.add("infoClass");
                    description.classList.add("infoClass", "descriptClass");
                    deleteBtn.classList.add("deleteBtn");

                    deleteBtn.addEventListener('click', () => {
                        info.remove();
                    })

                    deleteBtn.addEventListener('mousedown', () => {
                        deleteBtn.style.opacity = "0.5";
                    })

                    total++
                    input.value = "";
                    input.focus();
                })
            }
            showData();
        }
        catch {
            alert("NO RESULTS FOUND. Please double check spelling. First and last names must be separated by a space.");
            input.value = "";
            input.focus();
        }
    }
})