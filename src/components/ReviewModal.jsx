import { connect } from "react-redux";
import { GrFormClose } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";

function ReviewModal({ dispatch, reviewModal, words }) {
  const closeModal = () => {
    dispatch({
      type: "REVIEW_MODAL",
      payload: !reviewModal,
    });
  };
  return (
    <div className="review_modal_bg" onClick={closeModal}>
      <AnimatePresence>
        <motion.div
          initial={{
            scale: 0.7,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: 0.7,
            opacity: 0,
          }}
          className="review_modal"
          onClick={(e) => e.stopPropagation()}
        >
          <img src="./xari-bulbul/data/homeImages/left_top.png" alt="" />
          <h2>{words.thank}</h2>
          <GrFormClose onClick={closeModal} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const t = (a) => a;
export default connect(t)(ReviewModal);
