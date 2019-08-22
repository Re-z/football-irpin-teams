class UI {
    constructor() {
        this.players = [
            {name: 'Pavel'},
            {name: 'Александр Патрус'},
            {name: 'Алексей Баранов'},
            {name: 'Бо Ан'},
            {name: 'Валера'},
            {name: 'Василь Мишляев'},
            {name: 'Виталий'},
            {name: 'Влад Гелетко'},
            {name: 'Денис Игнатенко'},
            {name: 'Денис Фещук'},
            {name: 'Макс Биденко'},
            {name: 'Мурат'},
            {name: 'Павел'},
            {name: 'Павел Перегуда'},
            {name: 'Рома'},
            {name: 'Ростислав Кипнис'},
            {name: 'Савик'},
            {name: 'Саня'},
            {name: 'Саня Павлухин'},
            {name: 'Тарас Футбол'},
            {name: 'Трохименко Александр'},
            {name: 'Антон Биличенко'},
            {name: 'Сергей Фишелеев'},
            {name: 'Вадим'},
            {name: 'Валерий'},
            {name: 'Анатолий'},
            {name: 'Виталий Володимирович'},
            {name: 'Грома Дмитрий'},
            {name: 'Константин Сивко'},
            {name: 'Павло'},
            {name: 'Сергий'},
            {name: 'Суминейро'},
            {name: 'Юсман'},
        ];
        
        // console.log(players.length)
        this.printPlayers();
        
    }
    printPlayers() {
        let printBlock = document.querySelector('#players-list'),
        output = ''
        
        this.players.forEach((el, index) => {
            let pattern = `
            <li class="custom-control custom-switch">
                <input type="checkbox" checked class="custom-control-input" value="${el.name}" id="player${index}">
                <label class="custom-control-label" for="player${index}">${el.name}</label>
            </li>
            `
            output += pattern;
        })
        printBlock.innerHTML = output;

    }
    createTeams() {
        let btn = document.querySelector('#createTeamsBtn');
        btn.addEventListener('click', (ev) => {
            let checkedPlayers = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
            let checkedPlayersShuffled = checkedPlayers.sort(() => 0.5 - Math.random())
            let team1 = checkedPlayersShuffled.slice(0, Math.floor(checkedPlayersShuffled.length / 2));
            let team2  = checkedPlayersShuffled.slice(Math.floor(checkedPlayersShuffled.length / 2));
            this.printTeamToDOM(team1, '#team1')
            this.printTeamToDOM(team2, '#team2')
        })
    }
    printTeamToDOM(team, appendTarget) {
        let output = '';
        let printTarget = document.querySelector(appendTarget);
        let resultBlock = document.querySelector('#result')
        team.forEach(el => {
            let pattern = `<li>${el.value}</li>`
            output += pattern
        })
        printTarget.innerHTML = output;
        resultBlock.classList.add("d-flex", "justify-content-between");
    }
    addNewPlayer() {
        let btn = document.querySelector('#addNewPlayer');
        btn.addEventListener('click', () => {
            let newPlayerName = document.querySelector('#newPlayer');
            this.players.push({name: newPlayerName.value});
            this.printPlayers();
            newPlayerName.value = '';
        })
    }

}
let ui = new UI();
ui.createTeams();
ui.addNewPlayer();