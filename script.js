function selectImage(id) {
    const radio = document.querySelector(id);
    radio.checked = true;
    // Trigger the radio change event if needed
}document.addEventListener('DOMContentLoaded', function () {
    // Attaching change event listeners to each radio button
    const radios = document.querySelectorAll('input[type="radio"][name="images"]');
    document.getElementById('DomyText').addEventListener('click', function() {
        updateContentVisibility('contentDomy');
    });
    document.getElementById('RekonstrukceText').addEventListener('click', function() {
        updateContentVisibility('contentRekonstrukce');
    });
    document.getElementById('SlabLiftText').addEventListener('click', function() {
        updateContentVisibility('contentSlabLift');
    });
    radios.forEach(radio => {
        radio.addEventListener('change', function () {
            updateContentVisibility();
        });
    });

    // Update content visibility based on the checked radio button
    function updateContentVisibility() {
        // Hide all contents
        document.getElementById('contentDomy').style.display = 'none';
        document.getElementById('contentRekonstrukce').style.display = 'none';
        document.getElementById('contentSlabLift').style.display = 'none';

        // Show the content corresponding to the checked radio button
        if (document.getElementById('Domy').checked) {
            document.getElementById('contentDomy').style.display = 'block';
        } else if (document.getElementById('Rekonstrukce').checked) {
            document.getElementById('contentRekonstrukce').style.display = 'block';
        } else if (document.getElementById('SlabLift').checked) {
            document.getElementById('contentSlabLift').style.display = 'block';
        }
    }

});
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.clickable-image');
    images.forEach(img => {
        img.addEventListener('click', function () {
            if (img.classList.contains('active-image')) {
                img.classList.remove('active-image');
            } else {
                // Otherwise, remove the class from all other images and add it to the clicked image
                images.forEach(i => i.classList.remove('active-image'));
                img.classList.add('active-image');
            }
        });
    });
});