import React, { useContext } from 'react';
import Image from 'next/image';
/* components */
import { BasicAsidePartsArea } from '../BasicAsidePartsArea';
import { AiFillGithub } from 'react-icons/ai';
/* contexts */
import AppContext from '../../../../contexts/AppContext';

/* styles */
import styles from './styles.module.scss';

/**
 * ProfileArea
 * @returns
 */
export const ProfileArea: React.FC = () => {
  /* contexts */
  const { state } = useContext(AppContext);
  const profile = state.profileItem.profile
    ? state.profileItem.profile.contents[0]
    : null;

  return (
    <BasicAsidePartsArea title="プロフィール">
      {profile && profile.id !== '' && (
        <div className={styles.container}>
          {/* アバター */}
          <div className={styles.image}>
            <Image
              className={styles.image__pic}
              src={profile.userImage.url}
              alt="Picture"
              width={profile.userImage.width}
              height={profile.userImage.height}
            />
          </div>
          <hr className={styles.border} />

          {/* プロフィール */}
          <div className={styles.profile}>
            <p className={styles.profile__name}>{profile.name}</p>
            <p className={styles.profile__eng_name}>{profile.englishName}</p>
            <p className={styles.profile__position}>{profile.position}</p>
          </div>

          {/* SNSアイコンボタン */}
          <ul className={styles.sns}>
            <li className={styles.sns__icon}>
              <a
                target="_blank"
                href={profile.github}
                rel="noopener noreferrer"
              >
                <AiFillGithub size={48} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </BasicAsidePartsArea>
  );
};
