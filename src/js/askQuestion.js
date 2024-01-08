const questions = [
    // 公式情報
    {
        id: 1,
        question: "あなたがどのような商品やサービスを販売しているか、お客様は知っていますか。",
        answers: [
            { text: "はい", genre: ["製品・サービス情報（概要、見た目、価格など）"], reason: ["商品ラインナップについてお客様が気付いていない魅力も含めて改めて紹介しましょう。"] },
            { text: "いいえ", genre: ["製品・サービス情報（概要、見た目、価格など）"], reason: ["商品の周知が必要です。あなたが取り扱っている商品について紹介しましょう。"] }
        ]
    },
    {
        id: 2,
        question: "事業に関わりのある専門資格や受賞歴など、他人から評価できる実績はありますか。",
        answers: [
            { text: "はい", genre: ["実績"], reason: ["実績を紹介して、商品の質の高さやこだわりを紹介しましょう。"] },
            { text: "いいえ", genre: ["none"], reason: [""] }
        ]
    },
    {
        id: 3,
        question: "ビジネスについての歴史を紹介したいですか。",
        answers: [
            { text: "はい", genre: ["歴史"], reason: ["歴史を紹介して、商品の質の高さやこだわりを紹介しましょう。"] },
            { text: "いいえ", genre: ["none"], reason: [""] }
        ]
    },
    {
        id: 4,
        question: "あなたの事業でこだわっている部分はお客様に伝わっていますか。",
        answers: [
            { text: "はい", genre: ["none"], reason: [""] },
            { text: "いいえ", genre: ["会社概要（私たちについて）"], reason: ["あなたの会社のこだわりを紹介して、他社と差別化しましょう。"] }
        ]
    },
    {
        id: 5,
        question: "あなたが商品やサービスに関連することについて研究しているもので、追加で発信したいものはありますか。",
        answers: [
            { text: "はい", genre: ["製品・サービス情報2（こだわり、問題提起など）"], reason: ["接客中では伝えきれない情報をHPで紹介しましょう。"] },
            { text: "いいえ", genre: ["none"], reason: [""] }
        ]
    },
    {
        id: 6,
        question: "定期的に発信したい情報はありますか。",
        answers: [
            { text: "はい", genre: ["ニュース", "お知らせ"], reason: ["公式情報を発信することで問い合わせを削減しましょう。"] },
            { text: "いいえ", genre: ["none"], reason: [""] }
        ]
    },

    // 潜在顧客の獲得
    {
        id: 7,
        question: "お客様はあなたやスタッフから直接説明を受ける以外に、あなたの商品やサービスを知ることがありますか。",
        answers: [
            { text: "はい", genre: ["none"], reason: [""] },
            { text: "いいえ", genre: ["製品・サービス情報（概要、見た目、価格など）"], reason: ["お客様が事前に商品を知る機会を作りましょう。"] }
        ]
    },
    {
        id: 8,
        question: "他のお客様からの紹介や口コミで、新規のお客様を獲得することはありますか。",
        answers: [
            { text: "はい", genre: ["製品・サービス情報（概要、見た目、価格など）"], reason: ["口コミなどの場合は、HPなどの公式情報で情報を再確認することが多いです。あなたの商品を知ることのできる情報を用意しましょう。"] },
            { text: "いいえ", genre: ["none"], reason: [""] }
        ]
    },

    // 顧客満足度／信頼関係の構築
    {
        id: 9,
        question: "商品やサービスの説明で補足したいことはありますか。",
        answers: [
            { text: "はい", genre: ["製品・サービス情報2（こだわり、問題提起など）"], reason: ["あなたの会社の商品が気になっているお客様に対して購入を後押しできる情報を補足しましょう。"] },
            { text: "いいえ", genre: ["none"], reason: [""] }
        ]
    },
    {
        id: 10,
        question: "商品やサービスの使い方でお客様が困っていることはありませんか。",
        answers: [
            { text: "はい", genre: ["製品・サービス情報3（使い方）", "FAQ", "問い合わせ"], reason: ["商品の使い方や問い合わせが多い項目を載せ、問い合わせを減らしましょう。"] },
            { text: "いいえ", genre: ["none"], reason: [""] }
        ]
    },
    {
        id: 11,
        question: "商品やサービスに関する質問は頻繁にありますか。具体的にはどのような問い合わせですか。",
        selection: "multiple",
        answers: [
            { text: "特になし", genre: ["none"], reason: [""] },
            { text: "製品、サービスについて", genre: ["製品・サービス情報（概要、見た目、価格など）"], reason: ["商品についての説明が不足しているようです。公式情報を追加してお客様のお困りごとを減らしましょう。"] },
            { text: "配送について", genre: ["配送について"], reason: ["配送についての説明が不足しているようです。公式情報を追加してお客様のお困りごとを減らしましょう。"] },
            { text: "支払い方法について", genre: ["支払い方法について"], reason: ["支払いについての説明が不足しているようです。公式情報を追加してお客様のお困りごとを減らしましょう。"] },
            { text: "キャンセル、返品のルールについて", genre: ["キャンセルポリシー"], reason: ["キャンセル・返品についての説明が不足しているようです。公式情報を追加してお客様のお困りごとを減らしましょう。"] },
            { text: "保証について", genre: ["]保証について"], reason: ["保証についての説明が不足しているようです。公式情報を追加してお客様のお困りごとを減らしましょう。"] },
            { text: "問い合わせ先について", genre: ["問い合わせ"], reason: ["問い合わせ先についての説明が不足しているようです。公式情報を追加してお客様のお困りごとを減らしましょう。"] },
            { text: "アクセスについて", genre: ["アクセス、地図"], reason: ["アクセスについての説明が不足しているようです。公式情報を追加してお客様のお困りごとを減らしましょう。"] },
            { text: "駐車場", genre: ["アクセス、地図"], reason: ["駐車場についての説明が不足しているようです。公式情報を追加してお客様のお困りごとを減らしましょう。"] },
            { text: "営業時間、定休日", genre: ["営業時間、定休日"], reason: ["営業時間・定休日についての説明が不足しているようです。公式情報を追加してお客様のお困りごとを減らしましょう。"] },
            { text: "その他（その他はQAでカバー）", genre: ["FAQ","問い合わせ"], reason: ["似たような質問が多い場合は、公式情報を追加してお客様のお困りごとを減らしましょう。"] }
        ]
    },
    {
        id: 12,
        question: "お客様からのフィードバックやお問い合わせをオンラインで受けたいですか。",
        answers: [
            { text: "はい", genre: ["問い合わせ"], reason: ["お客様とコミュニケーションを取ることで信頼やリピートにつながります。お客様がお問い合わせできる手段を提示しましょう。"] },
            { text: "いいえ", genre: ["none"], reason: [""] }
        ]
    },
    {
        id: 13,
        question: "お客様に事前に知っておいてほしいことはありますか。",
        answers: [
            { text: "はい", genre: ["製品・サービス情報4（注意事項など）"], reason: ["お客様が事前に商品を知る機会を作りましょう。"] },
            { text: "いいえ", genre: ["none"], reason: [""] }
        ]
    },
    {
        id: 14,
        question: "お客様に事前に質問しておきたいことはありますか。",
        answers: [
            { text: "はい", genre: ["問い合わせ2（質問フォーム、カウンセリングシート）"], reason: ["商品・サービスの提供前に決まった質問をしている場合は、質問フォームなどを使って事前にアンケートを済ませましょう。"] },
            { text: "いいえ", genre: ["none"], reason: [""] }
        ]
    },
    {
        id: 15,
        question: "既存のお客様からの感想を発信したいですか。",
        answers: [
            { text: "はい", genre: ["お客様の声", "レビュー"], reason: ["実際に商品・サービスを使用したお客様の声は、新たなお客様の獲得に繋がります。積極的に発信しましょう。"] },
            { text: "いいえ", genre: ["none"], reason: [""] }
        ]
    },
    {
        id: 16,
        question: "予約のキャンセルや返品、クレームなどが頻繁にありますか。",
        answers: [
            { text: "はい", genre: ["製品・サービス情報4（注意事項など）", "FAQ", "問い合わせ"], reason: ["商品・サービスの説明が不足しているようです。よくある質問は公式情報でお知らせしていきましょう。"] },
            { text: "いいえ", genre: ["none"], reason: [""] }
        ]
    },
    {
        id: 17,
        question: "特別なお客様だけに限定で公開したい情報はありますか。",
        answers: [
            { text: "はい", genre: ["会員限定メニュー、ニュースレター（応相談）"], reason: ["限定公開のページを作成して、特別な情報を共有しましょう。"] },
            { text: "いいえ", genre: ["none"], reason: [""] }
        ]
    },

    // 販売手段
    {
        id: 18,
        question: "オンラインでの直接販売をしたい／強化したいですか。",
        answers: [
            { text: "はい", genre: ["購入ボタン（決済システム）", "問い合わせ", "在庫状況"], reason: ["お客様が迷わず購入できるように導線を引きましょう。"] },
            { text: "いいえ", genre: ["none"], reason: [""] }
        ]
    },
    {
        id: 19,
        question: "オンラインでの予約受付をしたいですか。",
        answers: [
            { text: "はい", genre: ["予約システム", "問い合わせ", "予約状況カレンダー"], reason: ["不要なやりとりを排除して、自動的に予約を受け付けられる仕組みを作りましょう。"] },
            { text: "いいえ", genre: ["none"], reason: [""] }
        ]
    },
];

document.addEventListener('DOMContentLoaded', function() {
    const questionsContainer = document.getElementById('questions');
    const questionsCount = questions.length;

    questions.forEach((question, qIndex) => {
        let questionHTML = `<div class="question question${question.id}"><p class="title fadeIn">${question.question}</p>`;

        if(question.selection == "multiple") {
            // console.log("multiple");
            question.answers.forEach((answer, aIndex) => {
                questionHTML += `
                    <div class="answer fadeUp">
                    <input class="answerSelection" type="checkbox" id="answer${question.id}-${aIndex}" name="question${question.id}" value="${aIndex}">
                    <label for="answer${question.id}-${aIndex}">${answer.text}</label>
                    </div>
                `;
            });
        } else {
            question.answers.forEach((answer, aIndex) => {
                questionHTML += `
                    <div class="answer fadeUp">
                    <input class="answerSelection" type="radio" id="answer${question.id}-${aIndex}" name="question${question.id}" value="${aIndex}">
                    <label for="answer${question.id}-${aIndex}">${answer.text}</label>
                    </div>
                `;
            });
        }

        questionsContainer.innerHTML += questionHTML;
    });

    var value = 1;
    var questionIdEle = document.querySelector('.questionId');
    var questionsCountEle = document.querySelector('.questionsCount');
    questionsCountEle.innerHTML = "/" + questionsCount;

    document.querySelector('.next').addEventListener('click', function() {

        value = parseInt(this.getAttribute('val'));
        const prevEle = document.querySelector('.prev');

        value += 1;
        // console.log(value);

        if (value === 1) {
            document.querySelector('.prev').style.display = 'none';
            document.querySelector('.next').style.display = 'inline';
        } else if (value === questionsCount) {
            document.querySelector('.prev').style.display = 'inline';
            document.querySelector('.next').style.display = 'none';
        } else {
            document.querySelector('.prev').style.display = 'inline';
            document.querySelector('.next').style.display = 'inline';
        }

        this.setAttribute('val', value);
        prevEle.setAttribute('val', value);
        questionIdEle.innerHTML = value;

        document.querySelector(`.question${value - 1}`).style.display = 'none';
        document.querySelector(`.question${value}`).style.display = 'flex';
    });

    document.querySelector('.prev').addEventListener('click', function() {

        value = parseInt(this.getAttribute('val'));
        const nextEle = document.querySelector('.next');

        value -= 1;
        // console.log(value);

        if (value === 1) {
            document.querySelector('.prev').style.display = 'none';
            document.querySelector('.next').style.display = 'inline';
        } else if (value === questionsCount) {
            document.querySelector('.prev').style.display = 'inline';
            document.querySelector('.next').style.display = 'none';
        } else {
            document.querySelector('.prev').style.display = 'inline';
            document.querySelector('.next').style.display = 'inline';
        }

        this.setAttribute('val', value);
        nextEle.setAttribute('val', value);
        questionIdEle.innerHTML = value;

        document.querySelector(`.question${value + 1}`).style.display = 'none';
        document.querySelector(`.question${value}`).style.display = 'flex';
    });

    let answerButton = document.getElementsByClassName('answerSelection');

    for (let i = 0; i < answerButton.length; i++) {
        answerButton[i].addEventListener('change', function() {
            // console.log(`${this.name} is answerd.`);
            answerCount();
        });
    }

});

function showResults() {

    document.querySelector('#results').style.display = 'block';
    window.scrollTo({
        top: document.querySelector('#results').offsetTop,
        behavior: 'smooth'
    });

    const genreReport = {};

    questions.forEach(question => {
        const selectedAnswerElements = document.querySelectorAll(`input[name="question${question.id}"]:checked`);

        if (selectedAnswerElements.length > 0) {
            selectedAnswerElements.forEach(selectedAnswerElement => {
                const selectedAnswerIndex = selectedAnswerElement.value;

                if (selectedAnswerIndex !== undefined) {
                    const selectedText = question.answers[selectedAnswerIndex].text;
                    const selectedGenres = question.answers[selectedAnswerIndex].genre;
                    const selectedReason = question.answers[selectedAnswerIndex].reason;
                    selectedGenres.forEach(genre => {
                        if(genreReport[genre] == undefined) {
                            genreReport[genre] = [];
                        }
                        genreReport[genre].push({id: question.id, question: question, answer: selectedText, reason: selectedReason});
                    });
                }
            });
        }
    });

    console.log(genreReport);

    // let resultsHTML = "あなたのジャンルごとのポイント:<br>";
    // for (const genre in genrePoints) {
    //     resultsHTML += `${genre}: ${genrePoints[genre]} ポイント<br>`;
    // }

    let resultsHTML = "";
    for (const genre in genreReport) {
        if(genre != "none") {
            resultsHTML += `<div class="report_genre">${genre}</div>`;
            resultsHTML += `<div class="report_genre_detail">`;
            resultsHTML += `<p class="report_toggle">このジャンルをおすすめする理由</p>`;
            resultsHTML += `<div class="report_genre_detail_reason fadeIn">`;

            genreReport[genre].forEach((report, index) => {
                resultsHTML += `<div class="report">`;
                resultsHTML += `<div class="report_question">質問${report.id}: ${report.question.question}</div>`;
                resultsHTML += `<div class="report_answer">あなたの回答: ${report.answer}</div>`;
                resultsHTML += `<div class="report_reason">⇒ ${report.reason}</div>`;
                resultsHTML += `</div>`;
            });

            resultsHTML += `</div>`;
            resultsHTML += `</div>`;
        }

    }

    document.getElementById('report').innerHTML = resultsHTML;

    let toggleButton = document.getElementsByClassName('report_toggle');

    for (let i = 0; i < toggleButton.length; i++) {
        toggleButton[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    // 保存ボタン
    document.getElementById('saveButton').addEventListener('click', function(e) {
        console.log("clicked");

        const name = document.getElementById('savedName').value;
        const report = document.getElementById('savedName').innerHTML;

        if (name === '') {
            document.getElementById('saveError').style.display = 'block';
        } else {
            document.getElementById('saveError').style.display = 'none';

            console.log(name);
            // console.log(resultsHTML);
            console.log(genreReport);
            saveToAzure(name, genreReport)
            .then(response => response.text())
            .then(text => {
                console.log(text);
            })
            .catch(error => console.error(error));
        }
    });
}

function answerCount() {
    let answered = [];
    let newArr = [];
    let selectedAnswerElements = document.getElementsByClassName('answerSelection');
    let missing = [];
    let newArr2 = [];

    for (let i = 0; i < selectedAnswerElements.length; i++) {
        if(selectedAnswerElements[i].checked) {
            // console.log(`${selectedAnswerElements[i].name} is answerd.`);
            answered.push(selectedAnswerElements[i].name);
            newArr = new Set(answered);
            // console.log(newArr.size);
            if (newArr.size == questions.length) {
                console.log("all answered");
                // document.querySelector(`.showResult`).style.display = 'block';
                document.querySelector(`#missing`).style.display = 'none';
            } else {
                // document.querySelector(`.showResult`).style.display = 'none';
            }
        }
    }

    for (let j = 1; j <= questions.length; j++) {
        missing.push('question' + j);
    }
    // console.log(missing);

    missing.forEach((miss, index) => {
        if(!newArr.has(miss)) {
            newArr2.push(miss);
        }
    });

    let missingHTML = "";
    newArr2.forEach((miss, index) => {
        missingHTML += `<span class="missingEle">質問${miss.slice(8)}が未回答です。</span>`;
    });
    document.getElementById('missing').innerHTML = missingHTML;

    finalQ = "question" + String(questions.length);

    // console.log(finalQ);
    // console.log(newArr);
    // console.log(newArr2);

    if(newArr2.indexOf(finalQ) == -1 && newArr.legth != questions.length) {
        console.log("final question answered, but not all");
        document.querySelector(`#missing`).style.display = 'block';
    }


}

async function saveToAzure(name, genreReport) {
    console.log('saveToAzure');
    console.log(name);
    console.log(genreReport);


    const url = 'https://lastewebtodb.azurewebsites.net:443/api/SaveHPAnswer/triggers/When_a_HTTP_request_is_received/invoke?api-version=2022-05-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=TLePGeDZk9J3WWHb2WBJH6CP1HYSAtUW7pcCewB4zII';

    const response = await fetch(url, {
        // method: 'GET', // or 'POST'
        method: 'POST',
        headers: {
        // 'Content-Type': 'application/json',
        // 'Content-Type': 'text/plain',
        'Content-Type': 'application/json',
        // 'x-functions-key': 'your_function_key' // if required
        },
        // body: JSON.stringify(data), // if POST request
        // body: name, // if POST request
        body: JSON.stringify({ name: name, genreReport: genreReport })
    })
    ;

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;

}