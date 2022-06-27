import React from 'react';
/* components */
import { InputForm } from '../../../common/atoms/InputForm';
import { FiSearch } from 'react-icons/fi';
/* types */
import { EventType } from '../../../../types/Event';
/* styles */
import styles from './styles.module.scss';

/**
 * props
 */
export type SearchInputFormProps = {
  text: string;
  placeholder: string;
  size?: number;
  onChange: EventType['onChange'];
  onKeyUp?: EventType['onkeypress'];
  onClick?: () => void;
};

export const SearchInputForm: React.FC<SearchInputFormProps> = (
  props: SearchInputFormProps
) => {
  /* props */
  const { text, placeholder, size, onChange, onKeyUp, onClick } = props;

  return (
    <div className={styles.container}>
      <InputForm
        text={text}
        placeholder={placeholder}
        onChange={onChange}
        onKeyUp={onKeyUp}
        onClick={onClick}
      />
      <div className={styles.icon}>
        <FiSearch size={size} />
      </div>
    </div>
  );
};
