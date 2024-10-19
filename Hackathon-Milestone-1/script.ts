window.onload = () => {
    const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skills = document.getElementById('skills') as HTMLElement;

    if (toggleButton && skills) {
        toggleButton.addEventListener('click', () => {
            if (skills.style.display === 'none') {
                skills.style.display = 'block';
            } else {
                skills.style.display = 'none';
            }
        });
    } else {
        console.error('Toggle button or skills section not found.');
    }
};