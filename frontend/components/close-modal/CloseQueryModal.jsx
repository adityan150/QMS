import styles from "./CloseQueryModal.module.scss";

import CloseQueryForm from "./CloseQueryForm";
import { useEffect } from "react";

export default function CloseQueryModal({ closeModal, data }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  });

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3>Closing a query</h3>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.queryDetails}>
            <span className={styles.attribute}>Query ID :</span>
            <span className={styles.value}>{data.qid}</span>

            <span className={styles.attribute}>Category :</span>
            <span className={styles.value}>{data.type}</span>

            <span className={styles.attribute}>Subject :</span>
            <span className={styles.value}>{data.subject}</span>

            <span className={styles.attribute}>Created On :</span>
            <span className={styles.value}>{data.date}</span>

            <span className={styles.attribute}>Resolve By :</span>
            <span className={styles.value}>{data.resolveBy}</span>
          </div>
          <CloseQueryForm closeModal={closeModal} data={data} />
        </div>
      </div>
    </div>
  );
}
