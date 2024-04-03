// import css from './Pages.module.css';
import DocumentTitle from '../components/DocumentTitle/DocumentTitle';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home Page</DocumentTitle>
      <div style={styles.container}>
        <h1 style={styles.title}>Contact Book App welcome page</h1>
      </div>
    </>
  );
};

export default HomePage;
