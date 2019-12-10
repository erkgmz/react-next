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
  new Project('Honda Automobiles', 'honda-logo.png', 'Alt', '#'),
  new Project('Bulletproof', 'bp_logo.png', 'Alt', '#'),
  new Project('Futures That Matter', 'ftm.png', 'Alt', '#'),
  new Project('Create Purpose', 'cp_logo.png', 'Alt', '#'),
  new Project('Sippy Sips', 'logo_sips.png', 'Alt', '#'),
  new Project('Course Walkers', 'sf_logo_black.png', 'Alt', '#')
];

const MoreTech = () => {
  return (
    <div className="more">
      <div className="vendor">
        <img src="/html5-logo.png" alt="Html 5" />
      </div>
      <div className="vendor">
        <img src="/sass_logo.png" alt="Sass" />
      </div>
      <div className="vendor">
        <img src="/JavaScript-logo.png" alt="JavaScript" />
      </div>
      <div className="vendor">
        <img src="/reactjs_logo.png" alt="React" />
      </div>
      <style jsx>{`
        .more {
          display: flex;
          align-items: center;
        }
        .more .vendor {
          flex: 1;
          padding: 20px;
        }
        img {
          max-width: 100%;
        }
        h2 {
          background-color: yellow;
        }
      `}</style>
    </div>
  );
};

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
              <img src={`/${project.image}`} alt="Brand logo" />
            </div>
          );
        })}
      </div>
      {/* <MoreTech /> */}
    </Layout>
  );
};
export default Work;
