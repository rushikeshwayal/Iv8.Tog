import { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [selectedStars, setSelectedStars] = useState('all');

  useEffect(() => {
    const apiUrl = 'https://api.github.com/search/repositories?q=stars:>10000&sort=stars&order=desc';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const repositories = data.items;
        setProjects(repositories);

        // Get unique languages from fetched repositories
        const uniqueLanguages = [...new Set(repositories.map(repo => repo.language))];
        setLanguages(uniqueLanguages.filter(Boolean)); // Remove null/undefined languages
        localStorage.setItem('allProjects', JSON.stringify(repositories));
      })
      .catch(error => console.error('Error fetching GitHub data:', error));
  }, []);

  const displayProjects = (filteredProjects) => {
    return filteredProjects.map(project => (
      <div className="project-card border-2 rounded-lg text-black border-black p-5" key={project.id}>
        <a href={project.html_url} target="_blank" rel="noopener noreferrer">
          {project.name}
        </a>
        <p>{project.description || 'No description provided.'}</p>
        <span className="language">{project.language ? project.language.toLowerCase() : 'Unknown'}</span>
        <p>⭐ {project.stargazers_count} stars</p>
      </div>
    ));
  };

  const handleFilter = () => {
    const allProjects = JSON.parse(localStorage.getItem('allProjects'));
    const filteredProjects = allProjects.filter(project => {
      const languageMatch = selectedLanguage === 'all' || (project.language && project.language.toLowerCase() === selectedLanguage);
      const domainMatch = selectedDomain === 'all' || (project.description && project.description.toLowerCase().includes(selectedDomain));
      const starsMatch = selectedStars === 'all' || project.stargazers_count >= parseInt(selectedStars);

      return languageMatch && domainMatch && starsMatch;
    });
    setProjects(filteredProjects);
  };

  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-black border-2 border-black text-white">
        <h1>GitHub Projects</h1>
        <div className="filters flex items-center">
          {/* Language Filter */}
          <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)} className="mr-2 p-2 bg-black text-white border border-white rounded-lg">
            <option value="all">All Languages</option>
            {languages.map((language, index) => (
              <option key={index} value={language.toLowerCase()}>{language}</option>
            ))}
          </select>

          {/* Domain Filter */}
          <select value={selectedDomain} onChange={(e) => setSelectedDomain(e.target.value)} className="mr-2 p-2 bg-black text-white border border-white rounded-lg">
            <option value="all">All Domains</option>
            <option value="machine learning">Machine Learning</option>
            <option value="web development">Web Development</option>
            <option value="ai">Artificial Intelligence</option>
          </select>

          {/* Stars Filter */}
          <select value={selectedStars} onChange={(e) => setSelectedStars(e.target.value)} className="mr-2 p-2 bg-black text-white border border-white rounded-lg">
            <option value="all">All Stars</option>
            <option value="10000">10,000+ Stars</option>
            <option value="50000">50,000+ Stars</option>
            <option value="100000">100,000+ Stars</option>
          </select>

          {/* Filter Button */}
          <button onClick={handleFilter} className="p-2 bg-transparent rounded-lg hover:bg-blue-700">Filter</button>
        </div>
      </header>

      {/* Projects List */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {displayProjects(projects)}
      </main>
    </div>
  );
};

export default Projects;
