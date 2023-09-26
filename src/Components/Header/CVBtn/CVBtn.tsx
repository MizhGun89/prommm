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
      setIsVisible(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    let timeoutId: number;
    if (!isHovered) {
      timeoutId = window.setTimeout(() => {
        setIsVisible(false);
      }, 300);
    } else {
      setIsVisible(true);
    }

    return () => {
      window.clearTimeout(timeoutId);
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
        setIsHovered(false);
      }}
      onClick={openLinkInNewWindow}
    >
      <FileDownloadIcon className="btn-icon" /> {isVisible && 'Скачать резюме'}
    </Button>
  );
}
