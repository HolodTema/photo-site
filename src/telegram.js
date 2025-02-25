function getCurrentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today
}

export default function sendFormToUsers(name, phone, msg) {
    const botToken = "7798465898:AAHFdprIvaU1iIVGquCee0KlZkEerMGgOOM"
    const listUserId = ["807667885"]
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const message = `Кто-то заполнил новую анкету на сайте:\nДата отправки: ${getCurrentDate()}\nИмя: ${name}\nТелефон: ${phone}\nCообщение: ${msg}`
    console.log(message)
    for (const userId in listUserId) {
        const params = {
            chat_id: userId,
            text: "hello",
        };

        const response = fetch(apiUrl,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params)
            }).then(response => response.json());
        console.log(response)
    }
}
