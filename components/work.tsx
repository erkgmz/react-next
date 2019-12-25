import { useEffect, useState } from 'react';
import useTheme from '../hooks/useTheme';

interface ProjectInterface {
  name: string;
  image: string;
  link: string[];
  copy: string;
  tags: string[];
}

class Project {
  public name: string;
  public image: string;
  public link: string[];
  public copy: string;
  public tags: string[];

  constructor(
    name: string,
    image: string,
    link: string[],
    copy: string,
    tags: string[]
  ) {
    this.name = name;
    this.image = image;
    this.link = link;
    this.copy = copy;
    this.tags = tags;
  }
}

const projects: ProjectInterface[] = [
  new Project(
    'Honda Automobiles',
    'honda-logo.png',
    ['https://automobiles.honda.com/'],
    'As a creative developer at RPA my primary focus is the Honda Automobiles website, where I play a lead role in the planning and development of new components and integrate them into our CMS and maintain the current library of components. This includes tools like Payment Estimator, Build and Price, Dealer Locator and Vehicle Compare as well as Home and Vehicle Landing pages.',
    ['JAVASCRIPT', 'REACT', 'RIOTJS', 'SASS', 'HANDLEBARS', 'SITECORE']
  ),
  new Project(
    'Shopify',
    'shopify.png',
    ['https://sippysips.com/', 'https://almsbio.com'],
    "I've built several custom themes and sites using Shopify and have experience integrating third-party apps/plugins.",
    [
      'JAVASCRIPT',
      'LIQUID',
      'HTML/SASS',
      '3RD PARTY APPLICATIONS',
      'INTEGRATIONS'
    ]
  ),
  new Project(
    'Bulletproof',
    'bp_logo.png',
    ['https://www.bulletproof.com/'],
    'I had the pleasure of working with the digital marketing team at Bulletproof. We worked on a "Welcome" and "Abandoned Cart" series of custom email templates. FYI - developing responsive UI\'s for email clients is like coding in the 90\'s, remember <table>?!',
    ['HTML', 'CSS', 'MJML', 'RESPONSIVE EMAIL TEMPLATES']
  ),
  new Project(
    'Create Purpose',
    'cp_logo.png',
    ['https://www.createpurpose.org/'],
    'This was primarily a UX project focused on increasing donor activity and deploying a revamped site using Wordpress. The project is noble in its cause and the new website was a success with an increase in overall traffic and donations!',
    ['UX', 'WORDPRESS']
  ),
  new Project(
    'Course Walkers',
    'sf_logo_black.png',
    ['http://course-walkers.herokuapp.com/'],
    'A UI project for a client that offers their horses for stud services. Each horse has an ancestry lineage that was built with Flexbox and an accompanying video that we pull in from YouTube.',
    ['HTML', 'HANDLEBARS', 'CSS', 'JAVASCRIPT/JQUERY', 'YOUTUBE API']
  )
];

const createHostName: Function = (link: string) => {
  return link
    .replace('https://www.', '')
    .replace('https://', '')
    .replace('http://www.', '')
    .replace('http://', '')
    .replace('/', '')
    .toUpperCase();
};

const Work: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      window.addEventListener('scroll', lockHeadline);
    }
  }, [isInView]);

  const lockHeadline = () => {
    const offsetTop = (document.querySelector('.work') as HTMLElement)
      .offsetTop;
    const scrollY = window.scrollY;

    if (window.innerWidth < 1024) {
      setIsInView(false);
      return;
    }
    if (scrollY >= offsetTop) {
      setIsInView(true);
    }
    if (scrollY <= offsetTop && isInView) {
      setIsInView(false);
    }
  };

  return (
    <div className="work">
      <h4
        className="section-headline"
        style={{
          position: isInView ? 'fixed' : 'static',
          marginTop: isInView && 0,
          top: isInView && 0
        }}
      >
        Work.
      </h4>
      <div className="projects">
        {projects.map((project, key) => {
          return (
            <div key={`${project.name}-${key}`} className="project">
              <div className="logo-block">
                <img
                  className="logo"
                  src={`/${project.image}`}
                  alt="Brand logo"
                />
              </div>
              <div className="copy-block">
                <h4 className="headline section-copy">{project.name}</h4>
                {project.link.map((link: string, key: number) => {
                  return (
                    <a key={`${link}-${key}`} href={link} className="link">
                      {createHostName(link)}
                    </a>
                  );
                })}
                <p className="section-copy description">{project.copy}</p>
                <h4 style={{ marginBottom: 0 }} className="section-copy">
                  Tools
                </h4>
                {project.tags.map((tag: string, index: number) => {
                  return (
                    <span key={`${tag}-${index}`} className="tag section-copy">
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .work {
          padding: 20px 10px 0;
        }

        @media (min-width: 1024px) {
          .work {
            display: flex;
            padding: 0 100px;
          }
        }

        .section-headline {
          font-size: 80px;
          margin-bottom: 50px;
          margin-top: 0;
          max-width: 500px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .section-headline {
            font-size: 100px;
            margin-bottom: 20px;
          }
        }

        @media (min-width: 1024px) {
          .section-headline {
            font-size: 160px;
            transition-property: margin;
            transition-duration: 0.5s;
            transition-timing-function: ease-in-out;
            font-size: 14vw;
            min-width: 50%;
            margin-top: 100px;
          }
        }

        .projects {
          display: flex;
          flex-flow: column nowrap;
          max-width: 500px;
          margin: 0 auto;
        }

        @media (min-width: 1024px) {
          .projects {
            width: 800px;
            max-width: 50%;
            margin-right: 0;
            padding-top: 30px;
          }
        }

        .projects .project {
          display: inline-block;
          position: relative;
          flex: 1;
          border-bottom: 2px solid ${theme === 'light' ? '#30323d' : '#f5f5f5'};
          margin-bottom: 20px;
        }

        @media (min-width: 1024px) {
          .projects .project {
            margin-bottom: 40px;
          }
        }

        .projects .project:last-child {
          border-bottom: none;
        }

        .project .logo-block {
          padding: 20px 40px;
          text-align: center;
        }

        .project .logo-block img {
          width: 100%;
          max-width: 200px;
        }

        @media (min-width: 1024px) {
          .project .logo-block img {
            max-width: 300px;
          }
        }

        .project .copy-block {
          padding-left: 10px;
          padding-bottom: 40px;
          max-width: 100%;
        }

        @media (min-width: 1024px) {
          .project .copy-block {
            padding-bottom: 60px;
          }
        }

        .project .copy-block .tag {
          display: inline-block;
          padding: 4px;
          border-radius: 4px;
          margin-right: 4px;
          margin-top: 10px;
          font-size: 10px;
        }

        @media (min-width: 1024px) {
          .project .copy-block .tag {
            font-size: 12px;
          }
        }

        .project .copy-block .headline {
          margin-bottom: 5px;
        }

        @media (min-width: 1024px) {
          .project .copy-block .headline {
            font-size: 24px;
          }
        }

        .project .copy-block .link {
          display: inline-block;
          padding: 4px 8px;
          background-color: #d4af37;
          color: white;
          font-size: 10px;
          margin-bottom: 5px;
          border-radius: 4px;
          margin-right: 10px;
        }

        @media (min-width: 1024px) {
          .project .copy-block .link {
            font-size: 12px;
          }
        }

        .project p {
          margin: 0;
          font-size: 14px;
          letter-spacing: 1px;
          line-height: 1.2;
        }

        @media (min-width: 1024px) {
          .project p {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};
export default Work;
