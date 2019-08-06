var emojiList;

//new ClipboardJS('#copy_btn');

var clipboard = new ClipboardJS('#copy_btn');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

$.get("emojiList.json", function(result){
    emojiList = result;
});

$("#random_btn").click(function() {
    let index = Math.floor(Math.random()*emojiList.length);
    let random_emoji = emojiList[index];
    $("#name")[0].innerText = random_emoji.name;
    $('#emoji')[0].innerText = random_emoji.emoji;
    $('#codePoint')[0].innerText = random_emoji.codePoint;
});

// $("#copy_btn").click(function() {
//     $('#emoji')[0].
// });