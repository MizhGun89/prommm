import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import cv from '../../../assets/pdf/cv.pdf';

export function CVBtn() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleResize = (): void => {
    if (window.innerWidth < 600) {
      setIsHovered(true);
      setIsVisible(true);
    } else {
      setIsVisible(false);
      // setIsHovered(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    if (!isHovered) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isHovered]);

  const openLinkInNewWindow = (): void => {
    window.setTimeout(() => {
      window.open(cv, '_blank');
    }, 500);
  };

  return (
    <Button
      variant="outlined"
      className="Button cvBtn"
      size="small"
      color="secondary"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setIsHovered(false);
        }, 300);
      }}
      onClick={openLinkInNewWindow}
    >
      <FileDownloadIcon className="btn-icon" /> {isVisible && 'Скачать резюме'}
    </Button>
  );
}
