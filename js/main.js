const container = document.getElementById('container');

window.addEventListener('keydown', (event) => {

    container.innerHTML = `
    <div class="key key-pressed">
        ${event.key === ' ' ? 'Space' : event.key}
        <span>Pressed Key</span>
    </div>
    <div class="wrapper">
        <div class="key">
            ${event.keyCode}
            <span>event.keyCode</span>
        </div>
        <div class="key">
        ${event.code}
            <span>event.code</span>
        </div>
    </div>
`;
});