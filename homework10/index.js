const centeredContent = document.querySelector('.centered-content')
const tabs = centeredContent.querySelector('.tabs')
const tabsContent = centeredContent.querySelector('.tabs-content')

tabs.addEventListener('click', item => {
    [...tabs.children].forEach(item => item.classList.remove('active'));
    item.target.classList.toggle('active');
    [...tabsContent.children].forEach(itemTabsContent => {
        if (itemTabsContent.dataset.name === item.target.dataset.name) {
            itemTabsContent.style.display = 'flex';
        } else {
            itemTabsContent.style.display = 'none';
        };
    });
});


const textTabs = [];
[...tabs.children].forEach(item => textTabs.push(item.textContent));

const setDataAtr = (tabsContent, textTabs) => {
    for (let i = 0; i <= [...tabsContent.children].length - 1; i++) {
        for(let j = 0; j <= textTabs.length - 1; j++) {
            if([...tabsContent.children][i].textContent.includes(textTabs[j])) {
                [...tabsContent.children][i].setAttribute('data-name', textTabs[i]);
                [...tabs.children][i].setAttribute('data-name', textTabs[i]);
            };
        };
    };
};

setDataAtr(tabsContent, textTabs);

[...tabsContent.children].forEach(item => item.style.display = 'none');













