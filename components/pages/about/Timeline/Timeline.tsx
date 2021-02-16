import styles from './timeline.module.scss'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from 'react-vertical-timeline-component'
  import 'react-vertical-timeline-component/style.min.css'

const Timeline:React.FC = () => {


    return (
        <>
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{ background: 'transparent', color: '#fff' }}
            contentArrowStyle={{
              borderRight: 'none',
            }}
            date="Jan 2018 - Feb 2018"
            dateClassName={styles.date}
            iconClassName={styles.iconContainer}
            icon={
              <img
                className={styles.timelineIcon}
                alt="Coca Cola Logo"
                src="/images/brandLogos/cocacola.png"
              />
            }
          >
            <h3>Coca-Cola FEMSA</h3>
            <p>Runner-up Business Case Study Competition</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: 'transparent', color: '#fff' }}
            contentArrowStyle={{
              borderRight: 'none',
            }}
            date="Sep 2018 - May 2019"
            dateClassName={styles.date}
            iconClassName={styles.iconContainer}
            icon={
              <img
                className={styles.timelineIcon}
                alt="Ateneco Logo"
                src="/images/brandLogos/ateneco.png"
              />
            }
          >
            <h3>Ateneo Shell Eco-Racing Team</h3>
            <p>Marketing Representative</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: 'transparent', color: '#fff' }}
            contentArrowStyle={{
              borderRight: 'none',
            }}
            date="Jun 2019 - Jul 2019"
            className={styles.timelineContainer}
            dateClassName={styles.date}
            iconClassName={styles.iconContainer}
            icon={
              <img
                className={styles.timelineIcon}
                alt="AXA Logo"
                src="/images/brandLogos/axa.png"
              />
            }
          >
            <h3>AXA Philippines</h3>
            <p>NexGen Business Analyst Intern</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: 'transparent', color: '#fff' }}
            contentArrowStyle={{
              borderRight: 'none',
            }}
            date="Nov 2019 - Dec 2019"
            className={styles.timelineContainer}
            dateClassName={styles.date}
            iconClassName={styles.iconContainer}
            icon={
              <img
                className={styles.timelineIcon}
                alt="BCG Logo"
                src="/images/brandLogos/bcg.png"
              />
            }
          >
            <h3>Boston Consulting Group (BCG) Manila</h3>
            <p>Runner-up Business Case Study Competition</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: 'transparent', color: '#fff' }}
            contentArrowStyle={{
              borderRight: 'none',
            }}
            date="Nov 2019 - Dec 2019"
            className={styles.timelineContainer}
            dateClassName={styles.date}
            iconClassName={styles.iconContainer}
            icon={
              <img
                className={styles.timelineIconJFEL}
                alt="JFEL Logo"
                src="/images/brandLogos/jfel.png"
              />
            }
          >
            <h3>Junior Fellowship for Financial Literacy (JFeL)</h3>
            <p>Vice President for Corporate Investments</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: 'transparent', color: '#fff' }}
            contentArrowStyle={{
              borderRight: 'none',
            }}
            date="Sep 2016 - Oct 2020"
            className={styles.timelineContainer}
            dateClassName={styles.date}
            iconClassName={styles.iconContainer}
            icon={
              <img
                className={styles.timelineIcon}
                alt="AdMU Logo"
                src="/images/brandLogos/ateneo.png"
              />
            }
          >
            <h3>Ateneo de Manila University</h3>
            <p>
              Graduated with a degree in Management Engineering minor in
              Information Technology
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: 'transparent', color: '#fff' }}
            contentArrowStyle={{
              borderRight: 'none',
            }}
            date="Jun 2020 - Nov 2020"
            className={styles.timelineContainer}
            dateClassName={styles.date}
            iconClassName={styles.iconContainer}
            icon={
              <img
                className={styles.timelineIconLF}
                alt="Lilly Feather Logo"
                src="/images/brandLogos/lf.png"
              />
            }
          >
            <h3>Lilly Feather</h3>
            <p>COO, Product Manager, Web Developer</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: 'transparent', color: '#fff' }}
            contentArrowStyle={{
              borderRight: 'none',
            }}
            date="Nov 2020 - Present"
            className={styles.timelineContainer}
            dateClassName={styles.date}
            iconClassName={styles.iconContainer}
            icon={
              <img
                className={styles.timelineIconDrapem}
                alt="drapem Logo"
                src="/images/brandLogos/drapem.png"
              />
            }
          >
            <h3>drapem</h3>
            <p>Founder & CEO</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
        </>
    )
}

export default Timeline