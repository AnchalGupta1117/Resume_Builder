import React from "react"
import { modalStyles as styles } from "../assets/dummystyle"
import { X } from "lucide-react"

const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  hideHeader,
  showActionBtn,
  actionBtnIcon = null,
  actionBtnText,
  onActionClick = () => {},
}) => {
  if (!isOpen) return null

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        {/* Close Button */}
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {/* Header */}
        {!hideHeader && (
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
            {showActionBtn && (
              <button className={styles.actionButton} onClick={onActionClick}>
                {actionBtnIcon}
                {actionBtnText}
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  )
}

export default Modal

// const Modal = ({
//     children, isOpen,onClose,title,hideHeader,showActionBtn,actionBtnIcon=null,actionBtnText,onActionClick=()=>{ }
// }) => {
//     if(!isOpen) return null;
//   return (
//     <div className={styles.overlay}>
//         <div className={styles.modalContainer +" flex items-center justify-center min-h-screen"}>
//             {!hideHeader && (
//                 <div className={styles.header}>
//                     <h3 className={styles.title}>{title}</h3>
//                     {showActionBtn && (
//                         <button className={styles.actionButton} onClick={onActionClick}>
//                             {actionBtnIcon}
//                             {actionBtnText}
//                         </button>
//                     )}
//                 </div>
//             )}
//         </div>
//         <button type='button' className={styles.closeButton} onClick={onClose}>
//             <X size={20}    />
//         </button>
//         <div className={styles.body}>{children}</div>
//     </div>
//   )
// }
