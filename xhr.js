let xhr = new XMLHttpRequest();

window.addEventListener('load', () => {
    XMLHttpRequestGetData();
});

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        XMLHttpRequestGetData();
    }
});

xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let document = xhr.response;
        JSON.parse(document).forEach(({url}) => {
            imageCreate(url)
        });
    }
}

function XMLHttpRequestGetData() {
    xhr.open('GET', './images.json', true);
    xhr.send();
    return xhr;
}

function imageCreate(url) {
    let img = document.createElement('img');
    img.setAttribute('src', `${url}`);
    img.setAttribute('class', 'randomImgs');
    document.getElementsByTagName('body')[0].appendChild(img);
}
