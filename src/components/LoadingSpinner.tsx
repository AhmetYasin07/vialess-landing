export function LoadingSpinner() {
  return (
    <div className="w-full py-24 flex items-center justify-center">
      <div className="quantum-loader" aria-label="Yükleniyor">
        <div className="quantum-dot" />
        <div className="quantum-dot" />
        <div className="quantum-dot" />
        <div className="quantum-dot" />
      </div>
      <style>{`
        .quantum-loader {
          display: flex;
          align-items: center;
          gap: 6px;
          height: 45px;
        }
        .quantum-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #6c63ff;
          animation: quantum-bounce 1.4s ease-in-out infinite;
        }
        .quantum-dot:nth-child(1) { animation-delay: -0.32s; }
        .quantum-dot:nth-child(2) { animation-delay: -0.16s; }
        .quantum-dot:nth-child(3) { animation-delay: 0s; }
        .quantum-dot:nth-child(4) { animation-delay: 0.16s; }
        @keyframes quantum-bounce {
          0%, 80%, 100% {
            transform: scale(0.6);
            opacity: 0.4;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
