import styles from './style.module.scss';
import { translate } from '../../anim';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Diseño inspirado en:</span> nareshkhatri.dev
        </motion.li>
      </ul>
    </div>
  );
}
