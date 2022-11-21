import React, { useState } from 'react';
import styles from './Pageheader.module.css';
import { Dropdown, Button } from '../../../../shared/ui';
import { useTheme } from '../../../../shared/utils/useTheme';

export function Pageheader({ title }) {
  const [isChangeThemeOpen, setIsChangeThemeOpen] = useState(false);
  const { isLight, toggleTheme } = useTheme();

  const handleClickOpen = (bool) => setIsChangeThemeOpen(!bool);

  const handleClickChangeTheme = () => {
    toggleTheme();
    handleClickOpen();
  };

  return (
    <div className={styles._}>
      <h1 className={styles.title}>{title}</h1>
      <div>
        <Dropdown
          isOpen={isChangeThemeOpen}
          setOpen={handleClickOpen}
          trigger={
            <Button
              size="medium"
              color="reversePrimary"
              iconType={isLight ? 'Sun' : 'Moon'}
            >
              {isLight ? 'Светлая тема' : 'Темная тема'}
            </Button>
          }
          overlay={
            <>
              <span>Выберите тему</span>
              <Button
                color={isLight ? 'primary' : 'reversePrimary'}
                size="small"
                maxWidth
                iconType="Sun"
                onClick={handleClickChangeTheme}
              >
                Светлая
              </Button>
              <Button
                color={isLight ? 'reversePrimary' : 'primary'}
                size="small"
                maxWidth
                iconType="Moon"
                onClick={handleClickChangeTheme}
              >
                Темная
              </Button>
            </>
          }
        />
      </div>
    </div>
  );
}
