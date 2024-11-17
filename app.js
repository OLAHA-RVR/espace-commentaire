const form = document.querySelector('form');
const commentList = document.querySelector('#comment-list');
const errorMessage = document.querySelector('#error-message');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.querySelector('#first-name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (!firstName || !lastName || !message) {
        errorMessage.style.display = 'block';
        return;
    }

    errorMessage.style.display = 'none';

    const newComment = document.createElement('div');
    newComment.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500', 'border-t', 'border-gray-200', 'py-10');
    newComment.innerHTML = `
        <div class="flex-1">
            <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
            <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                <p>${message}</p>
            </div>
        </div>
    `;

    commentList.appendChild(newComment);

    form.reset();
});