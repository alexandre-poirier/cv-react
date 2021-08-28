import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import React from 'react';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        // lng: 'fr',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    ribbon: {
                        contact: 'Contact',
                        languages: 'Languages',
                        skills: 'Skills',
                        softwares: 'Softwares'
                    },
                    contact: {
                        firstname: 'Alexandre',
                        lastname: 'Poirier',
                        title: 'Developer',
                        emailTitle: 'Email',
                        email: 'alex481poirier@hotmail.com',
                        linkedInTitle: 'LinkedIn',
                        linkedIn: 'https://www.linkedin.com/in/profilalexandrepoirier',
                    },
                    languages: {
                        language1: 'English',
                        language2: 'French',
                    },
                    ratings: {
                        oneStarDescription: 'poor',
                        twoStarsDescription: 'average',
                        threeStarsDescription: 'good',
                        fourStarsDescription: 'very good',
                        fiveStarsDescription: 'excellent',
                        oneStar: '★☆☆☆☆',
                        twoStars: '★★☆☆☆',
                        threeStars: '★★★☆☆',
                        fourStars: '★★★★☆',
                        fiveStars: '★★★★★',
                    },
                    skills: {
                        skill1: 'GraphQL, Nexus and Prisma ORM',
                        skill2: 'Java, GWT, D3.js, Node.js and express.js',
                        skill3: 'DevOps and development process automation',
                        skill4: 'PostgreSQL and MySQL RDBMS',
                        skill5: 'Drupal and Worpress web integration',
                    },
                    softwares: {
                        software: 'Visual Studio Code, Git and Jira',
                    },
                    contentRight: {
                        topDescription: 'Self-motivated, bilingual, Web Developer with 5 years of experience in cloud-based web development. Adaptable, diligent and experienced in TypeScript, Java and fullstack web development. Note: The source code of this react.js, web-based resume can be found on my Github page here: ',
                        workHistoryTitle: 'Work History',
                        workTitle1: 'Backend Developer',
                        date1: '2020-08 – Current',
                        date2: '2016-01 – 2020-03',
                        date3: '2013-05 - 2013-08',
                        date4: '2011-08 - 2017-04',
                        date5: '2009-09 - 2010-12',
                        workItalicTitle1: 'Usewalter, Montréal, Québec',
                        work1Item1: 'Fixed some issues in our react.js web frontends web applications.',
                        work1Item2: 'Worked on refactoring and maintained the code base used to do third party data integrations.',
                        work1Item3: 'Added 2 new third party data provider integrations to the backend.',
                        work1Item4: 'Added missing configuration panels in our frontend web application in relation to third party configurations.',
                        work1Item5: 'Worked on upgrading our ORM called prisma js from version 1 to version 2. Also worked on implementing GraphQL queries and mutations using nexus framework.',
                        work1Item6: 'Worked on adding typing and updating the backend\'s code base to transition from using JavaScript into using TypeScript.',
                        work1Item7: 'Helped improve the automated test coverage of the backend using mocha, sinon and chaijs.',
                        work1Item8: 'Monitored the health status of our third party integrations through monitoring and logging tools such as datadog and Google Cloud\s kubernetes logs.',
                        workTitle2: 'Developer',
                        workItalicTitle2: 'SuccessFinder, Montréal, Québec',
                        work2Item1: 'Developed and worked on over 5 complex configuration panels and more than 10 interactive sections in 2 front-end applications.',
                        work2Item2: 'Worked on web page responsiveness and improved mobile display of 2 front-end applications.',
                        work2Item3: 'Worked on 1 report printing back-end microservice.',
                        work2Item4: 'Contributed to 3 major programming language version upgrade and integrated 1 new web framework in 1 back-end application.',
                        work2Item5: 'Created 1 localhost development utility script and 1 deployment automation utility script.',
                        work2Item6: 'Used 2 static and dynamic code scan tools and produced over 10 performance analysis reports using 2 specialized performance metric tools. Also monitored and helped resolve more than 10 incidents reported by cloud platform logs.',
                        work2Item7: 'Maintained source code repository branches up to date.',
                        work2Item8: 'Did full stack development of 2 new report features.',
                        workTitle3: 'Systems Developer',
                        workItalicTitle3: 'Standard Life, Montréal, Québec',
                        work3Item1: 'Developed and worked on over 5 complex configuration panels and more than 10 interactive sections in 2 front-end applications.',
                        work3Item2: 'Worked on web page responsiveness and improved mobile display of 2 front-end applications.',
                        work3Item3: 'Worked on 1 report printing back-end microservice.',
                        educationSectionTitle: 'Education',
                        educationTitle1: 'Bachelor of Science: Computer Science And Software Engineering',
                        educationItalicTitle1: 'Université Du Québec À Montréal - Montréal',
                        educationTitle2: 'Bachelor of Science: Actuarial Science',
                        educationItalicTitle2: 'Université Du Québec À Montréal - Montréal',
                        educationTitle2Description: 'I\'ve changed program after 3 sessions in 2011.',
                        freelanceProjectTitle: 'Freelance project - ',
                        freeLanceProject: 'Built and currently maintaining a commercial web portal for an insurance broker. This project has so far involved deploying a drupal CMS, installing and customizing the appearance of a paid third-party web template and connecting a custom domain with the website and a professional email. The website has since been changed to use Wordpress CMS with a new template.'
                    }
                }
            },
            fr: {
                translation: {
                    ribbon: {
                        contact: 'Contact',
                        languages: 'Langues',
                        skills: 'Compétences',
                        softwares: 'Logiciels'
                    },
                    contact: {
                        firstname: 'Alexandre',
                        lastname: 'Poirier',
                        title: 'Développeur',
                        emailTitle: 'Courriel',
                        email: 'alex481poirier@hotmail.com',
                        linkedInTitle: 'LinkedIn',
                        linkedIn: 'https://www.linkedin.com/in/profilalexandrepoirier',
                    },
                    languages: {
                        language1: 'Anglais',
                        language2: 'Français',
                        oneStar: '★☆☆☆☆',
                        twoStars: '★★☆☆☆',
                        threeStars: '★★★☆☆',
                        fourStars: '★★★★☆',
                        fiveStars: '★★★★★',
                    },
                    ratings: {
                        oneStarDescription: 'pauvre',
                        twoStarsDescription: 'moyen',
                        threeStarsDescription: 'bien',
                        fourStarsDescription: 'très bien',
                        fiveStarsDescription: 'excellent',
                        oneStar: '★☆☆☆☆',
                        twoStars: '★★☆☆☆',
                        threeStars: '★★★☆☆',
                        fourStars: '★★★★☆',
                        fiveStars: '★★★★★',
                    },
                    skills: {
                        skill1: 'GraphQL, Nexus et Prisma ORM',
                        skill2: 'Java, GWT, D3.js, Node.js et express.js',
                        skill3: 'DevOps et automatisation de procédés de développement',
                        skill4: 'PostgreSQL et MySQL RDBMS',
                        skill5: 'Intégrations web en Drupal et Worpress',
                    },
                    softwares: {
                        software: 'Visual Studio Code, Git et Jira',
                    },
                    contentRight: {
                        topDescription: 'Développeur Web motivé, bilingue et avec 5 ans d\'expérience dans le développement Web basé sur le cloud. Flexible, assidu et possédant de l’expérience en TypeScript, Java et développement web fullstack. Note: Le code source de ce CV web construit à l\'aide de react.js se retrouve sur ma page Github: ',
                        workHistoryTitle: 'Historique de travail',
                        date1: '2020-08 – à ce jour',
                        date2: '2016-01 – 2020-03',
                        date3: '2013-05 - 2013-08',
                        date4: '2011-08 - 2017-04',
                        date5: '2009-09 - 2010-12',
                        workTitle1: 'Développeur Backend',
                        workItalicTitle1: 'Usewalter, Montréal, Québec',
                        work1Item1: 'Correction de quelques problèmes dans nos applications web frontends react.js.',
                        work1Item2: 'Refactorisation et maintenance de la base de code utilisée pour faire des intégrations de données tierces.',
                        work1Item3: 'Ajout de 2 nouvelles intégrations de fournisseurs de données tiers au backend.',
                        work1Item4: 'Ajout de panneaux de configuration manquants dans notre application Web frontale en relation avec les configurations tierces.',
                        work1Item5: 'Mise à niveau de notre ORM appelé prisma js de la version 1 à la version 2. J\'ai aussi travaillé à l\'implémentation de requêtes et mutations GraphQL à l\'aide du framework nexus.',
                        work1Item6: 'Travail sur le typage et la mise à jour de la base de code du backend pour passer de l\'utilisation de JavaScript à l\'utilisation de TypeScript.',
                        work1Item7: 'Aide pour l’amélioration des tests automatisés du backend en utilisant mocha, sinon et chaijs.',
                        work1Item8: 'Surveillance de l’état de santé de nos intégrations tierces grâce à des outils de surveillance et de journalisation tels que datadog et les journaux kubernetes de Google Cloud.',
                        workTitle2: 'Développeur',
                        workItalicTitle2: 'SuccessFinder, Montréal, Québec',
                        work2Item1: 'Développement et travail sur plus de 5 panneaux de configuration complexes et plus de 10 sections interactives dans 2 applications web frontend.',
                        work2Item2: 'Travail sur la réactivité et amélioration de l’affichage mobile de 2 applications web frontend.',
                        work2Item3: 'Contribution à 3 mises à niveau majeure de langage de programmation et intégration d’un nouveau Framework web dans 1 application backend.',
                        work2Item4: 'Création d’un script utilitaire de développement local et et d’un script utilitaire d\'automatisation de déploiement.',
                        work2Item5: 'Utilisation de 2 outils d’analyse de code statiques et dynamiques et production de plus de 10 rapports d\'analyse de performance à l\'aide de 2 outils d\'analyse de performance spécialisés.',
                        work2Item6: 'Surveillance et aide à résoudre plus de 10 incidents signalés par les journaux de la plate-forme cloud.',
                        work2Item7: 'Maintenance des branches de dépôt de code source à jour.',
                        work2Item8: 'A fait le développement « full stack » de 2 nouvelles fonctionnalités de rapport.',
                        workTitle3: 'Développeur systèmes',
                        workItalicTitle3: 'Standard Life, Montréal, Québec',
                        work3Item1: 'Travail sur 1 application intranet écrite en Java, JavaScript, HTML et XML utilisée ayant pour but de centraliser les informations connues sur les outils, les serveurs et les équipes de support.',
                        work3Item2: 'Création d’une application générique écrite en Java, XML et SQL afin d’extraire des données de feuilles Excel et afin de les insérer dans des bases de données SQL.',
                        work3Item3: 'Aide à migrer plus de 200 applications de Windows XP à Windows 7 en catégorisant les problèmes, en recherchant des solutions simples, en faisant des tests moi-même sur les outils de développeur et en aidant les testeurs qui avaient des difficultés avec leur plan de test.',
                        educationSectionTitle: 'Études',
                        educationTitle1: 'Baccalauréat en informatique et génie logiciel',
                        educationItalicTitle1: 'Université Du Québec À Montréal - Montréal',
                        educationTitle2: 'Baccalauréat en actuariat',
                        educationItalicTitle2: 'Université Du Québec À Montréal - Montréal',
                        educationTitle2Description: 'Changement de programme après trois sessions en 2011.',
                        freelanceProjectTitle: 'Projet indépendant - ',
                        freeLanceProject: 'Construction et maintenances d’un portail Web commercial pour un courtier d\'assurance. Ce projet a jusqu\'à présent consisté à déployer un CMS Drupal, à installer, à personnaliser l\'apparence d\'un modèle Web payant et à connecter un domaine personnalisé avec le site Web et un courriel professionnel. Le site a depuis été refait en Wordpress avec un nouveau template.'
                    }
                }
            }
        }
    });

export default i18n;