function User(name = 'user', email = 'usermail@mail.me', photoURL = null) {
    this.name = name;
    this.email = email;
    this.photoURL = photoURL;
}

User.avatars = [
    'https://pre00.deviantart.net/50f9/th/pre/i/2011/217/e/8/pikachu_2_by_nostalgiaattack-d45jd3i.png',
    'https://cdn.diversityavatars.com/wp-content/uploads/2018/01/Vector-Smart-Object-5.png',
    'https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-31-512.png',
    'http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-L3-icon.png',
    'https://findicons.com/files/icons/1072/face_avatars/300/i05.png',
    'http://www.iconarchive.com/download/i51043/hopstarter/halloween-avatars/Gomez.ico',
    'http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Zombie-2-icon.png',
    'https://vignette.wikia.nocookie.net/yogscast/images/8/8a/Avatar_Turps_2015.jpg'
];

User.admin = {
    photoURL: 'https://i.pinimg.com/originals/3d/47/4f/3d474f82ff71595e8081f9a120892ae8.gif',
    name: 'admin'
};

User.getAvatar = function () {
    return this.avatars.shift();
};

User.prototype.messageBox = (function () {
    var container = document.body.appendChild(document.createElement('div'));
    container.style = `
            display: block;
            background-color: #344055;
            width: 600px;
            height: 300px;
            border-style: none;
            `;
    container.img = container.appendChild(document.createElement('img'));
    container.img.style = `
            position: relative;
            top: 10px;
            left: 20px;
            width: 50px;
            height: 50px;
            `;
    container.userName = container.appendChild(document.createElement('p'));
    container.userName.style = `
            margin-left: 20px;
            display: inline-block;
            color: #fff;
            `;
    container.textArea = container.appendChild(document.createElement('textarea'));
    container.textArea.style = `
            display: block;
            position: relative;
            margin: 0 auto;
            background-color: #C7CAD0;
            width: 550px;
            height: 180px;
            `;

    container.textArea.oninput = function (event) {
        container.userName.innerText = this.name;
        container.img.src = this.photoURL;
    }.bind(User.admin);
    return container;
})();

Object.defineProperty(User, 'messageBox', {
    enumerable: false,
    configurable: false
});

User.prototype.write = function (text) {
    this.messageBox.userName.innerText = this.name;
    this.messageBox.img.src = User.getAvatar();
    this.messageBox.textArea.value = text;
};

User.prototype.read = function () {

}; //TODO:

var users = [];
users.push(new User('Иван'));
users.push(new User('Alex', 'alex@gmail.com'));
users.push(new User('Bob', 'bob777@gmail.com'));
users.push(new User('Dima', 'dima888@gmail.com'));
users.push(new User('Fima', 'fima999@gmail.com'));

var k = 1;
users.forEach(function (user) {
    setTimeout(function () {
        user.write(`Hello, I'm ${user.name}`);
    }, 3000 * k++);
});