import { Helmet } from 'react-helmet';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <div
        style={{
          minHeight: 'calc(100vh - 50px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h2 style={{ fontWeight: 500, fontSize: 48, textAlign: 'center' }}>
          Welcome
        </h2>
      </div>
    </>
  );
}
