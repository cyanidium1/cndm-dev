"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';

import gamestackTexture2Placeholder from 'assets/gamestack-list.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login.jpg';
import sliceTexturePlaceholder from 'assets/gamestack-list.jpg';
import sprTexturePlaceholder from 'assets/gamestack-login.jpg';
import hmsPreview from 'assets/spr-lesson-builder-dark-large.jpg';
import cicd from 'assets/slice-app.jpg';
import stockDash from 'assets/gamestack-login.jpg';
import stockDash2 from 'assets/gamestack-list.jpg';

import translations from './translations.json';

const disciplines = ['Web Dev', 'Web Design', 'App Dev.'];

const getDefaultLanguage = () => {
  const language = navigator.language.split('-')[0];
  return translations[language] ? language : 'en';
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const [language, setLanguage] = useState(getDefaultLanguage());
  const intro = useRef(null);
  const projectOne = useRef(null);
  const projectTwo = useRef(null);
  const projectThree = useRef(null);
  const projectFour = useRef(null);
  const details = useRef(null);

  const t = translations[language];

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      if (section.current) {
        sectionObserver.observe(section.current);
      }
    });

    if (intro.current) {
      indicatorObserver.observe(intro.current);
    }

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title={t.title}
        description={t.description}
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title={t.projectOneTitle}
        description={t.projectOneDescription}
        buttonText={t.projectOneButtonText}
        buttonLink="https://www.bstrust369.com/"
        model={{
          type: 'laptop',
          alt: 'Displaying the home page of the website.',
          textures: [
            {
              srcSet: [hmsPreview, hmsPreview],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title={t.projectTwoTitle}
        description={t.projectTwoDescription}
        buttonText={t.projectTwoButtonText}
        buttonLink="/projects/smart-sparrow/"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [stockDash],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [stockDash2],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title={t.projectThreeTitle}
        description={t.projectThreeDescription}
        buttonText={t.projectThreeButtonText}
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Visual description of the pipeline workflow',
          textures: [
            {
              srcSet: [cicd],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
