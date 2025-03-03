# Exam Dashboard - Frontend Developer Task

This project is a pixel-perfect implementation of the provided design mockup using Next.js and SASS.

## Technologies Used

- Next.js
- SASS for styling (no external CSS frameworks or UI libraries)
- TypeScript

## Features Implemented

- **Tab Functionality**: Clicking on tabs switches the displayed content.
- **Menu Interactions**: The menu button toggles the sidebar, and there are dropdown menus for various elements.
- **Interactive Elements**: Cards with dropdown menus, buttons, and status indicators.
- **Responsive Design**: The layout adapts to different desktop screen sizes.

## Project Structure

- `src/app`: Contains the main application layout and global styles
- `src/components`: Contains reusable components
  - `Header`: Top navigation bar with search and profile
  - `Sidebar`: Left navigation menu
  - `ExamDashboard`: Main content area with tabs and exam cards

## Running the Project

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Implementation Details

- **Visual Accuracy**: Carefully matched colors, spacing, typography, and layout from the design.
- **Interactive Elements**: Implemented functional tabs, dropdown menus, and buttons.
- **Clean Code**: Used semantic HTML, modular SCSS, and TypeScript for type safety.
- **Performance**: Optimized component rendering and used Next.js best practices.

## Known Limitations

- The content for tabs other than "Panel" is not implemented as it wasn't required in the task.
- Some interactive elements like the search functionality are visual-only.