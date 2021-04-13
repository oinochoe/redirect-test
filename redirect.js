function onPopupWindow() {
    var win = window.open(null, '_blank', 'top=10, left=10, width=400, height=400');
    win.document.write(
        '<iframe width="100%", height="100%" src="https://account.pearlabyss.com/en-US/Member/OAuth/facebook?returnUrl=https%3A%2F%2Faccount.pearlabyss.com%2Fen-US%2FDashBoard" frameborder="0" allowfullscreen></iframe>',
    );
}

function onCloseSendResultToOpener() {
    var childWindow = window.parent;
    var parentWindow = childWindow.opener;
    parentWindow.location.href = 'www.naver.com';
}
