# Multimedia Gallery Project

## Project Overview
The **Multimedia Gallery** is a simple, educational website designed to demonstrate the integration of various media types into a web environment. Built entirely with **HTML5, CSS3, and Vanilla JavaScript**, it serves as a virtual museum exhibit where users can explore images, listen to audio, and watch videos.

This project was created to fulfill the requirements of a **Multimedia** subject, focusing on the technical and aesthetic aspects of combining text, graphics, audio, video, and interactivity without relying on complex frameworks.

## File Structure & Descriptions

### HTML Pages (Content)
- **`index.html` (Home)**: The landing page of the museum. It features a cinematic hero image, a welcome message, and a global audio controller for background music.
- **`gallery.html` (Image Exhibits)**: Displays a grid of artwork. It demonstrates **interactivity** by using a JavaScript-powered modal (popup) to show high-resolution images and descriptions when a user clicks on a card.
- **`video.html` (Video Exhibits)**: Showcases video content using the HTML5 `<video>` tag. It includes custom captions and demonstrates how to embed and control video playback on the web.
- **`about.html` (About)**: Provides context about the museum. It combines formatted text with a descriptive image to present information clearly.

### Styles & Logic
- **`style.css` (Styling)**: Handles the visual presentation.
    - Uses **CSS Variables** for consistent theming (Dark/Gold "Museum" aesthetic).
    - Implements **Flexbox and Grid** for responsive layouts.
    - Adds **Animations** (hover effects, transitions) to enhance user engagement.
- **`script.js` (Interactivity)**: Manages the dynamic behavior.
    - **Audio Toggle**: Allows the user to play or pause the background music, persisting the state across the session (conceptually).
    - **Modal Logic**: Listens for clicks on gallery items to open the detailed view and handles closing the modal.

### Assets
- **`assets/images/`**: Stores all image files used in the project, including the hero background and gallery exhibits.

## Alignment with Multimedia Objectives
This project directly addresses core concepts of Multimedia design:

1.  **Text**: Structured and formatted content (headings, paragraphs) to convey information.
2.  **Graphics**: Use of high-quality images (`<img>`) and background images (CSS) to create visual appeal.
3.  **Audio**: Integration of background music (`<audio>`) to set the mood/atmosphere.
4.  **Video**: Embedding moving pictures (`<video>`) to provide dynamic content.
5.  **Animation**: CSS transitions and hover states to make the interface feel "alive."
6.  **Interactivity**: JavaScript event listeners (clicks) that allow the user to control the experience (navigating, playing media, opening modals).

## How to Run Locally

To run this project on your local machine, follow these steps:

### 1. Clone the Repository
Open your terminal and run the following command to clone the repository:
```bash
git clone https://github.com/marwan-asem/Multi_Media.git
```

### 2. Navigate to the Directory
Change into the project directory:
```bash
cd Multi_Media
```

### 3. Run the Project
You can run the project using a simple local server.

#### Using Python (Recommended)
If you have Python installed:
```bash
python3 -m http.server 8000
```
Then open your browser and visit: [http://localhost:8000](http://localhost:8000)

#### Using VS Code Live Server
If you use Visual Studio Code:
1.  Install the "Live Server" extension.
2.  Right-click on `index.html`.
3.  Select "Open with Live Server".

### 4. Direct File Open
Alternatively, you can simply double-click the `index.html` file to open it in your browser, though some features might be restricted by browser security settings.
