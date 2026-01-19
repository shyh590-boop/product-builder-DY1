const dinnerMenus = [
    "치킨",
    "피자",
    "햄버거",
    "떡볶이",
    "김치찌개",
    "된장찌개",
    "삼겹살",
    "파스타",
    "초밥",
    "라면"
];

const generateBtn = document.getElementById('generate-btn');
const menuDisplay = document.getElementById('menu-display');

generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const selectedMenu = dinnerMenus[randomIndex];
    menuDisplay.textContent = `오늘의 메뉴는 ${selectedMenu} 입니다!`;
});

document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
