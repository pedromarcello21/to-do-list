# Todo List Application

This is a simple Todo List application built with React and Vite.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```
   
2. Navigate into the project directory:
    ```sh
    cd your-repo-name
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

1. Make sure that port `1221` on your localhost is unoccupied as it is used for `db.json`.

2. Start the JSON server and the development server concurrently:
    ```sh
    npm run start:all
    ```

3. Open your browser and go to `http://localhost:5173` to see the application running.

### Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint to check for linting errors.
- `npm run preview`: Previews the production build.
- `npm run start`: Starts the React development server using `react-scripts`.
- `npm run test`: Runs tests using `react-scripts`.
- `npm run eject`: Ejects the configuration from `react-scripts`.
- `npm run server`: Starts the JSON server.
- `npm run start:all`: Starts both the JSON server and the Vite development server concurrently.

### Folder Structure



```
your-repo-name/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── db.json
├── package.json
└── README.md


### Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

### License

Distributed under the MIT License. See `LICENSE` for more information.

### Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [json-server](https://github.com/typicode/json-server)


Replace `your-username` and `your-repo-name` with your actual GitHub username and repository name. This `README.md` file provides clear instructions on how to set up and run the Todo List application.
