import React from 'react';
import { useTranslation } from "react-i18next";
import "../../i18n";
import styles from './CV.module.css';

// TODO: Extract common components. For example for the left column title rated skills blocks and the right column rows with bullets. 
export function CV() {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <div className={styles.firstName}>{t('contact.firstname')}</div>
                <div className={styles.lastName}>{t('contact.lastname')}</div>
                <div className={styles.content}>{t('contact.title')}</div>
                <div className={styles.titleRibbon}>{t('ribbon.contact')}</div>
                <div className={styles.contentTitle}>{t('contact.addressTitle')}</div>
                <div className={styles.content}>{t('contact.address1')}</div>
                <div className={styles.content}>{t('contact.address2')}</div>
                <div className={styles.contentTitle}>{t('contact.phoneTitle')}</div>
                <div className={styles.content}>{t('contact.phone')}</div>
                <div className={styles.contentTitle}>{t('contact.emailTitle')}</div>
                <div className={styles.content}>{t('contact.email')}</div>
                <div className={styles.contentTitle}>{t('contact.linkedInTitle')}</div>
                <div className={styles.contentBreak}><a href={t('contact.linkedIn')}>{t('contact.linkedIn')}</a></div>
                <div className={styles.titleRibbon}>{t('ribbon.languages')}</div>
                <div className={styles.ratedContentContainer}>
                    <div className={styles.contentTitle}>{t('languages.language2')}</div>
                    <div className={styles.contentLeftSectionRating}>
                        <div className={styles.content}>{t('ratings.fiveStars')}</div>
                        <div className={styles.smallContent}>{t('ratings.fiveStarsDescription')}</div>
                    </div>
                </div>
                <div className={styles.ratedContentContainerWithTopSpacing}>
                    <div className={styles.contentTitle}>{t('languages.language1')}</div>
                    <div className={styles.contentLeftSectionRating}>
                        <div className={styles.content}>{t('ratings.fourStars')}</div>
                        <div className={styles.smallContent}>{t('ratings.fourStarsDescription')}</div>
                    </div>
                </div>
                <div className={styles.titleRibbon}>{t('ribbon.skills')}</div>
                <div className={styles.ratedContentContainer}>
                    <div className={styles.smallContent}>{t('skills.skill1')}</div>
                    <div className={styles.contentLeftSectionRating}>
                        <div className={styles.content}>{t('ratings.fourStars')}</div>
                        <div className={styles.smallContent}>{t('ratings.fourStarsDescription')}</div>
                    </div>
                </div>
                <div className={styles.ratedContentContainerWithTopSpacing}>
                    <div className={styles.smallContent}>{t('skills.skill2')}</div>
                    <div className={styles.contentLeftSectionRating}>
                        <div className={styles.content}>{t('ratings.fourStars')}</div>
                        <div className={styles.smallContent}>{t('ratings.fourStarsDescription')}</div>
                    </div>
                </div>
                <div className={styles.ratedContentContainerWithTopSpacing}>
                    <div className={styles.smallContent}>{t('skills.skill3')}</div>
                    <div className={styles.contentLeftSectionRating}>
                        <div className={styles.content}>{t('ratings.fourStars')}</div>
                        <div className={styles.smallContent}>{t('ratings.fourStarsDescription')}</div>
                    </div>
                </div>
                <div className={styles.ratedContentContainerWithTopSpacing}>
                    <div className={styles.smallContent}>{t('skills.skill4')}</div>
                    <div className={styles.contentLeftSectionRating}>
                        <div className={styles.content}>{t('ratings.threeStars')}</div>
                        <div className={styles.smallContent}>{t('ratings.threeStarsDescription')}</div>
                    </div>
                </div>
                <div className={styles.ratedContentContainerWithTopSpacing}>
                    <div className={styles.smallContent}>{t('skills.skill5')}</div>
                    <div className={styles.contentLeftSectionRating}>
                        <div className={styles.content}>{t('ratings.threeStars')}</div>
                        <div className={styles.smallContent}>{t('ratings.threeStarsDescription')}</div>
                    </div>
                </div>
                <div className={styles.titleRibbon}>{t('ribbon.softwares')}</div>
                <div className={styles.ratedContentContainerWithTopSpacing}>
                    <div className={styles.smallContent}>{t('softwares.software')}</div>
                    <div className={styles.contentLeftSectionRating}>
                        <div className={styles.content}>{t('ratings.fourStars')}</div>
                        <div className={styles.smallContent}>{t('ratings.fourStarsDescription')}</div>
                    </div>
                </div>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.smallContentPadded}>{t('contentRight.topDescription')} <a href="https://github.com/alexandre-poirier/react-redux-CV">https://github.com/alexandre-poirier/react-redux-CV</a></div>
                <div className={styles.titleSeparators}>{t('contentRight.workHistoryTitle')}</div>
                <div className={styles.rightTable}>
                    <div className={styles.rightTableRow}>
                        <div className={styles.leftColumn}>{t('contentRight.date1')}</div>
                        <div className={styles.rightColumn}>
                            <div className={styles.contentTitle}>{t('contentRight.workTitle1')}</div>
                            <div className={styles.italicTitle}>{t('contentRight.workItalicTitle1')}</div>
                            <ul className={styles.smallContent}>
                                <li>{t('contentRight.work1Item1')}</li>
                                <li>{t('contentRight.work1Item2')}</li>
                                <li>{t('contentRight.work1Item3')}</li>
                                <li>{t('contentRight.work1Item4')}</li>
                                <li>{t('contentRight.work1Item5')}</li>
                                <li>{t('contentRight.work1Item6')}</li>
                                <li>{t('contentRight.work1Item7')}</li>
                                <li>{t('contentRight.work1Item8')}</li>

                            </ul>
                        </div>
                    </div>
                    <div className={styles.rightTableRow}>
                        <div className={styles.leftColumn}>{t('contentRight.date2')}</div>
                        <div className={styles.rightColumn}>
                            <div className={styles.contentTitle}>{t('contentRight.workTitle2')}</div>
                            <div className={styles.italicTitle}>{t('contentRight.workItalicTitle2')}</div>
                            <ul className={styles.smallContent}>
                                <li>{t('contentRight.work2Item1')}</li>
                                <li>{t('contentRight.work2Item2')}</li>
                                <li>{t('contentRight.work2Item3')}</li>
                                <li>{t('contentRight.work2Item4')}</li>
                                <li>{t('contentRight.work2Item5')}</li>
                                <li>{t('contentRight.work2Item6')}</li>
                                <li>{t('contentRight.work2Item7')}</li>
                                <li>{t('contentRight.work2Item8')}</li>

                            </ul>
                        </div>
                    </div>
                    <div className={styles.rightTableRow}>
                        <div className={styles.leftColumn}>{t('contentRight.date3')}</div>
                        <div className={styles.rightColumn}>
                            <div className={styles.contentTitle}>{t('contentRight.workTitle3')}</div>
                            <div className={styles.italicTitle}>{t('contentRight.workItalicTitle3')}</div>
                            <ul className={styles.smallContent}>
                                <li>{t('contentRight.work3Item1')}</li>
                                <li>{t('contentRight.work3Item2')}</li>
                                <li>{t('contentRight.work3Item3')}</li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.titleSeparators}>{t('contentRight.educationSectionTitle')}</div>
                <div className={styles.rightTable}>
                    <div className={styles.rightTableRow}>
                        <div className={styles.leftColumn}>{t('contentRight.date4')}</div>
                        <div className={styles.rightColumn}>
                            <div className={styles.contentTitle}>{t('contentRight.educationTitle1')}</div>
                            <div className={styles.italicTitle}>{t('contentRight.educationItalicTitle1')}</div>
                        </div>
                    </div>
                    <div className={styles.rightTableRow}>
                        <div className={styles.leftColumn}>{t('contentRight.date5')}</div>
                        <div className={styles.rightColumn}>
                            <div className={styles.contentTitle}>{t('contentRight.educationTitle2')}</div>
                            <div className={styles.italicTitle}>{t('contentRight.educationItalicTitle2')}</div>
                            <div className={styles.smallContent}>{t('contentRight.educationTitle2Description')}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.titleSeparators}>{t('contentRight.freelanceProjectTitle')} <a href="https://assurancespierreleduc.com/">https://assurancespierreleduc.com/</a></div>
                <div className={styles.smallContentPadded}>{t('contentRight.freeLanceProject')}</div>
            </div>
        </div >
    );
}