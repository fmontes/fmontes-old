var dribbleUserId = '27877';
var dribbbleUrl = 'https://api.dribbble.com/v1/users/' + dribbleUserId + '/shots';
var dribbbleToken = 'e93e2bb2731a53c680c68bbf4e29acc6e89c573b2db9838adf017b6efc3b906f';

function shuffle(input) {
    for (var i = input.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
};

export default {
    getShots() {
        var promise = new Promise(function(resolve, reject) {
            var client = new XMLHttpRequest();

            client.open('GET', dribbbleUrl);
            client.setRequestHeader('Authorization', 'Bearer ' + dribbbleToken)
            client.send();
            client.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(shuffle(JSON.parse(this.response)));
                } else {
                    reject(this.statusText);
                }
            };

            client.onerror = function () {
                reject(this.statusText);
            };
        });

        return promise;
    }
}
