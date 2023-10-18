document.addEventListener('DOMContentLoaded', function() {
    const cookieName = 'acceptsCookies';

    function createCookie(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + value + expires + '; path=/; domain=127.0.0.1';
    }

    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1, cookie.length);
            }
        }
        return null;
    }

    function deleteCookie(name) {
        createCookie(name, '', -1);
    }

    const acceptButton = document.querySelector('footer a');
    acceptButton.addEventListener('click', function(event) {
        event.preventDefault();
        createCookie(cookieName, 'true', 1);
        checkAndDisplayMessage();
    });

    function checkAndDisplayMessage() {
        const messageBox = document.querySelector('.exercice section');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete the cookie';
        deleteButton.addEventListener('click', function() {
            deleteCookie(cookieName);
            messageBox.style.display = 'block';
            deleteButton.style.display = 'none';
        });

        const cookieValue = getCookie(cookieName);
        if (cookieValue && cookieValue === 'true') {
            messageBox.style.display = 'none';
            document.querySelector('.exercice footer').appendChild(deleteButton);
        } else {
            messageBox.style.display = 'block';
        }
    }

    checkAndDisplayMessage();
});
