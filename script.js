document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    if (!navbar) {
        console.error("Navbar element not found!");
        return;
    }

    let lastScrollY = 0;

    window.addEventListener("scroll", function () {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 50) {
            navbar.style.top = "0"; 
        } else {
            navbar.style.top = "-100px"; 
        }

        lastScrollY = currentScrollY;
    });

    
    navigateToPage(1);
});


document.addEventListener("DOMContentLoaded", function () {
    const homePage = document.body.classList.contains("home");
    const videoContainer = document.getElementById("home-video-container");

    if (homePage && videoContainer) {
        videoContainer.innerHTML = `
            <div class="home-video-section">
                <video class="mp4" width="800px" height="500px"controls>
                    <source src="../A2-s3967528-Pham Phuong Thao Nhi/img/Sound design.mp4" type="video/mp4">
                </video>
            </div>
        `;
    }
});


function showPage(pageNumber) {
    const contentDiv = document.getElementById("content");

    if (!contentDiv) {
        console.error('Content div not found!');
        return;
    }

    switch (pageNumber) {
        case 1:
            contentDiv.innerHTML = `
                <h2>Resonant Storytelling > Sound Asleep</h2>
                <img src="../A2-s3967528-Pham Phuong Thao Nhi/img/sound design.png" alt="Photo 1" width=1400px;height=800px>
                <h3>The story is about an Owl suffering from insomnia, with carefully chosen soundscapes to convey frustration, calm, and ultimately relief. At first, the Owl tried various methods to aid them in falling asleep from drinking lots of Chamomile tea, to watching sleep tutorials. Then, the soft, rhythmic sounds of page-turning gently transition scenes, gently helping the Owl fall asleep.</h3>
                <video class="mp4" width="800px" height="500px" controls>
                    <source src="../A2-s3967528-Pham Phuong Thao Nhi/img/Sound design.mp4" type="video/mp4">
                </video>
                <h3>Besides, each sound is carefully placed to mark the owl's action experiences, and also to highlight the emotional tone of the story. Overall, this approach not only enriches the storytelling but also offers a unique perspective on how sound design can mirror and amplify the internal states of a character.</h3>
            `;
            break;

        case 2:
            contentDiv.innerHTML = `
                <h2>Sound Design > Blind Search</h2>
                <h3>This project explores how common household items can be transformed into a haunting soundscape for a horror game. By utilizing everyday sounds like creaking doors, ticking clocks, and whispering voices, the sound design creates an eerie atmosphere that amplifies the tension in a story about a child searching for his missing teddy bear in a dark, unsettling house.</h3>
                <div class="image-gallery">
                <img src="../A2-s3967528-Pham Phuong Thao Nhi/img/blind search.png" alt="Photo 1">
                <h3>Besides, BLIND SEARCH combines processed and synthesized sounds with a carefully curated playlist moodboard, drawing from ambient and dark electronic music to evoke emotions ranging from fear to nostalgia. Through this approach, the game blurs the line between the familiar and the fearsome, immersing players in a chilling auditory experience.</h3>
                <img src="../A2-s3967528-Pham Phuong Thao Nhi/img/blind search 2.png" alt="Photo 2">
                <h3>A child is left at home with his older brother, while their parents are on vacation. One evening, the kid realizes his beloved teddy bear, Mr. Fluffles is missing and begins searching the house as strange occurrences unfold. Unfortunately, he has to walk around in the dark with the only light source from the window alone in his own thoughts.</h3>
                <img src="../A2-s3967528-Pham Phuong Thao Nhi/img/blind search-character.png" alt="Photo 3">
                <h3>The player assumes the role of a child, beginning the game in the child's bedroom. With only the dim light from the windows to guide, the player must venture out of the bedroom and explore the house to find Mr. Fluffles.</h3>
                </div>
            `;
            break;

        case 3:
            contentDiv.innerHTML = `
                <h2>Interactive Web Design > Vietnam's Flavour</h2>
                <h3>Vietnamese flavour cuisine is a vibrant tapestry of flavours, blending elements of sweet, sour, salty, and spicy to create a unique culinary experience. With the distinction, it varies between three main regions: South, Central and North.</h3>
                <video class="mp4" width="800px" height="500px" controls>
                 <source src="../A2-s3967528-Pham Phuong Thao Nhi/img/Group 3_Showreel.mov" type="video/mp4">
                </video>
                <ul>
                    <li>In the North, the cuisine tends to be lighter, focusing on fresh herbs, grilled meats and delicate broths.</li>
                    <li>Central Vietnam boasts a more refined and intricate culinary tradition, with dishes such as banh xeo (pancakes) and mi Quang (Quang style noodles) demonstrating a combination of royal and local ingredients.</li>
                    <li>Southern cuisine is characterized by rich and vibrant flavours, often incorporating tropical fruits, coconut milk and a balance of sweet and salty.</li>
                </ul>
            `;
            break;

        default:
            contentDiv.innerHTML = `<p>Invalid Page Number!</p>`;
    }
}
