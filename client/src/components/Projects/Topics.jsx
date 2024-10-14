import Footer from "../Home/Footer";
import Nav from "../Home/Nav";

const projectsData = [
  {
    category: "Machine Learning and AI",
    projects: [
      {
        name: "TensorFlow",
        description: "Developed by Google Brain, TensorFlow is an open-source machine learning framework for building various ML models, including neural networks.",
        link: "https://github.com/tensorflow/tensorflow"
      },
      {
        name: "PyTorch",
        description: "Developed by Facebook's AI Research lab (FAIR), PyTorch is another popular open-source deep learning framework that offers flexibility and speed.",
        link: "https://github.com/pytorch/pytorch"
      },
      {
        name: "Scikit-learn",
        description: "A simple and efficient tool for data mining and data analysis, built on top of NumPy, SciPy, and matplotlib. It supports various supervised and unsupervised learning algorithms.",
        link: "https://github.com/scikit-learn/scikit-learn"
      }
    ]
  },
  {
    category: "Web Development",
    projects: [
      {
        name: "React.js",
        description: "A JavaScript library for building user interfaces, particularly single-page applications. It's maintained by Facebook and a community of individual developers and companies.",
        link: "https://github.com/JedWatson/react-select"
      },
      {
        name: "Vue.js",
        description: "Another JavaScript framework for building user interfaces. It's known for its simplicity and flexibility, making it suitable for building everything from simple UI components to full-featured single-page applications.",
        link: "#"
      }
    ]
  },
  {
    category: "Natural Language Processing",
    projects: [
      {
        name: "NLTK (Natural Language Toolkit)",
        description: "A leading platform for building Python programs to work with human language data.",
        link: "#"
      },
      {
        name: "spaCy",
        description: "An open-source natural language processing library in Python.",
        link: "#"
      }
    ]
  },
  {
    category: "Backend Frameworks",
    projects: [
      {
        name: "Django",
        description: "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
        link: "#"
      },
      {
        name: "Express.js",
        description: "A minimal and flexible Node.js web application framework.",
        link: "#"
      }
    ]
  }
];

const ProjectCard = ({ name, description, link }) => (
  <div className="bg-gray-800 p-6 border border-gray-700 rounded-lg shadow-lg mb-6 flex flex-col justify-between">
    <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
    <p className="text-gray-300 flex-grow">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300 hover:underline mt-4"
    >
      {name} GitHub Repository
    </a>
  </div>
);

const ProjectsCategory = ({ category, projects }) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold text-white mb-6 text-center">{category}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} name={project.name} description={project.description} link={project.link} />
      ))}
    </div>
  </div>
);

const Topics = () => (
  <div className="bg-black">
    <Nav />
  <div className="min-h-screen flex flex-col items-center bg-black px-4 py-12">
    
    <div className="container max-w-7xl mx-auto flex flex-col justify-center">
      {projectsData.map((category, index) => (
        <ProjectsCategory key={index} category={category.category} projects={category.projects} />
      ))}
    </div>
    <Footer />
  </div>
  </div>
);

export default Topics;
