# Project Name: Product Widget

## Overview
This is a widgets managing project based on Vue.js. It provides an intuitive interface to customize widgets, such as linking them to public profiles, changing badge colors, and activating/deactivating features. A tooltip component is also integrated to offer additional contextual information about various options.

### Key Features
- Display widgets dynamically using a `v-for` loop.
- Allow users to customize widget properties (e.g., link to a public profile, select badge colors, activate badges).
- Interactive tooltips for guidance.
- Modular and reusable components.
- Typed interfaces for data consistency using TypeScript.

## Changes Made
### 1. Added Tooltip Functionality
- A `Tooltip` component was implemented to display helpful information when users interact with specific elements (e.g., "Link to Public Profile").
- The tooltip visibility is controlled by click events and closes when clicking outside the tooltip area.

### 2. Integrated Widget Interface
- The `Widget` interface was centralized by importing it from `store/state.ts` instead of redefining it in the component.
- This ensures consistency across the project and reduces duplication.

### 3. Enhanced Interactivity
- Added interactivity for widget customization options, such as toggling `linked`, changing `selectedColor`, and toggling `active`.
- Implemented dynamic styles and classes based on the widget’s state.

### 4. Updated Styling
- Scoped styles for components to avoid conflicts.
- Tooltip appearance and transitions were improved for a better user experience.

## Installation
### Prerequisites
Ensure the following are installed on your system:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps
1. Clone the repository:
   ```bash
   git clone git@github.com:devjavedmohd/vue-test.git
   cd vue-test
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run serve
   # or
   yarn serve
   ```

4. Open the application in your browser at `http://localhost:5173`.

## Usage
### Widget Customization
1. **Link to Public Profile:**
   - Use the toggle checkbox to enable or disable the public profile link.
   - Hover or click on the info icon to view details about the functionality.

2. **Change Badge Color:**
   - Select a badge color from the available options.
   - The widget updates dynamically based on the selected color.

3. **Activate Badge:**
   - Toggle the activation switch to enable or disable the widget badge.

### Tooltip
- Click the info icon (ℹ) to display additional information.
- Click outside the tooltip area to hide it.

## Project Structure
```
src/
├── components/
│   ├── WidgetCard.vue          # Main component for displaying widgets
│   ├── shared/
│   │   └── Tooltip.vue         # Tooltip component
├── store/
│   └── actions.ts              # Fetching data
│   └── getters.ts              #
│   └── index.ts                # Managing all store files one place
│   └── mutations.ts            # Mutating the values /setting and /updating values
│   └── state.ts                # Centralized state management and interfaces
├── App.vue                     # Root component
├── main.ts                     # Entry point for the Vue application
├── assets/
│   ├── svg/                    # Static assets like images/svg and icons
└── style.css                   # Global styles
```

## Future Enhancements
- Add unit tests for the `Tooltip` and `WidgetCard` components using Jest.
- Improve accessibility (ARIA attributes for tooltips and controls).
- Expand widget functionality (e.g., analytics or additional customization options).

## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature description'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.
