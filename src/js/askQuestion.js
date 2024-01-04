const questions = [
    // 公式情報
    {
        id: 1,
        question: "あなたがどのような商品やサービスを販売しているか、お客様は知っていますか。",
        answers: [
            { text: "はい", genre: ["製品・サービス情報（概要、見た目、価格など）"] },
            { text: "いいえ", genre: ["none"] }
        ]
    },
    {
        id: 2,
        question: "事業に関わりのある専門資格や受賞歴など、他人から評価できる実績はありますか。",
        answers: [
            { text: "はい", genre: ["実績"] },
            { text: "いいえ", genre: ["none"] }
        ]
    },
    {
        id: 3,
        question: "ビジネスについての歴史を紹介したいですか。",
        answers: [
            { text: "はい", genre: ["歴史"] },
            { text: "いいえ", genre: ["none"] }
        ]
    },
    {
        id: 4,
        question: "あなたの事業でこだわっている部分はお客様に伝わっていますか。",
        answers: [
            { text: "はい", genre: ["会社概要（私たちについて）"] },
            { text: "いいえ", genre: ["none"] }
        ]
    },
    {
        id: 5,
        question: "あなたが商品やサービスに関連することについて研究しているもので、追加で発信したいものはありますか。",
        answers: [
            { text: "はい", genre: ["製品・サービス情報2（こだわり、問題提起など）"] },
            { text: "いいえ", genre: ["none"] }
        ]
    },
    {
        id: 6,
        question: "定期的に発信したい情報はありますか。",
        answers: [
            { text: "はい", genre: ["ニュース", "お知らせ"] },
            { text: "いいえ", genre: ["none"] }
        ]
    },

    // 潜在顧客の獲得
    {
        id: 7,
        question: "お客様はあなたやスタッフから直接説明を受ける以外に、あなたの商品やサービスを知ることがありますか。",
        answers: [
            { text: "はい", genre: ["製品・サービス情報（概要、見た目、価格など）"] },
            { text: "いいえ", genre: ["none"] }
        ]
    },
    {
        id: 8,
        question: "他のお客様からの紹介や口コミで、新規のお客様を獲得することはありますか。",
        answers: [
            { text: "はい", genre: ["製品・サービス情報（概要、見た目、価格など）"] },
            { text: "いいえ", genre: ["none"] }
        ]
    },

    // 顧客満足度／信頼関係の構築
    {
        id: 9,
        question: "商品やサービスの説明で補足したいことはありますか。",
        answers: [
            { text: "はい", genre: ["製品・サービス情報2（こだわり、問題提起など）"] },
            { text: "いいえ", genre: ["none"] }
        ]
    },
    {
        id: 10,
        question: "商品やサービスの使い方でお客様が困っていることはありませんか。",
        answers: [
            { text: "はい", genre: ["製品・サービス情報3（使い方）", "FAQ", "問い合わせ"] },
            { text: "いいえ", genre: ["none"] }
        ]
    },
    {
        id: 11,
        question: "商品やサービスに関する質問は頻繁にありますか。具体的にはどのような問い合わせですか。",
        answers: [
            { text: "製品、サービスについて", genre: ["製品・サービス情報（概要、見た目、価格など）"] },
            { text: "配送について", genre: ["配送について"] },
            { text: "支払い方法について", genre: ["支払い方法について"] },
            { text: "キャンセル、返品のルールについて", genre: ["キャンセルポリシー"] },
            { text: "保証について", genre: ["]保証について"] },
            { text: "問い合わせ先について", genre: ["問い合わせ"] },
            { text: "アクセスについて", genre: ["アクセス、地図"] },
            { text: "駐車場", genre: ["アクセス、地図"] },
            { text: "営業時間、定休日", genre: ["営業時間、定休日"] },
            { text: "その他（その他はQAでカバー）", genre: ["FAQ","問い合わせ"] }
        ]
    },
    {
        id: 12,
        question: "お客様からのフィードバックやお問い合わせをオンラインで受けたいですか。",
        answers: [
            { text: "はい", genre: ["問い合わせ"] },
            { text: "いいえ", genre: ["none"] }
        ]
    },
    {
        id: 13,
        question: "お客様に事前に知っておいてほしいことはありますか。",
        answers: [
            { text: "はい", genre: ["製品・サービス情報4（注意事項など）"] },
            { text: "いいえ", genre: ["none"] }
        ]
    },
    {
        id: 14,
        question: "お客様に事前に質問しておきたいことはありますか。",
        answers: [
            { text: "はい", genre: ["問い合わせ2（質問フォーム、カウンセリングシート）"] },
            { text: "いいえ", genre: ["none"] }
        ]
    },
    {
        id: 15,
        question: "既存のお客様からの感想を発信したいですか。",
        answers: [
            { text: "はい", genre: ["お客様の声", "レビュー"] },
            { text: "いいえ", genre: ["none"] }
        ]
    },
    {
        id: 16,
        question: "予約のキャンセルや返品、クレームなどが頻繁にありますか。",
        answers: [
            { text: "はい", genre: ["製品・サービス情報4（注意事項など）", "FAQ", "問い合わせ"] },
            { text: "いいえ", genre: ["none"] }
        ]
    },
    {
        id: 17,
        question: "特別なお客様だけに限定で公開したい情報はありますか。",
        answers: [
            { text: "はい", genre: ["会員限定メニュー、ニュースレター（応相談）"] },
            { text: "いいえ", genre: ["none"] }
        ]
    },

    // 販売手段
    {
        id: 18,
        question: "オンラインでの直接販売をしたい／強化したいですか。",
        answers: [
            { text: "はい", genre: ["購入ボタン（決済システム）", "問い合わせ", "在庫状況"] },
            { text: "いいえ", genre: ["none"] }
        ]
    },
    {
        id: 19,
        question: "オンラインでの予約受付をしたいですか。",
        answers: [
            { text: "はい", genre: ["予約システム", "問い合わせ", "予約状況カレンダー"] },
            { text: "いいえ", genre: ["none"] }
        ]
    },
];

document.addEventListener('DOMContentLoaded', function() {
    const questionsContainer = document.getElementById('questions');
    const questionsCount = questions.length;

    questions.forEach((question, qIndex) => {
        let questionHTML = `<div class="question question${question.id}"><p class="title">${question.question}</p>`;
        question.answers.forEach((answer, aIndex) => {
            questionHTML += `
                <div class="answer">
                <input type="radio" id="answer${question.id}-${aIndex}" name="question${question.id}" value="${aIndex}">
                <label for="answer${question.id}-${aIndex}">${answer.text}</label>
                </div>
            `;
        });
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
        console.log(value);

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
});

function showResults() {
    const genrePoints = {};
    questions.forEach(question => {
        const selectedAnswerElement = document.querySelector(`input[name="question${question.id}"]:checked`);

        if (selectedAnswerElement) {
            const selectedAnswerIndex = selectedAnswerElement.value;
            // console.log(question);
            // console.log(selectedAnswerIndex);
            if (selectedAnswerIndex !== undefined) {
                const selectedGenres = question.answers[selectedAnswerIndex].genre;
                // console.log(question.answers[selectedAnswerIndex]);
                // console.log(selectedGenres);

                selectedGenres.forEach(genre => {
                    genrePoints[genre] = (genrePoints[genre] || 0) + 1;
                });
            }
        }
    });

    let resultsHTML = "あなたのジャンルごとのポイント:<br>";
    for (const genre in genrePoints) {
        resultsHTML += `${genre}: ${genrePoints[genre]} ポイント<br>`;
    }

    document.getElementById('results').innerHTML = resultsHTML;



}

