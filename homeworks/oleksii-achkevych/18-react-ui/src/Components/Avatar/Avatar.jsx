import React, { useState } from 'react';
import styles from './Avatar.module.css'; 

const Avatar = ({ avatarUrl, refreshAvatar }) => {
    const [showRefreshIcon, setShowRefreshIcon] = useState(false);
  
    return (
        <div className={styles.avatar} onMouseEnter={() => setShowRefreshIcon(true)} onMouseLeave={() => setShowRefreshIcon(false)}>
          <img onClick={refreshAvatar} src={avatarUrl} alt="avatar" />
          {showRefreshIcon && (
            <div onClick={refreshAvatar} className={styles.refresh_overlay}>
              <img className={styles.refresh_icon} src="refresh.png" alt="refresh" />
            </div>
          )}
        </div>
      );
    };
    
export default Avatar;
