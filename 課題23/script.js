document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        // 回答が既に表示されているかどうかを確認し、
        // 表示されていれば非表示に、非表示であれば表示にする
        const isCurrentlyOpen = answer.style.maxHeight !== '';
        answer.style.maxHeight = isCurrentlyOpen ? '' : answer.scrollHeight + 'px';
    });
});
