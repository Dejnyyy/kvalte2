function selectImage(id) {
    const radio = document.querySelector(id);
    radio.checked = true;
    // Trigger the radio change event if needed
}
document.addEventListener('DOMContentLoaded', function () {
    const radios = document.querySelectorAll('input[type="radio"][name="images"]');
    radios.forEach(radio => {
        radio.addEventListener('change', function () {
            updateContentVisibility();
        });
    });

    function updateContentVisibility() {
        document.getElementById('contentDomy').style.display = 'none';
        document.getElementById('contentRekonstrukce').style.display = 'none';
        document.getElementById('contentSlabLift').style.display = 'none';

        if (document.getElementById('Domy').checked) {
            document.getElementById('contentDomy').style.display = 'block';
        } else if (document.getElementById('Rekonstrukce').checked) {
            document.getElementById('contentRekonstrukce').style.display = 'block';
        } else if (document.getElementById('SlabLift').checked) {
            document.getElementById('contentSlabLift').style.display = 'block';
        }
    }

    // Initial content visibility update
    updateContentVisibility();
});

