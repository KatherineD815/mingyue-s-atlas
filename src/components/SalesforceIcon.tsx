const SalesforceIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M10 5.5a4 4 0 0 1 7.5 1.5 3.5 3.5 0 0 1 2.5 6.5 3 3 0 0 1-3 3.5H7a4 4 0 0 1-1-7.5A3.5 3.5 0 0 1 10 5.5z" />
  </svg>
);

export default SalesforceIcon;
