export default function fileUpload() {
    const elements = Array.from(document.querySelectorAll('.js-file-upload-dropzone'));

    elements.forEach(element => {
        const dropzone = element.querySelector('.home__file-upload-dropzone');

        dropzone.addEventListener('dragenter', () => {
            dropzone.classList.add('dragged-over');
        });
        dropzone.addEventListener('dragend', () => {
            dropzone.classList.remove('dragged-over');
        });
        dropzone.addEventListener('dragleave', () => {
            dropzone.classList.remove('dragged-over');
        });
        dropzone.addEventListener('drop', () => {
            dropzone.classList.remove('dragged-over');
        });
        dropzone.addEventListener('dragexit', () => {
            dropzone.classList.remove('dragged-over');
        });

        const fileLabels = Array.from(element.querySelectorAll('.home__file-upload-dropzone-label'));
        let list = null;

        fileLabels.forEach(label => {
            const input = label.querySelector('input[type="file"]');

            input.addEventListener('change', () => {
                if (input.files.length) {
                    const name = input.files[0].name;
                    if (!list) {
                        list = document.createElement('ul');
                        list.classList = 'home__file-upload-files-list';
                        dropzone.after(list);
                    }   

                    const li = document.createElement('li');
                    li.classList = 'home__file-upload-files-list-item';

                    const card = document.createElement('div');
                    card.classList = 'home__file-upload-files-card';

                    card.innerHTML = `
                        <div class="home__file-upload-files-card-text">
                            ${name}
                        </div>
                        <svg width="14" height="14" aria-hidden="true" class="icon-cross">
                            <use xlink:href="#cross"></use>
                        </svg>
                    `;

                    li.appendChild(card);
                    list.appendChild(li);

                    label.classList.add('chosen');

                    card.addEventListener('click', event => {
                        event.preventDefault();
                        li.remove();
                        label.classList.remove('chosen');

                        if (!list.children.length) {
                            list.remove();
                            list = null;
                        }
                    })
                }
            });
        });
    });
}
