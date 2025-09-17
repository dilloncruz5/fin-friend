// === Budget App Language Translations ===
const translations = {
  en: {
    welcome: "Welcome to",
    tagline: "Your personal guide to financial freedom",
    "select-language": "Select Language:",
    "ai-assistant": "AI Financial Assistant",
    "ai-desc": "Ask any financial questions in English, Hindi, or Tamil. Get personalized advice instantly.",
    "budget-tracker": "Budget Tracker",
    "budget-desc": "Record your income and expenses to understand your spending patterns and save more effectively.",
    "investment-guide": "Investment Guide",
    "investment-desc": "Find the best investment options based on your savings amount and financial goals.",
    "loan-eligibility": "Loan Eligibility",
    "loan-desc": "Enter your financial details to see potential loan amounts and eligibility.",
    "financial-education": "Financial Education",
    "coming-soon": "Learn more about personal finance and grow your financial knowledge. (Coming Soon)"
  },
  hi: {
    welcome: "स्वागत है",
    tagline: "आपकी वित्तीय स्वतंत्रता के लिए मार्गदर्शक",
    "select-language": "भाषा चुनें:",
    "ai-assistant": "एआई वित्तीय सहायक",
    "ai-desc": "अंग्रेज़ी, हिंदी या तमिल में अपने वित्तीय प्रश्न पूछें। तुरंत व्यक्तिगत सलाह पाएं।",
    "budget-tracker": "बजट ट्रैकर",
    "budget-desc": "अपनी आय और खर्च दर्ज करें ताकि आप अपने खर्च को समझ सकें और बेहतर बचत कर सकें।",
    "investment-guide": "निवेश मार्गदर्शिका",
    "investment-desc": "अपनी बचत राशि और लक्ष्यों के आधार पर सर्वोत्तम निवेश विकल्प पाएं।",
    "loan-eligibility": "ऋण पात्रता",
    "loan-desc": "संभावित ऋण राशि और पात्रता देखने के लिए अपनी वित्तीय जानकारी दर्ज करें।",
    "financial-education": "वित्तीय शिक्षा",
    "coming-soon": "व्यक्तिगत वित्त के बारे में जानें और अपना वित्तीय ज्ञान बढ़ाएं। (जल्द आ रहा है)"
  },
  ta: {
    welcome: "நல்வரவு",
    tagline: "உங்கள் நிதி சுதந்திரத்திற்கு தனிப்பட்ட வழிகாட்டி",
    "select-language": "மொழியை தேர்ந்தெடுக்கவும்:",
    "ai-assistant": "ஏஐ நிதி உதவியாளர்",
    "ai-desc": "ஆங்கிலம், இந்தி அல்லது தமிழ் மொழியில் உங்கள் நிதி கேள்விகளை கேட்கவும். தனிப்பயன் ஆலோசனையை உடனே பெறுங்கள்.",
    "budget-tracker": "செலவுக் கண்காணிப்பான்",
    "budget-desc": "உங்கள் வருமானம் மற்றும் செலவுகளை பதிவு செய்து, உங்கள் செலவு பழக்கங்களைப் புரிந்து கொள்ளவும் மற்றும் சிறப்பாக சேமிக்கவும்.",
    "investment-guide": "முதலீட்டு வழிகாட்டி",
    "investment-desc": "உங்கள் சேமிப்பு தொகை மற்றும் நிதி குறிக்கோள்களை அடிப்படையாகக் கொண்டு சிறந்த முதலீட்டு விருப்பங்களை கண்டறியுங்கள்.",
    "loan-eligibility": "கடன் தகுதி",
    "loan-desc": "சாத்தியமான கடன் தொகைகள் மற்றும் தகுதியை பார்க்க உங்கள் நிதி விவரங்களை உள்ளிடுங்கள்.",
    "financial-education": "நிதி கல்வி",
    "coming-soon": "தனிப்பட்ட நிதியைப் பற்றி மேலும் அறிந்து உங்கள் நிதி அறிவைப் பெருக்கவும். (விரைவில் வரும்)"
  }
};

// === Language switching logic ===
function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("preferredLanguage", lang);
}

// === Navigate to another page ===
function navigate(url) {
  window.location.href = url; // Redirect to the specified page
}

// === On load ===
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLanguage") || "en";
  changeLanguage(savedLang);

  const languageSelector = document.querySelector("#language-selector");
  if (languageSelector) {
    languageSelector.innerHTML = '';
    ["en", "hi", "ta"].forEach((lang) => {
      const option = document.createElement("option");
      option.value = lang;
      option.textContent = translations[lang].welcome;
      languageSelector.appendChild(option);
    });
    languageSelector.value = savedLang;
    languageSelector.addEventListener("change", (e) => {
      changeLanguage(e.target.value);
    });
  }

  updateContent();
  initializeBudgetTracker();
  initializeInvestmentGuide();
});

// === Inject main content ===
function updateContent() {
  const contentDiv = document.getElementById("content");
  if (contentDiv) {
    contentDiv.innerHTML = `
      <h1 data-i18n="welcome"></h1>
      <p data-i18n="tagline"></p>
      <div class="ai-assistant">
        <h2 data-i18n="ai-assistant"></h2>
        <p data-i18n="ai-desc"></p>
      </div>
      <div class="budget-tracker">
        <h3 data-i18n="budget-tracker"></h3>
        <p data-i18n="budget-desc"></p>
      </div>
      <div class="investment-guide">
        <h3 data-i18n="investment-guide"></h3>
        <p data-i18n="investment-desc"></p>
      </div>
      <div class="loan-eligibility">
        <h3 data-i18n="loan-eligibility"></h3>
        <p data-i18n="loan-desc"></p>
      </div>
      <div class="financial-education">
        <h3 data-i18n="financial-education"></h3>
        <p data-i18n="coming-soon"></p>
      </div>
    `;
    changeLanguage(localStorage.getItem("preferredLanguage") || "en");
  }
}

// === Budget Tracker ===
function initializeBudgetTracker() {
  const incomeDisplay = document.getElementById("income");
  const expenseDisplay = document.getElementById("expense");
  const balanceDisplay = document.getElementById("balance");
  const typeInput = document.getElementById("type");
  const amountInput = document.getElementById("amount");
  const descriptionInput = document.getElementById("description");
  const addBtn = document.getElementById("add-btn");
  const transactionsContainer = document.getElementById("transactions");

  if (!incomeDisplay || !expenseDisplay || !balanceDisplay || !addBtn) return;

  let income = 0;
  let expenses = 0;

  addBtn.addEventListener("click", () => {
    const type = typeInput.value;
    const amount = parseFloat(amountInput.value);
    const description = descriptionInput.value.trim();

    if (isNaN(amount) || amount <= 0 || description === "") {
      alert("Please enter a valid amount and description.");
      return;
    }

    const transaction = document.createElement("div");
    transaction.classList.add("transaction");
    transaction.innerHTML = `
      <p><strong>${type === "income" ? "🟢" : "🔴"} ₹${amount}</strong> - ${description}</p>
    `;
    transactionsContainer.prepend(transaction);

    if (type === "income") {
      income += amount;
    } else {
      expenses += amount;
    }

    updateSummary();
    amountInput.value = "";
    descriptionInput.value = "";
  });

  function updateSummary() {
    incomeDisplay.textContent = `₹${income}`;
    expenseDisplay.textContent = `₹${expenses}`;
    balanceDisplay.textContent = `₹${income - expenses}`;
  }
}

// === Investment Guide ===
function initializeInvestmentGuide() {
  const savingsAmount = document.getElementById("savingsAmount");
  const duration = document.getElementById("duration");
  const findOptionsButton = document.getElementById("findOptionsButton");
  const optionsContainer = document.getElementById("optionsContainer");
  const investmentOptions = document.getElementById("investmentOptions");

  const investmentData = [
    {
      name: "Fixed Deposit",
      rate: "6–7% p.a.",
      risk: "Low Risk",
      color: "bg-green-100 text-green-600"
    },
    {
      name: "Recurring Deposit",
      rate: "5.5–6.5% p.a.",
      risk: "Low Risk",
      color: "bg-green-100 text-green-600"
    },
    {
      name: "Gold Savings",
      rate: "8–12% p.a.",
      risk: "Medium Risk",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      name: "Mutual Funds (SIP)",
      rate: "10–15% p.a.",
      risk: "Medium Risk",
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  function validateInput() {
    const amount = parseFloat(savingsAmount.value);
    const years = parseInt(duration.value);
    const isValid = !isNaN(amount) && amount > 0 && years > 0;

    findOptionsButton.disabled = !isValid;
    findOptionsButton.className = isValid
      ? "w-full py-3 rounded-xl font-medium transition-all flex items-center justify-center space-x-2 bg-finance-blue text-white"
      : "w-full py-3 rounded-xl font-medium transition-all flex items-center justify-center space-x-2 bg-gray-100 text-gray-400";
  }

  function showOptions() {
    investmentOptions.innerHTML = "";
    investmentData.forEach(option => {
      const item = document.createElement("div");
      item.className = "p-4 bg-white shadow rounded-xl border border-gray-100";
      item.innerHTML = `
        <div class="flex items-center justify-between">
          <div>
            <h4 class="font-semibold text-finance-soft-black">${option.name}</h4>
            <p class="text-sm text-finance-gray">${option.rate}</p>
          </div>
          <span class="text-sm px-3 py-1 rounded-full ${option.color}">${option.risk}</span>
        </div>
      `;
      investmentOptions.appendChild(item);
    });
    optionsContainer.classList.remove("hidden");
  }

  if (savingsAmount && duration && findOptionsButton) {
    savingsAmount.addEventListener("input", validateInput);
    duration.addEventListener("change", validateInput);
    findOptionsButton.addEventListener("click", showOptions);
  }
}

// === AI Chat with Markdown Support ===
const form = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const chatbox = document.getElementById("chatbox");

if (form && userInput && chatbox) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const message = userInput.value.trim();
    if (!message) return;

    chatbox.innerHTML += `<div class="user-msg"><strong>You:</strong> ${message}</div>`;
    chatbox.scrollTop = chatbox.scrollHeight;
    userInput.value = "";

    try {
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      });

      const data = await response.json();
      const reply = data.response;

      const parsedReply = marked.parse(reply); // Markdown support
      chatbox.innerHTML += `<div class="bot-msg"><strong>Bot:</strong> ${parsedReply}</div>`;
      chatbox.scrollTop = chatbox.scrollHeight;
    } catch (err) {
      chatbox.innerHTML += `<div class="bot-msg"><strong>Bot:</strong> Error connecting to server.</div>`;
    }
  });
}
