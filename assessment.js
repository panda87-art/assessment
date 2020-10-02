(function(){
    'use strict';
    const userNameInput = document.getElementById('user-name');
    const assessmentButton = document.getElementById('assessment');
    const resultDivided = document.getElementById('result-area');
    const tweetDivided = document.getElementById('tweet-area');
    // assessmentButton.onclick = function(){
    //     console.log('ボタンが押されました');
    // };
    // assessmentButton.onclick = () => {
    //     console.log('ボタンが押されました');
    // };

    function removeAllChildren(element){
        while (element.firstChild){
            element.removeChild(element.firstChild);
        }
    }
     assessmentButton.onclick = () => {
        const userName =  userNameInput.value;
        if (userName.length === 0){
            return;
        }
    
        //　診断結果表示エリアの作成
        // while (resultDivided.firstChild){
        //     resultDivided.removeChild(resultDivided.firstChild);
        // }
        removeAllChildren(resultDivided);
        const header = document.createElement('h3');
        header.innerText = '診断結果';
        resultDivided.appendChild(header);

        const paragraph = document.createElement('p');
        const result = assessment(userName);
        paragraph.innerText = result;
        resultDivided.appendChild(paragraph);

     };
     // TODO ツイートエリアを作成
    removeAllChildren(tweetDivided);
    // const anchor = document.createElement('a');
    // const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=ハッシュタグ&ref_src=twsrc%5Etfw&text=hoge';
    // anchor.setAttribute('href', hrefValue);
    // anchor.innerText = 'https://twitter.com/intent/tweet?button_hashtag=ハッシュタグ&ref_src=twsrc%5Etfw'

    const answers = [
        '{userName}の良いところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
        '{userName}の良いところはまなざしです。{userName}に見つめられた人はドキドキするでしょう。',
        '{userName}の良いところは情熱です。{userName}の情熱は周りの人を熱くします。',
        '{userName}の良いところは実直さです。{userName}の実直さが物事を成功に導きます。',
        '{userName}の良いところは知識です。博学な{userName}を多くの人が頼りにしています。',
        '{userName}の良いところはユーモアです。{userName}のユーモアは皆をを楽しくします。',
        '{userName}の良いところは用心深さです。{userName}の洞察に、周りの人が助けられています。',
        '{userName}の良いところは優しさです。{userName}の優しさに皆が助けられています。',
        '{userName}の良いところは決断力です。{userName}の決断に周りの人が助けられています。',
        '{userName}の良いところは思いやりです。{userName}の気遣いに皆が感謝しています。',
        '{userName}の良いところは謙虚さです。{userName}の謙虚さに皆が感謝しています。',
        '{userName}の良いところは感受性です。{userName}の感じたことに皆が共感しています。',
        '{userName}の良いところは好奇心です。{userName}の好奇心は周りの人が魅了されています。',
        '{userName}の良いところは気配りです。{userName}の配慮が皆を救っています。',
        '{userName}の良いところは正直さです。ありのままの{userName}自身が魅力的です。',
        '{userName}の良いところは自制心です。しっかり衝動を抑える{userName}は皆に信頼されています。',
    ];
    // 名前の文字列を渡すと診断結果を返す関数
    // @param {string} userName ユーザーの名前
    // @ return {string} 診断結果
    function assessment(userName) {
        // 全文字コード番号を取得してそれを足し合わせる
        let sumOfcharCode = 0;
        for (let i = 0; i < userName.length; i++){
            sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
        }
        // 文字のコード番号の合計w回答数でワテ添字の数値を求める
        const index = sumOfcharCode % answers.length;
        // const result = answers[index];
        let result = answers[index];
        result = result.replace(/{userName}/g, userName);

        //TODO {userName} をユーザーの名前に置き換える
        return result;
    };
    console.log(assessment('太郎'));
    console.log(assessment('次郎'));
    // console.log(assessment('太郎'))
    console.assert(
        assessment('太郎') === '太郎の良いところは決断力です。太郎の決断に周りの人が助けられています。',
        '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
    );
    console.assert(
        assessment('太郎') === assessment('太郎'),
        '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
    );
})();
