document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.choice').forEach(button => {
        button.addEventListener('click', () => {
            const userChoice = button.dataset.choice;
            const computerChoice = getComputerChoice();
            const result = getResult(userChoice, computerChoice);
            displayResult(result, userChoice, computerChoice);
        });
    });
    
    function getComputerChoice() {
        const choices = ['pedra', 'papel', 'tesoura', 'lagarto', 'spock'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }
    
    function getResult(user, computer) {
        if (user === computer) {
            return 'Empate';
        }
        
        const winningCombinations = {
            pedra: ['tesoura', 'lagarto'],
            papel: ['pedra', 'spock'],
            tesoura: ['papel', 'lagarto'],
            lagarto: ['spock', 'papel'],
            spock: ['tesoura', 'pedra']
        };
    
        return winningCombinations[user].includes(computer) ? 'Você ganhou!' : 'Você perdeu';
    }
    
    function displayResult(result, userChoice, computerChoice) {
        const resultDiv = document.getElementById('result');
        const descriptionDiv = document.getElementById('description');
    
        resultDiv.innerHTML = `
            <strong>Você escolheu:</strong> ${userChoice}.<br><br>
            <strong>Máquina escolheu:</strong> ${computerChoice}.<br><br>
            Resultado: <strong>${result}</strong>
        `;
        descriptionDiv.innerHTML = getDescription(result, userChoice, computerChoice);
    }
    
    function getDescription(result, userChoice, computerChoice) {
        const descriptions = {
            'pedra': {
                'Você ganhou!': 'Pedra quebra a tesoura e esmaga o lagarto.',
                'Você perdeu': 'Papel cobre a pedra e Spock vaporiza a pedra.',
                'Empate': 'Ambos escolheram pedra.'
            },
            'papel': {
                'Você ganhou!': 'Papel cobre a pedra e refuta o Spock.',
                'Você perdeu': 'Tesoura corta o papel e lagarto come o papel.',
                'Empate': 'Ambos escolheram papel.'
            },
            'tesoura': {
                'Você ganhou!': 'Tesoura corta papel e decapita lagarto.',
                'Você perdeu': 'Pedra quebra tesoura e Spock destrói tesoura.',
                'Empate': 'Ambos escolheram tesoura.'
            },
            'lagarto': {
                'Você ganhou!': 'Lagarto come papel e envenena Spock.',
                'Você perdeu': 'Pedra esmaga lagarto e tesoura decapita lagarto.',
                'Empate': 'Ambos escolheram lagarto.'
            },
            'spock': {
                'Você ganhou!': 'Spock vaporiza pedra e destrói tesoura.',
                'Você perdeu': 'Papel refuta Spock e lagarto envenena Spock.',
                'Empate': 'Ambos escolheram Spock.'
            }
        };
    
        return descriptions[userChoice][result];
    }
    
    document.querySelector('.resultado').style.display = 'block';
})
