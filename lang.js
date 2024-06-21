// function setLanguage(lang) {
//   // Store the selected language in localStorage
//   localStorage.setItem('lang', lang);

//   // Reload the current page
//   location.reload();
// }






// // Retrieve language from localStorage or default to 'en'
// var lang = localStorage.getItem('lang') || 'en';

// // Set the selected option in the dropdown
// document.querySelector('select').value = lang;

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
//   document.getElementById('explore').textContent = 'Explore';
//   document.getElementById('exploredes').textContent = 'ReSaTech Limited - The AI solution for your product reliability.';
//   document.getElementById('aboutusti').textContent = 'About Us';
//   document.getElementById('aboutusdes').textContent = 'ReSaTech is an AI tech spin-off company from CAiRS. ReSaTech leverages the advanced technologies and research outcomes of CAiRS to provide customizable AI solutions that enhance product reliability and system safety, reduce operating costs and risks, and protect human life and health.';
// } 


// else if (lang === 'tc') {
//   document.getElementById('explore').textContent = '探索';
//   document.getElementById('exploredes').textContent = '威晨科技有限公司 - 針對您的產品可靠性的人工智能解決方案';
//   document.getElementById('aboutusti').textContent = '關於我們';
//   document.getElementById('aboutusdes').textContent = '威晨科技有限公司 (ReSaTech Limited) 是 產品可靠性暨系統安全研發中心 (CAiRS) 的一家人工智慧技術分拆公司。 我們利用 CAiRS 的先進技術和研究成果，提供客製化的人工智慧解決方案，增強產品可靠性和系統安全性，降低營運成本和風險，保護人類生命和健康。';

// } 


// else if (lang === 'sc') {
//   document.getElementById('explore').textContent = '探索';
//   document.getElementById('exploredes').textContent = '威晨科技有限公司 - 针对您的产品可靠性的人工智能解决方案';
//   document.getElementById('aboutusti').textContent = '关于我们';
//   document.getElementById('aboutusdes').textContent = '威晨科技有限公司 (ReSaTech Limited) 是 产品可靠性暨系统安全研发中心 (CAiRS) 的一家人工智慧技术分拆公司。 我們利用 CAiRS 的先进技术和研究成果，提供客制化的人工智慧解决方案，增强产品可靠性和系统安全性，降低营运成本和风险，保护人类生命和健康。';
//   document.getElementById('abwoutusti').textContent = 'AboutUs';

// }





function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  location.reload();
  document.querySelectorAll('.language-select').forEach(function(element) {
    element.value = lang;
  });


}

var lang = localStorage.getItem('lang') || 'en';

document.querySelector('#language-select1').value = lang;
document.querySelector('#language-select2').value = lang;



document.querySelectorAll('.language-select').forEach(function(element) {
  element.value = lang;
});

if (lang === 'en') {
  document.querySelectorAll('.Homepage').forEach(function(element) {element.textContent = 'Homepage';});
  document.querySelectorAll('.Ourteam').forEach(function(element) {element.textContent = 'Our team';});
  document.querySelectorAll('.Oursolutions').forEach(function(element) {element.textContent = 'Our solutions';});
  document.querySelectorAll('.Industries').forEach(function(element) {element.textContent = 'Industries';});
  document.querySelectorAll('.Careers').forEach(function(element) {element.textContent = 'Careers';});
  document.querySelectorAll('.Contactus').forEach(function(element) {element.textContent = 'Contact us';});
  document.querySelectorAll('.explore').forEach(function(element) {element.textContent = 'Explore';});
  document.querySelectorAll('.exploredes').forEach(function(element) {element.textContent = 'ReSaTech Limited - The AI solution for your product reliability.';});
  document.querySelectorAll('.aboutusti').forEach(function(element) {element.textContent = 'About Us';});
  document.querySelectorAll('.aboutusdes').forEach(function(element) {element.textContent = 'ReSaTech is an AI tech spin-off company from CAiRS. ReSaTech leverages the advanced technologies and research outcomes of CAiRS to provide customizable AI solutions that enhance product reliability and system safety, reduce operating costs and risks, and protect human life and health.';});
  document.querySelectorAll('.aboutusti1').forEach(function(element) {element.textContent = 'Cutting-edge';});
  document.querySelectorAll('.aboutusdes1').forEach(function(element) {element.textContent = 'The utilization of accredited AI technology serves to safeguard the dependability of you esteemed product.';});
  document.querySelectorAll('.aboutusti2').forEach(function(element) {element.textContent = 'Cost-effective';});
  document.querySelectorAll('.aboutusdes2').forEach(function(element) {element.textContent = 'Your custom-designed plan tailored specifically to your business operations and unique needs.';});
  document.querySelectorAll('.aboutusti3').forEach(function(element) {element.textContent = 'Reliable';});
  document.querySelectorAll('.aboutusdes3').forEach(function(element) {element.textContent = 'Professional engineers and AI researchers with decades of experience.';});
  document.querySelectorAll('.risk').forEach(function(element) {element.textContent = "Don't risk it";});
  document.querySelectorAll('.riskdes').forEach(function(element) {element.textContent = 'Your product safety should never be a gamble.';});
  document.querySelectorAll('.service').forEach(function(element) {element.textContent = 'Services';});
  document.querySelectorAll('.servicedes').forEach(function(element) {element.textContent = 'ReSaTech works by leveraging its core technologies , such as analytics and visualization, to develop customized solutions for each industry.';});
  document.querySelectorAll('.serviceti1').forEach(function(element) {element.textContent = 'Predictive Maintenance';});
  document.querySelectorAll('.servicedes1').forEach(function(element) {element.textContent = 'Using machine learning algorithms, our focus is on predicting equipment failure, reducing downtime and cost for businesses.';});
  document.querySelectorAll('.serviceti2').forEach(function(element) {element.textContent = 'Fault Detection';});
  document.querySelectorAll('.servicedes2').forEach(function(element) {element.textContent = 'Our fault detection solution identifies faults in systems using machine learning, reducing the risk of equipment failure.';});
  document.querySelectorAll('.serviceti3').forEach(function(element) {element.textContent = 'Fault Diagnostics';});
  document.querySelectorAll('.servicedes3').forEach(function(element) {element.textContent = 'Our diagnostic solution identifies issues in industrial processes and generates recommendations for improvements, optimizing operations.';});
  document.querySelectorAll('.serviceti4').forEach(function(element) {element.textContent = 'Fault Prognostics';});
  document.querySelectorAll('.servicedes4').forEach(function(element) {element.textContent = 'Our machine learning solution forecasts future system behavior, allowing companies to proactively avoid costly equipment damage and downtime.';});
  document.querySelectorAll('.vision').forEach(function(element) {element.textContent = 'Our vision';});
  document.querySelectorAll('.visiondes1').forEach(function(element) {element.textContent = 'Protect human life and health';});
  document.querySelectorAll('.visiondes2').forEach(function(element) {element.textContent = 'Enhance product reliability';});
  document.querySelectorAll('.visiondes3').forEach(function(element) {element.textContent = 'Reduce operating risks';});
  document.querySelectorAll('.learnmoreti').forEach(function(element) {element.textContent = 'Learn more...';});
  document.querySelectorAll('.contactf').forEach(function(element) {element.textContent = 'Our Contact';});
  document.querySelectorAll('.namef').forEach(function(element) {element.textContent = 'ReSaTech Limited';});
  document.querySelectorAll('.address1').forEach(function(element) {element.textContent = 'Mail box no.721-23';});
  document.querySelectorAll('.address2').forEach(function(element) {element.textContent = 'Unit 721, 7/F, Building 19W';});
  document.querySelectorAll('.address3').forEach(function(element) {element.textContent = 'No. 19 Science Park West Avenge';});
  document.querySelectorAll('.address4').forEach(function(element) {element.textContent = 'Hong Kong Science Park';});
  document.querySelectorAll('.address5').forEach(function(element) {element.textContent = 'Pak Sehk Kok, N.T.';});
  document.querySelectorAll('.quicklinkf').forEach(function(element) {element.textContent = 'Quick Links';});
  document.querySelectorAll('.latestf').forEach(function(element) {element.textContent = 'Latest posts';});
  document.querySelectorAll('.recentnewsf').forEach(function(element) {element.textContent = 'Recent News';});
  document.querySelectorAll('.Ourteamti').forEach(function(element) {element.textContent = 'Collaborate. Innovate';});
  document.querySelectorAll('.Ourteamdes').forEach(function(element) {element.textContent = "Meet the Team Driving ReSaTech Limited's AI Revolution";});
  document.querySelectorAll('.Ourteamti1').forEach(function(element) {element.textContent = 'Organisation Structure';});
  document.querySelectorAll('.Ourteamimg1').forEach(function(img) {img.setAttribute('src', 'pic/org-structure.png');  });
  document.querySelectorAll('.teammemti').forEach(function(element) {element.textContent = 'Team member';});
  document.querySelectorAll('.CEO').forEach(function(element) {element.textContent = 'CEO';});
  document.querySelectorAll('.Winco').forEach(function(element) {element.textContent = 'Ir Prof. Winco K.C. YUNG';});
  document.querySelectorAll('.Dongguan-Hong').forEach(function(element) {element.textContent = 'Dongguan-Hong Kong Innovation and Technology Cooperation Consultant';});
  document.querySelectorAll('.GuilinVP').forEach(function(element) {element.textContent = 'Visiting Professor, School of Computer Science and Information Security, Guilin University Of Electronic Technology';});
  document.querySelectorAll('.PolyVP').forEach(function(element) {element.textContent = 'Visiting Professor, Integrated Graduate Development Scheme, The Hong Kong Polytechnic University';});
  document.querySelectorAll('.DIPLOMEGENEVA').forEach(function(element) {element.textContent = 'INTERNATIONAL exhibition of INVENTIONS GENEVA GOLD MEDAL';});
  document.querySelectorAll('.CAiRSC').forEach(function(element) {element.textContent = 'Senior Consultant and Past Centre Director of CAiRS';});
  document.querySelectorAll('.ITDCECM').forEach(function(element) {element.textContent = 'Executive Committee Member of Innovation and Technology Development Committee (ITDC), FHKI';});
  document.querySelectorAll('.CTO').forEach(function(element) {element.textContent = 'CTO';});
  document.querySelectorAll('.KennethLAM').forEach(function(element) {element.textContent = 'Prof. Kenneth LAM';});
  document.querySelectorAll('.PolyPROF').forEach(function(element) {element.textContent = 'Professor of Department of Electrical and Electronics Engineering, The Hong Kong Polytechnic University';});
  document.querySelectorAll('.CDO').forEach(function(element) {element.textContent = 'CDO';});
  document.querySelectorAll('.JanYeung').forEach(function(element) {element.textContent = 'Ms Jan Yeung';});
  document.querySelectorAll('.IEEECM').forEach(function(element) {element.textContent = 'Committee member, IEEE Reliability Society (Hong Kong Chapter)';});
  document.querySelectorAll('.SE').forEach(function(element) {element.textContent = 'SE';});
  document.querySelectorAll('.michaellee').forEach(function(element) {element.textContent = 'Mr Michael Lee';});
  document.querySelectorAll('.MSc').forEach(function(element) {element.textContent = 'MSc';});
  document.querySelectorAll('.BBAHons').forEach(function(element) {element.textContent = 'BBA (Hons)';});
  document.querySelectorAll('.PE').forEach(function(element) {element.textContent = 'PE';});
  document.querySelectorAll('.JessicaLeung').forEach(function(element) {element.textContent = 'Ms Jessica Leung';});
  document.querySelectorAll('.BEngHons').forEach(function(element) {element.textContent = 'BEng (Hons)';});
  document.querySelectorAll('.ex333s').forEach(function(element) {element.textContent = 'tododo';});
  
  
  document.querySelectorAll('.contactusmapch').forEach(function(hiddenClass) {hiddenClass.style.display = 'none';});
  document.querySelectorAll('.contactusmapsch').forEach(function(hiddenClass) {hiddenClass.style.display = 'none';});
  // document.getElementById('image').setAttribute('src', 'image_en.png');

  document.querySelectorAll('.soluapporachti').forEach(function(element) {element.textContent = 'Our approach';});
  document.querySelectorAll('.soluapporachti1').forEach(function(element) {element.textContent = 'Real-time diagnosis';});
  document.querySelectorAll('.soluapporachdes1').forEach(function(element) {element.textContent = 'Large volumes of data from medical images are processed by AI models which provide instant feedback on the diagnosis, facilitating the quick identification of any medical conditions and enabling the provision of appropriate treatment.';});
  document.querySelectorAll('.soluapporachti2').forEach(function(element) {element.textContent = 'Instant feedback';});
  document.querySelectorAll('.soluapporachdes2').forEach(function(element) {element.textContent = 'By constantly analyzing data, detecting patterns, and providing insights to users in real-time, AI models can deliver immediate feedback, identify errors, offer suggestions, and generate reports by leveraging machine learning algorithms.';});
  document.querySelectorAll('.soluapporachti3').forEach(function(element) {element.textContent = 'Early prevention';});
  document.querySelectorAll('.soluapporachdes3').forEach(function(element) {element.textContent = 'By analyzing large amounts of data and detecting patterns, AI models can perform early prevention, identifying potential health risks and taking appropriate measures to prevent or address issues before they escalate. Leveraging machine learning algorithms, these models can provide insights for better decision-making, leading to early prevention and reduction in the risk of adverse health outcomes.';});
  document.querySelectorAll('.soluscenarti').forEach(function(element) {element.textContent = 'Apply scenario';});
  document.querySelectorAll('.soluscenarti1').forEach(function(element) {element.textContent = 'ShenZhen metro';});
  document.querySelectorAll('.soluscenardes1').forEach(function(element) {element.textContent = "Close collaborate with Shenzhen Metro Group Co., Ltd. and Shenzhen Railway Group Engineering Technology Center to establish and develop railway defect detection technology, crediting ReSaTech Limited's support.";});
  document.querySelectorAll('.soluscenarti2').forEach(function(element) {element.textContent = 'Dongguan government';});
  document.querySelectorAll('.soluscenardes2').forEach(function(element) {element.textContent = 'Close collaborate with Dongguan government and Dongguan Science and Technology Bureau for the establishment for the Dongguang branch office.';});
  document.querySelectorAll('.industriesti').forEach(function(element) {element.textContent = 'CAiRS’s Collaboration Partners';});
  document.querySelectorAll('.industriesti1').forEach(function(element) {element.textContent = 'customer';});
  document.querySelectorAll('.industriesti2').forEach(function(element) {element.textContent = 'supplier';});
  document.querySelectorAll('.careerti').forEach(function(element) {element.textContent = 'We want you';});
  document.querySelectorAll('.careerdes').forEach(function(element) {element.textContent = 'Harness the power of AI for a safer future.';});
  document.querySelectorAll('.careertb11').forEach(function(element) {element.textContent = 'Position';});
  document.querySelectorAll('.careertb12').forEach(function(element) {element.textContent = '	Ref. no.';});
  document.querySelectorAll('.careertb13').forEach(function(element) {element.textContent = 'Application deadline';});
  document.querySelectorAll('.careertb21').forEach(function(element) {element.textContent = 'Research Associate / Research Assistant';});
  document.querySelectorAll('.careertb22').forEach(function(element) {element.textContent = 'ReSaTech-RA';});
  document.querySelectorAll('.careertb23').forEach(function(element) {element.textContent = '26/01/2024';});
  document.querySelectorAll('.careertb31').forEach(function(element) {element.textContent = 'Administrative Officer (Part-time)';});
  document.querySelectorAll('.careertb32').forEach(function(element) {element.textContent = 'ReSaTech-AO-PT';});
  document.querySelectorAll('.careertb33').forEach(function(element) {element.textContent = '26/01/2024';});
  document.querySelectorAll('.contactusti1').forEach(function(element) {element.textContent = 'Name:';});
  document.querySelectorAll('.contactusti2').forEach(function(element) {element.textContent = 'Email:';});
  document.querySelectorAll('.contactusti3').forEach(function(element) {element.textContent = 'Comment:';});
  document.querySelectorAll('.contactusti4').forEach(function(element) {element.textContent = 'Submit';});

  document.querySelectorAll('.ex333s').forEach(function(element) {element.textContent = 'tododo';});
  document.querySelectorAll('.ex333s').forEach(function(element) {element.textContent = 'tododo';});
  document.querySelectorAll('.ex333s').forEach(function(element) {element.textContent = 'tododo';});
  document.querySelectorAll('.ex333s').forEach(function(element) {element.textContent = 'tododo';});
  document.querySelectorAll('.ex333s').forEach(function(element) {element.textContent = 'tododo';});
  document.querySelectorAll('.ex333s').forEach(function(element) {element.textContent = 'tododo';});
  document.querySelectorAll('.ex333s').forEach(function(element) {element.textContent = 'tododo';});
  document.querySelectorAll('.ex333s').forEach(function(element) {element.textContent = 'tododo';});
  document.querySelectorAll('.ex333s').forEach(function(element) {element.textContent = 'tododo';});
  document.querySelectorAll('.ex333s').forEach(function(element) {element.textContent = 'tododo';});
  document.querySelectorAll('.ex333s').forEach(function(element) {element.textContent = 'tododo';});
  document.querySelectorAll('.ex333s').forEach(function(element) {element.textContent = 'tododo';});

} 

else if (lang === 'tc') {
  document.querySelectorAll('.Homepage').forEach(function(element) {element.textContent = '首頁';});
  document.querySelectorAll('.Ourteam').forEach(function(element) {element.textContent = '我們的團隊';});
  document.querySelectorAll('.Oursolutions').forEach(function(element) {element.textContent = '我們的解決方案';});
  document.querySelectorAll('.Industries').forEach(function(element) {element.textContent = '行業';});
  document.querySelectorAll('.Careers').forEach(function(element) {element.textContent = '職位空缺';});
  document.querySelectorAll('.Contactus').forEach(function(element) {element.textContent = '聯絡我們';});
  document.querySelectorAll('.explore').forEach(function(element) {element.textContent = '探索';});
  document.querySelectorAll('.exploredes').forEach(function(element) {element.textContent = '威晨科技有限公司 - 針對您的產品可靠性的人工智能解決方案';});
  document.querySelectorAll('.aboutusti').forEach(function(element) {element.textContent = '關於我們';});
  document.querySelectorAll('.aboutusdes').forEach(function(element) {element.textContent = '威晨科技有限公司 (ReSaTech Limited) 是 產品可靠性暨系統安全研發中心 (CAiRS) 的一家人工智慧技術分拆公司。 我們利用 CAiRS 的先進技術和研究成果，提供客製化的人工智慧解決方案，增強產品可靠性和系統安全性，降低營運成本和風險，保護人類生命和健康。';});
  document.querySelectorAll('.aboutusti1').forEach(function(element) {element.textContent = '前沿技術';});
  document.querySelectorAll('.aboutusdes1').forEach(function(element) {element.textContent = '使用經過認可的人工智慧技術可以保障您所尊敬的產品的可靠性。';});
  document.querySelectorAll('.aboutusti2').forEach(function(element) {element.textContent = '成本效益';});
  document.querySelectorAll('.aboutusdes2').forEach(function(element) {element.textContent = '專為您的業務營運和獨特需求量身定制的客製化計畫。';});
  document.querySelectorAll('.aboutusti3').forEach(function(element) {element.textContent = '可靠';});
  document.querySelectorAll('.aboutusdes3').forEach(function(element) {element.textContent = '擁有數十年經驗的專業工程師和人工智慧研究人員。';});
  document.querySelectorAll('.risk').forEach(function(element) {element.textContent = "不要冒險";});
  document.querySelectorAll('.riskdes').forEach(function(element) {element.textContent = '您的產品安全永遠不應該成為一場賭博。';});
  document.querySelectorAll('.service').forEach(function(element) {element.textContent = '服務';});
  document.querySelectorAll('.servicedes').forEach(function(element) {element.textContent = '我們利用其核心技術（例如分析和視覺化）為每個行業開發客製化解決方案。';});
  document.querySelectorAll('.serviceti1').forEach(function(element) {element.textContent = '預測性維護';});
  document.querySelectorAll('.servicedes1').forEach(function(element) {element.textContent = '使用機器學習演算法，我們的重點是預測設備故障，減少停機時間和企業成本。';});
  document.querySelectorAll('.serviceti2').forEach(function(element) {element.textContent = '故障偵測';});
  document.querySelectorAll('.servicedes2').forEach(function(element) {element.textContent = '我們的故障偵測解決方案使用機器學習識別系統中的故障，降低設備故障的風險。';});
  document.querySelectorAll('.serviceti3').forEach(function(element) {element.textContent = '故障診斷';});
  document.querySelectorAll('.servicedes3').forEach(function(element) {element.textContent = '我們的診斷解決方案可識別工業流程中的問題並產生改進建議，優化操作。';});
  document.querySelectorAll('.serviceti4').forEach(function(element) {element.textContent = '故障預測';});
  document.querySelectorAll('.servicedes4').forEach(function(element) {element.textContent = '我們的機器學習解決方案可以預測未來的系統行為，使公司能夠主動避免代價高昂的設備損壞和停機。';});
  document.querySelectorAll('.vision').forEach(function(element) {element.textContent = '我們的願景';});
  document.querySelectorAll('.visiondes1').forEach(function(element) {element.textContent = '保護人類生命健康';});
  document.querySelectorAll('.visiondes2').forEach(function(element) {element.textContent = '增強產品可靠性';});
  document.querySelectorAll('.visiondes3').forEach(function(element) {element.textContent = '降低營運風險';});
  document.querySelectorAll('.learnmoreti').forEach(function(element) {element.textContent = '瞭解更多...';});
  document.querySelectorAll('.contactf').forEach(function(element) {element.textContent = '聯絡方法';});
  document.querySelectorAll('.namef').forEach(function(element) {element.textContent = '威晨科技有限公司';});
  document.querySelectorAll('.address1').forEach(function(element) {element.textContent = '新界白石角';});
  document.querySelectorAll('.address2').forEach(function(element) {element.textContent = '香港科學園';});
  document.querySelectorAll('.address3').forEach(function(element) {element.textContent = '科技大道西19號';});
  document.querySelectorAll('.address4').forEach(function(element) {element.textContent = '7樓712室';});
  document.querySelectorAll('.address5').forEach(function(element) {element.textContent = '郵箱號碼721-23';});
  document.querySelectorAll('.quicklinkf').forEach(function(element) {element.textContent = '快速連結';});
  document.querySelectorAll('.latestf').forEach(function(element) {element.textContent = '最新貼文';});
  document.querySelectorAll('.recentnewsf').forEach(function(element) {element.textContent = '最近新聞';});
  document.querySelectorAll('.Ourteamti').forEach(function(element) {element.textContent = '合作 • 創新';});
  document.querySelectorAll('.Ourteamdes').forEach(function(element) {element.textContent = "認識推動人工智慧革命的團隊";});
  document.querySelectorAll('.Ourteamti1').forEach(function(element) {element.textContent = '組織結構';});
  document.querySelectorAll('.Ourteamimg1').forEach(function(img) {  img.setAttribute('src', 'pic/org-structurech.png');  });
  document.querySelectorAll('.teammemti').forEach(function(element) {element.textContent = '工作團隊';});
  document.querySelectorAll('.CEO').forEach(function(element) {element.textContent = '行政總裁';});
  document.querySelectorAll('.Winco').forEach(function(element) {element.textContent = '容錦泉教授';});
  document.querySelectorAll('.Dongguan-Hong').forEach(function(element) {element.textContent = '東莞市科學技術部莞港創科合作顧問';});
  document.querySelectorAll('.GuilinVP').forEach(function(element) {element.textContent = '桂林電子科技大學計算機與信息安全學院客座教授';});
  document.querySelectorAll('.PolyVP').forEach(function(element) {element.textContent = '香港理工大學綜合深造發展計畫客座講師';});
  document.querySelectorAll('.DIPLOMEGENEVA').forEach(function(element) {element.textContent = '日內瓦國際發明展金獎';});
  document.querySelectorAll('.CAiRSC').forEach(function(element) {element.textContent = 'CAiRS高級顧問及前中心主任';});
  document.querySelectorAll('.ITDCECM').forEach(function(element) {element.textContent = '香港工業總會創新及科技發展委員會(ITDC)執行委員會委員';});
  document.querySelectorAll('.CTO').forEach(function(element) {element.textContent = '首席技術長';});
  document.querySelectorAll('.KennethLAM').forEach(function(element) {element.textContent = '林健文教授';});
  document.querySelectorAll('.PolyPROF').forEach(function(element) {element.textContent = '香港理工大學電機及電子工程學系教授';});
  document.querySelectorAll('.CDO').forEach(function(element) {element.textContent = '首席發展總監';});
  document.querySelectorAll('.JanYeung').forEach(function(element) {element.textContent = '楊笑珍女士';});
  document.querySelectorAll('.IEEECM').forEach(function(element) {element.textContent = '美國電機及電子工程師學會可靠性協會香港分會委員';});
  document.querySelectorAll('.SE').forEach(function(element) {element.textContent = '軟件工程師';});
  document.querySelectorAll('.michaellee').forEach(function(element) {element.textContent = '李浩文先生';});
  document.querySelectorAll('.MSc').forEach(function(element) {element.textContent = '理學碩士';});
  document.querySelectorAll('.BBAHons').forEach(function(element) {element.textContent = '工商管理學士(榮譽)';});
  document.querySelectorAll('.PE').forEach(function(element) {element.textContent = '項目工程師';});
  document.querySelectorAll('.JessicaLeung').forEach(function(element) {element.textContent = '梁盈盈小姐';});
  document.querySelectorAll('.BEngHons').forEach(function(element) {element.textContent = '工程學學士(榮譽)';});
  document.querySelectorAll('.soluapporachti').forEach(function(element) {element.textContent = '解決方法';});
  document.querySelectorAll('.soluapporachti1').forEach(function(element) {element.textContent = '即時診斷';});
  document.querySelectorAll('.soluapporachdes1').forEach(function(element) {element.textContent = '人工智慧模型處理來自醫學影像的大量數據，提供診斷的即時回饋，有助於快速識別任何醫療狀況並提供適當的治療。';});
  document.querySelectorAll('.soluapporachti2').forEach(function(element) {element.textContent = '即時回饋';});
  document.querySelectorAll('.soluapporachdes2').forEach(function(element) {element.textContent = '透過不斷分析資料、偵測模式並向使用者即時提供見解，人工智慧模型可以利用機器學習演算法提供即時回饋、識別錯誤、提供建議並產生報告。';});
  document.querySelectorAll('.soluapporachti3').forEach(function(element) {element.textContent = '早期預防';});
  document.querySelectorAll('.soluapporachdes3').forEach(function(element) {element.textContent = '透過分析大量數據和檢測模式，人工智慧模型可以進行早期預防，識別潛在的健康風險，並在問題升級之前採取適當的措施來預防或解決問題。 利用機器學習演算法，這些模型可以為更好的決策提供見解，從而實現早期預防並降低不良健康結果的風險。';});
  document.querySelectorAll('.soluscenarti').forEach(function(element) {element.textContent = '應用場景';});
  document.querySelectorAll('.soluscenarti1').forEach(function(element) {element.textContent = '深圳地鐵';});
  document.querySelectorAll('.soluscenardes1').forEach(function(element) {element.textContent = '與深圳地鐵集團有限公司、深圳鐵路集團工程技術中心密切合作，建立和開發鐵路缺陷檢測技術';});
  document.querySelectorAll('.soluscenarti2').forEach(function(element) {element.textContent = '東莞市政府';});
  document.querySelectorAll('.soluscenardes2').forEach(function(element) {element.textContent = '與東莞市政府、東莞市科學技術局密切合作，成立東莞分公司。';});
  document.querySelectorAll('.industriesti').forEach(function(element) {element.textContent = '產品可靠性暨系統安全研發中心的合作夥伴';});
  document.querySelectorAll('.industriesti1').forEach(function(element) {element.textContent = '顧客';});
  document.querySelectorAll('.industriesti2').forEach(function(element) {element.textContent = '供應商';});
  document.querySelectorAll('.careerti').forEach(function(element) {element.textContent = '加入我們';});
  document.querySelectorAll('.careerdes').forEach(function(element) {element.textContent = '利用人工智慧的力量創造更安全的未來。';});
  document.querySelectorAll('.careertb11').forEach(function(element) {element.textContent = '職位';});
  document.querySelectorAll('.careertb12').forEach(function(element) {element.textContent = '參考編號';});
  document.querySelectorAll('.careertb13').forEach(function(element) {element.textContent = '截止日期';});
  document.querySelectorAll('.careertb21').forEach(function(element) {element.textContent = '助理研究員/研究助理';});
  document.querySelectorAll('.careertb22').forEach(function(element) {element.textContent = 'ReSaTech-RA';});
  document.querySelectorAll('.careertb23').forEach(function(element) {element.textContent = '26/01/2024';});
  document.querySelectorAll('.careertb31').forEach(function(element) {element.textContent = '行政主任（兼職）';});
  document.querySelectorAll('.careertb32').forEach(function(element) {element.textContent = 'ReSaTech-AO-PT';});
  document.querySelectorAll('.careertb33').forEach(function(element) {element.textContent = '	26/01/2024';});
  document.querySelectorAll('.contactusti1').forEach(function(element) {element.textContent = '姓名：';});
  document.querySelectorAll('.contactusti2').forEach(function(element) {element.textContent = '電郵：';});
  document.querySelectorAll('.contactusti3').forEach(function(element) {element.textContent = '留言：';});
  document.querySelectorAll('.contactusti4').forEach(function(element) {element.textContent = '遞交';});
  document.querySelectorAll('.contactusmapsch').forEach(function(hiddenClass) {hiddenClass.style.display = 'none';});
  document.querySelectorAll('.contactusmapen').forEach(function(hiddenClass) {hiddenClass.style.display = 'none';});

} 

else if (lang === 'sc') {
  document.querySelectorAll('.Homepage').forEach(function(element) {element.textContent = '首页';});
  document.querySelectorAll('.Ourteam').forEach(function(element) {element.textContent = '我们的团队';});
  document.querySelectorAll('.Oursolutions').forEach(function(element) {element.textContent = '我们的解决方案';});
  document.querySelectorAll('.Industries').forEach(function(element) {element.textContent = '行业';});
  document.querySelectorAll('.Careers').forEach(function(element) {element.textContent = '职位空缺';});
  document.querySelectorAll('.Contactus').forEach(function(element) {element.textContent = '联系我们';});
  document.querySelectorAll('.explore').forEach(function(element) {element.textContent = '探索';});
  document.querySelectorAll('.exploredes').forEach(function(element) {element.textContent = '威晨科技有限公司 - 针对您的产品可靠性的人工智能解决方案';});
  document.querySelectorAll('.aboutusti').forEach(function(element) {element.textContent = '关于我们';});
  document.querySelectorAll('.aboutusdes').forEach(function(element) {element.textContent = '威晨科技有限公司 (ReSaTech Limited) 是 产品可靠性暨系统安全研发中心 (CAiRS) 的一家人工智慧技术分拆公司。 我們利用 CAiRS 的先进技术和研究成果，提供客制化的人工智慧解决方案，增强产品可靠性和系统安全性，降低营运成本和风险，保护人类生命和健康。';});
  document.querySelectorAll('.aboutusti1').forEach(function(element) {element.textContent = '前沿技术';});
  document.querySelectorAll('.aboutusdes1').forEach(function(element) {element.textContent = '使用经过认可的人工智慧技术可以保障您所尊敬的产品的可靠性。';});
  document.querySelectorAll('.aboutusti2').forEach(function(element) {element.textContent = '成本效益';});
  document.querySelectorAll('.aboutusdes2').forEach(function(element) {element.textContent = '专为您的业务营运和独特需求量身定制的客制化计画。';});
  document.querySelectorAll('.aboutusti3').forEach(function(element) {element.textContent = '可靠';});
  document.querySelectorAll('.aboutusdes3').forEach(function(element) {element.textContent = '拥有数十年经验的专业工程师和人工智慧研究人员。';});
  document.querySelectorAll('.risk').forEach(function(element) {element.textContent = "不要冒险";});
  document.querySelectorAll('.riskdes').forEach(function(element) {element.textContent = '您的产品安全永远不应该成为一场赌博。';});
  document.querySelectorAll('.service').forEach(function(element) {element.textContent = '服务';});
  document.querySelectorAll('.servicedes').forEach(function(element) {element.textContent = '我们利用其核心技术（例如分析和视觉化）为每个行业开发客制化解决方案。';});
  document.querySelectorAll('.serviceti1').forEach(function(element) {element.textContent = '预测性维护';});
  document.querySelectorAll('.servicedes1').forEach(function(element) {element.textContent = '使用机器学习演算法，我们的重点是预测设备故障，减少停机时间和企业成本。';});
  document.querySelectorAll('.serviceti2').forEach(function(element) {element.textContent = '故障侦测';});
  document.querySelectorAll('.servicedes2').forEach(function(element) {element.textContent = '我们的故障侦测解决方案使用机器学习识别系统中的故障，降低设备故障的风险。';});
  document.querySelectorAll('.serviceti3').forEach(function(element) {element.textContent = '故障诊断';});
  document.querySelectorAll('.servicedes3').forEach(function(element) {element.textContent = '我们的诊断解决方案可识别工业流程中的问题并产生改进建议，优化操作。';});
  document.querySelectorAll('.serviceti4').forEach(function(element) {element.textContent = '故障预测';});
  document.querySelectorAll('.servicedes4').forEach(function(element) {element.textContent = '我们的机器学习解决方案可以预测未来的系统行为，使公司能够主动避免代价高昂的设备损坏和停机。';});
  document.querySelectorAll('.vision').forEach(function(element) {element.textContent = '我们的愿景';});
  document.querySelectorAll('.visiondes1').forEach(function(element) {element.textContent = '保护人类生命健康';});
  document.querySelectorAll('.visiondes2').forEach(function(element) {element.textContent = '增强产品可靠性';});
  document.querySelectorAll('.visiondes3').forEach(function(element) {element.textContent = '降低经营风险';});
  document.querySelectorAll('.learnmoreti').forEach(function(element) {element.textContent = '了解更多...';});
  document.querySelectorAll('.contactf').forEach(function(element) {element.textContent = '联络方法';});
  document.querySelectorAll('.namef').forEach(function(element) {element.textContent = '威晨科技有限公司';});
  document.querySelectorAll('.address1').forEach(function(element) {element.textContent = '新界白石角';});
  document.querySelectorAll('.address2').forEach(function(element) {element.textContent = '香港科学园';});
  document.querySelectorAll('.address3').forEach(function(element) {element.textContent = '科技大道西19号';});
  document.querySelectorAll('.address4').forEach(function(element) {element.textContent = '7楼712室';});
  document.querySelectorAll('.address5').forEach(function(element) {element.textContent = '邮箱号码721-23';});
  document.querySelectorAll('.quicklinkf').forEach(function(element) {element.textContent = '快速链接';});
  document.querySelectorAll('.latestf').forEach(function(element) {element.textContent = '最新帖子';});
  document.querySelectorAll('.recentnewsf').forEach(function(element) {element.textContent = '最近新闻';});
  document.querySelectorAll('.Ourteamti').forEach(function(element) {element.textContent = '合作 • 创新';});
  document.querySelectorAll('.Ourteamdes').forEach(function(element) {element.textContent = "认识推动人工智慧革命的团队";});
  document.querySelectorAll('.Ourteamti1').forEach(function(element) {element.textContent = '组织结构';});
  document.querySelectorAll('.Ourteamimg1').forEach(function(img) {  img.setAttribute('src', 'pic/org-structuresch.png');  });
  document.querySelectorAll('.teammemti').forEach(function(element) {element.textContent = '工作团队';});
  document.querySelectorAll('.CEO').forEach(function(element) {element.textContent = '行政总裁';});
  document.querySelectorAll('.Winco').forEach(function(element) {element.textContent = '容锦泉教授';});
  document.querySelectorAll('.Dongguan-Hong').forEach(function(element) {element.textContent = '东莞市科学技术部莞港创科合作顾问';});
  document.querySelectorAll('.GuilinVP').forEach(function(element) {element.textContent = '桂林电子科技大学计算机与信息安全学院客座教授';});
  document.querySelectorAll('.PolyVP').forEach(function(element) {element.textContent = '香港理工大学综合深造发展计划客座讲师';});
  document.querySelectorAll('.DIPLOMEGENEVA').forEach(function(element) {element.textContent = '日内瓦国际发明展金奖';});
  document.querySelectorAll('.CAiRSC').forEach(function(element) {element.textContent = 'CAiRS高级顾问及前中心主任';});
  document.querySelectorAll('.ITDCECM').forEach(function(element) {element.textContent = '香港工业总会创新及科技发展委员会(ITDC)执行委员会委员';});
  document.querySelectorAll('.CTO').forEach(function(element) {element.textContent = '首席技术长';});
  document.querySelectorAll('.KennethLAM').forEach(function(element) {element.textContent = '林健文教授';});
  document.querySelectorAll('.PolyPROF').forEach(function(element) {element.textContent = '香港理工大学电机及电子工程学系教授';});
  document.querySelectorAll('.CDO').forEach(function(element) {element.textContent = '首席发展总监';});
  document.querySelectorAll('.JanYeung').forEach(function(element) {element.textContent = '杨笑珍女士';});
  document.querySelectorAll('.IEEECM').forEach(function(element) {element.textContent = '美国电机及电子工程师学会可靠性协会香港分会委员';});
  document.querySelectorAll('.SE').forEach(function(element) {element.textContent = '软件工程师';});
  document.querySelectorAll('.michaellee').forEach(function(element) {element.textContent = '李浩文先生';});
  document.querySelectorAll('.MSc').forEach(function(element) {element.textContent = '理学硕士';});
  document.querySelectorAll('.BBAHons').forEach(function(element) {element.textContent = '工商管理学士(荣誉)';});
  document.querySelectorAll('.PE').forEach(function(element) {element.textContent = '项目工程师';});
  document.querySelectorAll('.JessicaLeung').forEach(function(element) {element.textContent = '梁盈盈小姐';});
  document.querySelectorAll('.BEngHons').forEach(function(element) {element.textContent = '工程学学士(荣誉)';});
  document.querySelectorAll('.soluapporachti').forEach(function(element) {element.textContent = '解决方法';});
  document.querySelectorAll('.soluapporachti1').forEach(function(element) {element.textContent = '即时诊断';});
  document.querySelectorAll('.soluapporachdes1').forEach(function(element) {element.textContent = '人工智慧模型处理来自医学影像的大量数据，提供诊断的即时回馈，有助于快速识别任何医疗状况并提供适当的治疗。';});
  document.querySelectorAll('.soluapporachti2').forEach(function(element) {element.textContent = '即时反馈';});
  document.querySelectorAll('.soluapporachdes2').forEach(function(element) {element.textContent = '透过不断分析资料、侦测模式并向使用者即时提供见解，人工智慧模型可以利用机器学习演算法提供即时回馈、识别错误、提供建议并产生报告。';});
  document.querySelectorAll('.soluapporachti3').forEach(function(element) {element.textContent = '早期预防';});
  document.querySelectorAll('.soluapporachdes3').forEach(function(element) {element.textContent = '透过分析大量数据和检测模式，人工智慧模型可以进行早期预防，识别潜在的健康风险，并在问题升级之前采取适当的措施来预防或解决问题。 利用机器学习演算法，这些模型可以为更好的决策提供见解，从而实现早期预防并降低不良健康结果的风险。';});
  document.querySelectorAll('.soluscenarti').forEach(function(element) {element.textContent = '应用场景';});
  document.querySelectorAll('.soluscenarti1').forEach(function(element) {element.textContent = '深圳地铁';});
  document.querySelectorAll('.soluscenardes1').forEach(function(element) {element.textContent = '与深圳地铁集团有限公司、深圳铁路集团工程技术中心紧密合作，建立和开发铁路缺陷检测技术';});
  document.querySelectorAll('.soluscenarti2').forEach(function(element) {element.textContent = '东莞政府';});
  document.querySelectorAll('.soluscenardes2').forEach(function(element) {element.textContent = '与东莞政府和东莞市科技局紧密合作，成立东莞分公司。';});
  document.querySelectorAll('.industriesti').forEach(function(element) {element.textContent = '产品可靠性暨系统安全研发中心的合作伙伴';});
  document.querySelectorAll('.industriesti1').forEach(function(element) {element.textContent = '顾客';});
  document.querySelectorAll('.industriesti2').forEach(function(element) {element.textContent = '供应商';});
  document.querySelectorAll('.careerti').forEach(function(element) {element.textContent = '加入我们';});
  document.querySelectorAll('.careerdes').forEach(function(element) {element.textContent = '利用人工智能的力量创造更安全的未来。';});
  document.querySelectorAll('.careertb11').forEach(function(element) {element.textContent = '职位';});
  document.querySelectorAll('.careertb12').forEach(function(element) {element.textContent = '参考编号';});
  document.querySelectorAll('.careertb13').forEach(function(element) {element.textContent = '截止日期';});
  document.querySelectorAll('.careertb21').forEach(function(element) {element.textContent = '助理研究员/研究助理';});
  document.querySelectorAll('.careertb22').forEach(function(element) {element.textContent = ' ReSaTech-RA';});
  document.querySelectorAll('.careertb23').forEach(function(element) {element.textContent = '26/01/2024';});
  document.querySelectorAll('.careertb31').forEach(function(element) {element.textContent = '行政主任（兼职）';});
  document.querySelectorAll('.careertb32').forEach(function(element) {element.textContent = 'ReSaTech-AO-PT';});
  document.querySelectorAll('.careertb33').forEach(function(element) {element.textContent = '26/01/2024';});
  document.querySelectorAll('.contactusti1').forEach(function(element) {element.textContent = '姓名：';});
  document.querySelectorAll('.contactusti2').forEach(function(element) {element.textContent = '电邮：';});
  document.querySelectorAll('.contactusti3').forEach(function(element) {element.textContent = '留言：';});
  document.querySelectorAll('.contactusti4').forEach(function(element) {element.textContent = '递交';});
  document.querySelectorAll('.contactusmapch').forEach(function(hiddenClass) {hiddenClass.style.display = 'none';});
  document.querySelectorAll('.contactusmapen').forEach(function(hiddenClass) {hiddenClass.style.display = 'none';});

}
