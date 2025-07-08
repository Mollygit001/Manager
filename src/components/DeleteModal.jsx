import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

const DeleteModal = ({ taskTitle, onConfirm, onCancel }) => {
  return ReactDOM.createPortal(
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="max-w-md mx-4 neo-card">
        <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
          DELETE TASK?
        </h3>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Are you sure you want to delete "{taskTitle}"? This action cannot be undone.
        </p>
        <div className="flex space-x-4">
          <motion.button
            onClick={onConfirm}
            className="flex-1 text-white bg-red-500 neo-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DELETE
          </motion.button>
          <motion.button
            onClick={onCancel}
            className="flex-1 text-white bg-gray-500 neo-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CANCEL
          </motion.button>
        </div>
      </div>
    </motion.div>,
    document.body 
  );
};

export default DeleteModal;
