import Layout from '../components/layout';
import { NextPage } from 'next';

interface ProjectInterface {
  link: string;
  image: string;
  alt: string;
  name: string;
}

class Project {
  public link: string;
  public image: string;
  public alt: string;
  public name: string;

  constructor(name: string, image: string, link: string, alt: string) {
    this.name = name;
    this.image = image;
    this.link = link;
    this.alt = alt;
  }
}

const projects: ProjectInterface[] = [
  new Project('Honda Automobiles', '#', 'Alt', '#'),
  new Project('Bulletproof', '#', 'Alt', '#'),
  new Project('Futures That Matter', '#', 'Alt', '#'),
  new Project('Create Purpose', 'cp_white.png', 'Alt', '#'),
  new Project('Sippy Sips', '#', 'Alt', '#'),
  new Project('Course Walkers', '#', 'Alt', '#')
];

const Work: NextPage = () => {
  return (
    <Layout>
      <div className="work">
        <h1>Work.</h1>
        <p>
          I build static sites and web applications. Here are a few of the
          projects I've been lucky enough to be a part of.
        </p>
        {projects.map(project => {
          return (
            <div key={project.name} className="project">
              <h1>{project.name}</h1>
              <img src={`/${project.image}`} alt="" />
            </div>
          );
        })}
        <div className="more"></div>
        <style jsx>{`
          h2 {
            background-color: yellow;
          }
        `}</style>
      </div>
    </Layout>
  );
};
export default Work;
