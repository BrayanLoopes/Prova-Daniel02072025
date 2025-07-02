export default function Home() {
  return (
    <div
      style={{
        backgroundColor: '  ', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '36px',
            color: '#1f2937', 
            fontWeight: 'bold',
          }}
        >
          Prova Versionamento - RPV Senai Cataguases
        </h1>
        <p
          style={{
            fontSize: '24px',
            color: '#64748b', 
          }}
        >
          Brayan Lopes da Silva
        </p>
        <p
          style={{
            fontSize: '24px',
            color: '#94a3b8',
          }}
        >
          Cataguases, 02 de Julho de 2025
        </p>
      </div>
    </div>
  );
}
