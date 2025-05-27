// بيانات الحروف والكلمات مع إيموجي متعددة
const arabicLetters = [
    { letter: 'أ', words: ['أسد', 'أرنب', 'أذن'], emojis: ['🦁', '🐰', '👂'], currentIndex: 0 },
    { letter: 'ب', words: ['بطة', 'بقرة', 'بيت'], emojis: ['🦆', '🐄', '🏠'], currentIndex: 0 },
    { letter: 'ت', words: ['تفاحة', 'تمساح', 'تاج'], emojis: ['🍎', '🐊', '👑'], currentIndex: 0 },
    { letter: 'ث', words: ['ثعلب', 'ثلج', 'ثوب'], emojis: ['🦊', '❄️', '👗'], currentIndex: 0 },
    { letter: 'ج', words: ['جمل', 'جبن', 'جزر'], emojis: ['🐪', '🧀', '🥕'], currentIndex: 0 },
    { letter: 'ح', words: ['حصان', 'حليب', 'حذاء'], emojis: ['🐎', '🥛', '👟'], currentIndex: 0 },
    { letter: 'خ', words: ['خروف', 'خيار', 'خاتم'], emojis: ['🐑', '🥒', '💍'], currentIndex: 0 },
    { letter: 'د', words: ['دب', 'دجاج', 'دراجة'], emojis: ['🐻', '🐔', '🚲'], currentIndex: 0 },
    { letter: 'ذ', words: ['ذئب', 'ذرة', 'ذهب'], emojis: ['🐺', '🌽', '🥇'], currentIndex: 0 },
    { letter: 'ر', words: ['رجل', 'رز', 'رقم'], emojis: ['👨', '🍚', '🔢'], currentIndex: 0 },
    { letter: 'ز', words: ['زهرة', 'زيتون', 'زرافة'], emojis: ['🌸', '🫒', '🦒'], currentIndex: 0 },
    { letter: 'س', words: ['سمكة', 'سيارة', 'سلة'], emojis: ['🐟', '🚗', '🧺'], currentIndex: 0 },
    { letter: 'ش', words: ['شمس', 'شجرة', 'شاي'], emojis: ['☀️', '🌳', '🍵'], currentIndex: 0 },
    { letter: 'ص', words: ['صقر', 'صندوق', 'صابون'], emojis: ['🦅', '📦', '🧼'], currentIndex: 0 },
    { letter: 'ض', words: ['ضفدع', 'ضوء', 'ضرس'], emojis: ['🐸', '💡', '🦷'], currentIndex: 0 },
    { letter: 'ط', words: ['طائر', 'طماطم', 'طبل'], emojis: ['🐦', '🍅', '🥁'], currentIndex: 0 },
    { letter: 'ظ', words: ['ظبي', 'ظل', 'ظفر'], emojis: ['🦌', '🌴', '💅'], currentIndex: 0 },
    { letter: 'ع', words: ['عصفور', 'عنب', 'عين'], emojis: ['🐤', '🍇', '👁️'], currentIndex: 0 },
    { letter: 'غ', words: ['غزال', 'غيمة', 'غراب'], emojis: ['🦌', '☁️', '🐦‍⬛'], currentIndex: 0 },
    { letter: 'ف', words: ['فيل', 'فراولة', 'فأر'], emojis: ['🐘', '🍓', '🐭'], currentIndex: 0 },
    { letter: 'ق', words: ['قطة', 'قمر', 'قلب'], emojis: ['🐱', '🌙', '❤️'], currentIndex: 0 },
    { letter: 'ك', words: ['كلب', 'كرة', 'كتاب'], emojis: ['🐶', '⚽', '📚'], currentIndex: 0 },
    { letter: 'ل', words: ['ليمون', 'لعبة', 'لسان'], emojis: ['🍋', '🧸', '👅'], currentIndex: 0 },
    { letter: 'م', words: ['موز', 'ماء', 'مفتاح'], emojis: ['🍌', '💧', '🔑'], currentIndex: 0 },
    { letter: 'ن', words: ['نحلة', 'نجمة', 'نار'], emojis: ['🐝', '⭐', '🔥'], currentIndex: 0 },
    { letter: 'ه', words: ['هدهد', 'هلال', 'هدية'], emojis: ['🐦', '🌙', '🎁'], currentIndex: 0 },
    { letter: 'و', words: ['وردة', 'ولد', 'وجه'], emojis: ['🌹', '👦', '😊'], currentIndex: 0 },
    { letter: 'ي', words: ['يد', 'يوم', 'ياسمين'], emojis: ['✋', '📅', '🌼'], currentIndex: 0 }
];

// كلمات للقراءة مع مستويات صعوبة
const readingWords = [
    // كلمات سهلة (حرفين)
    { word: 'أم', emoji: '👩', level: 1 },
    { word: 'أب', emoji: '👨', level: 1 },
    { word: 'بر', emoji: '🏞️', level: 1 },
    { word: 'جو', emoji: '🌤️', level: 1 },
    { word: 'دم', emoji: '🩸', level: 1 },
    { word: 'رز', emoji: '🍚', level: 1 },
    { word: 'سن', emoji: '🦷', level: 1 },
    { word: 'فم', emoji: '👄', level: 1 },
    
    // كلمات متوسطة (ثلاثة حروف)
    { word: 'باب', emoji: '🚪', level: 2 },
    { word: 'قمر', emoji: '🌙', level: 2 },
    { word: 'شمس', emoji: '☀️', level: 2 },
    { word: 'بيت', emoji: '🏠', level: 2 },
    { word: 'قلم', emoji: '✏️', level: 2 },
    { word: 'ماء', emoji: '💧', level: 2 },
    { word: 'نار', emoji: '🔥', level: 2 },
    { word: 'ورد', emoji: '🌹', level: 2 },
    { word: 'طير', emoji: '🐦', level: 2 },
    { word: 'سمك', emoji: '🐟', level: 2 },
    
    // كلمات صعبة (أربعة حروف أو أكثر)
    { word: 'كتاب', emoji: '📚', level: 3 },
    { word: 'مدرسة', emoji: '🏫', level: 3 },
    { word: 'حديقة', emoji: '🌳', level: 3 },
    { word: 'سيارة', emoji: '🚗', level: 3 },
    { word: 'طائرة', emoji: '✈️', level: 3 },
    { word: 'مستشفى', emoji: '🏥', level: 3 },
    { word: 'مطعم', emoji: '🍽️', level: 3 },
    { word: 'ملعب', emoji: '⚽', level: 3 }
];

// متغيرات عامة
let currentLetterIndex = 0;
let currentWordIndex = 0;
let currentQuizIndex = 0;
let score = 0;
let isDrawing = false;
let canvas, ctx;
let selectedLetter = null;
let currentReadingLevel = 1;
let streakCount = 0;
let totalQuestions = 0;
let correctAnswers = 0;
let gameMode = 'normal'; // normal, challenge, practice
let encouragementTimer = null;
let lastInteractionTime = Date.now();

// تهيئة الموقع
document.addEventListener('DOMContentLoaded', function() {
    initializeLettersGrid();
    initializeWritingSelect();
    initializeCanvas();
    loadProgress();
    generateQuiz();
    displayCurrentWord();
    initializeThemeToggle();
    addParticleEffects();
    loadTheme();
    createFloatingParticles();
    
    // إضافة مستمعي الأحداث
    const statsBtn = document.getElementById('stats-btn');
    if (statsBtn) {
        statsBtn.addEventListener('click', showStats);
    }
    
    // تحديد الوقت الأولي للتفاعل
    lastInteractionTime = Date.now();
});

// إنشاء جسيمات متحركة في الخلفية
function createFloatingParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'floating-particles';
    document.body.appendChild(particlesContainer);
    
    // إنشاء 20 جسيمة
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // موضع عشوائي
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        
        // ألوان عشوائية
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particlesContainer.appendChild(particle);
    }
}

// وظائف الوضع الليلي المحسنة
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
        themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
        themeBtn.title = theme === 'dark' ? 'تبديل للوضع النهاري' : 'تبديل للوضع الليلي';
    }
}

// تهيئة زر تبديل الوضع
function initializeThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '🌙';
    themeToggle.onclick = toggleTheme;
    document.body.appendChild(themeToggle);
}

// تبديل الوضع الليلي/النهاري
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '🌙';
        localStorage.setItem('theme', 'light');
    }
    
    // تأثير انتقال سلس
    body.style.transition = 'all 0.3s ease';
}

// تحميل الوضع المحفوظ
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '☀️';
    }
}

// إضافة تأثيرات الجسيمات
function addParticleEffects() {
    // إضافة تأثير الجسيمات عند النقر على الحروف
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('letter-btn') || 
            e.target.classList.contains('option-btn') ||
            e.target.classList.contains('menu-btn')) {
            createParticles(e.target, e.clientX, e.clientY);
        }
    });
}

// إنشاء جسيمات ملونة
function createParticles(element, x, y) {
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff'];
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]}, transparent)`;
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
        
        // حركة عشوائية للجسيمات
        const randomX = (Math.random() - 0.5) * 200;
        const randomY = (Math.random() - 0.5) * 200;
        
        particle.style.setProperty('--random-x', randomX + 'px');
        particle.style.setProperty('--random-y', randomY + 'px');
        
        document.body.appendChild(particle);
        
        // إزالة الجسيمة بعد انتهاء الحركة
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 2000);
    }
}

// إضافة تأثير النجوم للإجابات الصحيحة
function createStarEffect(element) {
    const stars = ['⭐', '✨', '🌟', '💫'];
    
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('div');
        star.className = 'star-effect';
        star.textContent = stars[Math.floor(Math.random() * stars.length)];
        
        const rect = element.getBoundingClientRect();
        star.style.left = (rect.left + Math.random() * rect.width) + 'px';
        star.style.top = (rect.top + Math.random() * rect.height) + 'px';
        
        document.body.appendChild(star);
        
        setTimeout(() => {
            if (star.parentNode) {
                star.parentNode.removeChild(star);
            }
        }, 1500);
    }
}

// تحسين تأثيرات الاهتزاز للهواتف
function vibrateDevice(pattern = [100]) {
    if ('vibrate' in navigator) {
        navigator.vibrate(pattern);
    }
}

// عرض الصفحات
function showPage(pageId) {
    // إخفاء جميع الصفحات
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // عرض الصفحة المطلوبة
    document.getElementById(pageId).classList.add('active');
    
    // حفظ الصفحة الحالية
    localStorage.setItem('currentPage', pageId);
}

// تهيئة شبكة الحروف
function initializeLettersGrid() {
    const grid = document.getElementById('letters-grid');
    grid.innerHTML = '';
    
    arabicLetters.forEach((letterData, index) => {
        const button = document.createElement('button');
        button.className = 'letter-btn';
        button.textContent = letterData.letter;
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        
        // إضافة تأثير الريبل عند النقر
        button.addEventListener('click', (e) => {
            createRippleEffect(button, e);
            vibrateDevice([30]);
            selectLetter(index);
        });
        
        grid.appendChild(button);
    });
}

// اختيار حرف
function selectLetter(index) {
    currentLetterIndex = index;
    const letterData = arabicLetters[index];
    
    // تحديث العرض مع الكلمة والإيموجي الحالي
    const currentWord = letterData.words[letterData.currentIndex];
    const currentEmoji = letterData.emojis[letterData.currentIndex];
    
    document.getElementById('big-letter').textContent = letterData.letter;
    document.getElementById('letter-word').textContent = currentWord;
    document.getElementById('letter-emoji').textContent = currentEmoji;
    
    // تفعيل زر الصوت
    document.getElementById('play-sound-btn').disabled = false;
    
    // تحديث الأزرار
    const buttons = document.querySelectorAll('.letter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[index].classList.add('active');
    
    // إضافة تأثيرات بصرية محسنة
    const letterDisplay = document.getElementById('big-letter');
    const letterCard = document.querySelector('.letter-display');
    
    // تأثير الارتداد
    letterDisplay.classList.add('bounce');
    if (letterCard) {
        letterCard.style.animation = 'none';
        setTimeout(() => {
            letterCard.style.animation = 'floatUp 0.8s ease-out';
        }, 10);
    }
    
    // إزالة كلاس الارتداد
    setTimeout(() => {
        letterDisplay.classList.remove('bounce');
    }, 800);
    
    // إضافة تأثير النجوم
    createStarEffect(letterDisplay);
    
    // اهتزاز خفيف للهاتف
    vibrateDevice([50]);
    
    // تحديث الإحصائيات
    updateStats('letterLearned');
    
    // حفظ التقدم
    saveProgress();
    
    // تشغيل الصوت تلقائياً
    playLetterSound();
    
    // تدوير الكلمات والإيموجي تلقائياً كل 3 ثوان
    setTimeout(() => {
        rotateLetterContent(index);
    }, 3000);
}

// تدوير محتوى الحرف (الكلمات والإيموجي)
function rotateLetterContent(index) {
    if (currentLetterIndex !== index) return; // تأكد أن المستخدم ما زال على نفس الحرف
    
    const letterData = arabicLetters[index];
    letterData.currentIndex = (letterData.currentIndex + 1) % letterData.words.length;
    
    const currentWord = letterData.words[letterData.currentIndex];
    const currentEmoji = letterData.emojis[letterData.currentIndex];
    
    // تحديث العرض مع تأثير انتقالي
    const wordElement = document.getElementById('letter-word');
    const emojiElement = document.getElementById('letter-emoji');
    
    wordElement.style.opacity = '0';
    emojiElement.style.opacity = '0';
    
    setTimeout(() => {
        wordElement.textContent = currentWord;
        emojiElement.textContent = currentEmoji;
        wordElement.style.opacity = '1';
        emojiElement.style.opacity = '1';
        
        // تشغيل صوت الكلمة الجديدة
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(currentWord);
            utterance.lang = 'ar-SA';
            utterance.rate = 0.7;
            speechSynthesis.speak(utterance);
        }
    }, 200);
    
    // جدولة التدوير التالي
    setTimeout(() => {
        rotateLetterContent(index);
    }, 4000);
}

// تشغيل صوت الحرف
function playLetterSound() {
    if (currentLetterIndex >= 0) {
        const letterData = arabicLetters[currentLetterIndex];
        const currentWord = letterData.words[letterData.currentIndex];
        
        // تشغيل صوت الحرف أولاً
        if ('speechSynthesis' in window) {
            // إيقاف أي صوت سابق
            speechSynthesis.cancel();
            
            const letterUtterance = new SpeechSynthesisUtterance(letterData.letter);
            letterUtterance.lang = 'ar-SA';
            letterUtterance.rate = 0.6;
            letterUtterance.pitch = 1.2;
            
            // تشغيل صوت الكلمة بعد الحرف
            letterUtterance.onend = () => {
                setTimeout(() => {
                    const wordUtterance = new SpeechSynthesisUtterance(currentWord);
                    wordUtterance.lang = 'ar-SA';
                    wordUtterance.rate = 0.7;
                    speechSynthesis.speak(wordUtterance);
                }, 500);
            };
            
            speechSynthesis.speak(letterUtterance);
        }
        
        // تحديث وقت التفاعل الأخير
        lastInteractionTime = Date.now();
    }
}

// تهيئة قائمة اختيار الحروف للكتابة
function initializeWritingSelect() {
    const select = document.getElementById('writing-letter-select');
    select.innerHTML = '<option value="">اختر حرفًا</option>';
    
    arabicLetters.forEach((letterData, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = letterData.letter + ' - ' + letterData.words[0] + ' ' + letterData.emojis[0];
        select.appendChild(option);
    });
}

// إعداد تدريب الكتابة
function setupWritingPractice() {
    const select = document.getElementById('writing-letter-select');
    const selectedIndex = select.value;
    
    if (selectedIndex !== '') {
        selectedLetter = arabicLetters[selectedIndex];
        clearCanvas();
        showLetterGuide();
    }
}

// تهيئة لوحة الرسم
function initializeCanvas() {
    canvas = document.getElementById('writing-canvas');
    ctx = canvas.getContext('2d');
    
    // إعدادات الرسم
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#2d3436';
    
    // أحداث الماوس
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    // أحداث اللمس للأجهزة المحمولة
    canvas.addEventListener('touchstart', handleTouch);
    canvas.addEventListener('touchmove', handleTouch);
    canvas.addEventListener('touchend', stopDrawing);
}

// بدء الرسم
function startDrawing(e) {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.beginPath();
    ctx.moveTo(x, y);
}

// الرسم
function draw(e) {
    if (!isDrawing) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ctx.lineTo(x, y);
    ctx.stroke();
}

// إيقاف الرسم
function stopDrawing() {
    if (isDrawing) {
        isDrawing = false;
        // تشغيل صوت تشجيعي
        playEncouragementSound();
    }
}

// التعامل مع اللمس
function handleTouch(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent(e.type === 'touchstart' ? 'mousedown' : 
                                     e.type === 'touchmove' ? 'mousemove' : 'mouseup', {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}

// مسح لوحة الرسم
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// إظهار دليل الحرف
function showLetterGuide() {
    if (!selectedLetter) return;
    
    ctx.save();
    ctx.font = '200px Arial';
    ctx.fillStyle = 'rgba(116, 185, 255, 0.3)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(selectedLetter.letter, canvas.width / 2, canvas.height / 2);
    ctx.restore();
}

// عرض الكلمة الحالية
function displayCurrentWord() {
    // فلترة الكلمات حسب المستوى الحالي
    const levelWords = readingWords.filter(word => word.level <= currentReadingLevel);
    if (levelWords.length === 0) return;
    
    // التأكد من أن الفهرس صحيح
    if (currentWordIndex >= levelWords.length) {
        currentWordIndex = 0;
    }
    
    const wordData = levelWords[currentWordIndex];
    document.getElementById('current-word').textContent = wordData.word;
    document.getElementById('word-emoji').textContent = wordData.emoji;
    
    // عرض الحروف منفصلة مع تأثير بصري
    const letters = wordData.word.split('').join(' - ');
    document.getElementById('word-letters').textContent = letters;
    
    // إضافة مؤشر المستوى
    const levelIndicator = '⭐'.repeat(wordData.level);
    const wordElement = document.getElementById('current-word');
    wordElement.setAttribute('data-level', levelIndicator);
    
    // تأثير بصري عند تغيير الكلمة
    wordElement.style.transform = 'scale(1.1)';
    setTimeout(() => {
        wordElement.style.transform = 'scale(1)';
    }, 300);
}

// الكلمة التالية
function nextWord() {
    const levelWords = readingWords.filter(word => word.level <= currentReadingLevel);
    if (levelWords.length === 0) return;
    
    currentWordIndex = (currentWordIndex + 1) % levelWords.length;
    displayCurrentWord();
    
    // تحديث الإحصائيات
    updateStats('wordRead');
    
    // تشغيل صوت تشجيعي أحياناً
    if (Math.random() < 0.3) {
        setTimeout(() => {
            playEncouragementSound();
        }, 1000);
    }
}

// الكلمة السابقة
function previousWord() {
    const levelWords = readingWords.filter(word => word.level <= currentReadingLevel);
    if (levelWords.length === 0) return;
    
    currentWordIndex = currentWordIndex === 0 ? levelWords.length - 1 : currentWordIndex - 1;
    displayCurrentWord();
    
    // تحديث الإحصائيات
    updateStats('wordRead');
}

// تشغيل صوت الكلمة
function playWordSound() {
    const levelWords = readingWords.filter(word => word.level <= currentReadingLevel);
    if (levelWords.length === 0 || currentWordIndex >= levelWords.length) return;
    
    const wordData = levelWords[currentWordIndex];
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(wordData.word);
        utterance.lang = 'ar-SA';
        utterance.rate = 0.6;
        utterance.pitch = 1.1;
        speechSynthesis.speak(utterance);
    }
    
    // تحديث وقت التفاعل
    lastInteractionTime = Date.now();
}

// تشغيل صوت الحروف
function playLettersSound() {
    const levelWords = readingWords.filter(word => word.level <= currentReadingLevel);
    if (levelWords.length === 0 || currentWordIndex >= levelWords.length) return;
    
    const wordData = levelWords[currentWordIndex];
    const letters = wordData.word.split('');
    
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        let delay = 0;
        
        letters.forEach((letter, index) => {
            setTimeout(() => {
                const utterance = new SpeechSynthesisUtterance(letter);
                utterance.lang = 'ar-SA';
                utterance.rate = 0.5;
                utterance.pitch = 1.2;
                
                // إضافة تأثير بصري للحرف الحالي
                const letterElements = document.getElementById('word-letters');
                if (letterElements) {
                    const letterSpans = letterElements.textContent.split(' - ');
                    letterElements.innerHTML = letterSpans.map((l, i) => 
                        i === index ? `<span style="color: #ff6b6b; font-weight: bold; font-size: 1.2em;">${l}</span>` : l
                    ).join(' - ');
                    
                    // إعادة تعيين التنسيق بعد انتهاء الصوت
                    utterance.onend = () => {
                        if (index === letters.length - 1) {
                            setTimeout(() => {
                                letterElements.innerHTML = letterSpans.join(' - ');
                            }, 500);
                        }
                    };
                }
                
                speechSynthesis.speak(utterance);
            }, delay);
            delay += 1000;
        });
    }
    
    // تحديث وقت التفاعل
    lastInteractionTime = Date.now();
}

// توليد سؤال الاختبار
function generateQuiz() {
    // اختيار كلمة عشوائية من المستوى المناسب
    const availableWords = readingWords.filter(word => word.level <= Math.min(currentReadingLevel + 1, 3));
    if (availableWords.length === 0) return;
    
    const randomWord = availableWords[Math.floor(Math.random() * availableWords.length)];
    const correctLetter = randomWord.word[0];
    
    // أنواع مختلفة من الأسئلة
    const questionTypes = [
        {
            question: `أي حرف يبدأ به كلمة "${randomWord.word}"؟`,
            type: 'first-letter'
        },
        {
            question: `كم حرف في كلمة "${randomWord.word}"؟`,
            type: 'letter-count'
        },
        {
            question: `أي حرف ينتهي به كلمة "${randomWord.word}"؟`,
            type: 'last-letter'
        }
    ];
    
    // اختيار نوع السؤال بناءً على طول الكلمة
    let selectedQuestion;
    if (randomWord.word.length <= 2) {
        selectedQuestion = questionTypes[0]; // سؤال الحرف الأول فقط للكلمات القصيرة
    } else {
        selectedQuestion = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    }
    
    let correctAnswer, wrongOptions = [];
    
    switch (selectedQuestion.type) {
        case 'first-letter':
            correctAnswer = correctLetter;
            // إنشاء خيارات خاطئة
            while (wrongOptions.length < 2) {
                const randomLetter = arabicLetters[Math.floor(Math.random() * arabicLetters.length)].letter;
                if (randomLetter !== correctAnswer && !wrongOptions.includes(randomLetter)) {
                    wrongOptions.push(randomLetter);
                }
            }
            break;
            
        case 'letter-count':
            correctAnswer = randomWord.word.length.toString();
            const possibleCounts = ['2', '3', '4', '5', '6'];
            wrongOptions = possibleCounts.filter(count => count !== correctAnswer).slice(0, 2);
            break;
            
        case 'last-letter':
            correctAnswer = randomWord.word[randomWord.word.length - 1];
            while (wrongOptions.length < 2) {
                const randomLetter = arabicLetters[Math.floor(Math.random() * arabicLetters.length)].letter;
                if (randomLetter !== correctAnswer && !wrongOptions.includes(randomLetter)) {
                    wrongOptions.push(randomLetter);
                }
            }
            break;
    }
    
    // خلط الخيارات
    const allOptions = [correctAnswer, ...wrongOptions].sort(() => Math.random() - 0.5);
    
    // عرض السؤال
    document.getElementById('question').textContent = selectedQuestion.question;
    document.getElementById('question-emoji').textContent = randomWord.emoji;
    
    // عرض الخيارات
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    allOptions.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => checkAnswer(option, correctAnswer, button, randomWord);
        optionsContainer.appendChild(button);
    });
    
    // إخفاء زر السؤال التالي
    document.getElementById('next-question-btn').style.display = 'none';
    
    // زيادة عدد الأسئلة الكلي وتحديث الإحصائيات
    totalQuestions++;
    updateStats('quizTaken');
}

// فحص الإجابة
function checkAnswer(selectedOption, correctAnswer, buttonElement, wordData) {
    const allButtons = document.querySelectorAll('.option-btn');
    
    // تعطيل جميع الأزرار
    allButtons.forEach(btn => btn.onclick = null);
    
    if (selectedOption === correctAnswer) {
        // إجابة صحيحة
        buttonElement.classList.add('correct');
        correctAnswers++;
        streakCount++;
        
        // تحديث الإحصائيات
        updateStats('correctAnswer');
        
        // حساب النقاط بناءً على المستوى والسلسلة
        let points = 10;
        if (wordData.level === 2) points = 15;
        if (wordData.level === 3) points = 20;
        if (streakCount >= 3) points *= 1.5; // مكافأة للسلسلة
        
        score += Math.round(points);
        document.getElementById('score').textContent = score;
        
        // تأثيرات بصرية محسنة للنجاح
        buttonElement.style.animation = 'bounce 0.6s ease';
        
        // تأثير النجوم
        createStarEffect(buttonElement);
        
        // تأثير الكونفيتي للسلاسل الطويلة
        if (streakCount >= 5) {
            createConfettiEffect();
        }
        
        // تشغيل أصوات النجاح المتنوعة
        playSuccessSound();
        
        // رسائل تشجيعية خاصة للسلاسل
        if (streakCount === 3) {
            setTimeout(() => {
                if ('speechSynthesis' in window) {
                    const utterance = new SpeechSynthesisUtterance('رائع! ثلاث إجابات صحيحة متتالية!');
                    utterance.lang = 'ar-SA';
                    speechSynthesis.speak(utterance);
                }
            }, 1000);
        } else if (streakCount === 5) {
            setTimeout(() => {
                if ('speechSynthesis' in window) {
                    const utterance = new SpeechSynthesisUtterance('مذهل! خمس إجابات صحيحة! أنت بطل!');
                    utterance.lang = 'ar-SA';
                    speechSynthesis.speak(utterance);
                }
            }, 1000);
        }
        
        // ترقية المستوى تلقائياً
        if (correctAnswers >= 5 && currentReadingLevel < 3) {
            currentReadingLevel++;
            setTimeout(() => {
                if ('speechSynthesis' in window) {
                    const utterance = new SpeechSynthesisUtterance(`تهانينا! انتقلت للمستوى ${currentReadingLevel}!`);
                    utterance.lang = 'ar-SA';
                    speechSynthesis.speak(utterance);
                }
            }, 2000);
            createConfettiEffect();
        }
        
    } else {
        // إجابة خاطئة
        buttonElement.classList.add('incorrect');
        streakCount = 0; // إعادة تعيين السلسلة
        
        // تحديث الإحصائيات
        updateStats('wrongAnswer');
        
        // تأثيرات بصرية للإجابة الخاطئة
        buttonElement.classList.add('shake');
        setTimeout(() => {
            buttonElement.classList.remove('shake');
        }, 500);
        
        // إظهار الإجابة الصحيحة مع تأثير
        allButtons.forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.classList.add('correct');
                btn.style.animation = 'pulse 1s ease';
            }
        });
        
        playErrorSound();
        
        // تشغيل الكلمة الصحيحة للتعلم
        setTimeout(() => {
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(wordData.word);
                utterance.lang = 'ar-SA';
                utterance.rate = 0.7;
                speechSynthesis.speak(utterance);
            }
        }, 1500);
    }
    
    // إظهار زر السؤال التالي
    setTimeout(() => {
        document.getElementById('next-question-btn').style.display = 'block';
    }, 2000);
    
    // حفظ التقدم
    saveProgress();
    
    // تحديث وقت التفاعل
    lastInteractionTime = Date.now();
}

// السؤال التالي
function nextQuestion() {
    generateQuiz();
}

// تشغيل صوت النجاح
function playSuccessSound() {
    if ('speechSynthesis' in window) {
        const phrases = [
            'أحسنت! 👏',
            'ممتاز! 🌟', 
            'رائع جداً! ✨',
            'أنت بطل! 🏆',
            'واصل التقدم! 🚀',
            'عمل رائع! 💫',
            'أنت نجم! ⭐',
            'مذهل! 🎉',
            'فخور بك! 💖',
            'استمر هكذا! 🌈',
            'برافو! 🎊',
            'عبقري! 🧠',
            'لا يُصدق! 😍'
        ];
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        const utterance = new SpeechSynthesisUtterance(randomPhrase);
        utterance.lang = 'ar-SA';
        utterance.rate = 0.8;
        utterance.pitch = 1.2;
        utterance.volume = 0.8;
        speechSynthesis.speak(utterance);
    }
    
    // اهتزاز للنجاح
    vibrateDevice([100, 50, 100]);
}

// تشغيل صوت الخطأ
function playErrorSound() {
    if ('speechSynthesis' in window) {
        const phrases = [
            'حاول مرة أخرى! 💪',
            'لا بأس، واصل المحاولة! 😊',
            'تعلم من الأخطاء! 📚',
            'أنت تتحسن! 🌱',
            'المحاولة القادمة ستكون أفضل! ✨',
            'لا تستسلم! 🔥',
            'كل خطأ يقربك من النجاح! 🎯',
            'أنت على الطريق الصحيح! 🛤️'
        ];
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        const utterance = new SpeechSynthesisUtterance(randomPhrase);
        utterance.lang = 'ar-SA';
        utterance.rate = 0.7;
        utterance.pitch = 0.9;
        utterance.volume = 0.7;
        speechSynthesis.speak(utterance);
    }
    
    // اهتزاز للخطأ
    vibrateDevice([200]);
}

// تشغيل صوت التشجيع
function playEncouragementSound() {
    if ('speechSynthesis' in window) {
        const phrases = [
            'جيد!', 'استمر!', 'ممتاز!', 'أنت تتحسن!', 'رائع!', 
            'مواصل!', 'أحسنت الكتابة!', 'جميل!', 'تقدم رائع!'
        ];
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        const utterance = new SpeechSynthesisUtterance(randomPhrase);
        utterance.lang = 'ar-SA';
        utterance.rate = 0.8;
        utterance.pitch = 1.1;
        speechSynthesis.speak(utterance);
    }
}

// تشغيل أصوات تحفيزية عشوائية
function playRandomMotivation() {
    if (Math.random() < 0.4 && 'speechSynthesis' in window) {
        const phrases = [
            'أنت تتعلم بسرعة!', 'عمل رائع!', 'استمر في التعلم!', 
            'أنت ذكي جداً!', 'أحب طريقة تعلمك!', 'تقدم ممتاز!'
        ];
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        const utterance = new SpeechSynthesisUtterance(randomPhrase);
        utterance.lang = 'ar-SA';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    }
}

// حفظ التقدم
function saveProgress() {
    const progress = {
        currentLetterIndex: currentLetterIndex,
        currentWordIndex: currentWordIndex,
        score: score,
        lastVisited: Date.now()
    };
    localStorage.setItem('learning-progress', JSON.stringify(progress));
}

// تحميل التقدم
function loadProgress() {
    const saved = localStorage.getItem('learning-progress');
    if (saved) {
        const progress = JSON.parse(saved);
        currentLetterIndex = progress.currentLetterIndex || 0;
        currentWordIndex = progress.currentWordIndex || 0;
        score = progress.score || 0;
        document.getElementById('score').textContent = score;
    }
    
    // تحميل المستوى المحفوظ
    const savedLevel = localStorage.getItem('currentReadingLevel');
    if (savedLevel) {
        currentReadingLevel = parseInt(savedLevel);
    }
    
    // تحميل الصفحة المحفوظة
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage && savedPage !== 'home-page') {
        showPage(savedPage);
    }
}

// إضافة أزرار التحكم في القراءة
function addReadingControls() {
    const readingSection = document.getElementById('reading-section');
    if (!readingSection) return;
    
    // إضافة أزرار مستويات الصعوبة
    const levelControlsDiv = document.createElement('div');
    levelControlsDiv.className = 'level-controls';
    levelControlsDiv.innerHTML = `
        <h3>اختر مستوى الصعوبة:</h3>
        <button onclick="setReadingLevel(1)" class="level-btn ${currentReadingLevel === 1 ? 'active' : ''}">⭐ سهل</button>
        <button onclick="setReadingLevel(2)" class="level-btn ${currentReadingLevel === 2 ? 'active' : ''}">⭐⭐ متوسط</button>
        <button onclick="setReadingLevel(3)" class="level-btn ${currentReadingLevel === 3 ? 'active' : ''}">⭐⭐⭐ صعب</button>
    `;
    
    const controlsDiv = document.createElement('div');
    controlsDiv.className = 'reading-controls';
    controlsDiv.innerHTML = `
        <button onclick="previousWord()" class="control-btn">⬅️ السابق</button>
        <button onclick="playWordSound()" class="control-btn">🔊 استمع</button>
        <button onclick="nextWord()" class="control-btn">التالي ➡️</button>
        <button onclick="playLettersSound()" class="control-btn">🔤 تهجئة</button>
        <button onclick="playRandomMotivation()" class="control-btn">💪 تشجيع</button>
    `;
    
    readingSection.appendChild(levelControlsDiv);
    readingSection.appendChild(controlsDiv);
}

// تعيين مستوى القراءة
function setReadingLevel(level) {
    currentReadingLevel = level;
    currentWordIndex = 0;
    
    // تحديث أزرار المستوى
    const levelButtons = document.querySelectorAll('.level-btn');
    levelButtons.forEach((btn, index) => {
        btn.classList.toggle('active', index + 1 === level);
    });
    
    displayCurrentWord();
    playSuccessSound();
    
    // حفظ المستوى
    localStorage.setItem('currentReadingLevel', level.toString());
}

// إحصائيات التقدم
let userStats = {
    totalLettersLearned: 0,
    totalWordsRead: 0,
    totalQuizzesTaken: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    currentStreak: 0,
    bestStreak: 0,
    timeSpent: 0,
    lastVisit: new Date().toISOString(),
    achievements: []
};

// تحميل الإحصائيات
function loadStats() {
    const savedStats = localStorage.getItem('userStats');
    if (savedStats) {
        userStats = { ...userStats, ...JSON.parse(savedStats) };
    }
}

// حفظ الإحصائيات
function saveStats() {
    localStorage.setItem('userStats', JSON.stringify(userStats));
}

// وظائف التأثيرات البصرية والاهتزاز
function createStarEffect(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        const star = document.createElement('div');
        star.className = 'star-particle';
        star.innerHTML = '⭐';
        star.style.position = 'fixed';
        star.style.left = centerX + 'px';
        star.style.top = centerY + 'px';
        star.style.fontSize = '20px';
        star.style.pointerEvents = 'none';
        star.style.zIndex = '9999';
        star.style.animation = `starBurst 1s ease-out forwards`;
        star.style.animationDelay = (i * 0.1) + 's';
        
        // اتجاه عشوائي
        const angle = (i * 45) * Math.PI / 180;
        const distance = 100;
        star.style.setProperty('--end-x', Math.cos(angle) * distance + 'px');
        star.style.setProperty('--end-y', Math.sin(angle) * distance + 'px');
        
        document.body.appendChild(star);
        
        // إزالة النجمة بعد انتهاء الحركة
        setTimeout(() => {
            if (star.parentNode) {
                star.parentNode.removeChild(star);
            }
        }, 1000);
    }
}

function createConfettiEffect() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8'];
    
    for (let i = 0; i < 15; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-particle';
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `confettiFall ${2 + Math.random() * 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 4000);
    }
}

function vibrateDevice(pattern) {
    if ('vibrate' in navigator) {
        navigator.vibrate(pattern);
    }
}

function createRippleEffect(element, event) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 600);
}

// تحديث الإحصائيات
function updateStats(action, value = 1) {
    switch(action) {
        case 'letterLearned':
            userStats.totalLettersLearned += value;
            break;
        case 'wordRead':
            userStats.totalWordsRead += value;
            break;
        case 'quizTaken':
            userStats.totalQuizzesTaken += value;
            break;
        case 'correctAnswer':
            userStats.correctAnswers += value;
            userStats.currentStreak += value;
            if (userStats.currentStreak > userStats.bestStreak) {
                userStats.bestStreak = userStats.currentStreak;
            }
            checkAchievements();
            break;
        case 'wrongAnswer':
            userStats.wrongAnswers += value;
            userStats.currentStreak = 0;
            break;
        case 'timeSpent':
            userStats.timeSpent += value;
            break;
    }
    saveStats();
}

// فحص الإنجازات
function checkAchievements() {
    const achievements = [
        { id: 'first_correct', name: 'الإجابة الأولى', condition: () => userStats.correctAnswers >= 1 },
        { id: 'streak_5', name: 'خمس إجابات متتالية', condition: () => userStats.currentStreak >= 5 },
        { id: 'streak_10', name: 'عشر إجابات متتالية', condition: () => userStats.currentStreak >= 10 },
        { id: 'quiz_master', name: 'خبير الاختبارات', condition: () => userStats.totalQuizzesTaken >= 20 },
        { id: 'reader', name: 'قارئ ماهر', condition: () => userStats.totalWordsRead >= 50 },
        { id: 'alphabet_explorer', name: 'مستكشف الأبجدية', condition: () => userStats.totalLettersLearned >= 28 }
    ];
    
    achievements.forEach(achievement => {
        if (achievement.condition() && !userStats.achievements.includes(achievement.id)) {
            userStats.achievements.push(achievement.id);
            showAchievement(achievement.name);
        }
    });
}

// عرض الإنجاز
function showAchievement(name) {
    const achievementDiv = document.createElement('div');
    achievementDiv.className = 'achievement-popup';
    achievementDiv.innerHTML = `
        <div class="achievement-content">
            <h3>🏆 إنجاز جديد!</h3>
            <p>${name}</p>
        </div>
    `;
    
    document.body.appendChild(achievementDiv);
    
    setTimeout(() => {
        achievementDiv.remove();
    }, 3000);
    
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(`تهانينا! حصلت على إنجاز ${name}`);
        utterance.lang = 'ar-SA';
        speechSynthesis.speak(utterance);
    }
}

// عرض الإحصائيات
function showStats() {
    const accuracy = userStats.totalQuizzesTaken > 0 ? 
        Math.round((userStats.correctAnswers / (userStats.correctAnswers + userStats.wrongAnswers)) * 100) : 0;
    
    const statsDiv = document.createElement('div');
    statsDiv.className = 'stats-popup';
    statsDiv.innerHTML = `
        <div class="stats-content">
            <h3>📊 إحصائياتك</h3>
            <div class="stats-grid">
                <div class="stat-item">
                    <span class="stat-number">${userStats.totalLettersLearned}</span>
                    <span class="stat-label">حرف تعلمته</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${userStats.totalWordsRead}</span>
                    <span class="stat-label">كلمة قرأتها</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${userStats.correctAnswers}</span>
                    <span class="stat-label">إجابة صحيحة</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${userStats.bestStreak}</span>
                    <span class="stat-label">أفضل سلسلة</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${accuracy}%</span>
                    <span class="stat-label">دقة الإجابات</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${userStats.achievements.length}</span>
                    <span class="stat-label">إنجاز حققته</span>
                </div>
            </div>
            <button onclick="closeStats()" class="close-stats-btn">إغلاق</button>
            <button onclick="confirmDeleteStats()" class="delete-stats-btn">🗑️ حذف جميع الإحصائيات</button>
        </div>
    `;
    
    document.body.appendChild(statsDiv);
}

// دالة تأكيد حذف الإحصائيات
function confirmDeleteStats() {
    const confirmMessage = 'هل أنت متأكد من حذف جميع الإحصائيات؟\n\nسيتم حذف:\n• جميع الحروف المتعلمة\n• الكلمات المقروءة\n• نتائج الاختبارات\n• الإنجازات المحققة\n\nلا يمكن التراجع عن هذا الإجراء!';
    
    if (confirm(confirmMessage)) {
        deleteAllStats();
        closeStats();
        showStats(); // إعادة عرض الإحصائيات المحدثة
        
        // عرض رسالة تأكيد
        const successMessage = document.createElement('div');
        successMessage.className = 'delete-success-message';
        successMessage.innerHTML = '✅ تم حذف جميع الإحصائيات بنجاح';
        successMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #4CAF50;
            color: white;
            padding: 20px 30px;
            border-radius: 10px;
            font-size: 1.2em;
            font-weight: bold;
            z-index: 10000;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            animation: fadeInOut 3s ease-in-out;
        `;
        
        document.body.appendChild(successMessage);
        
        // إزالة الرسالة بعد 3 ثوان
        setTimeout(() => {
            if (successMessage.parentNode) {
                successMessage.parentNode.removeChild(successMessage);
            }
        }, 3000);
        
        // تشغيل صوت تأكيد
        playSuccessSound();
    }
}

// دالة حذف جميع الإحصائيات
function deleteAllStats() {
    localStorage.removeItem('userStats');
    localStorage.removeItem('learning-progress');
    localStorage.removeItem('currentReadingLevel');
    
    // إعادة تعيين المتغيرات العامة
    userStats = {
        totalLettersLearned: 0,
        totalWordsRead: 0,
        totalQuizzesTaken: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        currentStreak: 0,
        bestStreak: 0,
        timeSpent: 0,
        lastVisit: new Date().toISOString(),
        achievements: []
    };
    
    streakCount = 0;
    score = 0;
    currentReadingLevel = 1;
    
    // تحديث عرض النقاط
    document.getElementById('score').textContent = score;
    
    // تحديث عرض مستوى القراءة إذا كان موجوداً
    const levelButtons = document.querySelectorAll('.level-btn');
    levelButtons.forEach(btn => btn.classList.remove('active'));
    const level1Btn = document.querySelector('.level-btn[onclick="setReadingLevel(1)"]');
    if (level1Btn) {
        level1Btn.classList.add('active');
    }
}

// إغلاق الإحصائيات
function closeStats() {
    const statsPopup = document.querySelector('.stats-popup');
    if (statsPopup) {
        statsPopup.remove();
    }
}

// إضافة زر الإحصائيات
function addStatsButton() {
    const header = document.querySelector('header') || document.body;
    const statsBtn = document.createElement('button');
    statsBtn.className = 'stats-btn';
    statsBtn.innerHTML = '📊 إحصائياتي';
    statsBtn.onclick = showStats;
    header.appendChild(statsBtn);
}

// تهيئة إضافية عند تحميل الصفحة
window.addEventListener('load', function() {
    // تحميل الإحصائيات
    loadStats();
    
    // إضافة أزرار التحكم في القراءة
    addReadingControls();
    
    // إضافة زر الإحصائيات
    addStatsButton();
    
    // تحسين الأداء للأجهزة المحمولة
    if ('serviceWorker' in navigator) {
        // يمكن إضافة Service Worker هنا للعمل بدون إنترنت
    }
    
    // منع التكبير المزدوج على iOS
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
});