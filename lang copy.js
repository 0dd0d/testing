// const langEl = document.querySelector('.langWrap');
// 		const link = document.querySelectorAll('a');
// 		const titleEl = document.querySelector('.title');
// 		const descrEl = document.querySelector('.description');

// 		link.forEach(el => {
// 			el.addEventListener('click', () => {
// 				langEl.querySelector('.active').classList.remove('active');
// 				el.classList.add('active');

// 				const attr = el.getAttribute('language');

// 				titleEl.textContent = data[attr].title;
// 				descrEl.textContent = data[attr].description;
// 			});
// 		});
		
// 		var data = {
// 			  "english": 
// 			  {
// 			    "title": "Hello World",
// 			    "description": 
// 				    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non adipisci eligendi repellat ad dolor veritatis itaque sequi minus iste, doloremque. Officiis non eaque atque excepturi repudiandae nulla eos eligendi magni molestiae eius distinctio, voluptas pariatur incidunt et culpa inventore aspernatur recusandae nihil asperiores, vitae, maiores laborum quasi perspiciatis natus dignissimos! Accusantium aliquam nostrum impedit dignissimos iste, iure inventore! Sapiente, labore earum ut dicta ducimus asperiores laudantium natus officiis, quisquam placeat aspernatur voluptatum aut voluptates tenetur quos magni fugit quia. Fugiat."
// 			  },
// 			  "kazakh": 
// 			  {
// 			    "title": "Сәлем Әлем",
// 			    "description": 
// 				    "Сәбіз Lorem ipsum, жеңілдік. Бұл ауырсыну үшін осы ұннан таңдамаңыз, сондықтан аз Осы ауырсынуды орындаңыз. Қызметтер жоқ және оның айырмашылығын ұлы ыңғайсыздық таңдау, тәжірибе ретінде қабылданған ештеңе өңдеу үшін нәтиже инцидент және қателіктерді зерттеуші ләззат, өмір, encounter born сияқты үлкен тағамдар-бәрі! Осы мәселе бойынша біздің сабоның кейбірін ашу, зерттеуші дұрыс! Дана, біз asperiores туған қызметтер тізімі деді олардың жұмыс, кез келген уақытта, содан бері үлкен жүгірістер, соның ішінде ләззат немесе рахат өңдеу сұраймыз. Қашуға."
// 			  },
// 			  "japanese": 
// 			  {
// 			    "title": "ハロー・ワールド",
// 			    "description": 
// 				    "ﾂつｨﾂ知ﾂづｧﾂつｹﾂ-ﾂ新ﾂ陳ﾂ湘ｮﾂ陛ｱ これらの苦痛から真実の苦痛に選ぶために得てはいけない、従ってより少しにこの苦痛に従ってはいけない。 サービスではないと、彼の区別の大きな不快感から選択するそれらの否認を歓迎しない、結果として生じた事件の喜びと障害エクスプローラが受け入 このことについて私たちの下駄のいくつかを非難,右エクスプローラ! 的に仕事をしていまasperioresリストの生まれのサービスをつけてください編集喜びや楽しみの開催なども走りました。 走れ。."
// 			  }
// 			}










// function setLanguage(lang) {


  
//   localStorage.setItem('lang', lang);
//   location.reload();
//   document.getElementById('language-select1').value = lang;
//   document.getElementById('language-select2').value = lang;
// }

// var lang = localStorage.getItem('lang') || 'en';

// document.querySelector('#language-select1').value = lang;
// document.querySelector('#language-select2').value = lang;

// if (lang === 'en') {
//   document.getElementById('aboutusdes').textContent = 'ReSaTech is an AI tech spin-off company from CAiRS. ReSaTech leverages the advanced technologies and research outcomes of CAiRS to provide customizable AI solutions that enhance product reliability and system safety, reduce operating costs and risks, and protect human life and health.';

// } else if (lang === 'tc') {
//   document.getElementById('exploredes').textContent = '威晨科技有限公司 - 針對您的產品可靠性的人工智能解決方案';

// } else if (lang === 'sc') {
//   document.getElementById('exploredes').textContent = '威晨科技有限公司 - 针对您的产品可靠性的人工智能解决方案';

// }


function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  location.reload();
  document.querySelectorAll('.language-select').forEach(function(element) {
    element.value = lang;
  });


}

var lang = localStorage.getItem('lang') || 'en';

// document.querySelector('#language-select1').value = lang;
// document.querySelector('#language-select2').value = lang;

document.querySelectorAll('.language-select').forEach(function(element) {
  element.value = lang;
});

if (lang === 'en') {
  document.querySelectorAll('.exploredes').forEach(function(element) {
    element.textContent = 'tododo';
  });
} else if (lang === 'tc') {
  document.querySelectorAll('.exploredes').forEach(function(element) {
    element.textContent = '針對';
  });
} else if (lang === 'sc') {
  document.querySelectorAll('.exploredes').forEach(function(element) {
    element.textContent = '针对';
  });
}
