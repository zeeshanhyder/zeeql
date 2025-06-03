ZQL - A simple tool to run queries and get tabulated results.

## Demo
<video src="https://github.com/zeeshanhyder/zeeql/blob/main/demo.mp4?raw=true" width="720" controls>
  Your browser does not support the video tag.
</video>

## Getting Started

### Prerequisites
- Node.js (version 22 or higher)
- npm (version 10 or higher)

### Installation
Run the following command to install the dependencies:
```bash
npm install
```

### Running the Development Server
Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Performance

- I used Lighthouse Analytics (Chrome built-in tool) to check first contentful pain, largest contentful pain and overall performance of the app, for both Mobile and Desktop.
- Testing was carried out on [ZQL Vercel website](https://zeeql.vercel.com)

### Mobile
Mobile achieved a performance rating of 95.

<img width="1785" alt="Screenshot 2025-06-03 at 1 38 37 AM" src="https://github.com/user-attachments/assets/382dbfd3-fb5b-4d85-a90f-3537f751a92c" />

<img width="690" alt="Screenshot 2025-06-03 at 1 38 57 AM" src="https://github.com/user-attachments/assets/017bd074-699d-4fc9-a0da-2abbc7e758b7" />


### Desktop
Desktop achieved a performance rating of 100. 

<img width="1786" alt="Screenshot 2025-06-03 at 1 39 40 AM" src="https://github.com/user-attachments/assets/66ffba1e-5df1-4e98-9f86-cad2ba6b0e4a" />

<img width="695" alt="Screenshot 2025-06-03 at 1 39 56 AM" src="https://github.com/user-attachments/assets/c1a07c35-f03e-4cb5-a24c-551dfc80b8e2" />

I was able to primarily achieve this performance by three factors:
- Divide the experience into two pages: Home and Results. This allowed me to paint the Home page faster. while the Results page is lazy loaded, only when the user clicks on the Run Query.
- Leverage NextJS RSC which interleaves Server-rendered component with Client component. In this case, the home page itself is server-rendered, where as the Frequently used queries section is Lazy loaded. This allowed me to paint the page faster.
- Show Shimmers and Spinners when data is in pending state. It allowed me to paint page faster initially (increasing FCP)

## Tech stack
- NextJS
- Tailwind CSS
- HeroUI for UI components
- Phosphorous Icons for iconography
- BiomeJS for linting and formatting. (It is easier to setup than ESLint and Prettier, and is faster than the other two)
- Vercel for deployment.
