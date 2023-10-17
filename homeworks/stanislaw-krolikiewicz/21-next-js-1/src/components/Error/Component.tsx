import {motion} from 'framer-motion';

interface Props {
  fullScreen?: boolean;
  message: string;
}

export default ({fullScreen, message}: Props) => {
  return (
    <motion.div
      className={`${
        fullScreen ? 'fixed w-screen h-screen' : 'absolute w-full h-full'
      } z-50 top-0 left-0 bg-error bg-opacity-80 backdrop-blur-sm flex flex-col items-center justify-center`}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <h2 className="p-4 bg-white rounded-[3px] border-2 border-error">
        Error: {message}
      </h2>
      <p className="text-white">(The modal will close in 3s automatically)</p>
    </motion.div>
  );
};
