console.log('app is alive');

function switchChannel(channelName){
    console.log('Tuning into channel'+channelName);
    $('#chat h1 span').html('#'+channelName);
    $('#chat h1 small strong a').text('upgrading.never.help');
    $('#chat h1 small strong a').attr('href','http://w3w.co/upgrading.never.help');
    $('#channels * li').removeClass('selected');
    $('#channels * li:contains('+channelName+')').addClass('selected');
};

function toggleStar(){
    $('#chat h1 #starred').toggle();
};

function selectTab(tabId){
    $('#tab-bar button').removeClass("selected");
    $('#tab-bar #'+tabId).addClass("selected");
    console.log('change to '+ tabId);
};

function toggleEmojis(){
    $('#chat-bar #emojis').toggle();
}

