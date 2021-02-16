import styles from './mySkills.module.scss'

const MySkills: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h2 className={styles.title}>Skills & Expertise</h2>
        <p className={styles.descriptionText}>
          My area of expertise comprises of creating full-stack applications and
          improving business processes.
        </p>
        <p className={styles.descriptionText}>
          I gained business knowledge through experience in university,
          corporate work, and startups, whereas my developer skills have mostly
          been self-taught out of interest and sharpened through the different
          projects I have done.
        </p>
        <p className={styles.descriptionText}>
          Continuous progress and innovation have always been what I strive for.
          Through this, I aim to help others realize their goals while working
          towards a better world.
        </p>
      </div>

      <div className={styles.business}>
        <h2 className={styles.title}>Business</h2>
        <div className={styles.logos}>
          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="Operations Research Icon"
              src="/images/skills/business/shuttle.svg"
            />
            <h4 className={styles.iconTitle}>Startups</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="Case Study Icon"
              src="/images/skills/business/caseStudy.svg"
            />
            <h4 className={styles.iconTitle}>Business Case Studies</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="Operations Research Icon"
              src="/images/skills/business/gears.svg"
            />
            <h4 className={styles.iconTitle}>Operations Research</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="Statistics Icon"
              src="/images/skills/business/statistics.svg"
            />
            <h4 className={styles.iconTitle}>Data Analytics</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="Strategic Management Icon"
              src="/images/skills/business/strategic.svg"
            />
            <h4 className={styles.iconTitle}>Strategic Management</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="Marketing Icon"
              src="/images/skills/business/marketing.svg"
            />
            <h4 className={styles.iconTitle}>Marketing</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="Consulting Icon"
              src="/images/skills/business/briefcase.svg"
            />
            <h4 className={styles.iconTitle}>Consulting</h4>
          </div>
        </div>
      </div>

      <div className={styles.languages}>
        <h2 className={styles.title}>Programming Languages</h2>
        <div className={styles.logos}>
          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="JavaScript Logo"
              src="/images/skills/languages/javascript.png"
            />
            <h4 className={styles.iconTitle}>JavaScript</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="TypeScript Logo"
              src="/images/skills/languages/typescript.png"
            />
            <h4 className={styles.iconTitle}>TypeScript</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="Python Logo"
              src="/images/skills/languages/python.png"
            />
            <h4 className={styles.iconTitle}>Python</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="Dart Logo"
              src="/images/skills/languages/dart.png"
            />
            <h4 className={styles.iconTitle}>Dart</h4>
          </div>
        </div>
      </div>

      <div className={styles.frontEnd}>
        <h2 className={styles.title}>Front-End</h2>
        <div className={styles.logos}>
          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="HTML Logo"
              src="/images/skills/frontEnd/html.png"
            />
            <h4 className={styles.iconTitle}>HTML</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="CSS Logo"
              src="/images/skills/frontEnd/css.png"
            />
            <h4 className={styles.iconTitle}>CSS</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="Sass Logo"
              src="/images/skills/frontEnd/sass.png"
            />
            <h4 className={styles.iconTitle}>SASS/SCSS</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="React Logo"
              src="/images/skills/frontEnd/react.png"
            />
            <h4 className={styles.iconTitle}>React/Native</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="Next Logo"
              src="/images/skills/frontEnd/next.png"
            />
            <h4 className={styles.iconTitle}>Next JS</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="Gatsby Logo"
              src="/images/skills/frontEnd/gatsby.webp"
            />
            <h4 className={styles.iconTitle}>Gatsby JS</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="Vue Logo"
              src="/images/skills/frontEnd/vue.png"
            />
            <h4 className={styles.iconTitle}>Vue JS</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="Flutter Logo"
              src="/images/skills/frontEnd/flutter.webp"
            />
            <h4 className={styles.iconTitle}>Flutter</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="Material UI Logo"
              src="/images/skills/frontEnd/materialui.png"
            />
            <h4 className={styles.iconTitle}>Material UI</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="Bootstrap Logo"
              src="/images/skills/frontEnd/bootstrap.png"
            />
            <h4 className={styles.iconTitle}>Bootstrap</h4>
          </div>
        </div>
      </div>

      <div className={styles.backEnd}>
        <h2 className={styles.title}>Back-End</h2>
        <div className={styles.logos}>
          <a
            className={styles.iconLink}
            href="https://www.youracclaim.com/badges/feb5ea2d-92c7-4de2-aac5-bd8be068e7e0/public_url"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.icon}>
              <img
                className={styles.iconImage}
                alt="AWS Certified Cloud Practitioner"
                src="/images/skills/backEnd/aws.png"
              />
              <h4 className={styles.iconTitle}>AWS Certified</h4>
            </div>
          </a>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="Serverless Framework Logo"
              src="/images/skills/backEnd/serverless.png"
            />
            <h4 className={styles.iconTitle}>Serverless Framework</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="Nodejs Logo"
              src="/images/skills/backEnd/node.webp"
            />
            <h4 className={styles.iconTitle}>Node JS</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="ExpressJS Logo"
              src="/images/skills/backEnd/express.png"
            />
            <h4 className={styles.iconTitle}>Express JS</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="GraphQL Logo"
              src="/images/skills/backEnd/graphql.svg"
            />
            <h4 className={styles.iconTitle}>GraphQL</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="FireBase Logo"
              src="/images/skills/backEnd/firebase.png"
            />
            <h4 className={styles.iconTitle}>Firebase</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="Postgres Logo"
              src="/images/skills/backEnd/postgres.png"
            />
            <h4 className={styles.iconTitle}>Postgres</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="MongoDB Logo"
              src="/images/skills/backEnd/mongodb.png"
            />
            <h4 className={styles.iconTitle}>MongoDB</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="Contentful Logo"
              src="/images/skills/backEnd/contentful.png"
            />
            <h4 className={styles.iconTitle}>Contentful CMS</h4>
          </div>

          <div className={styles.icon}>
            <img
              className={styles.iconImage}
              alt="Shopify Logo"
              src="/images/skills/backEnd/shopify.png"
            />
            <h4 className={styles.iconTitle}>Shopify</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MySkills
