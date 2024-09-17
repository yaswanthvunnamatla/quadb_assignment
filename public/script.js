document.addEventListener('DOMContentLoaded', () => {
    let timerElement = document.querySelector(".timer");
    let timeLeft = 60;

    let countdown = setInterval(function () {
        timeLeft--;
        timerElement.innerHTML = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            timeLeft = 60;
            countdown = setInterval(function () {
                timeLeft--;
                timerElement.innerHTML = timeLeft;
                if (timeLeft <= 0) clearInterval(countdown);
            }, 1000);
        }
    }, 1000);

    // Fetch crypto data
    fetch('/api/crypto-prices')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('crypto-data');
            let tableHTML = '';

            data.forEach((item, index) => {
                const diffClass = item.diff.startsWith('-') ? 'negative' : 'positive';
                const savingsClass = item.savings.startsWith('-') ? 'negative' : 'positive';

                const diffArrow = item.diff.startsWith('-') ? '▼' : '▲';
                const savingsArrow = item.savings.startsWith('-') ? '▼' : '▲';

                tableHTML += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${item.platform}</td>
                        <td>₹ ${item.lastPrice.toLocaleString()}</td>
                        <td>${item.buySellPrice}</td>
                        <td class="${diffClass}">${diffArrow} ${item.diff}</td>
                        <td class="${savingsClass}">${savingsArrow}  ${item.savings}</td>
                    </tr>
                `;
            });
            tableBody.innerHTML = tableHTML;
        })
        .catch(error => console.error('Error fetching data:', error));
});
