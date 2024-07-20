import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from 'assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/spr-background-volcanism.jpg';
import backgroundSpr from 'assets/spr-background.jpg';

import main from 'assets/gr3dmain.png'

import imageSprComponentsDarkPlaceholder from 'assets/spr-components-dark-placeholder.png';
import imageSprComponentsDark from 'assets/Gr3DMainDark.png';
import imageSprComponentsLightPlaceholder from 'assets/spr-components-light-placeholder.png';
import imageSprComponentsLight from 'assets/Gr3DMainLight.png';
import imageSprDesignSystemDarkPlaceholder from 'assets/spr-design-system-dark-placeholder.png';
import imageSprDesignSystemDark from 'assets/Gr3DContactDark.png';
import imageSprDesignSystemLightPlaceholder from 'assets/spr-design-system-light-placeholder.png';
import imageSprDesignSystemLight from 'assets/Gr3DContactLight.png';
import imageSprLessonBuilderDarkPlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from 'assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from 'assets/spr-lesson-builder-light.jpg';
import videoSprMotionPlaceholder from 'assets/spr-motion-placeholder.jpg';
import videoSprMotion from 'assets/spr-motion.mp4';

import adminMobile from 'assets/gr3dadminMob.png'
import siteMobile from 'assets/gr3dmainMob.png'

// import imageSprSchema1DarkLarge from 'assets/spr-schema-1-dark-large.png';
// import imageSprSchema1DarkPlaceholder from 'assets/spr-schema-1-dark-placeholder.png';
// import imageSprSchema1Dark from 'assets/spr-schema-1-dark.png';
// import imageSprSchema1LightLarge from 'assets/spr-schema-1-light-large.png';
// import imageSprSchema1LightPlaceholder from 'assets/spr-schema-1-light-placeholder.png';
// import imageSprSchema1Light from 'assets/spr-schema-1-light.png';
// import imageSprSchema2DarkLarge from 'assets/spr-schema-2-dark-large.png';
// import imageSprSchema2DarkPlaceholder from 'assets/spr-schema-2-dark-placeholder.png';
// import imageSprSchema2Dark from 'assets/spr-schema-2-dark.png';
// import imageSprSchema2LightLarge from 'assets/spr-schema-2-light-large.png';
// import imageSprSchema2LightPlaceholder from 'assets/spr-schema-2-light-placeholder.png';
// import imageSprSchema2Light from 'assets/spr-schema-2-light.png';
import imageSprStoryboarderDarkLarge from 'assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from 'assets/spr-storyboarder-dark-placeholder.png';

import adminPanel from 'assets/gr3dadmin.png'

// import imageSprStoryboarderDark from 'assets/spr-storyboarder-dark.png';
// import imageSprStoryboarderLightLarge from 'assets/spr-storyboarder-light-large.png';
// import imageSprStoryboarderLightPlaceholder from 'assets/spr-storyboarder-light-placeholder.png';
// import imageSprStoryboarderLight from 'assets/spr-storyboarder-light.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import dynamic from 'next/dynamic';
import { Fragment, useMemo } from 'react';
import { media } from 'utils/style';
import styles from './SmartSparrow.module.css';

const Earth = dynamic(() => import('./Earth').then(mod => mod.Earth));
const EarthSection = dynamic(() => import('./Earth').then(mod => mod.EarthSection));

const title = 'Добро пожаловать на Graph3D';
const description =
  'Graph3D — это сайт-портфолио 3D-визуализатора, специализирующегося на дизайне интерьеров. Здесь представлены работы и услуги автора, демонстрирующие его мастерство и творческий подход.';
const roles = [
  '3D Визуализация',
  'Дизайн интерьера',
  'Создание портфолио',
  'Консультации',
];

export const SmartSparrow = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Проекты" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.graph3d.pro/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [main, main]
                  : [main, main]
              }
              placeholder={
                isDark
                  ? main
                  : main
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Основной экран Graph3D с 3D-визуализацией."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>О Graph3D</ProjectSectionHeading>
            <ProjectSectionText>
              Graph3D — это сайт-портфолио 3D-визуализатора, который создает высококачественные дизайны интерьеров. Здесь вы можете увидеть его работы и услуги, которые он предлагает, включая создание 3D-визуализаций, дизайн интерьеров и консультации.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprComponentsDark, imageSprComponentsDark]
                  : [imageSprComponentsLight, imageSprComponentsLight]
              }
              placeholder={
                isDark
                  ? imageSprComponentsDarkPlaceholder
                  : imageSprComponentsLightPlaceholder
              }
              alt={`Набор компонентов в ${themeId} теме для дизайна Graph3D`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(themeId)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Темная тема</SegmentedControlOption>
                <SegmentedControlOption>Светлая тема</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>Наш дизайн-система</ProjectSectionHeading>
              <ProjectSectionText>
                Для обеспечения согласованности и эффективности в наших проектах мы разработали комплексную дизайн-систему. Эта система упрощает сотрудничество между нашими дизайнерами и разработчиками, обеспечивая целостный пользовательский опыт.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprDesignSystemDark, imageSprDesignSystemDark]
                  : [imageSprDesignSystemLight, imageSprDesignSystemLight]
              }
              placeholder={
                isDark
                  ? imageSprDesignSystemDarkPlaceholder
                  : imageSprDesignSystemLightPlaceholder
              }
              alt="Главная страница документации дизайн-системы Graph3D."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Документация дизайн-системы</ProjectSectionHeading>
              <ProjectSectionText>
                Документация нашей дизайн-системы предоставляет подробные руководства по принципам, UX, доступности и использованию компонентов. Этот ресурс необходим нашей команде для поддержания высокого уровня дизайна и разработки.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider themeId="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={[imageSprBackgroundVolcanism, imageSprBackgroundVolcanismLarge]}
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt="Драматическая океаническая сцена с лавой, образующей новую землю."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Анимация</ProjectSectionHeading>
                  <ProjectSectionText>
                    Анимация играет ключевую роль в создании интуитивного и привлекательного пользовательского интерфейса на нашем сайте. Для творческого портфолио важно иметь впечатляющие анимации, подчеркивающие изысканность услуг и демонстрирующие высокий уровень мастерства.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={[
                  { src: videoSprMotion, width: 1280 },
                  { src: videoSprMotion, width: 2560 },
                ]}
                placeholder={videoSprMotionPlaceholder}
                alt="Пользователь взаимодействует с платформой Graph3D для визуализации данных."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Инструменты для сотрудничества</ProjectSectionHeading>
              <ProjectSectionText>
                Наша платформа способствует сотрудничеству, предоставляя инструменты, позволяющие пользователям совместно визуализировать и анализировать данные. Эта функция особенно полезна для команд, позволяя работать более эффективно и принимать обоснованные решения.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [adminPanel, adminPanel]
                  : [adminPanel, adminPanel]
              }
              placeholder={
                isDark
                  ? adminPanel
                  : adminPanel
              }
              alt="Инструменты для сотрудничества на платформе Graph3D."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>
                  Настраиваемые плагины
                </ProjectSectionHeading>
                <ProjectSectionText>
                  Наша платформа поддерживает широкий спектр настраиваемых плагинов, позволяя пользователям расширять функциональность и адаптировать платформу под свои специфические нужды. Эта гибкость делает Graph3D универсальным инструментом для различных отраслей.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={
                  isDark
                    ? [adminMobile, adminMobile]
                    : [adminMobile, adminMobile]
                }
                placeholder={
                  isDark
                    ? adminMobile
                    : adminMobile
                }
                alt="Настройки плагина на мобильной версии."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={
                  isDark
                    ? [siteMobile, siteMobile]
                    : [siteMobile, siteMobile]
                }
                placeholder={
                  isDark
                    ? siteMobile
                    : siteMobile
                }
                alt="Настройки текстовых компонентов."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
