import { ThreeDots } from 'react-loader-spinner';

const styles = {
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -50,
    marginTop: -50,
  },
};

export const Loader = () => {
  return (
    <div style={styles.spinner}>
      <ThreeDots color={'#58197c'} width="100" ariaLabel="loading" />
    </div>
  );
};