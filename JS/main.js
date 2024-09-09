const images = ["https://i.pinimg.com/originals/28/07/39/280739e398cda5b50dd70b94de8faad7.jpg", 
    "https://i.pinimg.com/originals/66/e4/05/66e40550a11bbebe31823ec6d9f83e7a.jpg", 
    "https://avatars.mds.yandex.net/i?id=0c3f768d7450ed39c06574d5efd3af00_l-5341855-images-thumbs&n=13", 
    "https://avatars.mds.yandex.net/i?id=cbc5a22f9beeabed317398697d572b4b_l-5190143-images-thumbs&n=13",
    "https://bronk.club/uploads/posts/2023-02/1677170563_bronk-club-p-otkritki-s-peizazhami-prirodi-pinterest-52.jpg"]

counter = 0;

document.getElementById('body').style.backgroundImage = `url('${images[Math.floor(Math.random() * 5)]}')`;

function OnClickButton() {
    [stats, skin] = [document.getElementById('bio-box'), document.getElementById('skin-box')];

    let up = setInterval(() => [stats.classList.add('--up'), skin.classList.add('--up')], 800)
    let down = setInterval(() => [stats.classList.remove('--up'), skin.classList.remove('--up')], 1600)
    
    if (counter == 0) {
        skin.classList.add('--show');
        stats.classList.add('--show'); 
        counter++;
    } 
    else {
        skin.classList.remove('--show');
        stats.classList.remove('--show');
        counter--;
    }
}