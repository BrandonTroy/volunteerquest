# VolunteerQuest

Fantasy-themed, AI-powered, volunteering game and social network, connecting volunteers with opportunities to make a difference in the world.

Join VolunteerQuest, the ultimate platform that transforms volunteering into an exciting adventure! Sign up, choose from a variety of "quests" (volunteering events) posted by organizations, and team up with fellow volunteers to make a difference. Earn points for every quest you complete, unlock achievements, and redeem rewards as you level up your impact. Whether you're passionate about helping your community, meeting like-minded people,or just love a good challenge, VolunteerQuest makes giving back more engaging and rewarding than ever.

This project was built for judging at the 2025 HackNCState Hackathon by Ishan Mistry, Greydon Sarvis, Brandon Troy, and Everett Tucker. GO PACK!!!

## Inspiration

Volunteer match sites, gamification, and storylines with a twist of using AI to generate them – calling for endless possibilities – Inspired by platforms that connect volunteers with causes, enhanced with gamification to drive engagement, and powered by AI-generated storylines that create unique, immersive experiences, opening the door to limitless ways of making an impact.

## What it does

- It connects those in need with those willing to help, while also incentivizing participation through rewards that, in turn, support local businesses.
- It also generates custom(LLM generated) storylines for quests based on the choice of the theme from the user.

## How we built it

- Frontend : Typescript, Tailwind, NextJS, tsx
- Backend : MongoDBAtlas(Database), Flask, Python
- Gen AI : Groq API(endpoint), llama-3.3-70b-versatile(model), langchain

## Challenges we ran into

1. Cloud needs instances, but cloud means latency—slowpoke. Local LLMs make laptops go fast, and for even better performance, we turned to GroqCloud!
2. Handling JWT Authorization across different hosts
3. Sleep deprivation fr fr

## Accomplishments that we're proud of

1. The website’s UI/UX— we successfully blended the pixel art style with a captivating fantasy theme for the event.
2. Creating dynamic storylines based on user input. If a user requests a Pokémon adventure, we generate that—actually, we can create any fantasy universe they desire because Gen AI.
3. Implementing guild quests for community play. While players have their own themes, we can seamlessly blend multiple themes to create a unique tapestry of fantasy universes.

## What we learned

1. Creative problem-solving – Developing innovative solutions by breaking down complex challenges, thinking outside the box, and iterating on different approaches to optimize efficiency and effectiveness.
2. Prompt engineering techniques like Chain of Thought and Zero-Shot – Enhancing AI responses by guiding models to reason through problems step-by-step (Chain of Thought) or enabling them to generate accurate outputs without prior examples (Zero-Shot).
3. Hosting a database on the cloud – Deploying and managing a scalable, secure, and accessible database using cloud service like MongoDB Atlas
4. Making a Python server – Building a backend using frameworks like Flask or FastAPI to handle requests, process data, and serve dynamic responses while ensuring reliability, scalability, and security.
5. Integration of all the various elements (Rewards, Cards, AI Module, Database) – Connecting different system components seamlessly to create a unified experience, ensuring smooth data flow, interoperability, and functionality while maintaining efficiency and user engagement.

## What's next for Volunteer Quest

1. Dynamic logging of companies – Continuously tracking and updating company-related data in real time, ensuring accurate and structured storage of key details such as industry, needs, and engagement history for better insights and decision-making.
2. Scraping and finding people who need help on online platforms with the help of bots (e.g., Reddit) – Automating the identification of individuals seeking assistance by using web scrapers and AI-driven bots to analyze posts, comments, and discussions, enabling timely intervention and support.
3. Implementing an optimal allocation algorithm to match interested candidates with volunteers – Gale-Shapley algorithm – Using the stable matching mechanism to efficiently pair volunteers with those in need based on preferences, availability, and suitability, ensuring fair and effective resource distribution.
