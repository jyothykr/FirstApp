onload = function () { attachHandlers(); }

function attachHandlers() {
    var the_nums = document.getElementsByName("number");
    for (var i = 0; i < the_nums.length; i++) { the_nums[i].onclick = inputNumbers; }
}


var remote = {
    onoff: 1,
    vol: 0,
    channel: 1,
    newchannel: "",
    changeon: function () {
        if (this.onoff == 0) {
            this.onoff = 1;
            console.log("onoff :" + this.onoff);
        }
        else {
            this.onoff = 0;
            console.log("onoff :" + this.onoff);
        }
    },
    increaseVolume: function (currentvol) {
        if (currentvol < 100) {
            this.vol++;
        }
        console.log("currentvolume :" + this.vol);
    },
    decreaseVolume: function (currentvol) {
        if (currentvol > 0) {
            this.vol--;
        }
        console.log("currentvolume :" + this.vol);
    },
    increaseChannel: function (currentchnl) {
        if (currentchnl < 100) {
            this.channel++;
        }
        console.log("currentchannel :" + this.channel);
    },
    decreaseChannel: function (currentchnl) {
        if (currentchnl > 1) {
            this.channel--;
        }
        console.log("currentchannel :" + this.channel);
    },
    changeChannel: function (_keyval) {
        this.channel = _keyval;
        console.log("new channel: " + this.channel);
    }

}

function inputNumbers() {
    var the_value = this.value;
    if (remote.newchannel.length >= 3) {
        remote.newchannel = "";
    }
    remote.newchannel += the_value;
    //alert(remote.newchannel);
    remote.changeChannel(remote.newchannel);
    return true;
}
function changePower() {
    remote.changeon();
}

function increseVolume() {
    remote.increaseVolume(remote.vol);
}

function decreaseVolume() {
    remote.decreaseVolume(remote.vol);
}

function increseChannel() {
    remote.increaseChannel(remote.channel);
}

function decreaseChannel() {
    remote.decreaseChannel(remote.channel);
}