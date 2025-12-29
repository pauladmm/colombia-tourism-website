# Colombia Maravillosa

**Colombia Maravillosa** is a multi-page, responsive web application designed to promote tourism in Colombia. The site serves as a digital portal for the Ministry of Tourism, showcasing the country's biodiversity, rich history, cultural festivals, and guided travel routes.

<table>

  <tbody>

  <tr>
    <td><img width="1725" height="634" alt="image" src="https://github.com/user-attachments/assets/f7da3b79-f28e-46bb-b41a-d3bf12add097" />

</td> 
    <td><img width="1877" height="861" alt="image" src="https://github.com/user-attachments/assets/7ea11ef5-896a-4a77-b86b-faf86b49c90f" />

</td>    
  </tr>

  <tr>
    <td> <img width="1820" height="825" alt="image" src="https://github.com/user-attachments/assets/d45913f4-d679-4a77-8358-64d4f27340a4" />

</td>
    <td><img width="1850" height="847" alt="image" src="https://github.com/user-attachments/assets/267a624a-642a-4664-a9b0-6640cbae9340" />

</td> 
  </tr>
    
  </tbody>

  
</table>


## 🚀 Features

### 1. **Interactive Experience**
*   **Historical Timeline:** An interactive component on the homepage and "About" page that allows users to explore Colombia's history from pre-Columbian cultures (S. VI) to the modern era.
*   **Global Route Map:** An interactive world map (using Vanilla JS) that highlights flight durations, airlines, and travel tips from major global hubs (New York, Madrid, Tokyo, etc.) to Colombia.
*   **Dynamic UI Elements:** Includes a sticky navigation bar with a scroll-progress indicator, a "Back to Top" button, and expandable/collapsible content sections for tour details.

### 2. **Travel Planning**
*   **Guided Routes:** Detailed itineraries for the most famous tours:
    *   *The Coffee Route (Eje Cafetero)*
    *   *The Lost City (Sierra Nevada)*
    *   *Tayrona National Park*
*   **Day-by-Day Planning:** Step-by-step breakdowns of what to expect during each tour.
*   **Tourism Offices:** A dedicated section with contact information and embedded Google Maps for official offices in Bogotá, Medellín, and Cartagena.

### 3. **Design & Visuals**
*   **Modern Aesthetics:** High-quality image galleries using CSS Grid (masonry-style layout).
*   **Fully Responsive:** Optimized for desktops, tablets, and smartphones using CSS Flexbox and media queries.
*   **Smooth Animations:** Fade-in effects for headers and smooth transitions for interactive markers.

## 🛠️ Technologies Used

*   **HTML5:** Semantic structure for SEO and accessibility.
*   **CSS3:** Custom properties (variables), Flexbox, Grid, and keyframe animations.
*   **JavaScript (Vanilla):** DOM manipulation for interactive maps, timelines, and UI toggles (No external frameworks required).
*   **FontAwesome:** For intuitive iconography.
*   **Google Fonts:** Utilizing *Lora*, *Mulish*, and *Alegreya* for a professional typographic hierarchy.

## 📂 Project Structure

```text
├── about.html          # Information about the Ministry, values, and history
├── contact.html        # World map, travel routes, office locations, and contact form
├── index.html          # Homepage with hero section, experience highlights, and gallery
├── routes.html         # Detailed tour itineraries and regional information
└── assets/
    ├── js/
    │   ├── script.js   # Logic for timeline, toggles, and scroll behavior
    │   └── script2.js  # Logic for the interactive world flight map
    └── styles/
        ├── styles.css  # Global styles, variables, and navigation
        ├── home.css    # Specific styles for the landing page
        ├── about.css   # Styles for values and ministry sections
        ├── contact.css # Styles for the map and contact forms
        └── routes.css  # Styles for the regional galleries and itineraries
```

## 🔧 Installation & Usage

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/pauladmm/colombia-tourism-website.git
    ```
2.  **Open the project:**
    Simply open `index.html` in any modern web browser.
3.  **Development:**
    If you are using VS Code, it is recommended to use the **Live Server** extension to handle the relative paths and local testing smoothly.

## 📝 Usage Guidelines

*   **Navigation:** Use the sticky menu to jump between sections. The progress bar at the top indicates how much of the page you have read.
*   **Interactive Map:** Hover over the airplane icons on the map in the `contact.html` page to see specific flight details from different continents.
*   **Tour Details:** In the `routes.html` page, click on the arrows (→) to expand the daily itinerary for specific tours.

## ⚖️ License

&copy; 2025 This project is created for educational/promotional purposes. All rights reserved.

---

*“Colombia: The only risk is wanting to stay.”* 🇨🇴
