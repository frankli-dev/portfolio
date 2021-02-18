import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './work.module.scss'

const Work = () => {
  return (
    <div className={styles.container}>
      <span className={styles.tagOpen}>{'<h1>'}</span>
      <h1 className={styles.heading}>Some Things I've Built</h1>

      <span className={styles.tagClose}>{'</h1>'}</span>

      <span className={styles.tagOpen}>{'<div class="featured">'}</span>
      <div className={styles.projectCard}>
        <a
          className={styles.projectPic}
          href="https://lillyfeather.com/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className={styles.projectIMG}
            alt="Lilly Feather Shop"
            src="/images/projects/lillyfeather.png"
          />
        </a>

        <div className={styles.overlay} />

        <div className={styles.projectText}>
          <div className={styles.projectTitleDesc}>
            <a
              className={styles.linkToProject}
              href="https://lillyfeather.com/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLink} />
            </a>
            <span className={styles.featured}>Featured Project</span>

            <h2 className={styles.projectTitle}>Lilly Feather Shop</h2>
            <div className={styles.projectDescBox}>
              <p className={styles.projectDescription}>
                A fully-functional mobile-responsive eCommerce web app created
                for a fashion startup using the Shopify GraphQL API, and
                GatsbyJS for SEO.
              </p>
            </div>
          </div>

          <div className={styles.technologies}>
            <div className={styles.tech}>
              <img
                className={styles.techIcon}
                alt="Gatsby Logo"
                src="/images/skills/frontEnd/gatsby.webp"
              />
              <span className={styles.iconTitle}>Gatsby</span>
            </div>

            <div className={styles.tech}>
              <img
                className={styles.techIcon}
                alt="GraphQL Logo"
                src="/images/skills/backEnd/graphql.svg"
              />
              <span className={styles.iconTitle}>GraphQL</span>
            </div>

            <div className={styles.tech}>
              <img
                className={styles.techIcon}
                alt="Netlify Logo"
                src="/images/skills/frontEnd/Netlify.png"
              />
              <span className={styles.iconTitle}>Netlify</span>
            </div>

            <div className={styles.tech}>
              <img
                className={styles.techIcon}
                alt="Shopify Logo"
                src="/images/skills/backEnd/shopify.png"
              />
              <span className={styles.iconTitle}>Shopify</span>
            </div>

            <div className={styles.tech}>
              <img
                className={styles.techIcon}
                alt="Contentful Logo"
                src="/images/skills/backEnd/contentful.png"
              />
              <span className={styles.iconTitle}>Contentful</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.projectCard}>
        <a
          className={styles.projectPic}
          href="https://drapem.com/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className={styles.projectIMG}
            alt="Drapem Pre-Launch"
            src="/images/projects/drapem-prelaunch.png"
          />
        </a>

        <div className={styles.overlay} />

        <div className={styles.projectText}>
          <div className={styles.projectTitleDesc}>
            <a
              className={styles.linkToProject}
              href="https://drapem.com/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLink} />
            </a>
            <span className={styles.featured}>Featured Project</span>

            <h2 className={styles.projectTitle}>Drapem Pre-Launch Page</h2>
            <div className={styles.projectDescBox}>
              <p className={styles.projectDescription}>
                A pre-launch page that showcases the startup's innovative idea
                that includes a custom referral program to attract future users.
              </p>
            </div>
          </div>

          <div className={styles.technologies}>
            <div className={styles.tech}>
              <img
                className={styles.techIcon}
                alt="React Logo"
                src="/images/skills/frontEnd/react.png"
              />
              <span className={styles.iconTitle}>React</span>
            </div>
            <div className={styles.tech}>
              <img
                className={styles.techIcon}
                alt="Heroku Logo"
                src="/images/skills/backEnd/heroku.png"
              />
              <span className={styles.iconTitle}>Heroku</span>
            </div>

            <div className={styles.tech}>
              <img
                className={styles.techIcon}
                alt="Netlify Logo"
                src="/images/skills/frontEnd/Netlify.png"
              />
              <span className={styles.iconTitle}>Netlify</span>
            </div>

            <div className={styles.tech}>
              <img
                className={styles.techIcon}
                alt="Postgres Logo"
                src="/images/skills/backEnd/postgres.png"
              />
              <span className={styles.iconTitle}>Postgres</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.projectCard}>
        <a
          className={styles.projectPic}
          href="https://algovision.io/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className={styles.projectIMG}
            alt="Algovision Application"
            src="/images/projects/algovision.png"
          />
        </a>

        <div className={styles.overlay} />

        <div className={styles.projectText}>
          <div className={styles.projectTitleDesc}>
            <div className={styles.links}>
              <a
                className={styles.linkToProject}
                href="https://github.com/icedevera/algo-vision"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                className={styles.linkToProject}
                href="https://algovision.io/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </div>
            <span className={styles.featured}>Featured Project</span>

            <h2 className={styles.projectTitle}>Algorithm Visualizer</h2>
            <div className={styles.projectDescBox}>
              <p className={styles.projectDescription}>
                A fully functional pathfinding algorithm visualizer that enables
                users to further understand different algorithms, it's use-cases
                and limitations.
              </p>
            </div>
          </div>

          <div className={styles.technologies}>
            <div className={styles.tech}>
              <img
                className={styles.techIcon}
                alt="React Logo"
                src="/images/skills/frontEnd/react.png"
              />
              <span className={styles.iconTitle}>React</span>
            </div>

            <div className={styles.tech}>
              <img
                className={styles.techIcon}
                alt="Netlify Logo"
                src="/images/skills/frontEnd/Netlify.png"
              />
              <span className={styles.iconTitle}>Netlify</span>
            </div>
          </div>
        </div>
      </div>
      <span className={styles.tagCloseDiv}>{'</div>'}</span>

      <h2 className={styles.subheading}>Other Noteworthy Projects</h2>

      <span className={styles.tagOpen}>{'<div>'}</span>
      <div className={styles.otherProjects}>
        <div className={styles.otherProjectCard}>
          <img
            className={styles.otherProjectImg}
            alt="Gladiator's Honor"
            src="/images/projects/gladiatorshonor.png"
          />

          <div className={styles.otherProjectOverlay} />

          <div className={styles.otherProjectDetails}>
            <div className={styles.otherProjectLinks}>
              <a
                className={styles.otherProjectLink}
                href="https://github.com/icedevera/gladiators-honor"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>

            <h3 className={styles.otherProjectTitle}>Gladiator's Honor</h3>

            <p className={styles.otherProjectDescription}>
              A gladiator RPG created using VBA and Excel. Includes 2D movement,
              character levels, RNG, battle forms, progressive difficulty,
              infinite gamepley, and much more!
            </p>

            <div className={styles.technologies}>
              <div className={styles.tech}>
                <img
                  className={styles.techIcon}
                  alt="MS VBA Logo"
                  src="/images/skills/business/vba.webp"
                />
                <span className={styles.iconTitle}>VBA</span>
              </div>

              <div className={styles.tech}>
                <img
                  className={styles.techIcon}
                  alt="MS Excel Logo"
                  src="/images/skills/business/excel.png"
                />
                <span className={styles.iconTitle}>MS Excel</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.otherProjectCard}>
          <img
            className={styles.otherProjectImg}
            alt="Smart Brain"
            src="/images/projects/smartbrain.png"
          />

          <div className={styles.otherProjectOverlay} />

          <div className={styles.otherProjectDetails}>
            <div className={styles.otherProjectLinks}>
              <a
                className={styles.otherProjectLink}
                href="https://github.com/icedevera/smartbrain"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>

            <h3 className={styles.otherProjectTitle}>Smart Brain</h3>

            <p className={styles.otherProjectDescription}>
              A web application that detects faces in an image.
            </p>

            <div className={styles.technologies}>
              <div className={styles.tech}>
                <img
                  className={styles.techIcon}
                  alt="React Logo"
                  src="/images/skills/frontEnd/react.png"
                />
                <span className={styles.iconTitle}>React</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.otherProjectCard}>
          <img
            className={styles.otherProjectImg}
            alt="Smart Brain API"
            src="/images/projects/smartbrain.png"
          />

          <div className={styles.otherProjectOverlay} />

          <div className={styles.otherProjectDetails}>
            <div className={styles.otherProjectLinks}>
              <a
                className={styles.otherProjectLink}
                href="https://github.com/icedevera/smartbrain-api"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>

            <h3 className={styles.otherProjectTitle}>Smart Brain Api</h3>

            <p className={styles.otherProjectDescription}>
              Back-end for the Smart Brain application that calls the artificial
              intelligence api to detect faces. Includes user authentication
              and user entry count.
            </p>

            <div className={styles.technologies}>
              <div className={styles.tech}>
                <img
                  className={styles.techIcon}
                  alt="NodeJS Logo"
                  src="/images/skills/backEnd/node.webp"
                />
                <span className={styles.iconTitle}>Node JS</span>
              </div>

              <div className={styles.tech}>
                <img
                  className={styles.techIcon}
                  alt="React Logo"
                  src="/images/skills/backEnd/postgres.png"
                />
                <span className={styles.iconTitle}>Postgres</span>
              </div>

              <div className={styles.tech}>
                <img
                  className={styles.techIcon}
                  alt="Express Logo"
                  src="/images/skills/backEnd/express.png"
                />
                <span className={styles.iconTitle}>Express</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.otherProjectCard}>
          <img
            className={styles.otherProjectImg}
            alt="Robofriends"
            src="/images/projects/robofriends.png"
          />

          <div className={styles.otherProjectOverlay} />

          <div className={styles.otherProjectDetails}>
            <div className={styles.otherProjectLinks}>
              <a
                className={styles.otherProjectLink}
                href="https://github.com/icedevera/robofriends"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>

            <h3 className={styles.otherProjectTitle}>RoboFriends</h3>

            <p className={styles.otherProjectDescription}>
              A sudo-social application that includes searchable profiles of
              different characters.
            </p>

            <div className={styles.technologies}>
              <div className={styles.tech}>
                <img
                  className={styles.techIcon}
                  alt="React Logo"
                  src="/images/skills/frontEnd/react.png"
                />
                <span className={styles.iconTitle}>React</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.otherProjectCard}>
          <img
            className={styles.otherProjectImg}
            alt="Chat App"
            src="/images/projects/chat.jpg"
          />

          <div className={styles.otherProjectOverlay} />

          <div className={styles.otherProjectDetails}>
            <div className={styles.otherProjectLinks}>
              <a
                className={styles.otherProjectLink}
                href="https://github.com/icedevera/flutter-chat"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>

            <h3 className={styles.otherProjectTitle}>Flutter Chat App</h3>

            <p className={styles.otherProjectDescription}>
              A simple chat application that allows users to message in
              real-time. Includes push notifications and user authentication
              through firebase.
            </p>

            <div className={styles.technologies}>
              <div className={styles.tech}>
                <img
                  className={styles.techIcon}
                  alt="Flutter Logo"
                  src="/images/skills/frontEnd/flutter.webp"
                />
                <span className={styles.iconTitle}>Flutter</span>
              </div>

              <div className={styles.tech}>
                <img
                  className={styles.techIcon}
                  alt="Firebase Logo"
                  src="/images/skills/backEnd/firebase.png"
                />
                <span className={styles.iconTitle}>Firebase</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.otherProjectCard}>
          <img
            className={styles.otherProjectImg}
            alt="Chat App"
            src="/images/projects/shop.jpg"
          />

          <div className={styles.otherProjectOverlay} />

          <div className={styles.otherProjectDetails}>
            <div className={styles.otherProjectLinks}>
              <a
                className={styles.otherProjectLink}
                href="https://github.com/icedevera/flutter-shop"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>

            <h3 className={styles.otherProjectTitle}>Flutter Shop App</h3>

            <p className={styles.otherProjectDescription}>
              A sample eCommerce mobile application built with flutter that
              includes cart functionality, push notifications, user
              authentication, and user shop data.
            </p>

            <div className={styles.technologies}>
              <div className={styles.tech}>
                <img
                  className={styles.techIcon}
                  alt="Flutter Logo"
                  src="/images/skills/frontEnd/flutter.webp"
                />
                <span className={styles.iconTitle}>Flutter</span>
              </div>

              <div className={styles.tech}>
                <img
                  className={styles.techIcon}
                  alt="Firebase Logo"
                  src="/images/skills/backEnd/firebase.png"
                />
                <span className={styles.iconTitle}>Firebase</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.otherProjectCard}>
          <img
            className={styles.otherProjectImg}
            alt="Chat App"
            src="/images/projects/places.jpg"
          />

          <div className={styles.otherProjectOverlay} />

          <div className={styles.otherProjectDetails}>
            <div className={styles.otherProjectLinks}>
              <a
                className={styles.otherProjectLink}
                href="https://github.com/icedevera/great-places"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>

            <h3 className={styles.otherProjectTitle}>Great Places</h3>

            <p className={styles.otherProjectDescription}>
              A mobile application to log the great memorable places you've been
              to. Utilizes flutter, firebase, native device tools, and google
              maps API.
            </p>

            <div className={styles.technologies}>
              <div className={styles.tech}>
                <img
                  className={styles.techIcon}
                  alt="Flutter Logo"
                  src="/images/skills/frontEnd/flutter.webp"
                />
                <span className={styles.iconTitle}>Flutter</span>
              </div>

              <div className={styles.tech}>
                <img
                  className={styles.techIcon}
                  alt="Firebase Logo"
                  src="/images/skills/backEnd/firebase.png"
                />
                <span className={styles.iconTitle}>Firebase</span>
              </div>

              <div className={styles.tech}>
                <img
                  className={styles.techIcon}
                  alt="Goole Maps Logo"
                  src="/images/skills/backEnd/gmaps.webp"
                />
                <span className={styles.iconTitle}>Google Maps</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.otherProjectCard}>
          <img
            className={styles.otherProjectImg}
            alt="Personal Finance App"
            src="/images/projects/finance.jpg"
          />

          <div className={styles.otherProjectOverlay} />

          <div className={styles.otherProjectDetails}>
            <div className={styles.otherProjectLinks}>
              <a
                className={styles.otherProjectLink}
                href="https://github.com/icedevera/personal-finance-app"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>

            <h3 className={styles.otherProjectTitle}>Personal Finance App</h3>

            <p className={styles.otherProjectDescription}>
              A mobile application that allows users to log their expenses and
              track them on a weekly basis.
            </p>

            <div className={styles.technologies}>
              <div className={styles.tech}>
                <img
                  className={styles.techIcon}
                  alt="Flutter Logo"
                  src="/images/skills/frontEnd/flutter.webp"
                />
                <span className={styles.iconTitle}>Flutter</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.otherProjectCard}>
          <img
            className={styles.otherProjectImg}
            alt="Meal Recipe App"
            src="/images/projects/recipes.jpg"
          />

          <div className={styles.otherProjectOverlay} />

          <div className={styles.otherProjectDetails}>
            <div className={styles.otherProjectLinks}>
              <a
                className={styles.otherProjectLink}
                href="https://github.com/icedevera/meal-recipe"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>

            <h3 className={styles.otherProjectTitle}>Meal Recipe App</h3>

            <p className={styles.otherProjectDescription}>
              A mobile application that holds multiple recipes and showcases it
              through a clean user interface.
            </p>

            <div className={styles.technologies}>
              <div className={styles.tech}>
                <img
                  className={styles.techIcon}
                  alt="Flutter Logo"
                  src="/images/skills/frontEnd/flutter.webp"
                />
                <span className={styles.iconTitle}>Flutter</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.otherProjectCard}>
          <img
            className={styles.otherProjectImg}
            alt="Python Hangman"
            src="/images/projects/hangman.png"
          />

          <div className={styles.otherProjectOverlay} />

          <div className={styles.otherProjectDetails}>
            <div className={styles.otherProjectLinks}>
              <a
                className={styles.otherProjectLink}
                href="https://github.com/icedevera/scrabble-python"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>

            <h3 className={styles.otherProjectTitle}>Scrabble</h3>

            <p className={styles.otherProjectDescription}>
              The game of scrabble developed using Python. Has the ability to
              allow the user to play against the computer.
            </p>

            <div className={styles.technologies}>
              <div className={styles.tech}>
                <img
                  className={styles.techIcon}
                  alt="Python Logo"
                  src="/images/skills/languages/python.png"
                />
                <span className={styles.iconTitle}>Python</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.otherProjectCard}>
          <img
            className={styles.otherProjectImg}
            alt="Python Hangman"
            src="/images/projects/hangman.png"
          />

          <div className={styles.otherProjectOverlay} />

          <div className={styles.otherProjectDetails}>
            <div className={styles.otherProjectLinks}>
              <a
                className={styles.otherProjectLink}
                href="https://github.com/icedevera/hangman-python"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>

            <h3 className={styles.otherProjectTitle}>Hangman</h3>

            <p className={styles.otherProjectDescription}>
              A simple hangman game developed using python.
            </p>

            <div className={styles.technologies}>
              <div className={styles.tech}>
                <img
                  className={styles.techIcon}
                  alt="Python Logo"
                  src="/images/skills/languages/python.png"
                />
                <span className={styles.iconTitle}>Python</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span className={styles.tagCloseDiv}>{'</div>'}</span>
    </div>
  )
}

export default Work
