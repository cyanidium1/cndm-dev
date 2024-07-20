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

const disciplines = ['Web Dev', 'Web Design', 'App Dev.'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef(null);
  const projectOne = useRef(null);
  const projectTwo = useRef(null);
  const projectThree = useRef(null);
  const projectFour = useRef(null);
  const details = useRef(null);

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
        title="Designer + Developer"
        description="Design portfolio of CNDM Dev — a product designer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
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
        title="Создаю сайты которые приносят деньги"
        description="Помогу вывести любой бизнес на новый уровень с использованием самых современных технологий и user-friendly дизайна."
        buttonText="Посмотреть мой проект для крупного агентсва недвижимости"
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
        title="Сайты которые одинаково хорошо смотрятся на любых экранах и устройствах"
        description="Обратившись ко мне вы можете не переживать что потеряете клиента из-за того что сайт не будет работать на каком-то устройстве."
        buttonText="Посмотреть сайт"
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
        title="От простого лендинга до сложных интернет магазинов"
        description="Берусь за любую сложность проекта. Хотите одностраничник-визитку с красивым дизайном, анимацией и мультиязычностью - пожалуйста! Хотите маркетплейс с базой данных товаров, админ-панелью и автоматическими продажами? Не вопрос :)"
        buttonText="Проект ресторана домашней кухни"
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
      {/* <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Stocks Dashboard"
        description="A dashboard to display some of the top performing stocks in the Indian market"
        buttonText="View website"
        buttonLink="http://stock-dashboard.kiitians.com/"
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
      /> */}
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
